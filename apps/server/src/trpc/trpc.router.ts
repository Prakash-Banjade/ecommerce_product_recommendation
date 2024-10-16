import { INestApplication, Injectable } from "@nestjs/common";
import { TrpcService } from "./trpc.service";
import { z } from "zod";
import * as trpcExpress from "@trpc/server/adapters/express";
import { ProductsService } from "src/products/products.service";
import { defaultQueryParamSchema } from '../../../../packages/shared/schemas/default-query-param.schema'
import { similarProductQuerySchema, TVectorProduct, TVectorProductsArray, vectorProductsArraySchema } from '../../../../packages/shared/schemas/product.schema'


@Injectable()
export class TrpcRouter {
    public appRouter;

    constructor(
        private readonly trpcService: TrpcService,
        private readonly productService: ProductsService,
    ) {
        this.appRouter = this.trpcService.router({
            hello: this.trpcService.procedure
                .input(z.object({ name: z.string().optional() }))
                .query(({ input }) => {
                    return `hello ${input?.name ?? 'world'}`
                }),
            products: this.trpcService.router({
                getAll: this.trpcService.procedure
                    .input(defaultQueryParamSchema)
                    .output(vectorProductsArraySchema)
                    .query(({ input }) => {
                        return this.productService.findAll(input)
                    }),
                getById: this.trpcService.procedure
                    .input(z.string())
                    .query(({ input }) => {
                        return this.productService.getProductById(input) as Promise<TVectorProduct | null>;
                    }),
                getSimilarProducts: this.trpcService.procedure
                    .input(similarProductQuerySchema)
                    .query(({ input }) => {
                        return this.productService.getSimilarProducts(input) as Promise<TVectorProductsArray>;
                    }),
            })
        });
    }


    async applyMiddleware(app: INestApplication) { // apply trpc middleware to express app
        app.use(
            '/trpc', // trpc router path
            trpcExpress.createExpressMiddleware({
                router: this.appRouter,
            })
        )
    }
}

export type AppRouter = TrpcRouter['appRouter'];
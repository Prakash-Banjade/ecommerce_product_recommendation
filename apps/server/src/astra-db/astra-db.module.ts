import { Module, Global } from '@nestjs/common';
import { DataAPIClient } from '@datastax/astra-db-ts';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
    providers: [
        {
            provide: 'ASTRA_DB_CLIENT',
            inject: [ConfigService],
            useFactory: async (configServic: ConfigService) => {
                const client = new DataAPIClient(configServic.get('ASTRA_DB_APP_TOKEN')); // Replace with your token
                const db = client.db(configServic.get('ASTRA_DB_API_ENDPOINT')); // Replace with your endpoint
                await db.listCollections(); // Verify connection
                console.log('Connected to AstraDB');
                return db;
            },
        },
    ],
    exports: ['ASTRA_DB_CLIENT'],
})
export class AstraDbModule { }

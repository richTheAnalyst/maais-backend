"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.enableCors({
        origin: [
            process.env.FRONTEND_URL,
            'http://localhost:5173',
            'http://localhost:5174',
            'http://localhost:5175',
            'http://localhost:4173',
            'http://localhost:3000',
        ].filter(Boolean),
        credentials: true,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('MAAIS API')
        .setDescription('Mando SHTS Academic Audit & Intervention System')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('Auth', 'Authentication & session management')
        .addTag('Users', 'User & profile management')
        .addTag('Academic Architect', 'Years, terms, subjects, classes')
        .addTag('Grading', 'Score entry, audit, smart remarks')
        .addTag('Reports', 'Report cards & transcripts')
        .addTag('Archive', 'The Vault & promotion cycle')
        .addTag('Comms', 'Notifications & communications')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document, {
        swaggerOptions: { persistAuthorization: true },
    });
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`🏫 MAAIS API running on http://localhost:${port}/api/v1`);
    console.log(`📖 Swagger docs: http://localhost:${port}/api/docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map
import { z } from 'zod';

const AssetDeclarationStatusAddSchema = z
    .object({
        code: z.string().max(255).optional(),
        description: z.string().max(255).optional(),
        active: z.boolean().optional(),
    })
    .strict();

export default AssetDeclarationStatusAddSchema;

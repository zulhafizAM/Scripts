import { z } from 'zod';

const AssetDeclarationStatusEditSchema = z
    .object({
        id: z.number().int().nonnegative(),
        code: z.string().max(255).optional(),
        description: z.string().max(255).optional(),
        active: z.boolean().optional(),
    })
    .strict();

export default AssetDeclarationStatusEditSchema;

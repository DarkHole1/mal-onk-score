import { z } from "zod";

export const Anime = z.object({
    id: z.number().int(),
    title: z.string(),
    main_picture: z.object({
        medium: z.string(),
        large: z.string()
    }).partial().optional(),
    mean: z.number(),
    rank: z.number().int(),
    popularity: z.number().int(),
    num_list_users: z.number().int(),
    num_scoring_users: z.number().int()
})

export type Anime = z.infer<typeof Anime>
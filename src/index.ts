import * as mal from './mal/api'
import * as fs from 'fs/promises'

(async () => {
    const data = await mal.get_anime_details(52034)
    await fs.appendFile(
        'data.txt',
        [new Date().toISOString(), data.mean, data.popularity, data.num_list_users, data.num_scoring_users].join(',')+'\n'
    )
})()
import { 
    ContentRating,
    Form,
    MangaStatus,
    PagedResults,
    RequestManager,
    SearchRequest,
    Section,
    SourceInfo,
    TrackedManga,
    Tracker,
    TrackerActionQueue
} from 'paperback-extensions-common'
import SourceSettings from './views/SourceSettings'

export const MyAnimeListInfo: SourceInfo = {
    name: 'MyAnimeList',
    author: 'Faizan Durrani',
    contentRating: ContentRating.EVERYONE,
    icon: 'icon.png',
    version: '0.0.1',
    description: 'MyAnimeList Tracker',
    authorWebsite: 'faizandurrani.github.io',
    websiteBaseURL: 'https://myanimelist.net'
}

export class MyAnimeList extends Tracker {
    requestManager = createRequestManager({
        requestsPerSecond: 2,
        requestTimeout: 15000
    })

    async getSearchResults(query: SearchRequest): Promise<PagedResults> {
        return createPagedResults({
            results: []
        })
    }

    getMangaForm(mangaId: string): Form {
        return createForm({
            sections: async function (): Promise<Section[]> {
                return []
            },
            onSubmit: function (values: any): Promise<void> {
                throw new Error('Function not implemented.')
            },
            validate: function (values: any): Promise<boolean> {
                throw new Error('Function not implemented.')
            }
        })
    }
    
    async getTrackedManga(mangaId: string): Promise<TrackedManga> {
        return createTrackedManga({
            id: '',
            mangaInfo: createManga({
                id: '',
                titles: [],
                image: '',
                status: MangaStatus.ONGOING
            })
        })
    }

    getSourceMenu(): Promise<Section> {
        return SourceSettings(createSourceStateManager({}))
    }

    processActionQueue(actionQueue: TrackerActionQueue): Promise<void> {
        throw new Error('Method not implemented.')
    }

}

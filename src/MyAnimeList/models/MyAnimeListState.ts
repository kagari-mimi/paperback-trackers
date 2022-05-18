import { SourceStateManager } from 'paperback-extensions-common'

export default class {
    constructor(private stateManager: SourceStateManager) {}

    // accessToken = {
    //     get: async (): Promise<string | undefined> => {
    //         return this.stateManager.keychain.retrieve('access_token') as never
    //     },
    //     set: async (token: string | undefined): Promise<void> => {
    //         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //         // @ts-ignore
    //         await this.stateManager.keychain.store('access_token', token)
    //         await this.userInfo.refresh()
    //     },
    //     isValid: async (): Promise<boolean> => {
    //         return (await this.accessToken.get()) != null
    //     }
    // }

    // userInfo = {
    //     get: async (): Promise<never | undefined> => {
    //         return this.stateManager.retrieve('userInfo') as never
    //     },
    //     isLoggedIn: async (): Promise<boolean> => {
    //         return (await this.userInfo.get()) != null
    //     },
    //     refresh: async (): Promise<void> => {
    //         const accessToken = await this.accessToken.get()

    //         if(accessToken == null) { 
    //             return this.stateManager.store('userInfo', undefined)
    //         }

    //         const response = await this.requestManager.schedule(createRequestObject({
    //             url: ANILIST_GRAPHQL_ENDPOINT,
    //             method: 'POST',
    //             data: userProfileQuery()
    //         }), 0)

    //         const userInfo = AnilistResult<AnilistUser.Result>(response.data).data?.Viewer

    //         await this.stateManager.store('userInfo', userInfo)
    //     }
    // }
}

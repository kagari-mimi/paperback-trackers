import {
    Section,
    SourceStateManager
} from 'paperback-extensions-common'

export default async (stateManager: SourceStateManager): Promise<Section> => (
    createSection({
        id: 'main',
        rows: async () => [
            createOAuthButton({
                label: 'Login with MAL',
                authorizeEndpoint: 'https://myanimelist.net/v1/oauth2/authorize',
                clientId: '31f53cb7a5e11141158a97ea171efb66',
                responseType: {
                    type: 'pkce',
                    pkceCodeLength: 64,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    pkceCodeMethod: 'plain',
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    formEncodeGrant: true,
                    tokenEndpoint: 'https://myanimelist.net/v1/oauth2/token',
                },
                redirectUri: 'paperback://malAuth',
                successHandler: async (accessToken: string, refreshToken?: string): Promise<void> => {
                },
                value: undefined,
                id: 'loginWithAnilist'
            })
        ]
    })
)

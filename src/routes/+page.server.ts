import type { PageServerLoad, Actions } from './$types';

export const load = (async ({cookies}) => {

    const name = cookies.get('name')

    return {
        name,
        title: 'My data',
        text: 'Hi mom'
    }
}) satisfies PageServerLoad

export const actions = {
    default: async ( {request, cookies} ) => {
        const formData = await request.formData()

        const name = formData.get('name') as string

        cookies.set('name', name)

    }
} satisfies Actions
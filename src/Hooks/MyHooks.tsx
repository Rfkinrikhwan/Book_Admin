import { useMutation, useQuery } from "@tanstack/react-query"

export const getReq = (link: string) => {
    return useQuery({
        queryKey: ['fetch'],
        queryFn: async () => {
            const raw = await fetch(link);
            const data = await raw.json();
            return data.data;
        }
    })
}

export const postReq = (link: string, data:object) => {
    return useMutation({
        mutationFn: async () => {
            const raw = await fetch(link, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    data
                })
            })
            return await raw.json()
        },
    })
}
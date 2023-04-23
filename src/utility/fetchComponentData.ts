export default async function fetchComponentData(target: string, populate: string = "populate=*") {
    const response = await fetch(process.env.STRAPI_HOST_URL + "/api/" + target + "?" + populate, {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + process.env.STRAPI_KEY
        }
    })

    return await response.json()
}
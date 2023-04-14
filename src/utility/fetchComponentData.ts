export default async function fetchComponentData(target: string, populate: string = "populate=*") {
    const response = await fetch("http://127.0.0.1:1337/api/" + target + "?" + populate, {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + process.env.STRAPI_KEY
        }
    })

    return await response.json()
}
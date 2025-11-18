import { iconFacebook, iconInstagram, iconTwitter, iconYoutube } from "./imageIndex"

export const mainCards = [
    {
        icon: iconFacebook,
        alt: "facebook icon",
        user: "@nathanf",
        followers: "1987",
        todayOverview: 12,
        lineClassName: "bg-blue-600"
    },
    {
        icon: iconTwitter,
        alt: "twitter icon",
        user: "@nathanf",
        followers: "1044",
        todayOverview: 99,
        lineClassName: "bg-blue-500"
    },
    {
        icon: iconInstagram,
        alt: "instagram icon",
        user: "@realnathanf",
        followers: "11k",
        todayOverview: 1099,
        /* Color Swatch */

        /* colors/gradient/1 */

        lineClassName: "bg-gradient-to-r from-(--gradient-pink-start) via-(--gradient-pink-middle) to-(--gradient-pink-end)"
    },
    {
        icon: iconYoutube,
        alt: "youtube icon",
        user: "Nathan F.",
        followers: 8239,
        todayOverview: -144,
        lineClassName: "bg-red-700"
    }
]
export const statisticCards = [
    { description: "Page Views", icon: iconFacebook, value: "87", percentage: 3 },
    { description: "Likes", icon: iconFacebook, value: "52", percentage: -2 },
    { description: "Likes", icon: iconInstagram, value: "5462", percentage: 2257 },
    { description: "Profile Views", icon: iconInstagram, value: "52k", percentage: 1375 },
    { description: "Retweets", icon: iconTwitter, value: "117", percentage: 303 },
    { description: "Likes", icon: iconTwitter, value: "507", percentage: 553 },
    { description: "Likes", icon: iconYoutube, value: "107", percentage: -19 },
    { description: "Total Views", icon: iconYoutube, value: "1407", percentage: -12 },
]

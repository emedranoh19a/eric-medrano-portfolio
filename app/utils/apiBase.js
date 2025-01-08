import axios from "axios"

const basicConfig = {
    headers: {
        "Content-Type": "application/json; charset=UTF8",
    },
}

// function getHeaders() {
//     const session = JSON.parse(localStorage.getItem("session"))

//     if (!session) return null
//     const { accessToken } = session
//     if (!accessToken) return null
//     return {
//         "Content-Type": "application/json; charset=UTF8",
//         "X-AccessToken": accessToken,
//     }
// }


export async function getRequest(url, params = {}) {
    // const headers = getHeaders()
    try {
        const response = await axios.get(url, {
            params,
            // headers,
        })
        return response
    } catch (err) {
        console.error(err)
        throw err
    }
}

// export async function postRequest(url, params) {
//     const headers = getHeaders()

//     try {
//         const response = await axios.post(url, params, {
//             headers,
//         })
//         return response
//     } catch (err) {
//         console.log(err)
//         throw err
//     }
// }

// export async function putRequest(url, params) {
//     const headers = getHeaders()

//     try {
//         const response = await axios.put(url, params, {
//             headers,
//         })
//         return response
//     } catch (err) {
//         console.log(err)
//         throw err
//     }
// }

// export async function deleteRequest(url, params = {}) {
//     const headers = getHeaders()
//     try {
//         const response = await axios.delete(url, {
//             params,
//             headers,
//         })
//         return response
//     } catch (err) {
//         console.error(err)
//         throw err
//     }
// }
// export async function downloadFile(url, params) {
//     const headers = getHeaders()
//     try {
//         const response = await axios.get(url, {
//             params,
//             headers,
//             responseType: "blob",
//         })

//         const { data, headers: responseHeaders } = response
//         const fileToDecode = responseHeaders["content-disposition"]

//         //Review
//         const regex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
//         const matches = fileToDecode.match(regex)
//         let fileName = ""
//         if (matches && matches.length > 1) {
//             fileName = decodeURIComponent(matches[1])
//         } else {
//             console.log("File name not found.")
//         }

//         const downloadUrl = window.URL.createObjectURL(new Blob([data]))

//         const link = document.createElement("a")
//         link.href = downloadUrl
//         link.setAttribute("download", `${fileName}`) //any other extension
//         document.body.appendChild(link)
//         link.click()
//         link.remove()
//     } catch (err) {
//         console.log(err)
//         throw err
//     }
// }

// Note: Informacion util
// // https://rapidapi.com/guides/axios-tokens-cookies-auth

// Info: Version que me enseñaron: Axios + CORS for CRA.
// https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually
// Revisar setupProxy.js el target debería ser el url proveido.
// Axios, por otra parte, debe empezar con /api. Luego, nos metemos con otras cosas

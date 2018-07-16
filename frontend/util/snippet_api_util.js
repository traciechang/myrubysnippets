export const createSnippet = snippet => (
    $.ajax({
        method: "POST",
        url: `/snippets`,
        data: {snippet}
    })
)

export const executeSnippet = snippet => {
    console.log("in snippet api util")
    console.log(snippet)
    return $.ajax({
        method: "GET",
        url: `/outputs/${snippet.id}`,
        data: {snippet}
    })
}

export const fetchSnippet = snippetURL => (
    $.ajax({
        method: "GET",
        url: `/snippets/1`,
        data: { snippetURL }
    })
)

export const updateSnippet = snippet => (
    $.ajax({
        method: "PATCH",
        url: `/snippets/${snippet.id}`,
        data: {snippet}
    })
)
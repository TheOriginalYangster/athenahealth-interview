export function apiEndpointBuilder(stars, lang, page, search) {
  //Given Url: "https://api.github.com/search/repositories?q=stars:%3E10000&sort=stars"
  const base = "https://api.github.com/search/repositories"

  function filterAndBuild() {
    let inputs = [...arguments]
    let join = inputs.pop()
    inputs = inputs.filter(x => x !== null)
    return inputs.join(join)
  }

  //Query string builder
  let gq = search ? search : null
  let s = stars ? `stars:>${stars}` : null
  let l = lang ? `language:${lang}`: null

  //Parameters
  const q = "q=" + encodeURIComponent(filterAndBuild(gq, s, l, ' '))
  const srt = 'sort=stars'
  const p = page ? `page=${page}` : null

  return base + "?" + filterAndBuild(p, q, srt, '&')
}
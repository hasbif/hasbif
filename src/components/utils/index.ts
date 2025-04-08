const isDev = process.env.NEXT_PUBLIC_IS_DEV == "TRUE"
const repoName = "/hasbif"

export function filePathParse(path: string){
  const prefix = isDev ? "" : repoName
  console.log(isDev, "isDev")
  return prefix + path
}
import { getProjects } from "../../services/notionService";

export default async function (req,res){
  const result = await getProjects()
  res.json(result)
}
import { getProjects } from "../../services/notionService";

export default async function handler(req,res){
  const result = await getProjects()
  res.json(result)
}
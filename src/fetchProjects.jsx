import { createClient } from 'contentful'
import { useEffect } from 'react'
import { useState } from 'react'

const client = createClient({
	space: '61gfvgd3orna',
	environment: 'master',
	accessToken: import.meta.env.VITE_API_KEY,
})

export const useFetchProjects = () => {
	const [loading, setLoading] = useState(true)
	const [projects, setProjects] = useState([])

	const getData = async () => {
		try {
			const response = await client.getEntries({ content_type: 'projects' })
			const projects = response.items.map(item => {
				const id = item.sys.id
				const { title, url, image } = item.fields
				const img = image?.fields?.file?.url
				return { id, title, url, img }
			})
			setProjects(projects)
			setLoading(false)
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	return { loading, projects }
}

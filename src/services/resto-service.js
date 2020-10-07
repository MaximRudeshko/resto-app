export default class RestoService{
    url = 'http://localhost:3050/menu'

    getMenuItems = async () => {
        const res = await fetch(this.url)

        if(!res.ok){
            throw new Error(`Could not fetch ${res.status}`)
        }

        return await res.json()
    }
}
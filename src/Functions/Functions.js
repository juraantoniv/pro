const showGenre = (data) => {

    if (data?.indexOf(28,0)!==-1){
        return 'Action'
    }
    else if (data?.indexOf(12,0)!==-1){
        return "Adventure"
    }
    else if (data?.indexOf(35,0)!==-1){
        return "Comedy"
    }
    else if (data?.indexOf(80,0)!==-1){
        return "Crime"
    }
    else if (data?.indexOf(18,0)!==-1){
        return "Drama"
    }
    else if (data?.indexOf(14,0)!==-1){
        return "Fantasy"
    }
    else if (data?.indexOf(99,0)!==-1){
        return "Documentary"
    }
    else if (data?.indexOf(10751,0)!==-1){
        return "Family"
    }
    else if (data?.indexOf(36,0)!==-1){
        return "History"
    }
    else if (data?.indexOf(27,0)!==-1){
        return "Horror"
    }
    else if (data?.indexOf(37,0)!==-1){
        return "Western"
    }
    else if (data?.indexOf(53,0)!==-1){
        return "Thriller"
    }
    else if (data?.indexOf(10770,0)!==-1){
        return "Tv Movie"
    }
    else if (data?.indexOf(9648,0)!==-1){
        return "Mystery"
    }
    else if (data?.indexOf(16,0)!==-1){
        return "Animation"
    }
    else if (data?.indexOf(10752,0)!==-1){
        return "War"
    }
    else if (data?.indexOf(878,0)!==-1){
        return "Science Fiction"
    }

}



let genress= [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]


// функція пошуку жанрів по id жару

const showAll=(data)=>{
    let empty = []
    for (let i = 0; i < data.length; i++) {
        const genre = data[i];
        for (let j = 0; j < genress.length; j++) {
            const genreElement = genress[j];
            if (genre===genreElement.id){
                empty.push(genreElement.name)
                empty.push(' ')
            }

        }

    }

    return empty
}

export {
    showGenre,
    showAll
}

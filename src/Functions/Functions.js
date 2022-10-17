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


const showAll = (data) => {

    const empty =[]

    if (data?.indexOf(28,0)!==-1){
        empty.push('Action')
    }
    else if (data?.indexOf(12,0)!==-1){
        empty.push('Adventure')
    }
    else if (data?.indexOf(35,0)!==-1){
        empty.push('Comedy')
    }
    else if (data?.indexOf(80,0)!==-1){
        empty.push('Crime')
    }
    else if (data?.indexOf(18,0)!==-1){
        empty.push('Drama')
    }
    else if (data?.indexOf(14,0)!==-1){
        empty.push('Fantasy')
    }
    else if (data?.indexOf(99,0)!==-1){
        empty.push('Documentary')
    }
    else if (data?.indexOf(10751,0)!==-1){
        empty.push('Family')
    }
    else if (data?.indexOf(36,0)!==-1) {
        empty.push('History')
    }
    else if (data?.indexOf(27,0)!==-1){
        empty.push('Horror')
    }
    else if (data?.indexOf(37,0)!==-1){
        empty.push('Western')
    }
    else if (data?.indexOf(53,0)!==-1){
        empty.push('Thriller')
    }
    else if (data?.indexOf(10770,0)!==-1){
        empty.push('Tv Movie')
    }
    else if (data?.indexOf(9648,0)!==-1){
        empty.push('Mystery')
    }
    else if (data?.indexOf(16,0)!==-1){
        empty.push('Animation')
    }
    else if (data?.indexOf(10752,0)!==-1){
        empty.push('War')
    }
    else if (data?.indexOf(878,0)!==-1){
        empty.push('Science Fiction')
    }
        return empty

}

export {
    showGenre,
    showAll
}

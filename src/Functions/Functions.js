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
}

export {
    showGenre
}

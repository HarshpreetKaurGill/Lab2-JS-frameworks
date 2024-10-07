//1st function
export function greet(firstname, lastname){
    console.log(`Dear ${firstname} ${lastname}, welcome to the magical world of Hogwarts!`);
}

//2nd function -  speed convertor
export function convertSpeed(speed, unit){
    if(unit === 'mph'){
        return speed*1.60934;  // mph to km/h
    }else if(unit === 'kmh'){
        return speed/1.60934;//km/h to mph
    }else{
        throw Error("Invalide unit.");
    }
}

//3rd function - calculating fuel cost
export function calculateFuelCost(distance, fuelEfficiency, fuelPrice) {
    return (distance / fuelEfficiency) * fuelPrice;
}

//4th function - recommending movies or webseries acoording to the genre
export function recommendMedia(genre) {
    const recommendations = {
        fantasy: ["Harry Potter", "The Lord of the Rings", "The Chronicles of Narnia", "The Witcher", "Shadow and Bone"],
        adventure: ["Outer Banks", "Pirates of the Caribbean", "Indiana Jones", "Lost"],
        drama: ["The Crown", "Breaking Bad", "Stranger Things", "Anne with an E", "The Vampire Diaries"],
        halloween: ["Hocus Pocus", "The Nightmare Before Christmas", "Get Out", "Stranger Things"],
        autumn: ["Dead Poets Society", "When Harry Met Sally", "Good Will Hunting", "Gilmore Girls"],
        christmas: ["Home Alone", "Elf", "It's a Wonderful Life", "Dash & Lily"],
    };

    return recommendations[genre] || ["No recommendations available for this genre."];
}
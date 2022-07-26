const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
};

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
    this.dinosaurCollection.pop(dinosaur);
};

Park.prototype.findPopularDinosaur = function(){
    let total = 0;
    for (i = 0; i < this.dinosaurCollection.length; i++){
        (temp = this.dinosaurCollection[i].guestsAttractedPerDay);
        if(temp > total) total = temp;
    };
    return total;
};

Park.prototype.findDinosaurBySpecies = function(dinoSpecies){
    const result = this.dinosaurCollection.find(({ species }) => species === dinoSpecies);
    return result;
};

Park.prototype.totalVisitorsPerDay = function(){
    let total = 0;
    for (i = 0; i < this.dinosaurCollection.length; i++){
        total += this.dinosaurCollection[i].guestsAttractedPerDay;
    };
    return total;
};

Park.prototype.totalVisitorsPerYear = function(){
    let total = 0;
    for (i = 0; i < this.dinosaurCollection.length; i++){
        total += this.dinosaurCollection[i].guestsAttractedPerDay;
    };
    return total * 365;
};

Park.prototype.annualRevenue = function(){
    const totalVisitorsPerYear = this.totalVisitorsPerYear();
    const totalRevenue = this.ticketPrice * totalVisitorsPerYear;
    return totalRevenue;
}



module.exports = Park;


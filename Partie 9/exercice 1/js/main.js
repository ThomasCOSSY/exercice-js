new Cleave(".creditcard", {
    creditCard: true,
    delimiter: "-"    
});

new Cleave(".date", {
    date: true,
    delimiter: "/",
    datePattern: ["d", "m", "Y"]
});

new Cleave(".phone", {
    phone: true,
    phoneRegionCode: "FR",    
    delimiter: "-"
});


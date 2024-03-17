var data = [
    {
        "id": "1",
        "name": "BMW - i4",
        "model": "i4",
        "make": "BMW",
        "year": "2017",
        "price": "27,000",
        "spec": {
            "transmission": "auto",
            "engin": "iDrive40",
            "horsepower": "360"
        },
        "media": [
            {
                "url": "https://media.ed.edmunds-media.com/bmw/m4/2022/oem/2022_bmw_m4_coupe_competition_fq_oem_1_1600.jpg",
                "type": "image"
            },
            {
                "url": "some-video-url",
                "type": "video"
            }
        ]
    },
    {
        "id": "2",
        "name": "BMW - iX",
        "model": "iX",
        "make": "Ferari",
        "year": "2020",
        "price": "77,000",
        "spec": {
            "transmission": "auto",
            "engin": "iDriveX",
            "horsepower": "560"
        },
        "media": [
            {
                "url": "https://www.amalgamcollection.com/cdn/shop/files/Wideedit_560a1c32-7e79-4774-8ea9-1126eab29b9f_2000x850_crop_center.jpg?v=1701433727",
                "type": "image"
            },
            {
                "url": "some-video-url",
                "type": "video"
            }
        ]
    },
    {
        "id": "3",
        "name": "BMW - iX",
        "model": "iX",
        "make": "Ferari",
        "year": "2020",
        "price": "77,000",
        "spec": {
            "transmission": "auto",
            "engin": "iDriveX",
            "horsepower": "560"
        },
        "media": [
            {
                "url": "https://cdn.motor1.com/images/mgl/OozxwY/s3/2024-lamborghini-aventador-successor-rendering.webp",
                "type": "image"
            },
            {
                "url": "some-video-url",
                "type": "video"
            }
        ]
    }
];

function loadData() {
    data.forEach((car)=>{
        var ele = `<div class="col">
            <div class="card" style="width: 18rem;">
                <img src="`+car.media[0].url+`" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">`+car.name+`</h5>
                <p class="card-text">`+car.make+`</p>
                <a href="./product.html?id=`+car.id+`" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div>`;
        document.querySelector(`.products`).innerHTML = document.querySelector(`.products`).innerHTML + ele
    })
}

function showDetail() {
    var id = document.location.search.split("=")[1];
    data.forEach((car)=>{
        if (car.id == "2") {
            var el = `
            <img style="width: 100%; " src="https://media.ed.edmunds-media.com/bmw/m4/2022/oem/2022_bmw_m4_coupe_competition_fq_oem_1_1600.jpg">
            <p style="font: 1.2rem;">Hellow World</p> `;

            document.querySelector(`boxes`).innerHTML = document.querySelector(`boxes`).innerHTML + el;
        }
        else if (car.id == id) {
            document.querySelector('p.name').innerHTML = car.name;
        }
    })
}
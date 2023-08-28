const loadPhones = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
};

const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phones.forEach((phone) => {
    const phoneCards = document.createElement("div");
    phoneCards.className = `card  bg-white shadow-xl pt-6`;
    phoneCards.innerHTML = `
            <figure><img src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body text-center">
                <h1 class=" text-3xl text-black font-semibold">${phone.brand}</h1>
                <h2 class=" text-2xl text-black font-medium">${phone.phone_name}</h2>
                <p>${phone.slug}</p>
                <h3 class=" text-3xl text-black font-extrabold">$999</h3>
                <div class="card-actions justify-center my-2">
                <button class="bg-blue-600 tex px-6 py-2 rounded text-white font-medium">Show Details</button>
                </div>
            </div>
        `;
    phoneContainer.appendChild(phoneCards);
  });
};
loadPhones();

'use strict'
// Please don't delete the 'use strict' line above

function allPokemonList() {
  //ポケモン一覧を表示する
  const pokemon = document.getElementsByClassName("pokemon__list")
  const pokemonList = [];
  for (let i = 0; i < allPokemon.length; i++) {
    pokemonList.push(`
      <li class="pokemon__item">
        <a class="pokemon__click" onClick=pokemon(${i})>
          <h3 class="pokemon__name">
            ${allPokemon[i].Jname}
          </h3>
          <div class="pokemon__image">
            <img src=${allPokemon[i].Image} alt="" />
          </div>
        </a>
      </li>
    `)
  }
  pokemon[0].innerHTML = pokemonList.join('');
}

// ポケモンモーダルを表示する
function pokemon(number) {
  modal.style.display = "block";
  let type = "";
  if (typeof allPokemon[number].Types === "object") {
    for (let i = 0; i < allPokemon[number].Types.length; i++) {
      type += allPokemon[number].Types[i] + ",";
    }
  } else {
    type = allPokemon[number].Types;
  }

  let resistant = "";
  for (let i = 0; i < allPokemon[number].Resistant.length; i++) {
    resistant += allPokemon[number].Resistant[i] + ",";
  }

  let pokemondetail = `
    <div class="pokemon_detail">
      <img class="pokemon_detail_image" src=${allPokemon[number].Image} alt="" />
      <div class="pokemon_detail_text">
        <h3 class="pokemon_detail_name">
          ${allPokemon[number].Jname}
        </h3>
        <p class="pokemon_detail_generation">
          ${allPokemon[number].Generation}
        </p>
        <div class="pokemon_detail_detail">
          <p class="pokemon_detail_title">
            type：
          </p>
          <p class="pokemon_detail_detailText">
            ${type.slice(0, -1)}
          </p>
        </div>
        <div class="pokemon_detail_detail">
          <p class="pokemon_detail_title">
            Resistant：
          </p>
          <p class="pokemon_detail_detailText">
            ${resistant.slice(0, -1)}
          </p>
        </div>
        <div class="pokemon_detail_detail">
          <p class="pokemon_detail_title">
            MaxCP：
          </p>
          <p class="pokemon_detail_detailText">
            ${allPokemon[number].MaxCP}
          </p>
        </div>
        <div class="pokemon_detail_detail">
          <p class="pokemon_detail_title">
            MaxHP：
          </p>
          <p class="pokemon_detail_detailText">
            ${allPokemon[number].MaxHP}
          </p>
        </div>
      </div>
    </div>
    <p class="pokemon_detail_about">
      ${allPokemon[number].About}
    </p>
  `;
  let modalDetail = document.getElementById("modal-detail");
  modalDetail.innerHTML = pokemondetail;
}

// closeボタンクリック
function closeBtn() {
  modal.style.display = 'none';
}

const close_button = document.getElementById("closeBtn");
close_button.addEventListener('click', closeBtn);

// 検索機能
function searchName() {
  let value = "";
  value = document.getElementById("name-search").value;
  const searchPokemon = [];
  for (let i = 0; i < allPokemon.length; i++) {
    if (allPokemon[i].Jname.indexOf(value) !== -1) {
      searchPokemon.push(allPokemon[i]);
    }
  }

  //ポケモン一覧を表示する
  const pokemon = document.getElementsByClassName("pokemon__list")
  const pokemonList = [];
  //　何もなかったら
  if (searchPokemon.length === 0) {
    pokemonList.push(`<p class="nopokemon">お探しのモンスターはいませんでした。。</p>`);
  } else {
    for (let i = 0; i < searchPokemon.length; i++) {
      pokemonList.push(`
        <li class="pokemon__item">
          <a class="pokemon__click" onClick=pokemon(${i})>
            <h3 class="pokemon__name">
              ${allPokemon[i].Jname}
            </h3>
            <div class="pokemon__image">
              <img src=${allPokemon[i].Image} alt="" />
            </div>
          </a>
        </li>
      `)
    }
  }
  // ポケモンリストの中身を削除する
  pokemon[0].innerHTML = '';
  // ポケモンリストを表示する
  pokemon[0].innerHTML = pokemonList.join('');
}

// 検索ボタンクリック
const search_button = document.getElementById("searchButton");
search_button.addEventListener('click', searchName);

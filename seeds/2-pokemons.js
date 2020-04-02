exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('pokemons').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemons').insert([{
          id: 1,
          pokemon_name: 'Bulbasaur',
          big_image: '../images/pokemon/001bulbasaur.png',
          small_image: '../images/pokemon/001bulbasaur_sprite.png',
          pokemon_info: 'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.',
          type: 'grass',
          user_id: null,
          isSelected: false
        },
        {
          id: 2,
          pokemon_name: 'Ivysaur',
          big_image: '../images/pokemon/002ivysaur.png',
          small_image: '../images/pokemon/002ivysaur_sprite.png',
          pokemon_info: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
          type: 'grass',
          user_id: null,
          isSelected: false
        },
        {
          id: 3,
          pokemon_name: 'Venasaur',
          big_image: '../images/pokemon/003venasaur.png',
          small_image: '../images/pokemon/003venasaur_sprite.png',
          pokemon_info: 'The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
          type: 'grass',
          user_id: null,
          isSelected: false
        },
        {
          id: 4,
          pokemon_name: 'Charmander',
          big_image: '../images/pokemon/004charmander.png',
          small_image: '../images/pokemon/004charmander_sprite.png',
          pokemon_info: 'Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.',
          type: 'fire',
          user_id: null,
          isSelected: false
        },
        {
          id: 5,
          pokemon_name: 'Charmeleon',
          big_image: '../images/pokemon/005charmeleon.png',
          small_image: '../images/pokemon/005charmeleon_sprite.png',
          pokemon_info: 'When it swings its burning tail, it elevates the temperature to unbearably high levels.',
          type: 'fire',
          user_id: null,
          isSelected: false
        },
        {
          id: 6,
          pokemon_name: 'Charizard',
          big_image: '../images/pokemon/006charizard.png',
          small_image: '../images/pokemon/006charizard_sprite.png',
          pokemon_info: 'Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.',
          type: 'fire',
          user_id: null,
          isSelected: false
        },
        {
          id: 7,
          pokemon_name: 'Squirtle',
          big_image: '../images/pokemon/007squirtle.png',
          small_image: '../images/pokemon/007squirtle_sprite.png',
          pokemon_info: 'After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.',
          type: 'water',
          user_id: null,
          isSelected: false
        },
        {
          id: 8,
          pokemon_name: 'Wartortle',
          big_image: '../images/pokemon/008wartortle.png',
          small_image: '../images/pokemon/008wartortle_sprite.png',
          pokemon_info: 'Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance.',
          type: 'water',
          user_id: null,
          isSelected: false
        },
        {
          id: 9,
          pokemon_name: 'Blastoise',
          big_image: '../images/pokemon/009blastoise.png',
          small_image: '../images/pokemon/009blastoise_sprite.png',
          pokemon_info: 'A brutal Pokémon with pressurized water jets on its shell. They are used for high speed tackles.',
          type: 'water',
          user_id: null,
          isSelected: false
        },
        {
          id: 10,
          pokemon_name: 'Caterpie',
          big_image: '../images/pokemon/010caterpie.png',
          small_image: '../images/pokemon/010caterpie_sprite.png',
          pokemon_info: 'Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.',
          type: 'bug',
          user_id: null,
          isSelected: false
        },
        {
          id: 11,
          pokemon_name: 'Metapod',
          big_image: '../images/pokemon/011metapod.png',
          small_image: '../images/pokemon/011metapod_sprite.png',
          pokemon_info: 'This Pokémon is vulnerable to attack while its shell is soft, exposing its weak and tender body.',
          type: 'bug',
          user_id: null,
          isSelected: false
        },
        {
          id: 12,
          pokemon_name: 'Butterfree',
          big_image: '../images/pokemon/012butterfree.png',
          small_image: '../images/pokemon/012butterfree_sprite.png',
          pokemon_info: 'In battle, it flaps its wings at high speed to release highly toxic dust into the air.',
          type: 'bug',
          user_id: null,
          isSelected: false
        },
        {
          id: 13,
          pokemon_name: 'Weedle',
          big_image: '../images/pokemon/013weedle.png',
          small_image: '../images/pokemon/013weedle_sprite.png',
          pokemon_info: 'Often found in forests, eating leaves. It has a sharp venomous stinger on its head.',
          type: 'bug',
          user_id: null,
          isSelected: false
        },
        {
          id: 14,
          pokemon_name: 'Kakuna',
          big_image: '../images/pokemon/014kakuna.png',
          small_image: '../images/pokemon/014kakuna_sprite.png',
          pokemon_info: 'Almost incapable of moving, this Pokémon can only harden its shell to protect itself from predators.',
          type: 'bug',
          user_id: null,
          isSelected: false
        },
        {
          id: 15,
          pokemon_name: 'Beedrill',
          big_image: '../images/pokemon/015beedrill.png',
          small_image: '../images/pokemon/015beedrill_sprite.png',
          pokemon_info: 'Flies at high speed and attacks using its large venomous stingers on its forelegs and tail.',
          type: 'bug',
          user_id: null,
          isSelected: false
        },
        {
          id: 16,
          pokemon_name: 'Pidgey',
          big_image: '../images/pokemon/016pidgey.png',
          small_image: '../images/pokemon/016pidgey_sprite.png',
          pokemon_info: 'A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.',
          type: 'flying',
          user_id: null,
          isSelected: false
        },
        {
          id: 17,
          pokemon_name: 'Pigeotto',
          big_image: '../images/pokemon/017pidgeotto.png',
          small_image: '../images/pokemon/017pidgeotto_sprite.png',
          pokemon_info: 'Very protective of its sprawling territorial area, this Pokémon will fiercely peck at any intruder.',
          type: 'flying',
          user_id: null,
          isSelected: false
        },
        {
          id: 18,
          pokemon_name: 'Pidgeot',
          big_image: '../images/pokemon/018pidgeot.png',
          small_image: '../images/pokemon/018pidgeot_sprite.png',
          pokemon_info: 'When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.',
          type: 'flying',
          user_id: null,
          isSelected: false
        },
        {
          id: 19,
          pokemon_name: 'Rattata',
          big_image: '../images/pokemon/019rattata.png',
          small_image: '../images/pokemon/019rattata_sprite.png',
          pokemon_info: 'Bites anything when it attacks. Small and very quick, it is a common sight in many places.',
          type: 'normal',
          user_id: null,
          isSelected: false
        },
        {
          id: 20,
          pokemon_name: 'Raticate',
          big_image: '../images/pokemon/020raticate.png',
          small_image: '../images/pokemon/020raticate_sprite.png',
          pokemon_info: 'It uses its whiskers to maintain its balance. It apparently slows down if they are cut off.',
          type: 'normal',
          user_id: null,
          isSelected: false
        }
      ]);
    });
};

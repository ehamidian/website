<script>
  import Logo from '$lib/images/Logo.svg';
  import IconPerson from '$lib/images/IconPerson.svg';

  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let activeSubmenu = null;
  let submenuItems = [];

  function showSubmenu(event, items) {
    activeSubmenu = event.target.innerText;
    submenuItems = items;
  }



  
  function hideSubmenu() {
    activeSubmenu = null;
    submenuItems = [];
  }

  function handleSubmenuItemClick(item) {
    goto(item.link);
  }

  // Close submenu when clicking outside of it
  onMount(() => {
    function handleClickOutside(event) {
      const menuBar = document.getElementById('menu-bar');

      if (menuBar && !menuBar.contains(event.target)) {
        hideSubmenu();
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<header>
  <nav>
    <img id="logo" class="logo" src={Logo} alt="Logo">
    <div class="button-container">
      <a href="../Header/Ansprechpartner"><img id="icon-person" class="icon-person" src={IconPerson} alt="icon-person"></a>
      <a href="../Header/FürJugendämter"><button class="frame10">Für Jugendämter</button></a>
      <a href="../Header/Jobs"><button class="frame11">Jobs</button></a>
    </div>
  </nav>

  <div class="header">

    <a href="../Header/DasSindWir" class="menu-link">
      <button class="menu-bar-button">Das sind wir</button>
    </a>

    <a href="../Header/AngeboteGruppen" class="menu-link">
      <button class="menu-bar-button">Angebote / Gruppen</button>
    </a>
    
    <a href="../Header/Pädagogik" class="menu-link">
      <button class="menu-bar-button">Pädagogik</button>
    </a>

    <a href="../Header/FürKids" class="menu-link">
      <button class="menu-bar-button">Für Kids</button>
    </a>

  </div>
  
</header>

<style>
  .logo {
    height: 21px;
    width: 174px;
    align-self: flex-start;
    left: 45px;
    top: 18px;
    position: absolute;
    padding: 0;
    border-style: hidden;
    outline: none;
  }

  .button-container {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
  }

  .frame10 {
    background-color: #057e81;
    color: #ffffff;
    font-size: 16px;
    font-family: Nort;
    height: 57px;
    width: 200px;
    padding: 0;
    border: none;
  }

  .frame11 {
    background-color: #f8af00;
    color: #ffffff;
    font-size: 16px;
    font-family: Nort;
    height: 57px;
    width: 200px;
    padding: 0;
    border: none;
  }

  .icon-person {
    width: 22.94px;
    height: 22.186px;
    margin-right: 30px;
  }

  .header {
    background-color: #ffffff;
    top: 57px;
    height: 61px;
    width: 100%;
    left: 0;
    position: absolute;
    filter: drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.1));
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .menu-bar-button {
    background-color: #ffffff;
    color: #013642;
    text-align: left;
    vertical-align: text-top;
    font-size: 16px;
    font-family: Nort;
    line-height: auto;
    border-style: hidden;
    outline: none;
    align-items: center;
    height: 61px;
    padding-right: 63px;
    display: flex;
    justify-content: space-between;
  }

  .submenu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 300px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  z-index: 1;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.submenu-item {
  color: #013642;
  font-size: 14px;
  font-family: Nort;
  margin-bottom: 10px;
}

.menu-link {
  text-decoration: none;
}

  .menu-item {
    position: relative;
  }


</style>

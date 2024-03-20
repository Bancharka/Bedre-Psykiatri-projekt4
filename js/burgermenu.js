let menuOptions = [
    { title: "Få hjælp", url: "https://bedrepsykiatri.dk/hjaelp/"},
    { title: "Videncenter", href: "https://bedrepsykiatri.dk/viden/"},
    { title: "Om os", url: "https://bedrepsykiatri.dk/om/"},
    { title: "Bliv friviilig", url: "#" },
    { title: "Presse og politil", url:"https://bedrepsykiatri.dk/pressepolitik/"},
  ];
  
  function openNav() {
    let sidenav = document.getElementById("mySidenav");
    sidenav.innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';
    // løb igennem array og tilføj menuoptioner
    menuOptions.forEach(function(option) {
        let link = document.createElement("a");
        link.href = option.url;
        link.textContent = option.title;
        sidenav.appendChild(link);
    });
   //åben menu
    sidenav.style.width = "350px";
  }
  
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
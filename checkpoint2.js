function insert(tab) {
  
  for (let i = 1; i < tab.length; i++) {
    
    let nowCase = tab[i];
    let j = i - 1;

    while (j >= 0 && tab[j] > nowCase) {
      tab[j + 1] = tab[j];
      j--;
    }

  
    tab[j + 1] = nowCase;
  }

  return tab;
}

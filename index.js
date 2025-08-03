(function () {
  const  handleErr = (err) => {
    var h1 = document.createElement('h1');
    h1.innerHTML = 'Server Error';
    document.querySelector('#repos').appendChild(h1);
  }

  const renderRepos = (repos) =>{
    const view_capitalised = view.toUpperCase();
    const other_view = view === 'fac' ? 'dwyl' : 'fac';
    const other_view_capitalised = other_view.toUpperCase();

    const h1 = document.createElement('h1');
    h1.innerHTML = view_capitalised + ' Repositories';
    document.querySelector('#repos').appendChild(h1);

    const link = document.querySelector('#link');
    link.href = '/' + other_view;
    link.innerHTML = 'See ' + other_view_capitalised + '\'s repositories';

    repos.forEach(function (repo, i) {
      const h3 = document.createElement('h3');
      const a = document.createElement('a');
      h3.innerHTML = (i + 1) + '. ' + repo.name;
      a.href = repo.url;
      a.appendChild(h3);
      document.querySelector('#repos').appendChild(a);
    });
  }

  request.get('/api/repos/' + view, function (err, res) {
    if (err) {
      handleErr(err);
    } else {
      renderRepos(res);
    }
  });
})();

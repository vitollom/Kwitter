useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://api.npms.io/v2/search?q=react')
        .then(response => response.json())
        .then(data => setTotalReactPackages(data.total));
<svelte:head>
  {#if import.meta.env.PROD}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-JQYYG4Y06V"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-JQYYG4Y06V");
      gtag("config", "UA-22412489-1");
    </script>
  {:else}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-N6KHSH4BNY"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-N6KHSH4BNY");
      gtag("config", "UA-22412489-2");
    </script>
  {/if}
</svelte:head>

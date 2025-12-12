const Footer = () => {
  return (
    <footer className="flex gap-4 text-2xl py-7.5 flex-col-reverse justify-centerw items-center flex-wrap sm:flex-row    ">
      <p>&copy; {new Date().getFullYear()}</p>
      <a href="https://twitter.com/">Twitter</a>
      <a href="https://www.linkedin.com/">LinkedIn</a>
      <a href="/">Email</a>
      <a href="/">RSS feed</a>
      <a href="/">Add to Feedly</a>
    </footer>
  );
};

export default Footer;

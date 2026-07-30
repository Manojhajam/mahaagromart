export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white text-center py-6 my-10">
      <p className="text-sm sm:text-base">
        Created, Designed, And Developed by Manoj Hajam &copy; {year} All Rights Reserved.
      </p>
    </footer>
  );
}

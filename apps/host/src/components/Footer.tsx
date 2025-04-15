function CustomFooter() {
    return (
      <footer className=" py-4 w-full">
        <div className="container mx-auto text-center">
          <p className="text-md  mx-auto font-bold">Powered By Mateshwari</p>
          <p className="text-sm">
            <a href="mailto:mateshwari33@gmail.com" className="hover:underline">mateshwari33@gmail.com</a>
          </p>
          <p className="text-xs mt-2">© {new Date().getFullYear()} InterviewPro.info All rights reserved.</p>
        </div>
      </footer>
    );
  }
export default CustomFooter
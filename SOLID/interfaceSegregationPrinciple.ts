interface Printer {
  print(document: Document): void;
}

interface Scanner {
  scan(document: Document): void;
}

interface FaxMachine {
  fax(document: Document): void;
}

class SimplePrinter implements Printer {
  print(document: Document): void {
    console.log("The Machine is printing");
  }
}

class MultiFunctionPrinter implements Printer, Scanner, FaxMachine {
  print(document: Document): void {
    console.log("The Machine is printing");
  }

  scan(document: Document): void {
    console.log("The Machine is scanning");
  }

  fax(document: Document): void {
    console.log("The Machine is sedning a fax");
  }
}

//Exercise
interface CreatePost {
  createPost(): void;
}
interface CommentPost {
  commentPost(): void;
}
interface SharePost {
  sharePost(): void;
}

class Admin implements CreatePost, CommentPost, SharePost {
  createPost(): void {
    console.log("post created");
  }
  commentPost(): void {
    console.log("comment created");
  }
  sharePost(): void {
    console.log("post shared");
  }
}

class User implements CommentPost, SharePost {
  commentPost(): void {
    console.log("comment created");
  }
  sharePost(): void {
    console.log("post shared");
  }
}

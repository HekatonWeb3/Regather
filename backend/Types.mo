module Types {
  // Define the data types for the backend

  public type User = {
    id : Text; // Unique identifier for the user (could be a generated ID or wallet address)
    username : Text; // Unique username for the user
    wallet : Text; // Wallet address for managing ICP tokens
  };

  public type Image = {
    id : Text; // Unique identifier for the image
    name : Text; // Name of the image file
    mimeType : Text; // MIME type of the image (e.g., "image/png", "image/jpeg")
    data : Blob; // The actual binary data of the image
  };

  public type Novel = {
    id : Text; // Unique identifier for the novel
    title : Text; // Title of the novel
    author : Text; // Author of the novel
    coverImage : ?Image; // Optional cover image for the novel
    totalViews : Nat; // Total number of views for the novel (sum of views for all chapters)
    totalChapter : Nat; // Total number of chapters in the novel
    chapters : [Chapter]; // List of chapter titles or contents
  };

  public type Chapter = {
    id : Text;
    title : Text;
    author : User;
    views : Nat;
    content : Text;
    comments : [Comment];
  };

  public type Comment = {
    id : Text;
    name : [User];
    content : Text;
  };

  public type Vote = {
    chapterId : Text; // Identifier for the chapter being voted on
    voter : User; // The user who cast the vote
  };

  public type Reward = {
    user : User; // The user receiving the reward
    amount : Nat; // The amount of ICP rewarded
  };
};

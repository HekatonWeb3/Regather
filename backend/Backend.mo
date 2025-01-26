import Array "mo:base/Array"; // Import the Array module for array operations
import Int "mo:base/Int"; // Import the Int module for integer operations
import Result "mo:base/Result"; // Import the Result module for handling results
import Principal "mo:base/Principal"; // Import the Principal module for handling principals
import Types "Types"; // Import the Types module for data type definitions

actor StoryManager {
  stable var users : [Types.User] = []; // List of registered users
  stable var images : [Types.Image] = []; // List of uploaded images
  stable var novels : [Types.Novel] = []; // List of novels


  public shared ({ caller }) func login() : async Text {
    assert caller != Principal.fromText("2vxsx-fae"); // Anonymous principal
    return "Hello, authenticated user!";
  };

  // Function to register a new user
  public shared func registerUser(username : Text, wallet : Text) : async Result.Result<Text, Text> {
    // Check if the username already exists
    let existingUser = Array.find<Types.User>(users, func(u : Types.User) : Bool { u.username == username });
    switch (existingUser) {
      case (?_) {
        return #err("Username already exists");
      };
      case null {
        // Generate a unique ID for the user (using the caller's Principal ID)
        let caller = Principal.toText(Principal.fromActor(StoryManager));
        let newUser : Types.User = {
          id = caller;
          username = username;
          wallet = wallet;
        };
        // Add the new user to the users array
        users := Array.append<Types.User>(users, [newUser]);
        return #ok("User registered successfully");
      };
    };
  };

  // Function to get a user by username
  public query func getUser(username : Text) : async ?Types.User {
    Array.find<Types.User>(users, func(u : Types.User) : Bool { u.username == username });
  };

  // Function to upload an image
  public shared func uploadImage(name : Text, mimeType : Text, data : Blob) : async Result.Result<Text, Text> {
    // Generate a unique ID for the image (using the caller's Principal ID)
    let caller = Principal.toText(Principal.fromActor(StoryManager));
    let newImage : Types.Image = {
      id = caller;
      name = name;
      mimeType = mimeType;
      data = data;
    };
    // Add the new image to the images array
    images := Array.append<Types.Image>(images, [newImage]);
    return #ok("Image uploaded successfully");
  };

  // Function to get an image by ID
  public query func getImage(id : Text) : async ?Types.Image {
    Array.find<Types.Image>(images, func(img : Types.Image) : Bool { img.id == id });
  };

  // Function to create a new novel
  public shared func createNovel(title : Text, author : Text, coverImageId : ?Text) : async Result.Result<Text, Text> {
    // Generate a unique ID for the novel (using the caller's Principal ID)
    let caller = Principal.toText(Principal.fromActor(StoryManager));
    let newNovel : Types.Novel = {
      id = caller;
      title = title;
      author = author;
      coverImage = switch (coverImageId) {
        case (?id) { Array.find<Types.Image>(images, func(img : Types.Image) : Bool { img.id == id }) };
        case null { null };
      };
      totalViews = 0;
      totalChapter = 0;
      chapters = [];
    };
    // Add the new novel to the novels array
    novels := Array.append<Types.Novel>(novels, [newNovel]);
    return #ok("Novel created successfully");
  };

  // Function to get a novel by ID
  public query func getNovel(id : Text) : async ?Types.Novel {
    Array.find<Types.Novel>(novels, func(n : Types.Novel) : Bool { n.id == id });
  };
};

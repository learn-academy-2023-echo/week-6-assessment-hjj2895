# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) A controller method named BlogPosts is created that will access all the items from database. The controller is responsible for handling incoming HTTP requests and making sure the appropriate output is displayed. It is like the middleman between views and model. 
class BlogPostsController < ApplicationController
  def index
    # ---2) An index method is created which is responsible for displaying all the items from the database. The index action corresponds with the HTTP GET request for the route and will show the list of items. Inside the index method, an instance variable is created which will save all the content from the database. When an index.html.erb file is created under views folder, the file will display the list of items that was saved in the database as the HTTP request type was GET.
    @posts = BlogPost.all
  end

  # ---3) A show method is created which looks for one item in the database. It does so by accessing the id of the item and the id will come from the url params. The show action corresponds with the HTTP GET request for the route and will display a single item from the list of items from the database. When typing out the URL, you can pass in the id by doing post/id# inside the url which will show one datum in the browser/ 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The new method is responsible for displaying a form to add new information to the application. The new action corresponds with the HTTP GET request for the route and will display a form. An instance variable is created and stores in a new instance of data for the form. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The create method is responsible for creating a new data after the form is submitted. The create method corresponds with the HTTP POST request which will process form submission and save it into the database. An instance variable is created and a create method is used and calls the strong params method to create the appropriate data. The strong params control what information is allowed to be passed into a database and control what attributes can be created and updated with the use of private keyword. Once an instance variable is created, a conditional statement is written to check the validation of the post. If the blog post that was created passes validation checks, it will navigate the user back to the show action using the blog_post_path as the route. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) The edit method is responsible for displaying a form that allows user to modify the data that is already in existence. The edit action corresponds with HTTP GET request and displays a form for editing. An instance variable is created and will look for one item in the database by accessing the id just like the show method. The params[:id] corresponds with the URL params which you can pass in the id to get the data you want to modify. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The update method is responsible for updating the modified data that was submitted through the form. The update action corresponds with the HTTP PUT or PATCH request and processes the form submission and updates the database. Inside the method, an instance variable is created and will look for one item in the database by accessing the id. Then, an update method will be used and will pass in the strong params method. Then a conditional statment will be written to check the validation of the post. If the post passes validation checks, it will navigate the user back to the show action using the blog_post_path as the route. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) The destroy method is responsible for deleting an existing data. The destroy action corresponds with the HTTP DELETE request and deletes data from the database. Inside the method, an instance variable is created and will look for one item in the database by accessing the id. Then if a post is deleted using .destroy, it will navigate the user back to the index page where it lists all the blog posts using the blog_posts_path route. 
      redirect_to blog_posts_path
    end
  end

  # ---9) The private keyword is used to prevent private methods from being called or accessed outside the class. When a method is created under private keyword, the method will not be accessible via any routes and strong params inside the method are protected. 
  private
  def blog_post_params
    # ---10) A strong params method called blog_post_params is created under the private keyword. This particular method will control over what information is allowed to be passed into a database and will control what attributes can be created and updated. Inside the method, two methods are used which are require and permit. The require method requires the model name to be passed in and the permit method allows the attributes that are listed to be passed and will be displayed when the strong params method is called. In line 60, it was pass in blog_post which is the model name inside the require method. The permit method will pass in title and content in which when we call the create and update methods, the user will be allowed to create and modify these attributes. 
    params.require(:blog_post).permit(:title, :content)
  end
end

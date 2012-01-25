module Jekyll
    module Filters
      def bookmark(post)
        begin
          /.\/*blog\/(.*)/.match(post)[1]
        rescue
          post
        end
      end
    end
  end
require 'rails_helper'

RSpec.describe Movie, type: :model do
  it { should have_valid(:display_title).when("The Pink Panther")}
  it { should have_valid(:headline).when("The Pink Panther (movie)")}

  it { should have_valid(:upvotes).when(0)}
  it { should_not have_valid(:upvotes).when(nil, '', "two")}

  it { should have_valid(:downvotes).when(0)}
  it { should_not have_valid(:downvotes).when(nil, '', "three")}

end

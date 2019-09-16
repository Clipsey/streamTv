require "application_system_test_case"

class Api::FollowsTest < ApplicationSystemTestCase
  setup do
    @api_follow = api_follows(:one)
  end

  test "visiting the index" do
    visit api_follows_url
    assert_selector "h1", text: "Api/Follows"
  end

  test "creating a Follow" do
    visit api_follows_url
    click_on "New Api/Follow"

    click_on "Create Follow"

    assert_text "Follow was successfully created"
    click_on "Back"
  end

  test "updating a Follow" do
    visit api_follows_url
    click_on "Edit", match: :first

    click_on "Update Follow"

    assert_text "Follow was successfully updated"
    click_on "Back"
  end

  test "destroying a Follow" do
    visit api_follows_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Follow was successfully destroyed"
  end
end

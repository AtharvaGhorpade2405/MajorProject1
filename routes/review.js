const express = require("express");
const router = express.Router({ mergeParams: true });
const ExpressError = require("../utils/expressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const Listing = require("../models/listing.js");
const reviewControllers = require("../controllers/reviews.js");

//Reviews
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewControllers.createReview));

router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewControllers.destroyReview));
module.exports = router;
import React from 'react'

function FirstRow() {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div
                        class="card h-100 "
                        style={{
                        backgroundColor: "slateblue"
                    }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="./sale-svgrepo-com.svg" class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body text-light">
                                    <h4 class="card-title">Sales Today</h4>
                                    <p class="card-text">Php 5635</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div
                        class="card h-100 "
                        style={{
                            backgroundColor: "dodgerblue"
                        }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="./users-svgrepo-com.svg" class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body text-light">
                                    <h4 class="card-title">Total Users</h4>
                                    <p class="card-text">530</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div
                        class="card h-100 "
                        style={{
                            backgroundColor: "goldenrod"
                        }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="./food-restaurant-svgrepo-com.svg" class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body text-light">
                                    <h4 class="card-title">Top Cafeteria</h4>
                                    <p class="card-text">Cherry Cafeteria</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div
                        class="card h-100 "
                        style={{
                            backgroundColor: "indianred"
                        }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="./soup-restaurant-soup-kitchen-eatery-cafeteria-svgrepo-com.svg" class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body text-light">
                                    <h4 class="card-title">Top Concession</h4>
                                    <p class="card-text">J's Shawarma</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstRow
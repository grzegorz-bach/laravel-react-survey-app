import React from "react";

type Props = {};

const EditSurvey = (props: Props) => {
	return (
		<>
			<header className="bg-white shadow">
				<div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">
						Survey name
					</h1>
				</div>
			</header>
			<main>
				<div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
					<p>Edit form</p>
				</div>
			</main>
		</>
	);
};

export default EditSurvey;

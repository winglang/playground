import { Alert } from "../Alert";

export const ServerDown = () => {
    return (
        <div className="grow h-full">
            <div className="max-w-3xl mx-auto">
                <Alert title="We're down :(">
                    <p className={"self-center"}>
                        There is an issue with our cloud provider.
                    </p>
                    <p className="self-center mt-2">
                        Please check our {" "}
                        <a
                            href="https://winglang.io/docs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-red-950 dark:text-red-200 underline"
                        >
                            docs
                        </a>{" "}
                        site to learn how to use Winglang.
                    </p>
                </Alert>
            </div>
        </div>
    );
};

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7440:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cloud = __importStar(__nccwpck_require__(832));
exports.core = __importStar(__nccwpck_require__(6526));
exports.fs = __importStar(__nccwpck_require__(7229));
exports.std = __importStar(__nccwpck_require__(15));
exports.testing = __importStar(__nccwpck_require__(2063));
exports.sim = __importStar(__nccwpck_require__(1237));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFpQztBQUNqQywrQ0FBK0I7QUFDL0IsMkNBQTJCO0FBQzNCLDZDQUE2QjtBQUM3QixxREFBcUM7QUFDckMsb0RBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogYXMgY2xvdWQgZnJvbSBcIi4vY2xvdWRcIjtcbmV4cG9ydCAqIGFzIGNvcmUgZnJvbSBcIi4vY29yZVwiO1xuZXhwb3J0ICogYXMgZnMgZnJvbSBcIi4vZnNcIjtcbmV4cG9ydCAqIGFzIHN0ZCBmcm9tIFwiLi9zdGRcIjtcbmV4cG9ydCAqIGFzIHRlc3RpbmcgZnJvbSBcIi4vdGVzdGluZ1wiO1xuZXhwb3J0ICogYXMgc2ltIGZyb20gXCIuL3RhcmdldC1zaW1cIjtcbiJdfQ==

/***/ }),

/***/ 2250:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BucketInflightMethods = exports.Bucket = exports.BUCKET_FQN = void 0;
const constants_1 = __nccwpck_require__(5484);
const core_1 = __nccwpck_require__(6526);
/**
 * Global identifier for `Bucket`.
 */
exports.BUCKET_FQN = (0, constants_1.fqnForType)("cloud.Bucket");
/**
 * Represents a cloud object store.
 *
 * @inflight `@winglang/sdk.cloud.IBucketClient`
 */
class Bucket extends core_1.Resource {
    /**
     * Create a new bucket.
     * @internal
     */
    static _newBucket(scope, id, props = {}) {
        return core_1.App.of(scope).newAbstract(exports.BUCKET_FQN, scope, id, props);
    }
    constructor(scope, id, props = {}) {
        super(scope, id);
        this.stateful = true;
        this.display.title = "Bucket";
        this.display.description = "A cloud object store";
        props;
    }
}
exports.Bucket = Bucket;
/**
 * List of inflight operations available for `Bucket`.
 * @internal
 */
var BucketInflightMethods;
(function (BucketInflightMethods) {
    /** `Bucket.put` */
    BucketInflightMethods["PUT"] = "put";
    /** `Bucket.get` */
    BucketInflightMethods["GET"] = "get";
    /** `Bucket.list` */
    BucketInflightMethods["LIST"] = "list";
    /** `Bucket.delete` */
    BucketInflightMethods["DELETE"] = "delete";
    /** `Bucket.putJson */
    BucketInflightMethods["PUT_JSON"] = "putJson";
    /** `Bucket.getJson */
    BucketInflightMethods["GET_JSON"] = "getJson";
})(BucketInflightMethods = exports.BucketInflightMethods || (exports.BucketInflightMethods = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Nsb3VkL2J1Y2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw0Q0FBMEM7QUFDMUMsa0NBQXdDO0FBR3hDOztHQUVHO0FBQ1UsUUFBQSxVQUFVLEdBQUcsSUFBQSxzQkFBVSxFQUFDLGNBQWMsQ0FBQyxDQUFDO0FBYXJEOzs7O0dBSUc7QUFDSCxNQUFzQixNQUFPLFNBQVEsZUFBUTtJQUMzQzs7O09BR0c7SUFDSSxNQUFNLENBQUMsVUFBVSxDQUN0QixLQUFnQixFQUNoQixFQUFVLEVBQ1YsUUFBcUIsRUFBRTtRQUV2QixPQUFPLFVBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLGtCQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBSUQsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxRQUFxQixFQUFFO1FBQy9ELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFISCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBSzlCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxzQkFBc0IsQ0FBQztRQUVsRCxLQUFLLENBQUM7SUFDUixDQUFDO0NBU0Y7QUEvQkQsd0JBK0JDO0FBbUVEOzs7R0FHRztBQUNILElBQVkscUJBYVg7QUFiRCxXQUFZLHFCQUFxQjtJQUMvQixtQkFBbUI7SUFDbkIsb0NBQVcsQ0FBQTtJQUNYLG1CQUFtQjtJQUNuQixvQ0FBVyxDQUFBO0lBQ1gsb0JBQW9CO0lBQ3BCLHNDQUFhLENBQUE7SUFDYixzQkFBc0I7SUFDdEIsMENBQWlCLENBQUE7SUFDakIsc0JBQXNCO0lBQ3RCLDZDQUFvQixDQUFBO0lBQ3BCLHNCQUFzQjtJQUN0Qiw2Q0FBb0IsQ0FBQTtBQUN0QixDQUFDLEVBYlcscUJBQXFCLEdBQXJCLDZCQUFxQixLQUFyQiw2QkFBcUIsUUFhaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgZnFuRm9yVHlwZSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFwcCwgUmVzb3VyY2UgfSBmcm9tIFwiLi4vY29yZVwiO1xuaW1wb3J0IHsgSnNvbiB9IGZyb20gXCIuLi9zdGRcIjtcblxuLyoqXG4gKiBHbG9iYWwgaWRlbnRpZmllciBmb3IgYEJ1Y2tldGAuXG4gKi9cbmV4cG9ydCBjb25zdCBCVUNLRVRfRlFOID0gZnFuRm9yVHlwZShcImNsb3VkLkJ1Y2tldFwiKTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBgQnVja2V0YC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCdWNrZXRQcm9wcyB7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBidWNrZXQncyBvYmplY3RzIHNob3VsZCBiZSBwdWJsaWNseSBhY2Nlc3NpYmxlLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgcmVhZG9ubHkgcHVibGljPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgY2xvdWQgb2JqZWN0IHN0b3JlLlxuICpcbiAqIEBpbmZsaWdodCBgQHdpbmdsYW5nL3Nkay5jbG91ZC5JQnVja2V0Q2xpZW50YFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQnVja2V0IGV4dGVuZHMgUmVzb3VyY2Uge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGJ1Y2tldC5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIF9uZXdCdWNrZXQoXG4gICAgc2NvcGU6IENvbnN0cnVjdCxcbiAgICBpZDogc3RyaW5nLFxuICAgIHByb3BzOiBCdWNrZXRQcm9wcyA9IHt9XG4gICk6IEJ1Y2tldCB7XG4gICAgcmV0dXJuIEFwcC5vZihzY29wZSkubmV3QWJzdHJhY3QoQlVDS0VUX0ZRTiwgc2NvcGUsIGlkLCBwcm9wcyk7XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgc3RhdGVmdWwgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBCdWNrZXRQcm9wcyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgIHRoaXMuZGlzcGxheS50aXRsZSA9IFwiQnVja2V0XCI7XG4gICAgdGhpcy5kaXNwbGF5LmRlc2NyaXB0aW9uID0gXCJBIGNsb3VkIG9iamVjdCBzdG9yZVwiO1xuXG4gICAgcHJvcHM7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgZmlsZSB0byB0aGUgYnVja2V0IHRoYXQgaXMgdXBsb2FkZWQgd2hlbiB0aGUgYXBwIGlzIGRlcGxveWVkLlxuICAgKlxuICAgKiBUT0RPOiBJbiB0aGUgZnV0dXJlIHRoaXMgd2lsbCBzdXBwb3J0IHVwbG9hZGluZyBhbnkgYEJsb2JgIHR5cGUgb3JcbiAgICogcmVmZXJlbmNpbmcgYSBmaWxlIGZyb20gdGhlIGxvY2FsIGZpbGVzeXN0ZW0uXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgYWRkT2JqZWN0KGtleTogc3RyaW5nLCBib2R5OiBzdHJpbmcpOiB2b2lkO1xufVxuXG4vKiogSW50ZXJmYWNlIGZvciBkZWxldGUgbWV0aG9kIGluc2lkZSBgQnVja2V0YCAqL1xuZXhwb3J0IGludGVyZmFjZSBCdWNrZXREZWxldGVPcHRpb25zIHtcbiAgLyoqXG4gICAqIENoZWNrIGZhaWx1cmVzIG9uIHRoZSBtZXRob2QgYW5kIHJldHJpZXZlIGVycm9ycyBpZiBhbnlcbiAgICogQFRocm93cyBpZiB0aGlzIGlzIGB0cnVlYCwgYW4gZXJyb3IgaXMgdGhyb3duIGlmIHRoZSBmaWxlIGlzIG5vdCBmb3VuZCAob3IgYW55IGVycm9yIGNhc2UpLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgcmVhZG9ubHkgbXVzdEV4aXN0PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBJbmZsaWdodCBpbnRlcmZhY2UgZm9yIGBCdWNrZXRgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElCdWNrZXRDbGllbnQge1xuICAvKipcbiAgICogUHV0IGFuIG9iamVjdCBpbiB0aGUgYnVja2V0LlxuICAgKiBAcGFyYW0ga2V5IEtleSBvZiB0aGUgb2JqZWN0LlxuICAgKiBAcGFyYW0gYm9keSBDb250ZW50IG9mIHRoZSBvYmplY3Qgd2Ugd2FudCB0byBzdG9yZSBpbnRvIHRoZSBidWNrZXQuXG4gICAqIEBpbmZsaWdodFxuICAgKi9cbiAgcHV0KGtleTogc3RyaW5nLCBib2R5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBQdXQgYSBKc29uIG9iamVjdCBpbiB0aGUgYnVja2V0LlxuICAgKiBAcGFyYW0ga2V5IEtleSBvZiB0aGUgb2JqZWN0LlxuICAgKiBAcGFyYW0gYm9keSBKc29uIG9iamVjdCB0aGF0IHdlIHdhbnQgdG8gc3RvcmUgaW50byB0aGUgYnVja2V0LlxuICAgKiBAaW5mbGlnaHRcbiAgICovXG4gIHB1dEpzb24oa2V5OiBzdHJpbmcsIGJvZHk6IEpzb24pOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhbiBvYmplY3QgZnJvbSB0aGUgYnVja2V0LlxuICAgKiBAcGFyYW0ga2V5IEtleSBvZiB0aGUgb2JqZWN0LlxuICAgKiBAVGhyb3dzIGlmIG5vIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBrZXkgZXhpc3RzLlxuICAgKiBAUmV0dXJucyB0aGUgb2JqZWN0J3MgYm9keS5cbiAgICogQGluZmxpZ2h0XG4gICAqL1xuICBnZXQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgSnNvbiBvYmplY3QgZnJvbSB0aGUgYnVja2V0LlxuICAgKiBAcGFyYW0ga2V5IEtleSBvZiB0aGUgb2JqZWN0LlxuICAgKiBAVGhyb3dzIGlmIG5vIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBrZXkgZXhpc3RzLlxuICAgKiBAUmV0dXJucyB0aGUgb2JqZWN0J3MgcGFyc2VkIEpzb24uXG4gICAqIEBpbmZsaWdodFxuICAgKi9cbiAgZ2V0SnNvbihrZXk6IHN0cmluZyk6IFByb21pc2U8SnNvbj47XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGV4aXN0aW5nIG9iamVjdHMga2V5cyBmcm9tIHRoZSBidWNrZXQuXG4gICAqIEBwYXJhbSBwcmVmaXggTGltaXRzIHRoZSByZXNwb25zZSB0byBrZXlzIHRoYXQgYmVnaW4gd2l0aCB0aGUgc3BlY2lmaWVkIHByZWZpeC5cbiAgICogQHJldHVybnMgYSBsaXN0IG9mIGtleXMgb3IgYW4gZW1wdHkgYXJyYXkgaWYgdGhlIGJ1Y2tldCBpcyBlbXB0eS5cbiAgICogQGluZmxpZ2h0XG4gICAqL1xuICBsaXN0KHByZWZpeD86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+O1xuXG4gIC8qKlxuICAgKiBEZWxldGUgYW4gZXhpc3Rpbmcgb2JqZWN0IHVzaW5nIGEga2V5IGZyb20gdGhlIGJ1Y2tldFxuICAgKiBAcGFyYW0ga2V5IEtleSBvZiB0aGUgb2JqZWN0LlxuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGF2YWlsYWJsZSBmb3IgZGVsZXRlIGFuIGl0ZW0gZnJvbSBhIGJ1Y2tldC5cbiAgICogQGluZmxpZ2h0XG4gICAqL1xuICBkZWxldGUoa2V5OiBzdHJpbmcsIG9wdHM/OiBCdWNrZXREZWxldGVPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcbn1cblxuLyoqXG4gKiBMaXN0IG9mIGluZmxpZ2h0IG9wZXJhdGlvbnMgYXZhaWxhYmxlIGZvciBgQnVja2V0YC5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZW51bSBCdWNrZXRJbmZsaWdodE1ldGhvZHMge1xuICAvKiogYEJ1Y2tldC5wdXRgICovXG4gIFBVVCA9IFwicHV0XCIsXG4gIC8qKiBgQnVja2V0LmdldGAgKi9cbiAgR0VUID0gXCJnZXRcIixcbiAgLyoqIGBCdWNrZXQubGlzdGAgKi9cbiAgTElTVCA9IFwibGlzdFwiLFxuICAvKiogYEJ1Y2tldC5kZWxldGVgICovXG4gIERFTEVURSA9IFwiZGVsZXRlXCIsXG4gIC8qKiBgQnVja2V0LnB1dEpzb24gKi9cbiAgUFVUX0pTT04gPSBcInB1dEpzb25cIixcbiAgLyoqIGBCdWNrZXQuZ2V0SnNvbiAqL1xuICBHRVRfSlNPTiA9IFwiZ2V0SnNvblwiLFxufVxuIl19

/***/ }),

/***/ 6414:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CounterInflightMethods = exports.CounterClientBase = exports.Counter = exports.COUNTER_FQN = void 0;
const constants_1 = __nccwpck_require__(5484);
const core_1 = __nccwpck_require__(6526);
/**
 * Global identifier for `Counter`.
 */
exports.COUNTER_FQN = (0, constants_1.fqnForType)("cloud.Counter");
/**
 * Represents a distributed atomic counter.
 * @inflight `@winglang/sdk.cloud.ICounterClient`
 */
class Counter extends core_1.Resource {
    /**
     * Create a new counter.
     * @internal
     */
    static _newCounter(scope, id, props = {}) {
        return core_1.App.of(scope).newAbstract(exports.COUNTER_FQN, scope, id, props);
    }
    constructor(scope, id, props = {}) {
        super(scope, id);
        this.stateful = true;
        this.display.title = "Counter";
        this.display.description = "A distributed atomic counter";
        this.initial = props.initial ?? 0;
    }
}
exports.Counter = Counter;
/**
 * Functionality shared between all `CounterClient` implementations regardless of the target.
 */
class CounterClientBase {
    inc(amount) {
        amount;
        throw new Error("Method not implemented.");
    }
    dec(amount) {
        return this.inc(-1 * (amount ?? 1));
    }
    peek() {
        throw new Error("Method not implemented.");
    }
    reset(value) {
        value;
        throw new Error("Method not implemented.");
    }
}
exports.CounterClientBase = CounterClientBase;
/**
 * List of inflight operations available for `Counter`.
 * @internal
 */
var CounterInflightMethods;
(function (CounterInflightMethods) {
    /** `Counter.inc` */
    CounterInflightMethods["INC"] = "inc";
    /** `Counter.dec` */
    CounterInflightMethods["DEC"] = "dec";
    /** `Counter.peek` */
    CounterInflightMethods["PEEK"] = "peek";
    /** `Counter.reset` */
    CounterInflightMethods["RESET"] = "reset";
})(CounterInflightMethods = exports.CounterInflightMethods || (exports.CounterInflightMethods = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbG91ZC9jb3VudGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDRDQUEwQztBQUMxQyxrQ0FBd0M7QUFFeEM7O0dBRUc7QUFDVSxRQUFBLFdBQVcsR0FBRyxJQUFBLHNCQUFVLEVBQUMsZUFBZSxDQUFDLENBQUM7QUFhdkQ7OztHQUdHO0FBQ0gsTUFBc0IsT0FBUSxTQUFRLGVBQVE7SUFDNUM7OztPQUdHO0lBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FDdkIsS0FBZ0IsRUFDaEIsRUFBVSxFQUNWLFFBQXNCLEVBQUU7UUFFeEIsT0FBTyxVQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxtQkFBVyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQVNELFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsUUFBc0IsRUFBRTtRQUNoRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBUkgsYUFBUSxHQUFHLElBQUksQ0FBQztRQVU5QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsOEJBQThCLENBQUM7UUFFMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0Y7QUE1QkQsMEJBNEJDO0FBdUNEOztHQUVHO0FBQ0gsTUFBc0IsaUJBQWlCO0lBQ3JDLEdBQUcsQ0FBQyxNQUFlO1FBQ2pCLE1BQU0sQ0FBQztRQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsR0FBRyxDQUFDLE1BQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELElBQUk7UUFDRixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELEtBQUssQ0FBQyxLQUFjO1FBQ2xCLEtBQUssQ0FBQztRQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0Y7QUFmRCw4Q0FlQztBQUVEOzs7R0FHRztBQUNILElBQVksc0JBU1g7QUFURCxXQUFZLHNCQUFzQjtJQUNoQyxvQkFBb0I7SUFDcEIscUNBQVcsQ0FBQTtJQUNYLG9CQUFvQjtJQUNwQixxQ0FBVyxDQUFBO0lBQ1gscUJBQXFCO0lBQ3JCLHVDQUFhLENBQUE7SUFDYixzQkFBc0I7SUFDdEIseUNBQWUsQ0FBQTtBQUNqQixDQUFDLEVBVFcsc0JBQXNCLEdBQXRCLDhCQUFzQixLQUF0Qiw4QkFBc0IsUUFTakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgZnFuRm9yVHlwZSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFwcCwgUmVzb3VyY2UgfSBmcm9tIFwiLi4vY29yZVwiO1xuXG4vKipcbiAqIEdsb2JhbCBpZGVudGlmaWVyIGZvciBgQ291bnRlcmAuXG4gKi9cbmV4cG9ydCBjb25zdCBDT1VOVEVSX0ZRTiA9IGZxbkZvclR5cGUoXCJjbG91ZC5Db3VudGVyXCIpO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGBDb3VudGVyYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb3VudGVyUHJvcHMge1xuICAvKipcbiAgICogVGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIGNvdW50ZXIuXG4gICAqIEBkZWZhdWx0IDBcbiAgICovXG4gIHJlYWRvbmx5IGluaXRpYWw/OiBudW1iZXI7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGRpc3RyaWJ1dGVkIGF0b21pYyBjb3VudGVyLlxuICogQGluZmxpZ2h0IGBAd2luZ2xhbmcvc2RrLmNsb3VkLklDb3VudGVyQ2xpZW50YFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ291bnRlciBleHRlbmRzIFJlc291cmNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBjb3VudGVyLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgX25ld0NvdW50ZXIoXG4gICAgc2NvcGU6IENvbnN0cnVjdCxcbiAgICBpZDogc3RyaW5nLFxuICAgIHByb3BzOiBDb3VudGVyUHJvcHMgPSB7fVxuICApOiBDb3VudGVyIHtcbiAgICByZXR1cm4gQXBwLm9mKHNjb3BlKS5uZXdBYnN0cmFjdChDT1VOVEVSX0ZRTiwgc2NvcGUsIGlkLCBwcm9wcyk7XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgc3RhdGVmdWwgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUaGUgaW5pdGlhbCB2YWx1ZSBvZiB0aGUgY291bnRlci5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBpbml0aWFsOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IENvdW50ZXJQcm9wcyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgIHRoaXMuZGlzcGxheS50aXRsZSA9IFwiQ291bnRlclwiO1xuICAgIHRoaXMuZGlzcGxheS5kZXNjcmlwdGlvbiA9IFwiQSBkaXN0cmlidXRlZCBhdG9taWMgY291bnRlclwiO1xuXG4gICAgdGhpcy5pbml0aWFsID0gcHJvcHMuaW5pdGlhbCA/PyAwO1xuICB9XG59XG5cbi8qKlxuICogSW5mbGlnaHQgaW50ZXJmYWNlIGZvciBgQ291bnRlcmAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUNvdW50ZXJDbGllbnQge1xuICAvKipcbiAgICogSW5jcmVtZW50cyB0aGUgY291bnRlciBhdG9taWNhbGx5IGJ5IGEgY2VydGFpbiBhbW91bnQgYW5kIHJldHVybnMgdGhlIHByZXZpb3VzIHZhbHVlLlxuICAgKiBAcGFyYW0gYW1vdW50IGFtb3VudCB0byBpbmNyZW1lbnQgKGRlZmF1bHQgaXMgMSkuXG4gICAqIEByZXR1cm5zIHRoZSBwcmV2aW91cyB2YWx1ZSBvZiB0aGUgY291bnRlci5cbiAgICogQGluZmxpZ2h0XG4gICAqL1xuICBpbmMoYW1vdW50PzogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+O1xuXG4gIC8qKlxuICAgKiBEZWNyZW1lbnQgdGhlIGNvdW50ZXIsIHJldHVybmluZyB0aGUgcHJldmlvdXMgdmFsdWUuXG4gICAqIEBwYXJhbSBhbW91bnQgYW1vdW50IHRvIGRlY3JlbWVudCAoZGVmYXVsdCBpcyAxKS5cbiAgICogQHJldHVybnMgdGhlIHByZXZpb3VzIHZhbHVlIG9mIHRoZSBjb3VudGVyLlxuICAgKiBAaW5mbGlnaHRcbiAgICovXG4gIGRlYyhhbW91bnQ/OiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj47XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgY291bnRlci5cbiAgICogVXNpbmcgdGhpcyBBUEkgbWF5IGludHJvZHVjZSByYWNlIGNvbmRpdGlvbnMgc2luY2UgdGhlIHZhbHVlIGNhbiBjaGFuZ2UgYmV0d2VlblxuICAgKiB0aGUgdGltZSBpdCBpcyByZWFkIGFuZCB0aGUgdGltZSBpdCBpcyB1c2VkIGluIHlvdXIgY29kZS5cbiAgICogQHJldHVybnMgY3VycmVudCB2YWx1ZVxuICAgKiBAaW5mbGlnaHRcbiAgICovXG4gIHBlZWsoKTogUHJvbWlzZTxudW1iZXI+O1xuXG4gIC8qKlxuICAgKiBSZXNldCBhIGNvdW50ZXIgdG8gYSBnaXZlbiB2YWx1ZS5cbiAgICogQHBhcmFtIHZhbHVlIHZhbHVlIHRvIHJlc2V0IChkZWZhdWx0IGlzIDApXG4gICAqIEBpbmZsaWdodFxuICAgKi9cbiAgcmVzZXQodmFsdWU/OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxpdHkgc2hhcmVkIGJldHdlZW4gYWxsIGBDb3VudGVyQ2xpZW50YCBpbXBsZW1lbnRhdGlvbnMgcmVnYXJkbGVzcyBvZiB0aGUgdGFyZ2V0LlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ291bnRlckNsaWVudEJhc2UgaW1wbGVtZW50cyBJQ291bnRlckNsaWVudCB7XG4gIGluYyhhbW91bnQ/OiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIGFtb3VudDtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxuICBkZWMoYW1vdW50PzogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5pbmMoLTEgKiAoYW1vdW50ID8/IDEpKTtcbiAgfVxuICBwZWVrKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbiAgcmVzZXQodmFsdWU/OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB2YWx1ZTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuXG4vKipcbiAqIExpc3Qgb2YgaW5mbGlnaHQgb3BlcmF0aW9ucyBhdmFpbGFibGUgZm9yIGBDb3VudGVyYC5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZW51bSBDb3VudGVySW5mbGlnaHRNZXRob2RzIHtcbiAgLyoqIGBDb3VudGVyLmluY2AgKi9cbiAgSU5DID0gXCJpbmNcIixcbiAgLyoqIGBDb3VudGVyLmRlY2AgKi9cbiAgREVDID0gXCJkZWNcIixcbiAgLyoqIGBDb3VudGVyLnBlZWtgICovXG4gIFBFRUsgPSBcInBlZWtcIixcbiAgLyoqIGBDb3VudGVyLnJlc2V0YCAqL1xuICBSRVNFVCA9IFwicmVzZXRcIixcbn1cbiJdfQ==

/***/ }),

/***/ 131:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FunctionInflightMethods = exports.Function = exports.FUNCTION_FQN = void 0;
const child_process_1 = __nccwpck_require__(2081);
const fs_1 = __nccwpck_require__(7147);
const path_1 = __nccwpck_require__(1017);
const logger_1 = __nccwpck_require__(2206);
const constants_1 = __nccwpck_require__(5484);
const core_1 = __nccwpck_require__(6526);
const util_1 = __nccwpck_require__(5353);
/**
 * Global identifier for `Function`.
 */
exports.FUNCTION_FQN = (0, constants_1.fqnForType)("cloud.Function");
/**
 * Represents a function.
 *
 * @inflight `@winglang/sdk.cloud.IFunctionClient`
 */
class Function extends core_1.Resource {
    /**
     * Creates a new cloud.Function instance through the app.
     * @internal
     */
    static _newFunction(scope, id, inflight, props = {}) {
        return core_1.App.of(scope).newAbstract(exports.FUNCTION_FQN, scope, id, inflight, props);
    }
    constructor(scope, id, inflight, props = {}) {
        super(scope, id);
        this._env = {};
        this.stateful = false;
        this.display.title = "Function";
        this.display.description = "A cloud function (FaaS)";
        for (const [key, value] of Object.entries(props.env ?? {})) {
            this.addEnvironment(key, value);
        }
        const logger = logger_1.Logger.of(this);
        // indicates that we are calling "handle" on the handler resource
        // and that we are calling "print" on the logger.
        inflight._registerBind(this, ["handle"]);
        logger._registerBind(this, ["print"]);
        const inflightClient = inflight._toInflight();
        const loggerClientCode = logger._toInflight();
        const lines = new Array();
        // create a logger inflight client and attach it to `console.log`.
        // TODO: attach console.error, console.warn, once our logger supports log levels.
        lines.push(`const $logger = ${loggerClientCode.text};`);
        lines.push(`console.log = (...args) => $logger.print(...args);`);
        lines.push("exports.handler = async function(event) {");
        lines.push(`  return await ${inflightClient.text}.handle(event);`);
        lines.push("};");
        // add an annotation that the Wing logger is implicitly used
        core_1.Resource.addConnection({
            from: this,
            to: logger,
            relationship: "print",
            implicit: true,
        });
        const tempdir = (0, util_1.mkdtemp)();
        const infile = (0, path_1.join)(tempdir, "prebundle.js");
        const outfile = (0, path_1.join)(tempdir, "index.js");
        (0, fs_1.writeFileSync)(infile, lines.join("\n"));
        // We would invoke esbuild directly here, but there is a bug where esbuild
        // mangles the stdout/stderr of the process that invokes it.
        // https://github.com/evanw/esbuild/issues/2927
        // To workaround the issue, spawn a new process and invoke esbuild inside it.
        try {
            let esbuildScript = [
                `const esbuild = require("esbuild-wasm");`,
                `esbuild.buildSync({ bundle: true, entryPoints: ["${infile}"], outfile: "${outfile}", minify: false, platform: "node", target: "node16", external: ["aws-sdk"] });`,
            ].join("\n");
            
            const {error, stdout, stderr } = (0, child_process_1.spawnSync)(process.argv[0], ["-e", esbuildScript]);
            console.log(error, stdout, new TextDecoder().decode(stderr))
        }
        catch (e) {
            throw new Error(`Failed to bundle function: ${e}`);
        }
        // the bundled contains line comments with file paths, which are not useful for us, especially
        // since they may contain system-specific paths. sadly, esbuild doesn't have a way to disable
        // this, so we simply filter those out from the bundle.
        const outlines = (0, fs_1.readFileSync)(outfile, "utf-8").split("\n");
        const isNotLineComment = (line) => !line.startsWith("//");
        (0, fs_1.writeFileSync)(outfile, outlines.filter(isNotLineComment).join("\n"));
        this.assetPath = outfile;
    }
    /**
     * Add an environment variable to the function.
     */
    addEnvironment(name, value) {
        if (this._env[name] !== undefined) {
            throw new Error(`Environment variable "${name}" already set.`);
        }
        this._env[name] = value;
    }
    /**
     * Returns the set of environment variables for this function.
     */
    get env() {
        return { ...this._env };
    }
}
exports.Function = Function;
/**
 * List of inflight operations available for `Function`.
 * @internal
 */
var FunctionInflightMethods;
(function (FunctionInflightMethods) {
    /** `Function.invoke` */
    FunctionInflightMethods["INVOKE"] = "invoke";
})(FunctionInflightMethods = exports.FunctionInflightMethods || (exports.FunctionInflightMethods = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xvdWQvZnVuY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQTBDO0FBQzFDLDJCQUFpRDtBQUNqRCwrQkFBNEI7QUFFNUIscUNBQWtDO0FBQ2xDLDRDQUEwQztBQUMxQyxrQ0FBNEU7QUFFNUUsa0NBQWtDO0FBRWxDOztHQUVHO0FBQ1UsUUFBQSxZQUFZLEdBQUcsSUFBQSxzQkFBVSxFQUFDLGdCQUFnQixDQUFDLENBQUM7QUEyQnpEOzs7O0dBSUc7QUFDSCxNQUFzQixRQUFTLFNBQVEsZUFBUTtJQUM3Qzs7O09BR0c7SUFDSSxNQUFNLENBQUMsWUFBWSxDQUN4QixLQUFnQixFQUNoQixFQUFVLEVBQ1YsUUFBa0IsRUFDbEIsUUFBdUIsRUFBRTtRQUV6QixPQUFPLFVBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLG9CQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQVdELFlBQ0UsS0FBZ0IsRUFDaEIsRUFBVSxFQUNWLFFBQWtCLEVBQ2xCLFFBQXVCLEVBQUU7UUFFekIsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQWZGLFNBQUksR0FBMkIsRUFBRSxDQUFDO1FBRW5DLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFlL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLHlCQUF5QixDQUFDO1FBRXJELEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUU7WUFDMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUs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QUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLElBQUksZ0JBQWdCLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsR0FBRztRQUNaLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBQ0Y7QUEvR0QsNEJBK0dDO0FBZ0NEOzs7R0FHRztBQUNILElBQVksdUJBR1g7QUFIRCxXQUFZLHVCQUF1QjtJQUNqQyx3QkFBd0I7SUFDeEIsNENBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLHVCQUF1QixHQUF2QiwrQkFBdUIsS0FBdkIsK0JBQXVCLFFBR2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3Bhd25TeW5jIH0gZnJvbSBcImNoaWxkX3Byb2Nlc3NcIjtcbmltcG9ydCB7IHJlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luYyB9IGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vbG9nZ2VyXCI7XG5pbXBvcnQgeyBmcW5Gb3JUeXBlIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSUluZmxpZ2h0SG9zdCwgSVJlc291cmNlLCBJbmZsaWdodCwgUmVzb3VyY2UsIEFwcCB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gXCIuLi9zdGRcIjtcbmltcG9ydCB7IG1rZHRlbXAgfSBmcm9tIFwiLi4vdXRpbFwiO1xuXG4vKipcbiAqIEdsb2JhbCBpZGVudGlmaWVyIGZvciBgRnVuY3Rpb25gLlxuICovXG5leHBvcnQgY29uc3QgRlVOQ1RJT05fRlFOID0gZnFuRm9yVHlwZShcImNsb3VkLkZ1bmN0aW9uXCIpO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGBGdW5jdGlvbmAuXG4gKlxuICogVGhpcyBpcyB0aGUgdHlwZSB1c2VycyBzZWUgd2hlbiBjb25zdHJ1Y3RpbmcgYSBjbG91ZC5GdW5jdGlvbiBpbnN0YW5jZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGdW5jdGlvblByb3BzIHtcbiAgLyoqXG4gICAqIEVudmlyb25tZW50IHZhcmlhYmxlcyB0byBwYXNzIHRvIHRoZSBmdW5jdGlvbi5cbiAgICogQGRlZmF1bHQgLSBObyBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG4gICAqL1xuICByZWFkb25seSBlbnY/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBhbW91bnQgb2YgdGltZSB0aGUgZnVuY3Rpb24gY2FuIHJ1bi5cbiAgICogQGRlZmF1bHQgMW1cbiAgICovXG4gIHJlYWRvbmx5IHRpbWVvdXQ/OiBEdXJhdGlvbjtcblxuICAvKipcbiAgICogVGhlIGFtb3VudCBvZiBtZW1vcnkgdG8gYWxsb2NhdGUgdG8gdGhlIGZ1bmN0aW9uLCBpbiBNQi5cbiAgICogQGRlZmF1bHQgMTI4XG4gICAqL1xuICByZWFkb25seSBtZW1vcnk/OiBudW1iZXI7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBpbmZsaWdodCBgQHdpbmdsYW5nL3Nkay5jbG91ZC5JRnVuY3Rpb25DbGllbnRgXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGdW5jdGlvbiBleHRlbmRzIFJlc291cmNlIGltcGxlbWVudHMgSUluZmxpZ2h0SG9zdCB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGNsb3VkLkZ1bmN0aW9uIGluc3RhbmNlIHRocm91Z2ggdGhlIGFwcC5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIF9uZXdGdW5jdGlvbihcbiAgICBzY29wZTogQ29uc3RydWN0LFxuICAgIGlkOiBzdHJpbmcsXG4gICAgaW5mbGlnaHQ6IEluZmxpZ2h0LFxuICAgIHByb3BzOiBGdW5jdGlvblByb3BzID0ge31cbiAgKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiBBcHAub2Yoc2NvcGUpLm5ld0Fic3RyYWN0KEZVTkNUSU9OX0ZRTiwgc2NvcGUsIGlkLCBpbmZsaWdodCwgcHJvcHMpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfZW52OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG5cbiAgcHVibGljIHJlYWRvbmx5IHN0YXRlZnVsID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBwYXRoIHRvIHRoZSBmaWxlIGFzc2V0IHRoYXQgY29udGFpbnMgdGhlIGhhbmRsZXIgY29kZS5cbiAgICovXG4gIHByb3RlY3RlZCByZWFkb25seSBhc3NldFBhdGg6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBzY29wZTogQ29uc3RydWN0LFxuICAgIGlkOiBzdHJpbmcsXG4gICAgaW5mbGlnaHQ6IEluZmxpZ2h0LFxuICAgIHByb3BzOiBGdW5jdGlvblByb3BzID0ge31cbiAgKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgIHRoaXMuZGlzcGxheS50aXRsZSA9IFwiRnVuY3Rpb25cIjtcbiAgICB0aGlzLmRpc3BsYXkuZGVzY3JpcHRpb24gPSBcIkEgY2xvdWQgZnVuY3Rpb24gKEZhYVMpXCI7XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcy5lbnYgPz8ge30pKSB7XG4gICAgICB0aGlzLmFkZEVudmlyb25tZW50KGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGxvZ2dlciA9IExvZ2dlci5vZih0aGlzKTtcblxuICAgIC8vIGluZGljYXRlcyB0aGF0IHdlIGFyZSBjYWxsaW5nIFwiaGFuZGxlXCIgb24gdGhlIGhhbmRsZXIgcmVzb3VyY2VcbiAgICAvLyBhbmQgdGhhdCB3ZSBhcmUgY2FsbGluZyBcInByaW50XCIgb24gdGhlIGxvZ2dlci5cbiAgICBpbmZsaWdodC5fcmVnaXN0ZXJCaW5kKHRoaXMsIFtcImhhbmRsZVwiXSk7XG4gICAgbG9nZ2VyLl9yZWdpc3RlckJpbmQodGhpcywgW1wicHJpbnRcIl0pO1xuXG4gICAgY29uc3QgaW5mbGlnaHRDbGllbnQgPSBpbmZsaWdodC5fdG9JbmZsaWdodCgpO1xuICAgIGNvbnN0IGxvZ2dlckNsaWVudENvZGUgPSBsb2dnZXIuX3RvSW5mbGlnaHQoKTtcbiAgICBjb25zdCBsaW5lcyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG5cbiAgICAvLyBjcmVhdGUgYSBsb2dnZXIgaW5mbGlnaHQgY2xpZW50IGFuZCBhdHRhY2ggaXQgdG8gYGNvbnNvbGUubG9nYC5cbiAgICAvLyBUT0RPOiBhdHRhY2ggY29uc29sZS5lcnJvciwgY29uc29sZS53YXJuLCBvbmNlIG91ciBsb2dnZXIgc3VwcG9ydHMgbG9nIGxldmVscy5cbiAgICBsaW5lcy5wdXNoKGBjb25zdCAkbG9nZ2VyID0gJHtsb2dnZXJDbGllbnRDb2RlLnRleHR9O2ApO1xuICAgIGxpbmVzLnB1c2goYGNvbnNvbGUubG9nID0gKC4uLmFyZ3MpID0+ICRsb2dnZXIucHJpbnQoLi4uYXJncyk7YCk7XG5cbiAgICBsaW5lcy5wdXNoKFwiZXhwb3J0cy5oYW5kbGVyID0gYXN5bmMgZnVuY3Rpb24oZXZlbnQpIHtcIik7XG4gICAgbGluZXMucHVzaChgICByZXR1cm4gYXdhaXQgJHtpbmZsaWdodENsaWVudC50ZXh0fS5oYW5kbGUoZXZlbnQpO2ApO1xuICAgIGxpbmVzLnB1c2goXCJ9O1wiKTtcblxuICAgIC8vIGFkZCBhbiBhbm5vdGF0aW9uIHRoYXQgdGhlIFdpbmcgbG9nZ2VyIGlzIGltcGxpY2l0bHkgdXNlZFxuICAgIFJlc291cmNlLmFkZENvbm5lY3Rpb24oe1xuICAgICAgZnJvbTogdGhpcyxcbiAgICAgIHRvOiBsb2dnZXIsXG4gICAgICByZWxhdGlvbnNoaXA6IFwicHJpbnRcIixcbiAgICAgIGltcGxpY2l0OiB0cnVlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGVtcGRpciA9IG1rZHRlbXAoKTtcbiAgICBjb25zdCBpbmZpbGUgPSBqb2luKHRlbXBkaXIsIFwicHJlYnVuZGxlLmpzXCIpO1xuICAgIGNvbnN0IG91dGZpbGUgPSBqb2luKHRlbXBkaXIsIFwiaW5kZXguanNcIik7XG4gICAgd3JpdGVGaWxlU3luYyhpbmZpbGUsIGxpbmVzLmpvaW4oXCJcXG5cIikpO1xuXG4gICAgLy8gV2Ugd291bGQgaW52b2tlIGVzYnVpbGQgZGlyZWN0bHkgaGVyZSwgYnV0IHRoZXJlIGlzIGEgYnVnIHdoZXJlIGVzYnVpbGRcbiAgICAvLyBtYW5nbGVzIHRoZSBzdGRvdXQvc3RkZXJyIG9mIHRoZSBwcm9jZXNzIHRoYXQgaW52b2tlcyBpdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZXZhbncvZXNidWlsZC9pc3N1ZXMvMjkyN1xuICAgIC8vIFRvIHdvcmthcm91bmQgdGhlIGlzc3VlLCBzcGF3biBhIG5ldyBwcm9jZXNzIGFuZCBpbnZva2UgZXNidWlsZCBpbnNpZGUgaXQuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBlc2J1aWxkU2NyaXB0ID0gW1xuICAgICAgICBgY29uc3QgZXNidWlsZCA9IHJlcXVpcmUoXCIke3JlcXVpcmUucmVzb2x2ZShcImVzYnVpbGQtd2FzbVwiKX1cIik7YCxcbiAgICAgICAgYGVzYnVpbGQuYnVpbGRTeW5jKHsgYnVuZGxlOiB0cnVlLCBlbnRyeVBvaW50czogW1wiJHtpbmZpbGV9XCJdLCBvdXRmaWxlOiBcIiR7b3V0ZmlsZX1cIiwgbWluaWZ5OiBmYWxzZSwgcGxhdGZvcm06IFwibm9kZVwiLCB0YXJnZXQ6IFwibm9kZTE2XCIsIGV4dGVybmFsOiBbXCJhd3Mtc2RrXCJdIH0pO2AsXG4gICAgICBdLmpvaW4oXCJcXG5cIik7XG4gICAgICBzcGF3blN5bmMocHJvY2Vzcy5hcmd2WzBdLCBbXCItZVwiLCBlc2J1aWxkU2NyaXB0XSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gYnVuZGxlIGZ1bmN0aW9uOiAke2V9YCk7XG4gICAgfVxuXG4gICAgLy8gdGhlIGJ1bmRsZWQgY29udGFpbnMgbGluZSBjb21tZW50cyB3aXRoIGZpbGUgcGF0aHMsIHdoaWNoIGFyZSBub3QgdXNlZnVsIGZvciB1cywgZXNwZWNpYWxseVxuICAgIC8vIHNpbmNlIHRoZXkgbWF5IGNvbnRhaW4gc3lzdGVtLXNwZWNpZmljIHBhdGhzLiBzYWRseSwgZXNidWlsZCBkb2Vzbid0IGhhdmUgYSB3YXkgdG8gZGlzYWJsZVxuICAgIC8vIHRoaXMsIHNvIHdlIHNpbXBseSBmaWx0ZXIgdGhvc2Ugb3V0IGZyb20gdGhlIGJ1bmRsZS5cbiAgICBjb25zdCBvdXRsaW5lcyA9IHJlYWRGaWxlU3luYyhvdXRmaWxlLCBcInV0Zi04XCIpLnNwbGl0KFwiXFxuXCIpO1xuICAgIGNvbnN0IGlzTm90TGluZUNvbW1lbnQgPSAobGluZTogc3RyaW5nKSA9PiAhbGluZS5zdGFydHNXaXRoKFwiLy9cIik7XG4gICAgd3JpdGVGaWxlU3luYyhvdXRmaWxlLCBvdXRsaW5lcy5maWx0ZXIoaXNOb3RMaW5lQ29tbWVudCkuam9pbihcIlxcblwiKSk7XG5cbiAgICB0aGlzLmFzc2V0UGF0aCA9IG91dGZpbGU7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuIGVudmlyb25tZW50IHZhcmlhYmxlIHRvIHRoZSBmdW5jdGlvbi5cbiAgICovXG4gIHB1YmxpYyBhZGRFbnZpcm9ubWVudChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fZW52W25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRW52aXJvbm1lbnQgdmFyaWFibGUgXCIke25hbWV9XCIgYWxyZWFkeSBzZXQuYCk7XG4gICAgfVxuICAgIHRoaXMuX2VudltuYW1lXSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNldCBvZiBlbnZpcm9ubWVudCB2YXJpYWJsZXMgZm9yIHRoaXMgZnVuY3Rpb24uXG4gICAqL1xuICBwdWJsaWMgZ2V0IGVudigpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4geyAuLi50aGlzLl9lbnYgfTtcbiAgfVxufVxuXG4vKipcbiAqIEluZmxpZ2h0IGludGVyZmFjZSBmb3IgYEZ1bmN0aW9uYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRnVuY3Rpb25DbGllbnQge1xuICAvKipcbiAgICogSW52b2tlIHRoZSBmdW5jdGlvbiBhc3luY2hyb25vdXNseSB3aXRoIGEgZ2l2ZW4gcGF5bG9hZC5cbiAgICogQGluZmxpZ2h0XG4gICAqL1xuICBpbnZva2UocGF5bG9hZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+O1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSByZXNvdXJjZSB3aXRoIGFuIGluZmxpZ2h0IFwiaGFuZGxlXCIgbWV0aG9kIHRoYXQgY2FuIGJlIHVzZWQgdG9cbiAqIGNyZWF0ZSBhIGBjbG91ZC5GdW5jdGlvbmAuXG4gKlxuICogQGluZmxpZ2h0IGB3aW5nc2RrLmNsb3VkLklGdW5jdGlvbkhhbmRsZXJDbGllbnRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZ1bmN0aW9uSGFuZGxlciBleHRlbmRzIElSZXNvdXJjZSB7fVxuXG4vKipcbiAqIEluZmxpZ2h0IGNsaWVudCBmb3IgYElGdW5jdGlvbkhhbmRsZXJgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElGdW5jdGlvbkhhbmRsZXJDbGllbnQge1xuICAvKipcbiAgICogRW50cnlwb2ludCBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNsb3VkIGZ1bmN0aW9uIGlzIGludm9rZWQuXG4gICAqIEBpbmZsaWdodFxuICAgKi9cbiAgaGFuZGxlKGV2ZW50OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG4vKipcbiAqIExpc3Qgb2YgaW5mbGlnaHQgb3BlcmF0aW9ucyBhdmFpbGFibGUgZm9yIGBGdW5jdGlvbmAuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGVudW0gRnVuY3Rpb25JbmZsaWdodE1ldGhvZHMge1xuICAvKiogYEZ1bmN0aW9uLmludm9rZWAgKi9cbiAgSU5WT0tFID0gXCJpbnZva2VcIixcbn1cbiJdfQ==

/***/ }),

/***/ 832:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(2250), exports);
__exportStar(__nccwpck_require__(6414), exports);
__exportStar(__nccwpck_require__(131), exports);
__exportStar(__nccwpck_require__(2206), exports);
__exportStar(__nccwpck_require__(1687), exports);
__exportStar(__nccwpck_require__(5136), exports);
__exportStar(__nccwpck_require__(3329), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xvdWQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF5QjtBQUN6Qiw0Q0FBMEI7QUFDMUIsNkNBQTJCO0FBQzNCLDJDQUF5QjtBQUN6QiwwQ0FBd0I7QUFDeEIsNkNBQTJCO0FBQzNCLDBDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2J1Y2tldFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vY291bnRlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vZnVuY3Rpb25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xvZ2dlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcXVldWVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NjaGVkdWxlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90b3BpY1wiO1xuIl19

/***/ }),

/***/ 2206:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerInflightMethods = exports.Logger = exports.LOGGER_FQN = void 0;
const constants_1 = __nccwpck_require__(5484);
const core_1 = __nccwpck_require__(6526);
const resource_1 = __nccwpck_require__(3468);
exports.LOGGER_FQN = (0, constants_1.fqnForType)("cloud.Logger");
const LOGGER_SYMBOL = Symbol.for(exports.LOGGER_FQN);
/**
 * A cloud logging facility.
 *
 * @inflight `@winglang/sdk.cloud.ILoggerClient`
 */
class Logger extends resource_1.Resource {
    /**
     * Returns the logger registered to the given scope, throwing an error if
     * there is none.
     */
    static of(scope) {
        const logger = scope[LOGGER_SYMBOL];
        if (logger) {
            return logger;
        }
        const parent = scope.node.scope;
        if (!parent) {
            throw new Error("No logger found in scope");
        }
        return Logger.of(parent);
    }
    /**
     * Create a logger and register it to the given scope.
     */
    static register(scope) {
        const existing = scope[LOGGER_SYMBOL];
        if (existing !== undefined) {
            throw new Error("There is already a logger registered to this scope.");
        }
        const logger = core_1.App.of(scope).newAbstract(exports.LOGGER_FQN, scope, "WingLogger");
        Object.defineProperty(scope, LOGGER_SYMBOL, {
            value: logger,
            enumerable: false,
            writable: false,
        });
    }
    constructor(scope, id) {
        super(scope, id);
        this.stateful = true;
        this.display.hidden = true;
        this.display.title = "Logger";
        this.display.description = "A cloud logging facility";
    }
}
exports.Logger = Logger;
/**
 * List of inflight operations available for `Logger`.
 * @internal
 */
var LoggerInflightMethods;
(function (LoggerInflightMethods) {
    /** `Logger.print` */
    LoggerInflightMethods["PRINT"] = "print";
})(LoggerInflightMethods = exports.LoggerInflightMethods || (exports.LoggerInflightMethods = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Nsb3VkL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw0Q0FBMEM7QUFDMUMsa0NBQThCO0FBQzlCLCtDQUE0QztBQUUvQixRQUFBLFVBQVUsR0FBRyxJQUFBLHNCQUFVLEVBQUMsY0FBYyxDQUFDLENBQUM7QUFDckQsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBVSxDQUFDLENBQUM7QUFFN0M7Ozs7R0FJRztBQUNILE1BQXNCLE1BQU8sU0FBUSxtQkFBUTtJQUMzQzs7O09BR0c7SUFDSSxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQWlCO1FBQ2hDLE1BQU0sTUFBTSxHQUFJLEtBQWEsQ0FBQyxhQUFhLENBQVcsQ0FBQztRQUN2RCxJQUFJLE1BQU0sRUFBRTtZQUNWLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFFRCxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQzdDO1FBRUQsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBaUI7UUFDdEMsTUFBTSxRQUFRLEdBQUksS0FBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9DLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7U0FDeEU7UUFFRCxNQUFNLE1BQU0sR0FBRyxVQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FDdEMsa0JBQVUsRUFDVixLQUFLLEVBQ0wsWUFBWSxDQUNILENBQUM7UUFFWixNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUU7WUFDMUMsS0FBSyxFQUFFLE1BQU07WUFDYixVQUFVLEVBQUUsS0FBSztZQUNqQixRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQsWUFBWSxLQUFnQixFQUFFLEVBQVU7UUFDdEMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUhILGFBQVEsR0FBRyxJQUFJLENBQUM7UUFLOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRywwQkFBMEIsQ0FBQztJQUN4RCxDQUFDO0NBQ0Y7QUFsREQsd0JBa0RDO0FBa0JEOzs7R0FHRztBQUNILElBQVkscUJBR1g7QUFIRCxXQUFZLHFCQUFxQjtJQUMvQixxQkFBcUI7SUFDckIsd0NBQWUsQ0FBQTtBQUNqQixDQUFDLEVBSFcscUJBQXFCLEdBQXJCLDZCQUFxQixLQUFyQiw2QkFBcUIsUUFHaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QsIElDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgZnFuRm9yVHlwZSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gXCIuLi9jb3JlL3Jlc291cmNlXCI7XG5cbmV4cG9ydCBjb25zdCBMT0dHRVJfRlFOID0gZnFuRm9yVHlwZShcImNsb3VkLkxvZ2dlclwiKTtcbmNvbnN0IExPR0dFUl9TWU1CT0wgPSBTeW1ib2wuZm9yKExPR0dFUl9GUU4pO1xuXG4vKipcbiAqIEEgY2xvdWQgbG9nZ2luZyBmYWNpbGl0eS5cbiAqXG4gKiBAaW5mbGlnaHQgYEB3aW5nbGFuZy9zZGsuY2xvdWQuSUxvZ2dlckNsaWVudGBcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvZ2dlciBleHRlbmRzIFJlc291cmNlIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxvZ2dlciByZWdpc3RlcmVkIHRvIHRoZSBnaXZlbiBzY29wZSwgdGhyb3dpbmcgYW4gZXJyb3IgaWZcbiAgICogdGhlcmUgaXMgbm9uZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgb2Yoc2NvcGU6IElDb25zdHJ1Y3QpOiBMb2dnZXIge1xuICAgIGNvbnN0IGxvZ2dlciA9IChzY29wZSBhcyBhbnkpW0xPR0dFUl9TWU1CT0xdIGFzIExvZ2dlcjtcbiAgICBpZiAobG9nZ2VyKSB7XG4gICAgICByZXR1cm4gbG9nZ2VyO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudCA9IHNjb3BlLm5vZGUuc2NvcGU7XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGxvZ2dlciBmb3VuZCBpbiBzY29wZVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTG9nZ2VyLm9mKHBhcmVudCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbG9nZ2VyIGFuZCByZWdpc3RlciBpdCB0byB0aGUgZ2l2ZW4gc2NvcGUuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyKHNjb3BlOiBJQ29uc3RydWN0KSB7XG4gICAgY29uc3QgZXhpc3RpbmcgPSAoc2NvcGUgYXMgYW55KVtMT0dHRVJfU1lNQk9MXTtcbiAgICBpZiAoZXhpc3RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgaXMgYWxyZWFkeSBhIGxvZ2dlciByZWdpc3RlcmVkIHRvIHRoaXMgc2NvcGUuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGxvZ2dlciA9IEFwcC5vZihzY29wZSkubmV3QWJzdHJhY3QoXG4gICAgICBMT0dHRVJfRlFOLFxuICAgICAgc2NvcGUsXG4gICAgICBcIldpbmdMb2dnZXJcIlxuICAgICkgYXMgTG9nZ2VyO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNjb3BlLCBMT0dHRVJfU1lNQk9MLCB7XG4gICAgICB2YWx1ZTogbG9nZ2VyLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgc3RhdGVmdWwgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgdGhpcy5kaXNwbGF5LmhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5kaXNwbGF5LnRpdGxlID0gXCJMb2dnZXJcIjtcbiAgICB0aGlzLmRpc3BsYXkuZGVzY3JpcHRpb24gPSBcIkEgY2xvdWQgbG9nZ2luZyBmYWNpbGl0eVwiO1xuICB9XG59XG5cbi8qKlxuICogSW5mbGlnaHQgaW50ZXJmYWNlIGZvciBgTG9nZ2VyYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJTG9nZ2VyQ2xpZW50IHtcbiAgLyoqXG4gICAqIExvZ3MgYSBtZXNzYWdlLiBUaGUgbG9nIHdpbGwgYmUgYXNzb2NpYXRlZCB3aXRoIHdoaWNoZXZlciByZXNvdXJjZSBpc1xuICAgKiBydW5uaW5nIHRoZSBpbmZsaWdodCBjb2RlLlxuICAgKlxuICAgKiBOT1RJQ0U6IHRoaXMgaXMgbm90IGFuIGFzeW5jIGZ1bmN0aW9uIGJlY2F1c2UgaXQgaXMgd3JhcHBlZCBieSBgY29uc29sZS5sb2coKWAuXG4gICAqXG4gICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBpbmZsaWdodFxuICAgKi9cbiAgcHJpbnQobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcbn1cblxuLyoqXG4gKiBMaXN0IG9mIGluZmxpZ2h0IG9wZXJhdGlvbnMgYXZhaWxhYmxlIGZvciBgTG9nZ2VyYC5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZW51bSBMb2dnZXJJbmZsaWdodE1ldGhvZHMge1xuICAvKiogYExvZ2dlci5wcmludGAgKi9cbiAgUFJJTlQgPSBcInByaW50XCIsXG59XG4iXX0=

/***/ }),

/***/ 1687:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueueInflightMethods = exports.Queue = exports.QUEUE_FQN = void 0;
const constants_1 = __nccwpck_require__(5484);
const core_1 = __nccwpck_require__(6526);
/**
 * Global identifier for `Queue`.
 */
exports.QUEUE_FQN = (0, constants_1.fqnForType)("cloud.Queue");
/**
 * Represents a queue.
 *
 * @inflight `@winglang/sdk.cloud.IQueueClient`
 */
class Queue extends core_1.Resource {
    /**
     * Create a new `Queue` instance.
     * @internal
     */
    static _newQueue(scope, id, props = {}) {
        return core_1.App.of(scope).newAbstract(exports.QUEUE_FQN, scope, id, props);
    }
    constructor(scope, id, props = {}) {
        super(scope, id);
        this.stateful = true;
        this.display.title = "Queue";
        this.display.description = "A distributed message queue";
        props;
    }
}
exports.Queue = Queue;
/**
 * List of inflight operations available for `Queue`.
 * @internal
 */
var QueueInflightMethods;
(function (QueueInflightMethods) {
    /** `Queue.push` */
    QueueInflightMethods["PUSH"] = "push";
    /** `Queue.purge` */
    QueueInflightMethods["PURGE"] = "purge";
    /** `Queue.approxSize` */
    QueueInflightMethods["APPROX_SIZE"] = "approx_size";
})(QueueInflightMethods = exports.QueueInflightMethods || (exports.QueueInflightMethods = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVldWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xvdWQvcXVldWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsNENBQTBDO0FBQzFDLGtDQUE2RDtBQUc3RDs7R0FFRztBQUNVLFFBQUEsU0FBUyxHQUFHLElBQUEsc0JBQVUsRUFBQyxhQUFhLENBQUMsQ0FBQztBQW1CbkQ7Ozs7R0FJRztBQUNILE1BQXNCLEtBQU0sU0FBUSxlQUFRO0lBQzFDOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxTQUFTLENBQ3JCLEtBQWdCLEVBQ2hCLEVBQVUsRUFDVixRQUFvQixFQUFFO1FBRXRCLE9BQU8sVUFBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsaUJBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFHRCxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFFBQW9CLEVBQUU7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUZILGFBQVEsR0FBRyxJQUFJLENBQUM7UUFJOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLDZCQUE2QixDQUFDO1FBRXpELEtBQUssQ0FBQztJQUNSLENBQUM7Q0FTRjtBQTlCRCxzQkE4QkM7QUF3REQ7OztHQUdHO0FBQ0gsSUFBWSxvQkFPWDtBQVBELFdBQVksb0JBQW9CO0lBQzlCLG1CQUFtQjtJQUNuQixxQ0FBYSxDQUFBO0lBQ2Isb0JBQW9CO0lBQ3BCLHVDQUFlLENBQUE7SUFDZix5QkFBeUI7SUFDekIsbURBQTJCLENBQUE7QUFDN0IsQ0FBQyxFQVBXLG9CQUFvQixHQUFwQiw0QkFBb0IsS0FBcEIsNEJBQW9CLFFBTy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCB7IEZ1bmN0aW9uLCBGdW5jdGlvblByb3BzIH0gZnJvbSBcIi4vZnVuY3Rpb25cIjtcbmltcG9ydCB7IGZxbkZvclR5cGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBJUmVzb3VyY2UsIEluZmxpZ2h0LCBSZXNvdXJjZSwgQXBwIH0gZnJvbSBcIi4uL2NvcmVcIjtcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSBcIi4uL3N0ZFwiO1xuXG4vKipcbiAqIEdsb2JhbCBpZGVudGlmaWVyIGZvciBgUXVldWVgLlxuICovXG5leHBvcnQgY29uc3QgUVVFVUVfRlFOID0gZnFuRm9yVHlwZShcImNsb3VkLlF1ZXVlXCIpO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGBRdWV1ZWAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVldWVQcm9wcyB7XG4gIC8qKlxuICAgKiBIb3cgbG9uZyBhIHF1ZXVlJ3MgY29uc3VtZXJzIGhhdmUgdG8gcHJvY2VzcyBhIG1lc3NhZ2UuXG4gICAqIEBkZWZhdWx0IER1cmF0aW9uLmZyb21TZWNvbmRzKDEwKVxuICAgKi9cbiAgcmVhZG9ubHkgdGltZW91dD86IER1cmF0aW9uO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBxdWV1ZSB3aXRoIGEgc2V0IG9mIG1lc3NhZ2VzLlxuICAgKiBAZGVmYXVsdCBbXVxuICAgKi9cbiAgcmVhZG9ubHkgaW5pdGlhbE1lc3NhZ2VzPzogc3RyaW5nW107XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHF1ZXVlLlxuICpcbiAqIEBpbmZsaWdodCBgQHdpbmdsYW5nL3Nkay5jbG91ZC5JUXVldWVDbGllbnRgXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBRdWV1ZSBleHRlbmRzIFJlc291cmNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgUXVldWVgIGluc3RhbmNlLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgX25ld1F1ZXVlKFxuICAgIHNjb3BlOiBDb25zdHJ1Y3QsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwcm9wczogUXVldWVQcm9wcyA9IHt9XG4gICk6IFF1ZXVlIHtcbiAgICByZXR1cm4gQXBwLm9mKHNjb3BlKS5uZXdBYnN0cmFjdChRVUVVRV9GUU4sIHNjb3BlLCBpZCwgcHJvcHMpO1xuICB9XG5cbiAgcHVibGljIHJlYWRvbmx5IHN0YXRlZnVsID0gdHJ1ZTtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFF1ZXVlUHJvcHMgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICB0aGlzLmRpc3BsYXkudGl0bGUgPSBcIlF1ZXVlXCI7XG4gICAgdGhpcy5kaXNwbGF5LmRlc2NyaXB0aW9uID0gXCJBIGRpc3RyaWJ1dGVkIG1lc3NhZ2UgcXVldWVcIjtcblxuICAgIHByb3BzO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGZ1bmN0aW9uIHRvIGNvbnN1bWUgbWVzc2FnZXMgZnJvbSB0aGlzIHF1ZXVlLlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IG9uTWVzc2FnZShcbiAgICBpbmZsaWdodDogSW5mbGlnaHQsXG4gICAgcHJvcHM/OiBRdWV1ZU9uTWVzc2FnZVByb3BzXG4gICk6IEZ1bmN0aW9uO1xufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIFF1ZXVlLm9uTWVzc2FnZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWV1ZU9uTWVzc2FnZVByb3BzIGV4dGVuZHMgRnVuY3Rpb25Qcm9wcyB7XG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgbWVzc2FnZXMgdG8gc2VuZCB0byBzdWJzY3JpYmVycyBhdCBvbmNlLlxuICAgKiBAZGVmYXVsdCAxXG4gICAqL1xuICByZWFkb25seSBiYXRjaFNpemU/OiBudW1iZXI7XG59XG5cbi8qKlxuICogSW5mbGlnaHQgaW50ZXJmYWNlIGZvciBgUXVldWVgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElRdWV1ZUNsaWVudCB7XG4gIC8qKlxuICAgKiBQdXNoIGEgbWVzc2FnZSB0byB0aGUgcXVldWUuXG4gICAqIEBwYXJhbSBtZXNzYWdlIFBheWxvYWQgdG8gc2VuZCB0byB0aGUgcXVldWUuXG4gICAqIEBpbmZsaWdodFxuICAgKi9cbiAgcHVzaChtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBQdXJnZSBhbGwgb2YgdGhlIG1lc3NhZ2VzIGluIHRoZSBxdWV1ZS5cbiAgICogQGluZmxpZ2h0XG4gICAqL1xuICBwdXJnZSgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSB0aGUgYXBwcm94aW1hdGUgbnVtYmVyIG9mIG1lc3NhZ2VzIGluIHRoZSBxdWV1ZS5cbiAgICogQGluZmxpZ2h0XG4gICAqL1xuICBhcHByb3hTaXplKCk6IFByb21pc2U8bnVtYmVyPjtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmVzb3VyY2Ugd2l0aCBhbiBpbmZsaWdodCBcImhhbmRsZVwiIG1ldGhvZCB0aGF0IGNhbiBiZSBwYXNzZWQgdG9cbiAqIGBRdWV1ZS5vbl9tZXNzYWdlYC5cbiAqXG4gKiBAaW5mbGlnaHQgYHdpbmdzZGsuY2xvdWQuSVF1ZXVlT25NZXNzYWdlSGFuZGxlckNsaWVudGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJUXVldWVPbk1lc3NhZ2VIYW5kbGVyIGV4dGVuZHMgSVJlc291cmNlIHt9XG5cbi8qKlxuICogSW5mbGlnaHQgY2xpZW50IGZvciBgSVF1ZXVlT25NZXNzYWdlSGFuZGxlcmAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXVlT25NZXNzYWdlSGFuZGxlckNsaWVudCB7XG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gYSBtZXNzYWdlIGlzIHJlY2VpdmVkIGZyb20gdGhlIHF1ZXVlLlxuICAgKiBAaW5mbGlnaHRcbiAgICovXG4gIGhhbmRsZShtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG4vKipcbiAqIExpc3Qgb2YgaW5mbGlnaHQgb3BlcmF0aW9ucyBhdmFpbGFibGUgZm9yIGBRdWV1ZWAuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGVudW0gUXVldWVJbmZsaWdodE1ldGhvZHMge1xuICAvKiogYFF1ZXVlLnB1c2hgICovXG4gIFBVU0ggPSBcInB1c2hcIixcbiAgLyoqIGBRdWV1ZS5wdXJnZWAgKi9cbiAgUFVSR0UgPSBcInB1cmdlXCIsXG4gIC8qKiBgUXVldWUuYXBwcm94U2l6ZWAgKi9cbiAgQVBQUk9YX1NJWkUgPSBcImFwcHJveF9zaXplXCIsXG59XG4iXX0=

/***/ }),

/***/ 5136:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Schedule = exports.SCHEDULE_FQN = void 0;
const constants_1 = __nccwpck_require__(5484);
const core_1 = __nccwpck_require__(6526);
/**
 * Global identifier for `Schedule`.
 */
exports.SCHEDULE_FQN = (0, constants_1.fqnForType)("cloud.Schedule");
/**
 * Represents a schedule.
 *
 * @inflight `@winglang/sdk.cloud.IScheduleClient`
 */
class Schedule extends core_1.Resource {
    /**
     * Create a new schedule.
     * @internal
     */
    static _newSchedule(scope, id, props = {}) {
        return core_1.App.of(scope).newAbstract(exports.SCHEDULE_FQN, scope, id, props);
    }
    constructor(scope, id, props = {}) {
        super(scope, id);
        this.stateful = true;
        this.display.title = "Schedule";
        this.display.description =
            "A cloud schedule to trigger events at regular intervals";
        props;
    }
}
exports.Schedule = Schedule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xvdWQvc2NoZWR1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsNENBQTBDO0FBQzFDLGtDQUE2RDtBQUc3RDs7R0FFRztBQUNVLFFBQUEsWUFBWSxHQUFHLElBQUEsc0JBQVUsRUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBc0J6RDs7OztHQUlHO0FBQ0gsTUFBc0IsUUFBUyxTQUFRLGVBQVE7SUFDN0M7OztPQUdHO0lBQ0ksTUFBTSxDQUFDLFlBQVksQ0FDeEIsS0FBZ0IsRUFDaEIsRUFBVSxFQUNWLFFBQXVCLEVBQUU7UUFFekIsT0FBTyxVQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxvQkFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUdELFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsUUFBdUIsRUFBRTtRQUNqRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRkgsYUFBUSxHQUFHLElBQUksQ0FBQztRQUk5QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ3RCLHlEQUF5RCxDQUFDO1FBRTVELEtBQUssQ0FBQztJQUNSLENBQUM7Q0FTRjtBQS9CRCw0QkErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgRnVuY3Rpb24sIEZ1bmN0aW9uUHJvcHMgfSBmcm9tIFwiLi9mdW5jdGlvblwiO1xuaW1wb3J0IHsgZnFuRm9yVHlwZSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IElSZXNvdXJjZSwgSW5mbGlnaHQsIFJlc291cmNlLCBBcHAgfSBmcm9tIFwiLi4vY29yZVwiO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tIFwiLi4vc3RkXCI7XG5cbi8qKlxuICogR2xvYmFsIGlkZW50aWZpZXIgZm9yIGBTY2hlZHVsZWAuXG4gKi9cbmV4cG9ydCBjb25zdCBTQ0hFRFVMRV9GUU4gPSBmcW5Gb3JUeXBlKFwiY2xvdWQuU2NoZWR1bGVcIik7XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgYFNjaGVkdWxlYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTY2hlZHVsZVByb3BzIHtcbiAgLyoqXG4gICAqIFRyaWdnZXIgZXZlbnRzIGF0IGEgcGVyaW9kaWMgcmF0ZS5cbiAgICogQGV4YW1wbGUgMW1cbiAgICogQGRlZmF1bHQgdW5kZWZpbmVkXG4gICAqL1xuICByZWFkb25seSByYXRlPzogRHVyYXRpb247XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgZXZlbnRzIGFjY29yZGluZyB0byBhIGNyb24gc2NoZWR1bGUgdXNpbmcgdGhlIFVOSVggY3JvbiBmb3JtYXQuXG4gICAqIFttaW51dGVdIFtob3VyXSBbZGF5IG9mIG1vbnRoXSBbbW9udGhdIFtkYXkgb2Ygd2Vla11cbiAgICogQGV4YW1wbGUgXCIwLzEgKiA/ICogKlwiXG4gICAqIEBkZWZhdWx0IHVuZGVmaW5lZFxuICAgKi9cbiAgcmVhZG9ubHkgY3Jvbj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgc2NoZWR1bGUuXG4gKlxuICogQGluZmxpZ2h0IGBAd2luZ2xhbmcvc2RrLmNsb3VkLklTY2hlZHVsZUNsaWVudGBcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjaGVkdWxlIGV4dGVuZHMgUmVzb3VyY2Uge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHNjaGVkdWxlLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgX25ld1NjaGVkdWxlKFxuICAgIHNjb3BlOiBDb25zdHJ1Y3QsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwcm9wczogU2NoZWR1bGVQcm9wcyA9IHt9XG4gICk6IFNjaGVkdWxlIHtcbiAgICByZXR1cm4gQXBwLm9mKHNjb3BlKS5uZXdBYnN0cmFjdChTQ0hFRFVMRV9GUU4sIHNjb3BlLCBpZCwgcHJvcHMpO1xuICB9XG5cbiAgcHVibGljIHJlYWRvbmx5IHN0YXRlZnVsID0gdHJ1ZTtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFNjaGVkdWxlUHJvcHMgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICB0aGlzLmRpc3BsYXkudGl0bGUgPSBcIlNjaGVkdWxlXCI7XG4gICAgdGhpcy5kaXNwbGF5LmRlc2NyaXB0aW9uID1cbiAgICAgIFwiQSBjbG91ZCBzY2hlZHVsZSB0byB0cmlnZ2VyIGV2ZW50cyBhdCByZWd1bGFyIGludGVydmFsc1wiO1xuXG4gICAgcHJvcHM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBydW5zIHdoZW4gcmVjZWl2aW5nIHRoZSBzY2hlZHVsZWQgZXZlbnQuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3Qgb25UaWNrKFxuICAgIGluZmxpZ2h0OiBJbmZsaWdodCxcbiAgICBwcm9wcz86IFNjaGVkdWxlT25UaWNrUHJvcHNcbiAgKTogRnVuY3Rpb247XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgU2NoZWR1bGUub25UaWNrLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVkdWxlT25UaWNrUHJvcHMgZXh0ZW5kcyBGdW5jdGlvblByb3BzIHt9XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHJlc291cmNlIHdpdGggYW4gaW5mbGlnaHQgXCJoYW5kbGVcIiBtZXRob2QgdGhhdCBjYW4gYmUgcGFzc2VkIHRvXG4gKiBgU2NoZWR1bGUub25fdGlja2AuXG4gKlxuICogQGluZmxpZ2h0IGB3aW5nc2RrLmNsb3VkLklTY2hlZHVsZU9uVGlja0hhbmRsZXJDbGllbnRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNjaGVkdWxlT25UaWNrSGFuZGxlciBleHRlbmRzIElSZXNvdXJjZSB7fVxuXG4vKipcbiAqIEluZmxpZ2h0IGNsaWVudCBmb3IgYElTY2hlZHVsZU9uVGlja0hhbmRsZXJgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTY2hlZHVsZU9uVGlja0hhbmRsZXJDbGllbnQge1xuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgbWVzc2FnZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBzY2hlZHVsZS5cbiAgICogQGluZmxpZ2h0XG4gICAqL1xuICBoYW5kbGUoKTogUHJvbWlzZTx2b2lkPjtcbn1cbiJdfQ==

/***/ }),

/***/ 3329:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicInflightMethods = exports.Topic = exports.TOPIC_FQN = void 0;
const constants_1 = __nccwpck_require__(5484);
const core_1 = __nccwpck_require__(6526);
exports.TOPIC_FQN = (0, constants_1.fqnForType)("cloud.Topic");
/**
 * Represents a topic.
 *
 * @inflight `@winglang/sdk.cloud.ITopicClient`
 */
class Topic extends core_1.Resource {
    /**
     * Create a new topic.
     * @internal
     */
    static _newTopic(scope, id, props = {}) {
        return core_1.App.of(scope).newAbstract(exports.TOPIC_FQN, scope, id, props);
    }
    constructor(scope, id, props = {}) {
        super(scope, id);
        this.stateful = true;
        this.display.title = "Topic";
        this.display.description = "A pub/sub notification topic";
        props;
    }
}
exports.Topic = Topic;
/**
 * List of inflight operations available for `Topic`.
 * @internal
 */
var TopicInflightMethods;
(function (TopicInflightMethods) {
    /** `Topic.publish` */
    TopicInflightMethods["PUBLISH"] = "publish";
})(TopicInflightMethods = exports.TopicInflightMethods || (exports.TopicInflightMethods = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xvdWQvdG9waWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsNENBQTBDO0FBQzFDLGtDQUE2RDtBQUVoRCxRQUFBLFNBQVMsR0FBRyxJQUFBLHNCQUFVLEVBQUMsYUFBYSxDQUFDLENBQUM7QUFPbkQ7Ozs7R0FJRztBQUNILE1BQXNCLEtBQU0sU0FBUSxlQUFRO0lBQzFDOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxTQUFTLENBQ3JCLEtBQWdCLEVBQ2hCLEVBQVUsRUFDVixRQUFvQixFQUFFO1FBRXRCLE9BQU8sVUFBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsaUJBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFJRCxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFFBQW9CLEVBQUU7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUhILGFBQVEsR0FBRyxJQUFJLENBQUM7UUFLOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLDhCQUE4QixDQUFDO1FBRTFELEtBQUssQ0FBQztJQUNSLENBQUM7Q0FTRjtBQS9CRCxzQkErQkM7QUFzQ0Q7OztHQUdHO0FBQ0gsSUFBWSxvQkFHWDtBQUhELFdBQVksb0JBQW9CO0lBQzlCLHNCQUFzQjtJQUN0QiwyQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSFcsb0JBQW9CLEdBQXBCLDRCQUFvQixLQUFwQiw0QkFBb0IsUUFHL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tIFwiLi9mdW5jdGlvblwiO1xuaW1wb3J0IHsgZnFuRm9yVHlwZSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IElSZXNvdXJjZSwgSW5mbGlnaHQsIFJlc291cmNlLCBBcHAgfSBmcm9tIFwiLi4vY29yZVwiO1xuXG5leHBvcnQgY29uc3QgVE9QSUNfRlFOID0gZnFuRm9yVHlwZShcImNsb3VkLlRvcGljXCIpO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGBUb3BpY2AuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVG9waWNQcm9wcyB7fVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSB0b3BpYy5cbiAqXG4gKiBAaW5mbGlnaHQgYEB3aW5nbGFuZy9zZGsuY2xvdWQuSVRvcGljQ2xpZW50YFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVG9waWMgZXh0ZW5kcyBSZXNvdXJjZSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgdG9waWMuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBfbmV3VG9waWMoXG4gICAgc2NvcGU6IENvbnN0cnVjdCxcbiAgICBpZDogc3RyaW5nLFxuICAgIHByb3BzOiBUb3BpY1Byb3BzID0ge31cbiAgKTogVG9waWMge1xuICAgIHJldHVybiBBcHAub2Yoc2NvcGUpLm5ld0Fic3RyYWN0KFRPUElDX0ZRTiwgc2NvcGUsIGlkLCBwcm9wcyk7XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgc3RhdGVmdWwgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBUb3BpY1Byb3BzID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgdGhpcy5kaXNwbGF5LnRpdGxlID0gXCJUb3BpY1wiO1xuICAgIHRoaXMuZGlzcGxheS5kZXNjcmlwdGlvbiA9IFwiQSBwdWIvc3ViIG5vdGlmaWNhdGlvbiB0b3BpY1wiO1xuXG4gICAgcHJvcHM7XG4gIH1cblxuICAvKipcbiAgICogUnVuIGFuIGluZmxpZ2h0IHdoZW5ldmVyIGFuIG1lc3NhZ2UgaXMgcHVibGlzaGVkIHRvIHRoZSB0b3BpYy5cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBvbk1lc3NhZ2UoXG4gICAgaW5mbGlnaHQ6IEluZmxpZ2h0LFxuICAgIHByb3BzPzogVG9waWNPbk1lc3NhZ2VQcm9wc1xuICApOiBGdW5jdGlvbjtcbn1cblxuLyoqXG4gKiBPcHRpb25zIGZvciBgVG9waWMub25NZXNzYWdlYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUb3BpY09uTWVzc2FnZVByb3BzIHt9XG5cbi8qKlxuICogSW5mbGlnaHQgaW50ZXJmYWNlIGZvciBgVG9waWNgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElUb3BpY0NsaWVudCB7XG4gIC8qKlxuICAgKiBQdWJsaXNoIG1lc3NhZ2UgdG8gdG9waWNcbiAgICogQHBhcmFtIG1lc3NhZ2UgUGF5bG9hZCB0byBwdWJsaXNoIHRvIFRvcGljXG4gICAqIEBpbmZsaWdodFxuICAgKi9cbiAgcHVibGlzaChtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSByZXNvdXJjZSB3aXRoIGFuIGluZmxpZ2h0IFwiaGFuZGxlXCIgbWV0aG9kIHRoYXQgY2FuIGJlIHBhc3NlZCB0b1xuICogYFRvcGljLm9uX21lc3NhZ2VgLlxuICpcbiAqIEBpbmZsaWdodCBgd2luZ3Nkay5jbG91ZC5JVG9waWNPbk1lc3NhZ2VIYW5kbGVyQ2xpZW50YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIElUb3BpY09uTWVzc2FnZUhhbmRsZXIgZXh0ZW5kcyBJUmVzb3VyY2Uge31cblxuLyoqXG4gKiBJbmZsaWdodCBjbGllbnQgZm9yIGBJVG9waWNPbk1lc3NhZ2VIYW5kbGVyYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVG9waWNPbk1lc3NhZ2VIYW5kbGVyQ2xpZW50IHtcbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiBhIG1lc3NhZ2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgdG9waWMuXG4gICAqIEBpbmZsaWdodFxuICAgKi9cbiAgaGFuZGxlKGV2ZW50OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG4vKipcbiAqIExpc3Qgb2YgaW5mbGlnaHQgb3BlcmF0aW9ucyBhdmFpbGFibGUgZm9yIGBUb3BpY2AuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGVudW0gVG9waWNJbmZsaWdodE1ldGhvZHMge1xuICAvKiogYFRvcGljLnB1Ymxpc2hgICovXG4gIFBVQkxJU0ggPSBcInB1Ymxpc2hcIixcbn1cbiJdfQ==

/***/ }),

/***/ 5484:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fqnForType = exports.SDK_PACKAGE_NAME = exports.SDK_VERSION = void 0;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const PKG = __nccwpck_require__(4147);
exports.SDK_VERSION = PKG.version;
exports.SDK_PACKAGE_NAME = PKG.name;
if (!exports.SDK_VERSION) {
    throw new Error("SDK_VERSION is not defined");
}
if (!exports.SDK_PACKAGE_NAME) {
    throw new Error("SDK_PACKAGE_NAME is not defined");
}
function fqnForType(type) {
    return `${exports.SDK_PACKAGE_NAME}.${type}`;
}
exports.fqnForType = fqnForType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpRUFBaUU7QUFDakUsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFMUIsUUFBQSxXQUFXLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUMxQixRQUFBLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFFekMsSUFBSSxDQUFDLG1CQUFXLEVBQUU7SUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0NBQy9DO0FBRUQsSUFBSSxDQUFDLHdCQUFnQixFQUFFO0lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztDQUNwRDtBQUVELFNBQWdCLFVBQVUsQ0FBQyxJQUFZO0lBQ3JDLE9BQU8sR0FBRyx3QkFBZ0IsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUN2QyxDQUFDO0FBRkQsZ0NBRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuY29uc3QgUEtHID0gcmVxdWlyZShcIi4uL3BhY2thZ2UuanNvblwiKTtcblxuZXhwb3J0IGNvbnN0IFNES19WRVJTSU9OID0gUEtHLnZlcnNpb247XG5leHBvcnQgY29uc3QgU0RLX1BBQ0tBR0VfTkFNRSA9IFBLRy5uYW1lO1xuXG5pZiAoIVNES19WRVJTSU9OKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlNES19WRVJTSU9OIGlzIG5vdCBkZWZpbmVkXCIpO1xufVxuXG5pZiAoIVNES19QQUNLQUdFX05BTUUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiU0RLX1BBQ0tBR0VfTkFNRSBpcyBub3QgZGVmaW5lZFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZxbkZvclR5cGUodHlwZTogc3RyaW5nKSB7XG4gIHJldHVybiBgJHtTREtfUEFDS0FHRV9OQU1FfS4ke3R5cGV9YDtcbn1cbiJdfQ==

/***/ }),

/***/ 8375:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertBetweenHandlers = void 0;
const core_1 = __nccwpck_require__(6526);
const util_1 = __nccwpck_require__(5353);
/**
 * Convert a resource with a single method into a resource with a different
 * single method. This is useful for converting between types like
 * IFunctionHandler and IQueueOnMessageHandler.
 *
 * Both the input and return values of this function are expected to be
 * resources with a single method named "handle".
 */
function convertBetweenHandlers(scope, id, baseHandler, newHandlerClientPath, newHandlerClientClassName) {
    class NewHandler extends core_1.Resource {
        constructor(theScope, theId, handler) {
            super(theScope, theId);
            this.stateful = false;
            this.handler = handler;
        }
        _toInflight() {
            const handlerClient = this.handler._toInflight();
            return core_1.NodeJsCode.fromInline(`new (require("${(0, util_1.normalPath)(newHandlerClientPath)}")).${newHandlerClientClassName}({ handler: ${handlerClient.text} })`);
        }
    }
    NewHandler._annotateInflight("handle", {
        "this.handler": { ops: ["handle"] },
    });
    return new NewHandler(scope, id, baseHandler);
}
exports.convertBetweenHandlers = convertBetweenHandlers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb252ZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlDQUF5RDtBQUN6RCxpQ0FBb0M7QUFFcEM7Ozs7Ozs7R0FPRztBQUNILFNBQWdCLHNCQUFzQixDQUNwQyxLQUFnQixFQUNoQixFQUFVLEVBQ1YsV0FBc0IsRUFDdEIsb0JBQTRCLEVBQzVCLHlCQUFpQztJQUVqQyxNQUFNLFVBQVcsU0FBUSxlQUFRO1FBSS9CLFlBQVksUUFBbUIsRUFBRSxLQUFhLEVBQUUsT0FBa0I7WUFDaEUsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUpULGFBQVEsR0FBRyxLQUFLLENBQUM7WUFLL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztRQUVNLFdBQVc7WUFDaEIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqRCxPQUFPLGlCQUFVLENBQUMsVUFBVSxDQUMxQixpQkFBaUIsSUFBQSxpQkFBVSxFQUN6QixvQkFBb0IsQ0FDckIsT0FBTyx5QkFBeUIsZUFBZSxhQUFhLENBQUMsSUFBSSxLQUFLLENBQ3hFLENBQUM7UUFDSixDQUFDO0tBQ0Y7SUFFRCxVQUFVLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFO1FBQ3JDLGNBQWMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0tBQ3BDLENBQUMsQ0FBQztJQUVILE9BQU8sSUFBSSxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBL0JELHdEQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBJUmVzb3VyY2UsIE5vZGVKc0NvZGUsIFJlc291cmNlIH0gZnJvbSBcIi4vY29yZVwiO1xuaW1wb3J0IHsgbm9ybWFsUGF0aCB9IGZyb20gXCIuL3V0aWxcIjtcblxuLyoqXG4gKiBDb252ZXJ0IGEgcmVzb3VyY2Ugd2l0aCBhIHNpbmdsZSBtZXRob2QgaW50byBhIHJlc291cmNlIHdpdGggYSBkaWZmZXJlbnRcbiAqIHNpbmdsZSBtZXRob2QuIFRoaXMgaXMgdXNlZnVsIGZvciBjb252ZXJ0aW5nIGJldHdlZW4gdHlwZXMgbGlrZVxuICogSUZ1bmN0aW9uSGFuZGxlciBhbmQgSVF1ZXVlT25NZXNzYWdlSGFuZGxlci5cbiAqXG4gKiBCb3RoIHRoZSBpbnB1dCBhbmQgcmV0dXJuIHZhbHVlcyBvZiB0aGlzIGZ1bmN0aW9uIGFyZSBleHBlY3RlZCB0byBiZVxuICogcmVzb3VyY2VzIHdpdGggYSBzaW5nbGUgbWV0aG9kIG5hbWVkIFwiaGFuZGxlXCIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0QmV0d2VlbkhhbmRsZXJzKFxuICBzY29wZTogQ29uc3RydWN0LFxuICBpZDogc3RyaW5nLFxuICBiYXNlSGFuZGxlcjogSVJlc291cmNlLFxuICBuZXdIYW5kbGVyQ2xpZW50UGF0aDogc3RyaW5nLFxuICBuZXdIYW5kbGVyQ2xpZW50Q2xhc3NOYW1lOiBzdHJpbmdcbik6IElSZXNvdXJjZSB7XG4gIGNsYXNzIE5ld0hhbmRsZXIgZXh0ZW5kcyBSZXNvdXJjZSB7XG4gICAgcHVibGljIHJlYWRvbmx5IHN0YXRlZnVsID0gZmFsc2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSBoYW5kbGVyOiBJUmVzb3VyY2U7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aGVTY29wZTogQ29uc3RydWN0LCB0aGVJZDogc3RyaW5nLCBoYW5kbGVyOiBJUmVzb3VyY2UpIHtcbiAgICAgIHN1cGVyKHRoZVNjb3BlLCB0aGVJZCk7XG4gICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBfdG9JbmZsaWdodCgpOiBOb2RlSnNDb2RlIHtcbiAgICAgIGNvbnN0IGhhbmRsZXJDbGllbnQgPSB0aGlzLmhhbmRsZXIuX3RvSW5mbGlnaHQoKTtcbiAgICAgIHJldHVybiBOb2RlSnNDb2RlLmZyb21JbmxpbmUoXG4gICAgICAgIGBuZXcgKHJlcXVpcmUoXCIke25vcm1hbFBhdGgoXG4gICAgICAgICAgbmV3SGFuZGxlckNsaWVudFBhdGhcbiAgICAgICAgKX1cIikpLiR7bmV3SGFuZGxlckNsaWVudENsYXNzTmFtZX0oeyBoYW5kbGVyOiAke2hhbmRsZXJDbGllbnQudGV4dH0gfSlgXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIE5ld0hhbmRsZXIuX2Fubm90YXRlSW5mbGlnaHQoXCJoYW5kbGVcIiwge1xuICAgIFwidGhpcy5oYW5kbGVyXCI6IHsgb3BzOiBbXCJoYW5kbGVcIl0gfSxcbiAgfSk7XG5cbiAgcmV0dXJuIG5ldyBOZXdIYW5kbGVyKHNjb3BlLCBpZCwgYmFzZUhhbmRsZXIpO1xufVxuIl19

/***/ }),

/***/ 4919:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.preSynthesizeAllConstructs = exports.App = void 0;
const constructs_1 = __nccwpck_require__(6366);
/**
 * A Wing application.
 */
class App extends constructs_1.Construct {
    /**
     * Returns the root app.
     */
    static of(scope) {
        if (scope instanceof App) {
            return scope;
        }
        if (!scope.node.scope) {
            throw new Error("Cannot find root app");
        }
        return App.of(scope.node.scope);
    }
    /**
     * Creates a new object of the given FQN.
     * @param fqn the fqn of the class to instantiate
     * @param ctor the constructor of the class to instantiate (undefined for abstract classes)
     * @param scope the scope of the resource
     * @param id the id of the resource
     * @param args the arguments to pass to the resource
     * @returns the new instance
     * @throws if the FQN is not supported
     */
    new(fqn, ctor, scope, id, ...args) {
        // delegate to "tryNew" first, which will allow derived classes to inject
        const instance = this.tryNew(fqn, scope, id, ...args);
        if (instance) {
            return instance;
        }
        // no injection, so we'll just create a new instance
        return new ctor(scope, id, ...args);
    }
    /**
     * Creates a new object of the given abstract class FQN.
     */
    newAbstract(fqn, scope, id, ...args) {
        // delegate to "tryNew" first, which will allow derived classes to inject
        const instance = this.tryNew(fqn, scope, id, ...args);
        if (!instance) {
            throw new Error(`Unable to create an instance of abstract type \"${fqn}\" for this target`);
        }
        return instance;
    }
    /**
     * Can be overridden by derived classes to inject dependencies.
     *
     * @param fqn The fully qualified name of the class to instantiate (jsii).
     * @param scope The construct scope.
     * @param id The construct id.
     * @param args The arguments to pass to the constructor.
     */
    tryNew(fqn, scope, id, ...args) {
        fqn;
        scope;
        id;
        args;
        return undefined;
    }
}
exports.App = App;
function preSynthesizeAllConstructs(app) {
    for (const c of app.node.findAll()) {
        if (typeof c._preSynthesize === "function") {
            c._preSynthesize();
        }
    }
}
exports.preSynthesizeAllConstructs = preSynthesizeAllConstructs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvcmUvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF1QztBQWlDdkM7O0dBRUc7QUFDSCxNQUFzQixHQUFJLFNBQVEsc0JBQVM7SUFDekM7O09BRUc7SUFDSSxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQWdCO1FBQy9CLElBQUksS0FBSyxZQUFZLEdBQUcsRUFBRTtZQUN4QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUN6QztRQUVELE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFZRDs7Ozs7Ozs7O09BU0c7SUFDSSxHQUFHLENBQ1IsR0FBVyxFQUNYLElBQVMsRUFDVCxLQUFnQixFQUNoQixFQUFVLEVBQ1YsR0FBRyxJQUFXO1FBRWQseUVBQXlFO1FBQ3pFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLFFBQVEsRUFBRTtZQUNaLE9BQU8sUUFBUSxDQUFDO1NBQ2pCO1FBRUQsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7T0FFRztJQUNJLFdBQVcsQ0FDaEIsR0FBVyxFQUNYLEtBQWdCLEVBQ2hCLEVBQVUsRUFDVixHQUFHLElBQVc7UUFFZCx5RUFBeUU7UUFDekUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixNQUFNLElBQUksS0FBSyxDQUNiLG1EQUFtRCxHQUFHLG9CQUFvQixDQUMzRSxDQUFDO1NBQ0g7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNPLE1BQU0sQ0FDZCxHQUFXLEVBQ1gsS0FBZ0IsRUFDaEIsRUFBVSxFQUNWLEdBQUcsSUFBVztRQUVkLEdBQUcsQ0FBQztRQUNKLEtBQUssQ0FBQztRQUNOLEVBQUUsQ0FBQztRQUNILElBQUksQ0FBQztRQUNMLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQTdGRCxrQkE2RkM7QUFFRCxTQUFnQiwwQkFBMEIsQ0FBQyxHQUFRO0lBQ2pELEtBQUssTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNsQyxJQUFJLE9BQVEsQ0FBZSxDQUFDLGNBQWMsS0FBSyxVQUFVLEVBQUU7WUFDeEQsQ0FBZSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ25DO0tBQ0Y7QUFDSCxDQUFDO0FBTkQsZ0VBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgSVJlc291cmNlIH0gZnJvbSBcIi4uL2NvcmUvcmVzb3VyY2VcIjtcblxuLyoqXG4gKiBQcm9wcyBmb3IgYWxsIGBBcHBgIGNsYXNzZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXBwUHJvcHMge1xuICAvKipcbiAgICogRGlyZWN0b3J5IHdoZXJlIGFydGlmYWN0cyBhcmUgc3ludGhlc2l6ZWQgdG8uXG4gICAqIEBkZWZhdWx0IC0gY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeVxuICAgKi9cbiAgcmVhZG9ubHkgb3V0ZGlyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgYXBwLlxuICAgKiBAZGVmYXVsdCBcImFwcFwiXG4gICAqL1xuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcGF0aCB0byBhIHN0YXRlIGZpbGUgd2hpY2ggd2lsbCB0cmFjayBhbGwgc3ludGhlc2l6ZWQgZmlsZXMuIElmIGFcbiAgICogc3RhdGVmaWxlIGlzIG5vdCBzcGVjaWZpZWQsIHdlIHdvbid0IGJlIGFibGUgdG8gcmVtb3ZlIGV4dHJlbm91cyBmaWxlcy5cbiAgICogQGRlZmF1bHQgLSBubyBzdGF0ZSBmaWxlXG4gICAqL1xuICByZWFkb25seSBzdGF0ZUZpbGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFic29sdXRlIHBhdGhzIHRvIHBsdWdpbiBqYXZhc2NyaXB0IGZpbGVzLlxuICAgKiBAZGVmYXVsdCAtIFtdIG5vIHBsdWdpbnNcbiAgICovXG4gIHJlYWRvbmx5IHBsdWdpbnM/OiBzdHJpbmdbXTtcbn1cblxuLyoqXG4gKiBBIFdpbmcgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb25zdHJ1Y3Qge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgcm9vdCBhcHAuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG9mKHNjb3BlOiBDb25zdHJ1Y3QpOiBBcHAge1xuICAgIGlmIChzY29wZSBpbnN0YW5jZW9mIEFwcCkge1xuICAgICAgcmV0dXJuIHNjb3BlO1xuICAgIH1cblxuICAgIGlmICghc2NvcGUubm9kZS5zY29wZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgcm9vdCBhcHBcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIEFwcC5vZihzY29wZS5ub2RlLnNjb3BlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXJlY3Rvcnkgd2hlcmUgYXJ0aWZhY3RzIGFyZSBzeW50aGVzaXplZCB0by5cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCByZWFkb25seSBvdXRkaXI6IHN0cmluZztcblxuICAvKipcbiAgICogU3ludGhlc2l6ZSB0aGUgYXBwIGludG8gYW4gYXJ0aWZhY3QuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3Qgc3ludGgoKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IG9iamVjdCBvZiB0aGUgZ2l2ZW4gRlFOLlxuICAgKiBAcGFyYW0gZnFuIHRoZSBmcW4gb2YgdGhlIGNsYXNzIHRvIGluc3RhbnRpYXRlXG4gICAqIEBwYXJhbSBjdG9yIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgY2xhc3MgdG8gaW5zdGFudGlhdGUgKHVuZGVmaW5lZCBmb3IgYWJzdHJhY3QgY2xhc3NlcylcbiAgICogQHBhcmFtIHNjb3BlIHRoZSBzY29wZSBvZiB0aGUgcmVzb3VyY2VcbiAgICogQHBhcmFtIGlkIHRoZSBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICogQHBhcmFtIGFyZ3MgdGhlIGFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSByZXNvdXJjZVxuICAgKiBAcmV0dXJucyB0aGUgbmV3IGluc3RhbmNlXG4gICAqIEB0aHJvd3MgaWYgdGhlIEZRTiBpcyBub3Qgc3VwcG9ydGVkXG4gICAqL1xuICBwdWJsaWMgbmV3KFxuICAgIGZxbjogc3RyaW5nLFxuICAgIGN0b3I6IGFueSxcbiAgICBzY29wZTogQ29uc3RydWN0LFxuICAgIGlkOiBzdHJpbmcsXG4gICAgLi4uYXJnczogYW55W11cbiAgKTogYW55IHtcbiAgICAvLyBkZWxlZ2F0ZSB0byBcInRyeU5ld1wiIGZpcnN0LCB3aGljaCB3aWxsIGFsbG93IGRlcml2ZWQgY2xhc3NlcyB0byBpbmplY3RcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMudHJ5TmV3KGZxbiwgc2NvcGUsIGlkLCAuLi5hcmdzKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvLyBubyBpbmplY3Rpb24sIHNvIHdlJ2xsIGp1c3QgY3JlYXRlIGEgbmV3IGluc3RhbmNlXG4gICAgcmV0dXJuIG5ldyBjdG9yKHNjb3BlLCBpZCwgLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBvYmplY3Qgb2YgdGhlIGdpdmVuIGFic3RyYWN0IGNsYXNzIEZRTi5cbiAgICovXG4gIHB1YmxpYyBuZXdBYnN0cmFjdChcbiAgICBmcW46IHN0cmluZyxcbiAgICBzY29wZTogQ29uc3RydWN0LFxuICAgIGlkOiBzdHJpbmcsXG4gICAgLi4uYXJnczogYW55W11cbiAgKTogYW55IHtcbiAgICAvLyBkZWxlZ2F0ZSB0byBcInRyeU5ld1wiIGZpcnN0LCB3aGljaCB3aWxsIGFsbG93IGRlcml2ZWQgY2xhc3NlcyB0byBpbmplY3RcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMudHJ5TmV3KGZxbiwgc2NvcGUsIGlkLCAuLi5hcmdzKTtcbiAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBVbmFibGUgdG8gY3JlYXRlIGFuIGluc3RhbmNlIG9mIGFic3RyYWN0IHR5cGUgXFxcIiR7ZnFufVxcXCIgZm9yIHRoaXMgdGFyZ2V0YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2FuIGJlIG92ZXJyaWRkZW4gYnkgZGVyaXZlZCBjbGFzc2VzIHRvIGluamVjdCBkZXBlbmRlbmNpZXMuXG4gICAqXG4gICAqIEBwYXJhbSBmcW4gVGhlIGZ1bGx5IHF1YWxpZmllZCBuYW1lIG9mIHRoZSBjbGFzcyB0byBpbnN0YW50aWF0ZSAoanNpaSkuXG4gICAqIEBwYXJhbSBzY29wZSBUaGUgY29uc3RydWN0IHNjb3BlLlxuICAgKiBAcGFyYW0gaWQgVGhlIGNvbnN0cnVjdCBpZC5cbiAgICogQHBhcmFtIGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHByb3RlY3RlZCB0cnlOZXcoXG4gICAgZnFuOiBzdHJpbmcsXG4gICAgc2NvcGU6IENvbnN0cnVjdCxcbiAgICBpZDogc3RyaW5nLFxuICAgIC4uLmFyZ3M6IGFueVtdXG4gICk6IGFueSB7XG4gICAgZnFuO1xuICAgIHNjb3BlO1xuICAgIGlkO1xuICAgIGFyZ3M7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlU3ludGhlc2l6ZUFsbENvbnN0cnVjdHMoYXBwOiBBcHApOiB2b2lkIHtcbiAgZm9yIChjb25zdCBjIG9mIGFwcC5ub2RlLmZpbmRBbGwoKSkge1xuICAgIGlmICh0eXBlb2YgKGMgYXMgSVJlc291cmNlKS5fcHJlU3ludGhlc2l6ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAoYyBhcyBJUmVzb3VyY2UpLl9wcmVTeW50aGVzaXplKCk7XG4gICAgfVxuICB9XG59XG4iXX0=

/***/ }),

/***/ 6558:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WING_ATTRIBUTE_RESOURCE_CONNECTIONS = exports.WING_ATTRIBUTE_RESOURCE_STATEFUL = void 0;
exports.WING_ATTRIBUTE_RESOURCE_STATEFUL = "wing:resource:stateful";
exports.WING_ATTRIBUTE_RESOURCE_CONNECTIONS = "wing:resource:connections";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2F0dHJpYnV0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxnQ0FBZ0MsR0FBRyx3QkFBd0IsQ0FBQztBQUM1RCxRQUFBLG1DQUFtQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFdJTkdfQVRUUklCVVRFX1JFU09VUkNFX1NUQVRFRlVMID0gXCJ3aW5nOnJlc291cmNlOnN0YXRlZnVsXCI7XG5leHBvcnQgY29uc3QgV0lOR19BVFRSSUJVVEVfUkVTT1VSQ0VfQ09OTkVDVElPTlMgPSBcIndpbmc6cmVzb3VyY2U6Y29ubmVjdGlvbnNcIjtcbiJdfQ==

/***/ }),

/***/ 3117:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DependencyVertex = exports.DependencyGraph = void 0;
// This file is copied from
// https://github.com/cdk8s-team/cdk8s-core/blob/2.x/src/dependency.ts
const constructs_1 = __nccwpck_require__(6366);
/**
 * Represents the dependency graph for a given Node.
 *
 * This graph includes the dependency relationships between all nodes in the
 * node (construct) sub-tree who's root is this Node.
 *
 * Note that this means that lonely nodes (no dependencies and no dependants) are also included in this graph as
 * childless children of the root node of the graph.
 *
 * The graph does not include cross-scope dependencies. That is, if a child on the current scope depends on a node
 * from a different scope, that relationship is not represented in this graph.
 *
 */
class DependencyGraph {
    constructor(node) {
        this._fosterParent = new DependencyVertex();
        const nodes = {};
        function putVertex(construct) {
            nodes[constructs_1.Node.of(construct).path] = new DependencyVertex(construct);
        }
        function getVertex(construct) {
            return nodes[constructs_1.Node.of(construct).path];
        }
        // create all vertices of the graph.
        for (const n of node.findAll()) {
            putVertex(n);
        }
        const deps = [];
        for (const child of node.findAll()) {
            for (const dep of child.node.dependencies) {
                deps.push({ source: child, target: dep });
            }
        }
        // create all the edges of the graph.
        for (const dep of deps) {
            if (!getVertex(dep.target)) {
                // dont cross scope boundaries.
                // since charts only renders its own children, this is ok and
                // has the benefit of simplifying the graph. we should reconsider this behavior when moving
                // to a more general purpose use-case.
                continue;
            }
            const sourceDepNode = getVertex(dep.source);
            const targetDepNode = getVertex(dep.target);
            sourceDepNode.addChild(targetDepNode);
        }
        // create the root.
        for (const n of Object.values(nodes)) {
            if (n.inbound.length === 0) {
                // orphans are dependency roots. lets adopt them!
                this._fosterParent.addChild(n);
            }
        }
    }
    /**
     * Returns the root of the graph.
     *
     * Note that this vertex will always have `null` as its `.value` since it is an artifical root
     * that binds all the connected spaces of the graph.
     */
    get root() {
        return this._fosterParent;
    }
    /**
     * Returns a topologically sorted array of the constructs in the sub-graph.
     */
    topology() {
        return this._fosterParent.topology();
    }
}
exports.DependencyGraph = DependencyGraph;
/**
 * Represents a vertex in the graph.
 *
 * The value of each vertex is an `IConstruct` that is accessible via the `.value` getter.
 */
class DependencyVertex {
    constructor(value = undefined) {
        this._children = new Set();
        this._parents = new Set();
        this._value = value;
    }
    /**
     * Returns the IConstruct this graph vertex represents.
     *
     * `null` in case this is the root of the graph.
     */
    get value() {
        return this._value;
    }
    /**
     * Returns the children of the vertex (i.e dependencies)
     */
    get outbound() {
        return Array.from(this._children);
    }
    /**
     * Returns the parents of the vertex (i.e dependants)
     */
    get inbound() {
        return Array.from(this._parents);
    }
    /**
     * Returns a topologically sorted array of the constructs in the sub-graph.
     */
    topology() {
        const found = new Set();
        const topology = [];
        function visit(n) {
            for (const c of n.outbound) {
                visit(c);
            }
            if (!found.has(n)) {
                topology.push(n);
                found.add(n);
            }
        }
        visit(this);
        return topology.filter((d) => d.value).map((d) => d.value);
    }
    /**
     * Adds a vertex as a dependency of the current node.
     * Also updates the parents of `dep`, so that it contains this node as a parent.
     *
     * This operation will fail in case it creates a cycle in the graph.
     *
     * @param dep The dependency
     */
    addChild(dep) {
        const cycle = dep.findRoute(this);
        if (cycle.length !== 0) {
            cycle.push(dep);
            throw new Error(`Dependency cycle detected: ${cycle
                .filter((d) => d.value)
                .map((d) => constructs_1.Node.of(d.value).path)
                .join(" => ")}`);
        }
        this._children.add(dep);
        dep.addParent(this);
    }
    addParent(dep) {
        this._parents.add(dep);
    }
    findRoute(dst) {
        const route = [];
        visit(this);
        return route;
        function visit(n) {
            route.push(n);
            let found = false;
            for (const c of n.outbound) {
                if (c === dst) {
                    route.push(c);
                    return true;
                }
                found = visit(c);
            }
            if (!found) {
                route.pop();
            }
            return found;
        }
    }
}
exports.DependencyVertex = DependencyVertex;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2RlcGVuZGVuY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkJBQTJCO0FBQzNCLHNFQUFzRTtBQUN0RSwyQ0FBOEM7QUFFOUM7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsTUFBYSxlQUFlO0lBRzFCLFlBQVksSUFBVTtRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUU1QyxNQUFNLEtBQUssR0FBcUMsRUFBRSxDQUFDO1FBRW5ELFNBQVMsU0FBUyxDQUFDLFNBQXFCO1lBQ3RDLEtBQUssQ0FBQyxpQkFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25FLENBQUM7UUFFRCxTQUFTLFNBQVMsQ0FBQyxTQUFxQjtZQUN0QyxPQUFPLEtBQUssQ0FBQyxpQkFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsb0NBQW9DO1FBQ3BDLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzlCLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNkO1FBRUQsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2xDLEtBQUssTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2FBQzNDO1NBQ0Y7UUFFRCxxQ0FBcUM7UUFDckMsS0FBSyxNQUFNLEdBQUcs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Q0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0lBQ0gsQ0FBQztDQUNGO0FBekdELDRDQXlHQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBjb3BpZWQgZnJvbVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2NkazhzLXRlYW0vY2RrOHMtY29yZS9ibG9iLzIueC9zcmMvZGVwZW5kZW5jeS50c1xuaW1wb3J0IHsgTm9kZSwgSUNvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgZGVwZW5kZW5jeSBncmFwaCBmb3IgYSBnaXZlbiBOb2RlLlxuICpcbiAqIFRoaXMgZ3JhcGggaW5jbHVkZXMgdGhlIGRlcGVuZGVuY3kgcmVsYXRpb25zaGlwcyBiZXR3ZWVuIGFsbCBub2RlcyBpbiB0aGVcbiAqIG5vZGUgKGNvbnN0cnVjdCkgc3ViLXRyZWUgd2hvJ3Mgcm9vdCBpcyB0aGlzIE5vZGUuXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgbWVhbnMgdGhhdCBsb25lbHkgbm9kZXMgKG5vIGRlcGVuZGVuY2llcyBhbmQgbm8gZGVwZW5kYW50cykgYXJlIGFsc28gaW5jbHVkZWQgaW4gdGhpcyBncmFwaCBhc1xuICogY2hpbGRsZXNzIGNoaWxkcmVuIG9mIHRoZSByb290IG5vZGUgb2YgdGhlIGdyYXBoLlxuICpcbiAqIFRoZSBncmFwaCBkb2VzIG5vdCBpbmNsdWRlIGNyb3NzLXNjb3BlIGRlcGVuZGVuY2llcy4gVGhhdCBpcywgaWYgYSBjaGlsZCBvbiB0aGUgY3VycmVudCBzY29wZSBkZXBlbmRzIG9uIGEgbm9kZVxuICogZnJvbSBhIGRpZmZlcmVudCBzY29wZSwgdGhhdCByZWxhdGlvbnNoaXAgaXMgbm90IHJlcHJlc2VudGVkIGluIHRoaXMgZ3JhcGguXG4gKlxuICovXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeUdyYXBoIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9zdGVyUGFyZW50OiBEZXBlbmRlbmN5VmVydGV4O1xuXG4gIGNvbnN0cnVjdG9yKG5vZGU6IE5vZGUpIHtcbiAgICB0aGlzLl9mb3N0ZXJQYXJlbnQgPSBuZXcgRGVwZW5kZW5jeVZlcnRleCgpO1xuXG4gICAgY29uc3Qgbm9kZXM6IFJlY29yZDxzdHJpbmcsIERlcGVuZGVuY3lWZXJ0ZXg+ID0ge307XG5cbiAgICBmdW5jdGlvbiBwdXRWZXJ0ZXgoY29uc3RydWN0OiBJQ29uc3RydWN0KSB7XG4gICAgICBub2Rlc1tOb2RlLm9mKGNvbnN0cnVjdCkucGF0aF0gPSBuZXcgRGVwZW5kZW5jeVZlcnRleChjb25zdHJ1Y3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZlcnRleChjb25zdHJ1Y3Q6IElDb25zdHJ1Y3QpOiBEZXBlbmRlbmN5VmVydGV4IHtcbiAgICAgIHJldHVybiBub2Rlc1tOb2RlLm9mKGNvbnN0cnVjdCkucGF0aF07XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIGFsbCB2ZXJ0aWNlcyBvZiB0aGUgZ3JhcGguXG4gICAgZm9yIChjb25zdCBuIG9mIG5vZGUuZmluZEFsbCgpKSB7XG4gICAgICBwdXRWZXJ0ZXgobik7XG4gICAgfVxuXG4gICAgY29uc3QgZGVwcyA9IFtdO1xuICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5maW5kQWxsKCkpIHtcbiAgICAgIGZvciAoY29uc3QgZGVwIG9mIGNoaWxkLm5vZGUuZGVwZW5kZW5jaWVzKSB7XG4gICAgICAgIGRlcHMucHVzaCh7IHNvdXJjZTogY2hpbGQsIHRhcmdldDogZGVwIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBhbGwgdGhlIGVkZ2VzIG9mIHRoZSBncmFwaC5cbiAgICBmb3IgKGNvbnN0IGRlcCBvZiBkZXBzKSB7XG4gICAgICBpZiAoIWdldFZlcnRleChkZXAudGFyZ2V0KSkge1xuICAgICAgICAvLyBkb250IGNyb3NzIHNjb3BlIGJvdW5kYXJpZXMuXG4gICAgICAgIC8vIHNpbmNlIGNoYXJ0cyBvbmx5IHJlbmRlcnMgaXRzIG93biBjaGlsZHJlbiwgdGhpcyBpcyBvayBhbmRcbiAgICAgICAgLy8gaGFzIHRoZSBiZW5lZml0IG9mIHNpbXBsaWZ5aW5nIHRoZSBncmFwaC4gd2Ugc2hvdWxkIHJlY29uc2lkZXIgdGhpcyBiZWhhdmlvciB3aGVuIG1vdmluZ1xuICAgICAgICAvLyB0byBhIG1vcmUgZ2VuZXJhbCBwdXJwb3NlIHVzZS1jYXNlLlxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc291cmNlRGVwTm9kZSA9IGdldFZlcnRleChkZXAuc291cmNlKTtcbiAgICAgIGNvbnN0IHRhcmdldERlcE5vZGUgPSBnZXRWZXJ0ZXgoZGVwLnRhcmdldCk7XG5cbiAgICAgIHNvdXJjZURlcE5vZGUuYWRkQ2hpbGQodGFyZ2V0RGVwTm9kZSk7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIHRoZSByb290LlxuICAgIGZvciAoY29uc3QgbiBvZiBPYmplY3QudmFsdWVzKG5vZGVzKSkge1xuICAgICAgaWYgKG4uaW5ib3VuZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gb3JwaGFucyBhcmUgZGVwZW5kZW5jeSByb290cy4gbGV0cyBhZG9wdCB0aGVtIVxuICAgICAgICB0aGlzLl9mb3N0ZXJQYXJlbnQuYWRkQ2hpbGQobik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJvb3Qgb2YgdGhlIGdyYXBoLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhpcyB2ZXJ0ZXggd2lsbCBhbHdheXMgaGF2ZSBgbnVsbGAgYXMgaXRzIGAudmFsdWVgIHNpbmNlIGl0IGlzIGFuIGFydGlmaWNhbCByb290XG4gICAqIHRoYXQgYmluZHMgYWxsIHRoZSBjb25uZWN0ZWQgc3BhY2VzIG9mIHRoZSBncmFwaC5cbiAgICovXG4gIHB1YmxpYyBnZXQgcm9vdCgpOiBEZXBlbmRlbmN5VmVydGV4IHtcbiAgICByZXR1cm4gdGhpcy5fZm9zdGVyUGFyZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB0b3BvbG9naWNhbGx5IHNvcnRlZCBhcnJheSBvZiB0aGUgY29uc3RydWN0cyBpbiB0aGUgc3ViLWdyYXBoLlxuICAgKi9cbiAgcHVibGljIHRvcG9sb2d5KCk6IElDb25zdHJ1Y3RbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvc3RlclBhcmVudC50b3BvbG9neSgpO1xuICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHZlcnRleCBpbiB0aGUgZ3JhcGguXG4gKlxuICogVGhlIHZhbHVlIG9mIGVhY2ggdmVydGV4IGlzIGFuIGBJQ29uc3RydWN0YCB0aGF0IGlzIGFjY2Vzc2libGUgdmlhIHRoZSBgLnZhbHVlYCBnZXR0ZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5VmVydGV4IHtcbiAgcHJpdmF0ZSByZWFkb25seSBfdmFsdWU6IElDb25zdHJ1Y3QgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NoaWxkcmVuOiBTZXQ8RGVwZW5kZW5jeVZlcnRleD4gPVxuICAgIG5ldyBTZXQ8RGVwZW5kZW5jeVZlcnRleD4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfcGFyZW50czogU2V0PERlcGVuZGVuY3lWZXJ0ZXg+ID1cbiAgICBuZXcgU2V0PERlcGVuZGVuY3lWZXJ0ZXg+KCk7XG5cbiAgY29uc3RydWN0b3IodmFsdWU6IElDb25zdHJ1Y3QgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElDb25zdHJ1Y3QgdGhpcyBncmFwaCB2ZXJ0ZXggcmVwcmVzZW50cy5cbiAgICpcbiAgICogYG51bGxgIGluIGNhc2UgdGhpcyBpcyB0aGUgcm9vdCBvZiB0aGUgZ3JhcGguXG4gICAqL1xuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IElDb25zdHJ1Y3QgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjaGlsZHJlbiBvZiB0aGUgdmVydGV4IChpLmUgZGVwZW5kZW5jaWVzKVxuICAgKi9cbiAgcHVibGljIGdldCBvdXRib3VuZCgpOiBBcnJheTxEZXBlbmRlbmN5VmVydGV4PiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5fY2hpbGRyZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBhcmVudHMgb2YgdGhlIHZlcnRleCAoaS5lIGRlcGVuZGFudHMpXG4gICAqL1xuICBwdWJsaWMgZ2V0IGluYm91bmQoKTogQXJyYXk8RGVwZW5kZW5jeVZlcnRleD4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX3BhcmVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB0b3BvbG9naWNhbGx5IHNvcnRlZCBhcnJheSBvZiB0aGUgY29uc3RydWN0cyBpbiB0aGUgc3ViLWdyYXBoLlxuICAgKi9cbiAgcHVibGljIHRvcG9sb2d5KCk6IElDb25zdHJ1Y3RbXSB7XG4gICAgY29uc3QgZm91bmQgPSBuZXcgU2V0PERlcGVuZGVuY3lWZXJ0ZXg+KCk7XG4gICAgY29uc3QgdG9wb2xvZ3k6IERlcGVuZGVuY3lWZXJ0ZXhbXSA9IFtdO1xuXG4gICAgZnVuY3Rpb24gdmlzaXQobjogRGVwZW5kZW5jeVZlcnRleCkge1xuICAgICAgZm9yIChjb25zdCBjIG9mIG4ub3V0Ym91bmQpIHtcbiAgICAgICAgdmlzaXQoYyk7XG4gICAgICB9XG4gICAgICBpZiAoIWZvdW5kLmhhcyhuKSkge1xuICAgICAgICB0b3BvbG9neS5wdXNoKG4pO1xuICAgICAgICBmb3VuZC5hZGQobik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmlzaXQodGhpcyk7XG5cbiAgICByZXR1cm4gdG9wb2xvZ3kuZmlsdGVyKChkKSA9PiBkLnZhbHVlKS5tYXAoKGQpID0+IGQudmFsdWUhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgdmVydGV4IGFzIGEgZGVwZW5kZW5jeSBvZiB0aGUgY3VycmVudCBub2RlLlxuICAgKiBBbHNvIHVwZGF0ZXMgdGhlIHBhcmVudHMgb2YgYGRlcGAsIHNvIHRoYXQgaXQgY29udGFpbnMgdGhpcyBub2RlIGFzIGEgcGFyZW50LlxuICAgKlxuICAgKiBUaGlzIG9wZXJhdGlvbiB3aWxsIGZhaWwgaW4gY2FzZSBpdCBjcmVhdGVzIGEgY3ljbGUgaW4gdGhlIGdyYXBoLlxuICAgKlxuICAgKiBAcGFyYW0gZGVwIFRoZSBkZXBlbmRlbmN5XG4gICAqL1xuICBwdWJsaWMgYWRkQ2hpbGQoZGVwOiBEZXBlbmRlbmN5VmVydGV4KSB7XG4gICAgY29uc3QgY3ljbGU6IERlcGVuZGVuY3lWZXJ0ZXhbXSA9IGRlcC5maW5kUm91dGUodGhpcyk7XG4gICAgaWYgKGN5Y2xlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY3ljbGUucHVzaChkZXApO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRGVwZW5kZW5jeSBjeWNsZSBkZXRlY3RlZDogJHtjeWNsZVxuICAgICAgICAgIC5maWx0ZXIoKGQpID0+IGQudmFsdWUpXG4gICAgICAgICAgLm1hcCgoZCkgPT4gTm9kZS5vZihkLnZhbHVlISkucGF0aClcbiAgICAgICAgICAuam9pbihcIiA9PiBcIil9YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jaGlsZHJlbi5hZGQoZGVwKTtcbiAgICBkZXAuYWRkUGFyZW50KHRoaXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRQYXJlbnQoZGVwOiBEZXBlbmRlbmN5VmVydGV4KSB7XG4gICAgdGhpcy5fcGFyZW50cy5hZGQoZGVwKTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZFJvdXRlKGRzdDogRGVwZW5kZW5jeVZlcnRleCk6IERlcGVuZGVuY3lWZXJ0ZXhbXSB7XG4gICAgY29uc3Qgcm91dGU6IERlcGVuZGVuY3lWZXJ0ZXhbXSA9IFtdO1xuICAgIHZpc2l0KHRoaXMpO1xuICAgIHJldHVybiByb3V0ZTtcblxuICAgIGZ1bmN0aW9uIHZpc2l0KG46IERlcGVuZGVuY3lWZXJ0ZXgpOiBib29sZWFuIHtcbiAgICAgIHJvdXRlLnB1c2gobik7XG4gICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgIGZvciAoY29uc3QgYyBvZiBuLm91dGJvdW5kKSB7XG4gICAgICAgIGlmIChjID09PSBkc3QpIHtcbiAgICAgICAgICByb3V0ZS5wdXNoKGMpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvdW5kID0gdmlzaXQoYyk7XG4gICAgICB9XG4gICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgIHJvdXRlLnBvcCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cbiAgfVxufVxuIl19

/***/ }),

/***/ 4218:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileBase = void 0;
const fs_1 = __nccwpck_require__(7147);
const path_1 = __nccwpck_require__(1017);
const constructs_1 = __nccwpck_require__(6366);
/**
 * Represents a file to be synthesized in the app's output directory.
 */
class FileBase extends constructs_1.Construct {
    /**
     * Defines a file
     * @param scope construct scope
     * @param id construct id
     * @param filePath relative file path
     * @param props initialization props
     */
    constructor(scope, id, filePath) {
        super(scope, id);
        this.filePath = filePath;
    }
    /**
     * Render the contents of the file and save it to the user's file system.
     */
    save(outdir) {
        const data = this.render();
        const outpath = (0, path_1.join)(outdir, this.filePath);
        (0, fs_1.mkdirSync)((0, path_1.dirname)(outpath), { recursive: true });
        (0, fs_1.writeFileSync)(outpath, data);
    }
}
exports.FileBase = FileBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1iYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvcmUvZmlsZS1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJCQUE4QztBQUM5QywrQkFBcUM7QUFDckMsMkNBQXVDO0FBRXZDOztHQUVHO0FBQ0gsTUFBc0IsUUFBUyxTQUFRLHNCQUFTO0lBTTlDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsUUFBZ0I7UUFDeEQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxJQUFJLENBQUMsTUFBYztRQUN4QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsTUFBTSxPQUFPLEdBQUcsSUFBQSxXQUFJLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFBLGNBQVMsRUFBQyxJQUFBLGNBQU8sRUFBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELElBQUEsa0JBQWEsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQU1GO0FBaENELDRCQWdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1rZGlyU3luYywgd3JpdGVGaWxlU3luYyB9IGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgZGlybmFtZSwgam9pbiB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBmaWxlIHRvIGJlIHN5bnRoZXNpemVkIGluIHRoZSBhcHAncyBvdXRwdXQgZGlyZWN0b3J5LlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmlsZUJhc2UgZXh0ZW5kcyBDb25zdHJ1Y3Qge1xuICAvKipcbiAgICogVGhlIGZpbGUncyByZWxhdGl2ZSBwYXRoIHRvIHRoZSBvdXRwdXQgZGlyZWN0b3J5LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGZpbGVQYXRoOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgYSBmaWxlXG4gICAqIEBwYXJhbSBzY29wZSBjb25zdHJ1Y3Qgc2NvcGVcbiAgICogQHBhcmFtIGlkIGNvbnN0cnVjdCBpZFxuICAgKiBAcGFyYW0gZmlsZVBhdGggcmVsYXRpdmUgZmlsZSBwYXRoXG4gICAqIEBwYXJhbSBwcm9wcyBpbml0aWFsaXphdGlvbiBwcm9wc1xuICAgKi9cbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgZmlsZVBhdGg6IHN0cmluZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUgYW5kIHNhdmUgaXQgdG8gdGhlIHVzZXIncyBmaWxlIHN5c3RlbS5cbiAgICovXG4gIHB1YmxpYyBzYXZlKG91dGRpcjogc3RyaW5nKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVuZGVyKCk7XG4gICAgY29uc3Qgb3V0cGF0aCA9IGpvaW4ob3V0ZGlyLCB0aGlzLmZpbGVQYXRoKTtcbiAgICBta2RpclN5bmMoZGlybmFtZShvdXRwYXRoKSwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgd3JpdGVGaWxlU3luYyhvdXRwYXRoLCBkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSB0byBzYXZlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHJlbmRlcigpOiBzdHJpbmc7XG59XG4iXX0=

/***/ }),

/***/ 9869:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Files = void 0;
const fs_1 = __nccwpck_require__(7147);
const path_1 = __nccwpck_require__(1017);
const file_base_1 = __nccwpck_require__(4218);
/**
 * Handles the synthesis of files.
 */
class Files {
    constructor(props) {
        this.app = props.app;
        if (props.stateFile) {
            this.stateFile = (0, path_1.isAbsolute)(props.stateFile)
                ? props.stateFile
                : (0, path_1.join)(this.app.outdir, props.stateFile);
        }
    }
    /**
     * Synthesize the app into the output directory. The artifact produced
     * depends on what synthesizer was used.
     *
     * @param outdir The output directory, if not specified, the app's outdir will be used.
     */
    synth(outdir) {
        const oldFiles = this.readStateFile();
        const newFiles = new Set();
        const isFile = (c) => c instanceof file_base_1.FileBase;
        if (!outdir) {
            outdir = this.app.outdir;
        }
        for (const child of this.app.node.findAll().filter(isFile)) {
            const filePath = child.filePath;
            child.save(outdir);
            oldFiles.delete(filePath);
            newFiles.add(filePath);
        }
        this.saveStateFile(newFiles);
        for (const filePath of oldFiles) {
            (0, fs_1.rmSync)((0, path_1.join)(outdir, filePath));
        }
    }
    /**
     * If a state file is defined, reads it and returns the list of files that
     * this app manages.
     */
    readStateFile() {
        if (!this.stateFile) {
            return new Set();
        }
        if (!(0, fs_1.existsSync)(this.stateFile)) {
            return new Set();
        }
        const files = (0, fs_1.readFileSync)(this.stateFile, "utf-8").split("\n");
        return new Set(files);
    }
    /**
     * If a state file is defined, stores the list of files under management in that file.
     * @param files List of file paths (relative)
     */
    saveStateFile(files) {
        if (!this.stateFile) {
            return;
        }
        if (files.size === 0) {
            if ((0, fs_1.existsSync)(this.stateFile)) {
                (0, fs_1.unlinkSync)(this.stateFile);
            }
            return;
        }
        (0, fs_1.writeFileSync)(this.stateFile, Array.from(files).join("\n"));
    }
}
exports.Files = Files;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29yZS9maWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQkFNWTtBQUNaLCtCQUF3QztBQUd4QywyQ0FBdUM7QUFtQnZDOztHQUVHO0FBQ0gsTUFBYSxLQUFLO0lBTWhCLFlBQVksS0FBaUI7UUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3JCLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUEsaUJBQVUsRUFBQyxLQUFLLENBQUMsU0FBUyxDQUFDO2dCQUMxQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVM7Z0JBQ2pCLENBQUMsQ0FBQyxJQUFBLFdBQUksRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsTUFBZTtRQUMxQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQUNuQyxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQWEsRUFBaUIsRUFBRSxDQUFDLENBQUMsWUFBWSxvQkFBUSxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDMUI7UUFFRCxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxRCxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFbkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQixRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU3QixLQUFLLE1BQU0sUUFBUSxJQUFJLFFBQVEsRUFBRTtZQUMvQixJQUFBLFdBQU0sRUFBQyxJQUFBLFdBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSyxhQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLE9BQU8sSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUNsQjtRQUVELElBQUksQ0FBQyxJQUFBLGVBQVUsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsTUFBTSxLQUFLLEdBQUcsSUFBQSxpQkFBWSxFQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGFBQWEsQ0FBQyxLQUFrQjtRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFDRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLElBQUksSUFBQSxlQUFVLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUM5QixJQUFBLGVBQVUsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDNUI7WUFDRCxPQUFPO1NBQ1I7UUFDRCxJQUFBLGtCQUFhLEVBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDRjtBQTVFRCxzQkE0RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBleGlzdHNTeW5jLFxuICByZWFkRmlsZVN5bmMsXG4gIHJtU3luYyxcbiAgdW5saW5rU3luYyxcbiAgd3JpdGVGaWxlU3luYyxcbn0gZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBpc0Fic29sdXRlLCBqb2luIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IElDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgeyBGaWxlQmFzZSB9IGZyb20gXCIuL2ZpbGUtYmFzZVwiO1xuXG4vKipcbiAqIFByb3BzIGZvciBgRmlsZXNgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVzUHJvcHMge1xuICAvKipcbiAgICogVGhlIGFwcCB3aXRoIGZpbGVzIHRvIHN5bnRoZXNpemUuXG4gICAqL1xuICByZWFkb25seSBhcHA6IEFwcDtcblxuICAvKipcbiAgICogVGhlIHBhdGggdG8gYSBzdGF0ZSBmaWxlIHdoaWNoIHdpbGwgdHJhY2sgYWxsIHN5bnRoZXNpemVkIGZpbGVzLiBJZiBhXG4gICAqIHN0YXRlZmlsZSBpcyBub3Qgc3BlY2lmaWVkLCB3ZSB3b24ndCBiZSBhYmxlIHRvIHJlbW92ZSBleHRyZW5vdXMgZmlsZXMuXG4gICAqIEBkZWZhdWx0IC0gbm8gc3RhdGUgZmlsZVxuICAgKi9cbiAgcmVhZG9ubHkgc3RhdGVGaWxlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEhhbmRsZXMgdGhlIHN5bnRoZXNpcyBvZiBmaWxlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEZpbGVzIHtcbiAgLyoqXG4gICAqIFRoZSBwYXRoIHRvIGEgc3RhdGUgZmlsZSB3aGljaCB3aWxsIHRyYWNrIGFsbCBzeW50aGVzaXplZCBmaWxlcy5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBzdGF0ZUZpbGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgYXBwOiBBcHA7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBGaWxlc1Byb3BzKSB7XG4gICAgdGhpcy5hcHAgPSBwcm9wcy5hcHA7XG4gICAgaWYgKHByb3BzLnN0YXRlRmlsZSkge1xuICAgICAgdGhpcy5zdGF0ZUZpbGUgPSBpc0Fic29sdXRlKHByb3BzLnN0YXRlRmlsZSlcbiAgICAgICAgPyBwcm9wcy5zdGF0ZUZpbGVcbiAgICAgICAgOiBqb2luKHRoaXMuYXBwLm91dGRpciwgcHJvcHMuc3RhdGVGaWxlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3ludGhlc2l6ZSB0aGUgYXBwIGludG8gdGhlIG91dHB1dCBkaXJlY3RvcnkuIFRoZSBhcnRpZmFjdCBwcm9kdWNlZFxuICAgKiBkZXBlbmRzIG9uIHdoYXQgc3ludGhlc2l6ZXIgd2FzIHVzZWQuXG4gICAqXG4gICAqIEBwYXJhbSBvdXRkaXIgVGhlIG91dHB1dCBkaXJlY3RvcnksIGlmIG5vdCBzcGVjaWZpZWQsIHRoZSBhcHAncyBvdXRkaXIgd2lsbCBiZSB1c2VkLlxuICAgKi9cbiAgcHVibGljIHN5bnRoKG91dGRpcj86IHN0cmluZykge1xuICAgIGNvbnN0IG9sZEZpbGVzID0gdGhpcy5yZWFkU3RhdGVGaWxlKCk7XG4gICAgY29uc3QgbmV3RmlsZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBjb25zdCBpc0ZpbGUgPSAoYzogSUNvbnN0cnVjdCk6IGMgaXMgRmlsZUJhc2UgPT4gYyBpbnN0YW5jZW9mIEZpbGVCYXNlO1xuICAgIGlmICghb3V0ZGlyKSB7XG4gICAgICBvdXRkaXIgPSB0aGlzLmFwcC5vdXRkaXI7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmFwcC5ub2RlLmZpbmRBbGwoKS5maWx0ZXIoaXNGaWxlKSkge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBjaGlsZC5maWxlUGF0aDtcbiAgICAgIGNoaWxkLnNhdmUob3V0ZGlyKTtcblxuICAgICAgb2xkRmlsZXMuZGVsZXRlKGZpbGVQYXRoKTtcbiAgICAgIG5ld0ZpbGVzLmFkZChmaWxlUGF0aCk7XG4gICAgfVxuXG4gICAgdGhpcy5zYXZlU3RhdGVGaWxlKG5ld0ZpbGVzKTtcblxuICAgIGZvciAoY29uc3QgZmlsZVBhdGggb2Ygb2xkRmlsZXMpIHtcbiAgICAgIHJtU3luYyhqb2luKG91dGRpciwgZmlsZVBhdGgpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSWYgYSBzdGF0ZSBmaWxlIGlzIGRlZmluZWQsIHJlYWRzIGl0IGFuZCByZXR1cm5zIHRoZSBsaXN0IG9mIGZpbGVzIHRoYXRcbiAgICogdGhpcyBhcHAgbWFuYWdlcy5cbiAgICovXG4gIHByaXZhdGUgcmVhZFN0YXRlRmlsZSgpOiBTZXQ8c3RyaW5nPiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlRmlsZSkge1xuICAgICAgcmV0dXJuIG5ldyBTZXQoKTtcbiAgICB9XG5cbiAgICBpZiAoIWV4aXN0c1N5bmModGhpcy5zdGF0ZUZpbGUpKSB7XG4gICAgICByZXR1cm4gbmV3IFNldCgpO1xuICAgIH1cbiAgICBjb25zdCBmaWxlcyA9IHJlYWRGaWxlU3luYyh0aGlzLnN0YXRlRmlsZSwgXCJ1dGYtOFwiKS5zcGxpdChcIlxcblwiKTtcbiAgICByZXR1cm4gbmV3IFNldChmaWxlcyk7XG4gIH1cblxuICAvKipcbiAgICogSWYgYSBzdGF0ZSBmaWxlIGlzIGRlZmluZWQsIHN0b3JlcyB0aGUgbGlzdCBvZiBmaWxlcyB1bmRlciBtYW5hZ2VtZW50IGluIHRoYXQgZmlsZS5cbiAgICogQHBhcmFtIGZpbGVzIExpc3Qgb2YgZmlsZSBwYXRocyAocmVsYXRpdmUpXG4gICAqL1xuICBwcml2YXRlIHNhdmVTdGF0ZUZpbGUoZmlsZXM6IFNldDxzdHJpbmc+KSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlRmlsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZmlsZXMuc2l6ZSA9PT0gMCkge1xuICAgICAgaWYgKGV4aXN0c1N5bmModGhpcy5zdGF0ZUZpbGUpKSB7XG4gICAgICAgIHVubGlua1N5bmModGhpcy5zdGF0ZUZpbGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3cml0ZUZpbGVTeW5jKHRoaXMuc3RhdGVGaWxlLCBBcnJheS5mcm9tKGZpbGVzKS5qb2luKFwiXFxuXCIpKTtcbiAgfVxufVxuIl19

/***/ }),

/***/ 6526:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(4919), exports);
__exportStar(__nccwpck_require__(6558), exports);
__exportStar(__nccwpck_require__(3117), exports);
__exportStar(__nccwpck_require__(4218), exports);
__exportStar(__nccwpck_require__(9869), exports);
__exportStar(__nccwpck_require__(4822), exports);
__exportStar(__nccwpck_require__(3468), exports);
__exportStar(__nccwpck_require__(9162), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29yZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXNCO0FBQ3RCLCtDQUE2QjtBQUM3QiwrQ0FBNkI7QUFDN0IsOENBQTRCO0FBQzVCLDBDQUF3QjtBQUN4Qiw2Q0FBMkI7QUFDM0IsNkNBQTJCO0FBQzNCLHlDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2FwcFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vYXR0cmlidXRlc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vZGVwZW5kZW5jeVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vZmlsZS1iYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9maWxlc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vaW5mbGlnaHRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Jlc291cmNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90cmVlXCI7XG4iXX0=

/***/ }),

/***/ 4822:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InflightClient = exports.Inflight = exports.NodeJsCode = exports.Language = exports.Code = void 0;
const crypto_1 = __nccwpck_require__(6113);
const fs_1 = __nccwpck_require__(7147);
const os_1 = __nccwpck_require__(2037);
const path_1 = __nccwpck_require__(1017);
const constructs_1 = __nccwpck_require__(6366);
const internal_1 = __nccwpck_require__(1521);
const resource_1 = __nccwpck_require__(3468);
const util_1 = __nccwpck_require__(5353);
/**
 * Reference to a piece of code.
 */
class Code {
    /**
     * The code contents.
     */
    get text() {
        return (0, fs_1.readFileSync)(this.path, "utf-8");
    }
    /**
     * Generate a hash of the code contents.
     */
    get hash() {
        return (0, crypto_1.createHash)("sha512").update(this.text).digest("hex");
    }
}
exports.Code = Code;
/**
 * The language of a piece of code.
 */
var Language;
(function (Language) {
    /** Node.js */
    Language["NODE_JS"] = "nodejs";
})(Language = exports.Language || (exports.Language = {}));
/**
 * Reference to a piece of Node.js code.
 */
class NodeJsCode extends Code {
    /**
     * Reference code from a file path.
     */
    static fromFile(path) {
        return new NodeJsCode(path);
    }
    /**
     * Reference code directly from a string.
     */
    static fromInline(text) {
        // TODO: can we use a relative path here?
        // TODO: can we avoid writing to file until actually necessary?
        // TODO: can we share the temp dir between Code objects?
        const tempdir = (0, fs_1.mkdtempSync)((0, path_1.join)((0, os_1.tmpdir)(), "wingsdk."));
        const file = (0, path_1.join)(tempdir, "index.js");
        (0, fs_1.writeFileSync)(file, text);
        return new NodeJsCode(file);
    }
    constructor(path) {
        super();
        this.language = Language.NODE_JS;
        this.path = path;
    }
}
exports.NodeJsCode = NodeJsCode;
/**
 * Represents a unit of application code that can be executed by a cloud
 * resource. In practice, it's a resource with one inflight method named
 * "handle".
 */
class Inflight extends constructs_1.Construct {
    constructor(scope, id, props) {
        super(null, ""); // thrown away
        /** @internal */
        this._connections = []; // thrown away
        /**
         * Information on how to display a resource in the UI.
         */
        this.display = new resource_1.Display();
        this.display.hidden = true;
        this.display.title = "Inflight";
        this.display.description = "An inflight resource";
        if (props.code.language !== Language.NODE_JS) {
            throw new Error("Only Node.js code is supported");
        }
        return (0, internal_1.makeHandler)(scope, id, props.code.text, props.bindings, {
            hidden: this.display.hidden,
            title: this.display.title,
            description: this.display.description,
        });
    }
    /** @internal */
    _bind(_host, _ops) {
        throw new Error("Method not implemented.");
    }
    /** @internal */
    _registerBind(_host, _ops) {
        throw new Error("Method not implemented.");
    }
    /** @internal */
    _toInflight() {
        throw new Error("Method not implemented.");
    }
    /** @internal */
    _preSynthesize() {
        throw new Error("Method not implemented.");
    }
    /** @internal */
    _inspect(_inspector) {
        throw new Error("Method not implemented.");
    }
}
exports.Inflight = Inflight;
/**
 * Utility class with functions about inflight clients.
 */
class InflightClient {
    /**
     * Creates a `Code` instance with code for creating an inflight client.
     */
    static for(dirname, filename, clientClass, args) {
        const inflightDir = dirname;
        const inflightFile = (0, path_1.basename)(filename).split(".")[0] + ".inflight";
        return NodeJsCode.fromInline(`new (require("${(0, util_1.normalPath)(`${inflightDir}/${inflightFile}`)}")).${clientClass}(${args.join(", ")})`);
    }
    constructor() { }
}
exports.InflightClient = InflightClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mbGlnaHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29yZS9pbmZsaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBb0M7QUFDcEMsMkJBQThEO0FBQzlELDJCQUE0QjtBQUM1QiwrQkFBc0M7QUFDdEMsMkNBQXVDO0FBQ3ZDLHlDQUF5QztBQUN6Qyx5Q0FBMkU7QUFFM0Usa0NBQXFDO0FBRXJDOztHQUVHO0FBQ0gsTUFBc0IsSUFBSTtJQVl4Qjs7T0FFRztJQUNILElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBQSxpQkFBWSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFBLG1CQUFVLEVBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUNGO0FBekJELG9CQXlCQztBQUVEOztHQUVHO0FBQ0gsSUFBWSxRQUdYO0FBSEQsV0FBWSxRQUFRO0lBQ2xCLGNBQWM7SUFDZCw4QkFBa0IsQ0FBQTtBQUNwQixDQUFDLEVBSFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFHbkI7QUFFRDs7R0FFRztBQUNILE1BQWEsVUFBVyxTQUFRLElBQUk7SUFDbEM7O09BRUc7SUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQVk7UUFDakMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQVk7UUFDbkMseUNBQXlDO1FBQ3pDLCtEQUErRDtRQUMvRCx3REFBd0Q7UUFDeEQsTUFBTSxPQUFPLEdBQUcsSUFBQSxnQkFBVyxFQUFDLElBQUEsV0FBSSxFQUFDLElBQUEsV0FBTSxHQUFFLEVB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QVksRUFBRSxDQUNqQyxPQUFPLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQzFDLENBQUM7SUFDSixDQUFDO0lBQ0QsZ0JBQXVCLENBQUM7Q0FDekI7QUFuQkQsd0NBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlSGFzaCB9IGZyb20gXCJjcnlwdG9cIjtcbmltcG9ydCB7IG1rZHRlbXBTeW5jLCByZWFkRmlsZVN5bmMsIHdyaXRlRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IHRtcGRpciB9IGZyb20gXCJvc1wiO1xuaW1wb3J0IHsgYmFzZW5hbWUsIGpvaW4gfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCB7IG1ha2VIYW5kbGVyIH0gZnJvbSBcIi4vaW50ZXJuYWxcIjtcbmltcG9ydCB7IENvbm5lY3Rpb24sIERpc3BsYXksIElJbmZsaWdodEhvc3QsIElSZXNvdXJjZSB9IGZyb20gXCIuL3Jlc291cmNlXCI7XG5pbXBvcnQgeyBUcmVlSW5zcGVjdG9yIH0gZnJvbSBcIi4vdHJlZVwiO1xuaW1wb3J0IHsgbm9ybWFsUGF0aCB9IGZyb20gXCIuLi91dGlsXCI7XG5cbi8qKlxuICogUmVmZXJlbmNlIHRvIGEgcGllY2Ugb2YgY29kZS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvZGUge1xuICAvKipcbiAgICogVGhlIGxhbmd1YWdlIG9mIHRoZSBjb2RlLlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IGxhbmd1YWdlOiBMYW5ndWFnZTtcblxuICAvKipcbiAgICogQSBwYXRoIHRvIHRoZSBjb2RlIGluIHRoZSB1c2VyJ3MgZmlsZSBzeXN0ZW0gdGhhdCBjYW4gYmUgcmVmZXJlbmNlZFxuICAgKiBmb3IgYnVuZGxpbmcgcHVycG9zZXMuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgcGF0aDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgY29kZSBjb250ZW50cy5cbiAgICovXG4gIHB1YmxpYyBnZXQgdGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiByZWFkRmlsZVN5bmModGhpcy5wYXRoLCBcInV0Zi04XCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgaGFzaCBvZiB0aGUgY29kZSBjb250ZW50cy5cbiAgICovXG4gIHB1YmxpYyBnZXQgaGFzaCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBjcmVhdGVIYXNoKFwic2hhNTEyXCIpLnVwZGF0ZSh0aGlzLnRleHQpLmRpZ2VzdChcImhleFwiKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBsYW5ndWFnZSBvZiBhIHBpZWNlIG9mIGNvZGUuXG4gKi9cbmV4cG9ydCBlbnVtIExhbmd1YWdlIHtcbiAgLyoqIE5vZGUuanMgKi9cbiAgTk9ERV9KUyA9IFwibm9kZWpzXCIsXG59XG5cbi8qKlxuICogUmVmZXJlbmNlIHRvIGEgcGllY2Ugb2YgTm9kZS5qcyBjb2RlLlxuICovXG5leHBvcnQgY2xhc3MgTm9kZUpzQ29kZSBleHRlbmRzIENvZGUge1xuICAvKipcbiAgICogUmVmZXJlbmNlIGNvZGUgZnJvbSBhIGZpbGUgcGF0aC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUZpbGUocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBOb2RlSnNDb2RlKHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZmVyZW5jZSBjb2RlIGRpcmVjdGx5IGZyb20gYSBzdHJpbmcuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZyb21JbmxpbmUodGV4dDogc3RyaW5nKSB7XG4gICAgLy8gVE9ETzogY2FuIHdlIHVzZSBhIHJlbGF0aXZlIHBhdGggaGVyZT9cbiAgICAvLyBUT0RPOiBjYW4gd2UgYXZvaWQgd3JpdGluZyB0byBmaWxlIHVudGlsIGFjdHVhbGx5IG5lY2Vzc2FyeT9cbiAgICAvLyBUT0RPOiBjYW4gd2Ugc2hhcmUgdGhlIHRlbXAgZGlyIGJldHdlZW4gQ29kZSBvYmplY3RzP1xuICAgIGNvbnN0IHRlbXBkaXIgPSBta2R0ZW1wU3luYyhqb2luKHRtcGRpcigpLCBcIndpbmdzZGsuXCIpKTtcbiAgICBjb25zdCBmaWxlID0gam9pbih0ZW1wZGlyLCBcImluZGV4LmpzXCIpO1xuICAgIHdyaXRlRmlsZVN5bmMoZmlsZSwgdGV4dCk7XG4gICAgcmV0dXJuIG5ldyBOb2RlSnNDb2RlKGZpbGUpO1xuICB9XG5cbiAgcHVibGljIHJlYWRvbmx5IGxhbmd1YWdlID0gTGFuZ3VhZ2UuTk9ERV9KUztcbiAgcHVibGljIHJlYWRvbmx5IHBhdGg6IHN0cmluZztcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHBhdGg6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBJbmZsaWdodEJpbmRpbmdzID0gUmVjb3JkPHN0cmluZywgSW5mbGlnaHRCaW5kaW5nPjtcblxuLyoqXG4gKiBQcm9wcyBmb3IgYEluZmxpZ2h0YC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbmZsaWdodFByb3BzIHtcbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgaW5mbGlnaHQgY29kZS4gT25seSBKYXZhU2NyaXB0IGNvZGUgaXMgY3VycmVudGx5XG4gICAqIHN1cHBvcnRlZC5cbiAgICpcbiAgICogVGhlIEphdmFTY3JpcHQgY29kZSBuZWVkcyBiZSBpbiB0aGUgZm9ybSBgYXN5bmMgaGFuZGxlKGV2ZW50KSB7IC4uLiB9YCwgYW5kXG4gICAqIGFsbCByZWZlcmVuY2VzIHRvIHJlc291cmNlcyBtdXN0IGJlIG1hZGUgdGhyb3VnaCBgdGhpcy48cmVzb3VyY2U+YC5cbiAgICovXG4gIHJlYWRvbmx5IGNvZGU6IENvZGU7XG5cbiAgLyoqXG4gICAqIERhdGEgYW5kIHJlc291cmNlIGJpbmRpbmcgaW5mb3JtYXRpb24uXG4gICAqIEBkZWZhdWx0IC0gbm8gYmluZGluZ3NcbiAgICovXG4gIHJlYWRvbmx5IGJpbmRpbmdzPzogSW5mbGlnaHRCaW5kaW5ncztcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgdW5pdCBvZiBhcHBsaWNhdGlvbiBjb2RlIHRoYXQgY2FuIGJlIGV4ZWN1dGVkIGJ5IGEgY2xvdWRcbiAqIHJlc291cmNlLiBJbiBwcmFjdGljZSwgaXQncyBhIHJlc291cmNlIHdpdGggb25lIGluZmxpZ2h0IG1ldGhvZCBuYW1lZFxuICogXCJoYW5kbGVcIi5cbiAqL1xuZXhwb3J0IGNsYXNzIEluZmxpZ2h0IGV4dGVuZHMgQ29uc3RydWN0IGltcGxlbWVudHMgSVJlc291cmNlIHtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwdWJsaWMgX2Nvbm5lY3Rpb25zOiBDb25uZWN0aW9uW10gPSBbXTsgLy8gdGhyb3duIGF3YXlcblxuICAvKipcbiAgICogSW5mb3JtYXRpb24gb24gaG93IHRvIGRpc3BsYXkgYSByZXNvdXJjZSBpbiB0aGUgVUkuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgZGlzcGxheSA9IG5ldyBEaXNwbGF5KCk7XG5cbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEluZmxpZ2h0UHJvcHMpIHtcbiAgICBzdXBlcihudWxsIGFzIGFueSwgXCJcIik7IC8vIHRocm93biBhd2F5XG5cbiAgICB0aGlzLmRpc3BsYXkuaGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLmRpc3BsYXkudGl0bGUgPSBcIkluZmxpZ2h0XCI7XG4gICAgdGhpcy5kaXNwbGF5LmRlc2NyaXB0aW9uID0gXCJBbiBpbmZsaWdodCByZXNvdXJjZVwiO1xuXG4gICAgaWYgKHByb3BzLmNvZGUubGFuZ3VhZ2UgIT09IExhbmd1YWdlLk5PREVfSlMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9ubHkgTm9kZS5qcyBjb2RlIGlzIHN1cHBvcnRlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFrZUhhbmRsZXIoc2NvcGUsIGlkLCBwcm9wcy5jb2RlLnRleHQsIHByb3BzLmJpbmRpbmdzLCB7XG4gICAgICBoaWRkZW46IHRoaXMuZGlzcGxheS5oaWRkZW4sXG4gICAgICB0aXRsZTogdGhpcy5kaXNwbGF5LnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGlzcGxheS5kZXNjcmlwdGlvbixcbiAgICB9KTtcbiAgfVxuICAvKiogQGludGVybmFsICovXG4gIHB1YmxpYyBfYmluZChfaG9zdDogSUluZmxpZ2h0SG9zdCwgX29wczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxuICAvKiogQGludGVybmFsICovXG4gIHB1YmxpYyBfcmVnaXN0ZXJCaW5kKF9ob3N0OiBJSW5mbGlnaHRIb3N0LCBfb3BzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHVibGljIF90b0luZmxpZ2h0KCk6IENvZGUge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHVibGljIF9wcmVTeW50aGVzaXplKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHVibGljIF9pbnNwZWN0KF9pbnNwZWN0b3I6IFRyZWVJbnNwZWN0b3IpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGluZmxpZ2h0IGJpbmRpbmcuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5mbGlnaHRCaW5kaW5nIHtcbiAgLyoqXG4gICAqIFRoZSByZXNvdXJjZSBvciBjYXB0dXJhYmxlIHZhbHVlLlxuICAgKi9cbiAgcmVhZG9ubHkgb2JqOiBhbnk7XG5cbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIG9wZXJhdGlvbnMgdXNlZCBvbiB0aGUgcmVzb3VyY2UuXG4gICAqL1xuICByZWFkb25seSBvcHM/OiBzdHJpbmdbXTtcbn1cblxuLyoqXG4gKiBVdGlsaXR5IGNsYXNzIHdpdGggZnVuY3Rpb25zIGFib3V0IGluZmxpZ2h0IGNsaWVudHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbmZsaWdodENsaWVudCB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgYENvZGVgIGluc3RhbmNlIHdpdGggY29kZSBmb3IgY3JlYXRpbmcgYW4gaW5mbGlnaHQgY2xpZW50LlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmb3IoXG4gICAgZGlybmFtZTogc3RyaW5nLFxuICAgIGZpbGVuYW1lOiBzdHJpbmcsXG4gICAgY2xpZW50Q2xhc3M6IHN0cmluZyxcbiAgICBhcmdzOiBzdHJpbmdbXVxuICApOiBDb2RlIHtcbiAgICBjb25zdCBpbmZsaWdodERpciA9IGRpcm5hbWU7XG4gICAgY29uc3QgaW5mbGlnaHRGaWxlID0gYmFzZW5hbWUoZmlsZW5hbWUpLnNwbGl0KFwiLlwiKVswXSArIFwiLmluZmxpZ2h0XCI7XG4gICAgcmV0dXJuIE5vZGVKc0NvZGUuZnJvbUlubGluZShcbiAgICAgIGBuZXcgKHJlcXVpcmUoXCIke25vcm1hbFBhdGgoXG4gICAgICAgIGAke2luZmxpZ2h0RGlyfS8ke2luZmxpZ2h0RmlsZX1gXG4gICAgICApfVwiKSkuJHtjbGllbnRDbGFzc30oJHthcmdzLmpvaW4oXCIsIFwiKX0pYFxuICAgICk7XG4gIH1cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=

/***/ }),

/***/ 1521:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serializeImmutableData = exports.makeHandler = void 0;
const inflight_1 = __nccwpck_require__(4822);
const resource_1 = __nccwpck_require__(3468);
const std_1 = __nccwpck_require__(15);
function makeHandler(scope, id, code, bindings = {}, display) {
    const clients = {};
    for (const [k, v] of Object.entries(bindings)) {
        clients[k] = serializeImmutableData(v.obj);
    }
    // implements IFunctionHandler
    class Handler extends resource_1.Resource {
        constructor() {
            super(scope, id);
            this.stateful = false;
            // pretend as if we have a field for each binding
            for (const [field, value] of Object.entries(bindings)) {
                this[field] = value.obj;
            }
            this.display.title = display?.title;
            this.display.description = display?.description;
            this.display.hidden = display?.hidden;
        }
        _toInflight() {
            return inflight_1.NodeJsCode.fromInline(`new ((function(){
return class Handler {
  constructor(clients) {
    for (const [name, client] of Object.entries(clients)) {
      this[name] = client;
    }
  }
  ${code}
};
})())({
${Object.entries(clients)
                .map(([name, client]) => `${name}: ${client}`)
                .join(",\n")}
})`);
        }
    }
    const annotation = {};
    for (const [k, v] of Object.entries(bindings)) {
        annotation["this." + k] = { ops: v.ops ?? [] };
    }
    Handler._annotateInflight("handle", annotation);
    return new Handler();
}
exports.makeHandler = makeHandler;
function serializeImmutableData(obj) {
    switch (typeof obj) {
        case "string":
        case "boolean":
        case "number":
            return JSON.stringify(obj);
        case "object":
            if (Array.isArray(obj)) {
                return `[${obj.map(serializeImmutableData).join(",")}]`;
            }
            if (obj instanceof std_1.Duration) {
                return serializeImmutableData({
                    seconds: obj.seconds,
                    minutes: obj.minutes,
                    hours: obj.hours,
                });
            }
            if (obj instanceof Set) {
                return `new Set(${serializeImmutableData(Array.from(obj))})`;
            }
            if (obj instanceof Map) {
                return `new Map(${serializeImmutableData(Array.from(obj))})`;
            }
            // if the object is a resource (i.e. has a "_toInflight" method"), we use it to serialize
            // itself.
            if (typeof obj._toInflight === "function") {
                return obj._toInflight().text;
            }
            // structs are just plain objects
            if (obj.constructor.name === "Object") {
                const lines = [];
                lines.push("{");
                for (const [k, v] of Object.entries(obj)) {
                    lines.push(`${k}: ${serializeImmutableData(v)},`);
                }
                lines.push("}");
                return lines.join("");
            }
    }
    throw new Error(`unable to serialize immutable data object of type ${obj.constructor?.name}`);
}
exports.serializeImmutableData = serializeImmutableData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29yZS9pbnRlcm5hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5Q0FBMEQ7QUFDMUQseUNBQStEO0FBQy9ELGdDQUFrQztBQUVsQyxTQUFnQixXQUFXLENBQ3pCLEtBQWlCLEVBQ2pCLEVBQVUsRUFDVixJQUFZLEVBQ1osV0FBNkIsRUFBRSxFQUMvQixPQUFzQjtJQUV0QixNQUFNLE9BQU8sR0FBMkIsRUFBRSxDQUFDO0lBRTNDLEtBQUssTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzdDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDNUM7SUFFRCw4QkFBOEI7SUFDOUIsTUFBTSxPQUFRLFNBQVEsbUJBQVE7UUFHNUI7WUFDRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBSEgsYUFBUSxHQUFHLEtBQUssQ0FBQztZQUsvQixpREFBaUQ7WUFDakQsS0FBSyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3BELElBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ2xDO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxFQUFFLEtBQUssQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxPQUFPLEVBQUUsV0FBVyxDQUFDO1lBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sRUFBRSxNQUFNLENBQUM7UUFDeEMsQ0FBQztRQUVNLFdBQVc7WUFDaEIsT0FBTyxxQkFBVSxDQUFDLFVBQVUsQ0FD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QUksRUFBRSxDQUM3RSxDQUFDO0FBQ0osQ0FBQztBQWpERCx3REFpREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCB7IEluZmxpZ2h0QmluZGluZ3MsIE5vZGVKc0NvZGUgfSBmcm9tIFwiLi9pbmZsaWdodFwiO1xuaW1wb3J0IHsgRGlzcGxheVByb3BzLCBJUmVzb3VyY2UsIFJlc291cmNlIH0gZnJvbSBcIi4vcmVzb3VyY2VcIjtcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSBcIi4uL3N0ZFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUhhbmRsZXIoXG4gIHNjb3BlOiBJQ29uc3RydWN0LFxuICBpZDogc3RyaW5nLFxuICBjb2RlOiBzdHJpbmcsXG4gIGJpbmRpbmdzOiBJbmZsaWdodEJpbmRpbmdzID0ge30sXG4gIGRpc3BsYXk/OiBEaXNwbGF5UHJvcHNcbik6IFJlc291cmNlIHtcbiAgY29uc3QgY2xpZW50czogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG4gIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGJpbmRpbmdzKSkge1xuICAgIGNsaWVudHNba10gPSBzZXJpYWxpemVJbW11dGFibGVEYXRhKHYub2JqKTtcbiAgfVxuXG4gIC8vIGltcGxlbWVudHMgSUZ1bmN0aW9uSGFuZGxlclxuICBjbGFzcyBIYW5kbGVyIGV4dGVuZHMgUmVzb3VyY2Uge1xuICAgIHB1YmxpYyByZWFkb25seSBzdGF0ZWZ1bCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAvLyBwcmV0ZW5kIGFzIGlmIHdlIGhhdmUgYSBmaWVsZCBmb3IgZWFjaCBiaW5kaW5nXG4gICAgICBmb3IgKGNvbnN0IFtmaWVsZCwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGJpbmRpbmdzKSkge1xuICAgICAgICAodGhpcyBhcyBhbnkpW2ZpZWxkXSA9IHZhbHVlLm9iajtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kaXNwbGF5LnRpdGxlID0gZGlzcGxheT8udGl0bGU7XG4gICAgICB0aGlzLmRpc3BsYXkuZGVzY3JpcHRpb24gPSBkaXNwbGF5Py5kZXNjcmlwdGlvbjtcbiAgICAgIHRoaXMuZGlzcGxheS5oaWRkZW4gPSBkaXNwbGF5Py5oaWRkZW47XG4gICAgfVxuXG4gICAgcHVibGljIF90b0luZmxpZ2h0KCk6IE5vZGVKc0NvZGUge1xuICAgICAgcmV0dXJuIE5vZGVKc0NvZGUuZnJvbUlubGluZShcbiAgICAgICAgYG5ldyAoKGZ1bmN0aW9uKCl7XG5yZXR1cm4gY2xhc3MgSGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudHMpIHtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBjbGllbnRdIG9mIE9iamVjdC5lbnRyaWVzKGNsaWVudHMpKSB7XG4gICAgICB0aGlzW25hbWVdID0gY2xpZW50O1xuICAgIH1cbiAgfVxuICAke2NvZGV9XG59O1xufSkoKSkoe1xuJHtPYmplY3QuZW50cmllcyhjbGllbnRzKVxuICAubWFwKChbbmFtZSwgY2xpZW50XSkgPT4gYCR7bmFtZX06ICR7Y2xpZW50fWApXG4gIC5qb2luKFwiLFxcblwiKX1cbn0pYFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBhbm5vdGF0aW9uOiBSZWNvcmQ8c3RyaW5nLCB7IG9wczogQXJyYXk8c3RyaW5nPiB9PiA9IHt9O1xuXG4gIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGJpbmRpbmdzKSkge1xuICAgIGFubm90YXRpb25bXCJ0aGlzLlwiICsga10gPSB7IG9wczogdi5vcHMgPz8gW10gfTtcbiAgfVxuXG4gIEhhbmRsZXIuX2Fubm90YXRlSW5mbGlnaHQoXCJoYW5kbGVcIiwgYW5ub3RhdGlvbik7XG5cbiAgcmV0dXJuIG5ldyBIYW5kbGVyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVJbW11dGFibGVEYXRhKG9iajogYW55KTogc3RyaW5nIHtcbiAgc3dpdGNoICh0eXBlb2Ygb2JqKSB7XG4gICAgY2FzZSBcInN0cmluZ1wiOlxuICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG5cbiAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgIHJldHVybiBgWyR7b2JqLm1hcChzZXJpYWxpemVJbW11dGFibGVEYXRhKS5qb2luKFwiLFwiKX1dYDtcbiAgICAgIH1cblxuICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIER1cmF0aW9uKSB7XG4gICAgICAgIHJldHVybiBzZXJpYWxpemVJbW11dGFibGVEYXRhKHtcbiAgICAgICAgICBzZWNvbmRzOiBvYmouc2Vjb25kcyxcbiAgICAgICAgICBtaW51dGVzOiBvYmoubWludXRlcyxcbiAgICAgICAgICBob3Vyczogb2JqLmhvdXJzLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIFNldCkge1xuICAgICAgICByZXR1cm4gYG5ldyBTZXQoJHtzZXJpYWxpemVJbW11dGFibGVEYXRhKEFycmF5LmZyb20ob2JqKSl9KWA7XG4gICAgICB9XG5cbiAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAgcmV0dXJuIGBuZXcgTWFwKCR7c2VyaWFsaXplSW1tdXRhYmxlRGF0YShBcnJheS5mcm9tKG9iaikpfSlgO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiB0aGUgb2JqZWN0IGlzIGEgcmVzb3VyY2UgKGkuZS4gaGFzIGEgXCJfdG9JbmZsaWdodFwiIG1ldGhvZFwiKSwgd2UgdXNlIGl0IHRvIHNlcmlhbGl6ZVxuICAgICAgLy8gaXRzZWxmLlxuICAgICAgaWYgKHR5cGVvZiAob2JqIGFzIElSZXNvdXJjZSkuX3RvSW5mbGlnaHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gKG9iaiBhcyBJUmVzb3VyY2UpLl90b0luZmxpZ2h0KCkudGV4dDtcbiAgICAgIH1cblxuICAgICAgLy8gc3RydWN0cyBhcmUganVzdCBwbGFpbiBvYmplY3RzXG4gICAgICBpZiAob2JqLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiT2JqZWN0XCIpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcbiAgICAgICAgbGluZXMucHVzaChcIntcIik7XG4gICAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKG9iaikpIHtcbiAgICAgICAgICBsaW5lcy5wdXNoKGAke2t9OiAke3NlcmlhbGl6ZUltbXV0YWJsZURhdGEodil9LGApO1xuICAgICAgICB9XG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xuICAgICAgICByZXR1cm4gbGluZXMuam9pbihcIlwiKTtcbiAgICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgdW5hYmxlIHRvIHNlcmlhbGl6ZSBpbW11dGFibGUgZGF0YSBvYmplY3Qgb2YgdHlwZSAke29iai5jb25zdHJ1Y3Rvcj8ubmFtZX1gXG4gICk7XG59XG4iXX0=

/***/ }),

/***/ 3468:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Display = exports.Direction = exports.Resource = void 0;
const constructs_1 = __nccwpck_require__(6366);
const attributes_1 = __nccwpck_require__(6558);
const internal_1 = __nccwpck_require__(1521);
const std_1 = __nccwpck_require__(15);
const util_1 = __nccwpck_require__(5353);
const BIND_METADATA_PREFIX = "$bindings__";
/**
 * Shared behavior between all Wing SDK resources.
 */
class Resource extends constructs_1.Construct {
    constructor() {
        super(...arguments);
        this.bindMap = new Map();
        /** @internal */
        this._connections = [];
        /**
         * Information on how to display a resource in the UI.
         */
        this.display = new Display();
    }
    /**
     * Adds a connection between two resources. A connection is a piece of
     * metadata describing how one resource is related to another resource. This
     * metadata is recorded in the tree.json file.
     *
     * @experimental
     */
    static addConnection(props) {
        const from = props.from;
        const to = props.to;
        const implicit = props.implicit ?? false;
        from._connections.push({
            resource: to,
            relationship: props.relationship,
            direction: Direction.OUTBOUND,
            implicit,
        });
        to._connections.push({
            resource: from,
            relationship: props.relationship,
            direction: Direction.INBOUND,
            implicit,
        });
    }
    /**
     * Annotate a class with with metadata about what operations it supports
     * inflight, and what sub-resources each operation requires access to.
     *
     * For example if `MyBucket` has a `fancy_get` method that calls `get` on an
     * underlying `cloud.Bucket`, then it would be annotated as follows:
     * ```
     * MyBucket._annotateInflight("fancy_get", {
     *  "this.bucket": { ops: ["get"] }
     * });
     * ```
     *
     * The Wing compiler will automatically generate the correct annotations by
     * scanning the source code, but in the Wing SDK we have to add them manually.
     *
     * @internal
     */
    static _annotateInflight(op, annotation) {
        const sym = Symbol.for(BIND_METADATA_PREFIX + op);
        Object.defineProperty(this.prototype, sym, {
            value: annotation,
            enumerable: false,
            writable: false,
        });
    }
    /**
     * Binds the resource to the host so that it can be used by inflight code.
     *
     * You can override this method to perform additional logic like granting
     * IAM permissions to the host based on what methods are being called. But
     * you must call `super._bind(host, ops)` to ensure that the resource is
     * actually bound.
     *
     * @internal
     */
    _bind(host, ops) {
        // Do nothing by default
        host;
        ops;
    }
    /**
     * Register that the resource needs to be bound to the host for the given
     * operations. This means that the resource's `_bind` method will be called
     * during pre-synthesis.
     *
     * @internal
     */
    _registerBind(host, ops) {
        (0, util_1.log)(`Registering a binding for a resource (${this.node.path}) to a host (${host.node.path}) with ops: ${JSON.stringify(ops)}`);
        // Register the binding between this resource and the host
        if (!this.bindMap.has(host)) {
            this.bindMap.set(host, new Set());
        }
        for (const op of ops) {
            this.bindMap.get(host).add(op);
        }
        // Collect a list of all immediate child bindings
        const resources = {};
        for (const op of ops) {
            const sym = Symbol.for(BIND_METADATA_PREFIX + op);
            const bindAnnotation = this[sym];
            if (!bindAnnotation) {
                throw new Error(`Unable to reference "${this.node.path}" from "${host.node.path}" because it does not support operation "${op}"`);
            }
            for (const resource of Object.keys(bindAnnotation)) {
                resources[resource] = resources[resource] ?? [];
                resources[resource].push(...bindAnnotation[resource].ops);
            }
        }
        // this is how resources will look:
        // resources = {
        //   "this.bucket": [ "put", "get" ],
        //   "counter": [ "inc" ]
        // };
        // Register the bindings for all child resources
        for (const field of Object.keys(resources)) {
            if (field.startsWith("this.")) {
                const key = field.substring(5);
                const obj = this[key];
                if (obj === undefined) {
                    throw new Error(`Resource ${this.node.path} does not have field ${key}`);
                }
                this.registerBindObject(obj, host, resources[field]);
            }
            else {
                (0, util_1.log)(`Skipped binding ${field} since it should be bound already.`);
            }
        }
    }
    /**
     * Register a binding between an object (either data or resource) and a host.
     *
     * - Primitives and Duration objects are ignored.
     * - Arrays, sets and maps and structs (Objects) are recursively bound.
     * - Resources are bound to the host by calling their _bind() method.
     *
     * @param obj The object to bind.
     * @param host The host to bind to
     * @param ops The set of operations that may access the object (use "?" to indicate that we don't
     * know the operation)
     */
    registerBindObject(obj, host, ops = []) {
        switch (typeof obj) {
            case "string":
            case "boolean":
            case "number":
                return;
            case "object":
                if (Array.isArray(obj)) {
                    obj.forEach((item) => this.registerBindObject(item, host));
                    return;
                }
                if (obj instanceof std_1.Duration) {
                    return;
                }
                if (obj instanceof Set) {
                    return Array.from(obj).forEach((item) => this.registerBindObject(item, host));
                }
                if (obj instanceof Map) {
                    Array.from(obj.values()).forEach((item) => this.registerBindObject(item, host));
                    return;
                }
                // if the object is a resource (i.e. has a "_bind" method"), register a binding between it and the host.
                if (typeof obj._bind === "function" &&
                    typeof obj._registerBind === "function") {
                    obj._registerBind(host, ops);
                    // add connection metadata
                    for (const op of ops) {
                        Resource.addConnection({
                            from: host,
                            to: obj,
                            relationship: op,
                        });
                    }
                    return;
                }
                // structs are just plain objects
                if (obj.constructor.name === "Object") {
                    Object.values(obj).forEach((item) => this.registerBindObject(item, host, ops));
                    return;
                }
        }
        throw new Error(`unable to serialize immutable data object of type ${obj.constructor?.name}`);
    }
    /**
     * A hook for performing operations after the tree of resources has been
     * created, but before they are synthesized.
     *
     * Currently used for binding resources to hosts.
     *
     * @internal
     */
    _preSynthesize() {
        // Perform the live bindings betweeen resources and hosts
        // By aggregating the binding operations, we can avoid performing
        // multiple bindings for the same resource-host pairs.
        for (const [host, ops] of this.bindMap.entries()) {
            this._bind(host, Array.from(ops));
        }
    }
    /**
     * @internal
     */
    _inspect(inspector) {
        inspector.addAttribute(attributes_1.WING_ATTRIBUTE_RESOURCE_STATEFUL, this.stateful);
        inspector.addAttribute(attributes_1.WING_ATTRIBUTE_RESOURCE_CONNECTIONS, this._connections.map((conn) => ({
            direction: conn.direction,
            relationship: conn.relationship,
            resource: conn.resource.node.path,
            implicit: conn.implicit,
        })));
    }
    /**
     * "Lifts" a value into an inflight context. If the value is a resource (i.e. has a `_toInflight`
     * method), this method will be called and the result will be returned. Otherwise, the value is
     * returned as-is.
     *
     * @param value The value to lift.
     * @returns a string representation of the value in an inflight context.
     * @internal
     */
    _lift(value) {
        return (0, internal_1.serializeImmutableData)(value);
    }
}
exports.Resource = Resource;
/**
 * The direction of a connection.
 *
 * Visually speaking, if a resource A has an outbound connection with resource B,
 * the arrow would point from A to B, and vice versa for inbound connections.
 */
var Direction;
(function (Direction) {
    /**
     * Indicates that this resource calls, triggers, or references
     * the resource it is connected to.
     */
    Direction["OUTBOUND"] = "outbound";
    /**
     * Indicates that this resource is called, triggered, or referenced by
     * the resource it is connected to.
     */
    Direction["INBOUND"] = "inbound";
})(Direction = exports.Direction || (exports.Direction = {}));
/**
 * Information on how to display a resource in the UI.
 */
class Display {
    constructor(props) {
        this.title = props?.title;
        this.description = props?.description;
        this.hidden = props?.hidden;
    }
}
exports.Display = Display;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29yZS9yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBbUQ7QUFDbkQsNkNBR3NCO0FBRXRCLHlDQUFvRDtBQUVwRCxnQ0FBa0M7QUFDbEMsa0NBQThCO0FBMEQ5QixNQUFNLG9CQUFvQixHQUFHLGFBQWEsQ0FBQztBQUUzQzs7R0FFRztBQUNILE1BQXNCLFFBQVMsU0FBUSxzQkFBUztJQUFoRDs7UUFvRG1CLFlBQU8sR0FBb0MsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUV0RSxnQkFBZ0I7UUFDQSxpQkFBWSxHQUFpQixFQUFFLENBQUM7UUFFaEQ7O1dBRUc7UUFDYSxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQWdPMUMsQ0FBQztJQTNSQzs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQXlCO1FBQ25ELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDeEIsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUNwQixNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNyQixRQUFRLEVBQUUsRUFBRTtZQUNaLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFFBQVE7WUFDN0IsUUFBUTtTQUNULENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ25CLFFBQVEsRUFBRSxJQUFJO1lBQ2QsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLFNBQVMsRUFBRSxTQUFTLENBQUMsT0FBTztZQUM1QixRQUFRO1NBQ1QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7O09BZ0JHO0lBQ0ksTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQVUsRUFBRSxVQUErQjtRQUN6RSxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7WUFDekMsS0FBSyxFQUFFLFVBQVU7WUFDakIsVUFBVSxFQUFFLEtBQUs7WUFDakIsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXNCRDs7Ozs7Ozs7O09BU0c7SUFDSSxLQUFLLENBQUMsSUFBbUIsRUFBRSxHQUFhO1FBQzdDLHdCQUF3QjtRQUN4QixJQUFJLENBQUM7UUFDTCxHQUFHLENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksYUFBYSxDQUFDLElBQW1CLEVBQUUsR0FBYTtRQUNyRCxJQUFBLFVBQUcsRUFDRCx5Q0FBeUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQ1osZUFBZSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQ3JDLENBQUM7UUFFRiwwREFBMEQ7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDbkM7UUFDRCxLQUFLLE1BQU0sRUFBRSxJQUFJLEdBQUcsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakM7UUFFRCxpREFBaUQ7UUFDakQsTUFBTSxTQUFTLEdBQTZCLEVBQUUsQ0FBQztRQUMvQyxLQUFLLE1BQU0sRUFBRSxJQUFJLEdBQUcsRUFBRTtZQUNwQixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sY0FBYyxHQUF5QixJQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDbkIsTUFBTSxJQUFJLEtBQUssQ0FDYix3QkFBd0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLDRDQUE0QyxFQUFFLEdBQUcsQ0FDakgsQ0FBQzthQUNIO1lBQ0QsS0FBSyxNQUFNLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUNsRCxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDaEQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzRDtTQUNGO1FBRUQsbUNBQW1DO1FBQ25DLGdCQUFnQjtRQUNoQixxQ0FBcUM7UUFDckMseUJBQXlCO1FBQ3pCLEtBQUs7UUFFTCxnREFBZ0Q7UUFDaEQsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzFDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDN0IsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxHQUFHLEdBQWMsSUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7b0JBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQ2IsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksd0JBQXdCLEdBQUcsRUFBRSxDQUN4RCxDQUFDO2lCQUNIO2dCQUVELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNMLElBQUEsVUFBRyxFQUFDLG1CQUFtQixLQUFLLG9DQUFvQyxDQUFDLENBQUM7YUFDbkU7U0FDRjtJQUNILENBQUM7SUFFRDs7Ozs7Ozs7Ozs7T0FXRztJQUNLLGtCQUFrQixDQUN4QixHQUFRLEVBQ1IsSUFBZSxFQUNmLE1BQWdCLEVBQUU7UUFFbEIsUUFBUSxPQUFPLEdBQUcsRUFBRTtZQUNsQixLQUFLLFFBQVEsQ0FBQztZQUNkLEtBQUssU0FBUyxDQUFDO1lBQ2YsS0FBSyxRQUFRO2dCQUNYLE9BQU87WUFFVCxLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN0QixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzNELE9BQU87aUJBQ1I7Z0JBRUQsSUFBSSxHQUFHLFlBQVksY0FBUSxFQUFFO29CQUMzQixPQUFPO2lCQUNSO2dCQUVELElBQUksR0FBRyxZQUFZLEdBQUcsRUFBRTtvQkFDdEIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQ3RDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQ3BDLENBQUM7aUJBQ0g7Z0JBRUQsSUFBSSxHQUFHLFlBQVksR0FBRyxFQUFFO29CQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQ3hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQ3BDLENBQUM7b0JBQ0YsT0FBTztpQkFDUjtnQkFFRCx3R0FBd0c7Z0JBQ3hHLElBQ0UsT0FBUSxHQUFpQixDQUFDLEtBQUssS0FBSyxVQUFVO29CQUM5QyxPQUFRLEdBQWlCLENBQUMsYUFBYSxLQUFLLFVBQVUsRUFDdEQ7b0JBQ0MsR0FBaUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUU1QywwQkFBMEI7b0JBQzFCLEtBQUssTUFBTSxFQUFFLElBQUksR0FBRyxFQUFFO3dCQUNwQixRQUFRLENBQUMsYUFBYSxDQUFDOzRCQUNyQixJQUFJLEVBQUUsSUFBSTs0QkFDVixFQUFFLEVBQUUsR0FBRzs0QkFDUCxZQUFZLEVBQUUsRUFBRTt5QkFDakIsQ0FBQyxDQUFDO3FCQUNKO29CQUVELE9BQU87aUJBQ1I7Z0JBRUQsaUNBQWlDO2dCQUNqQyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtvQkFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FDekMsQ0FBQztvQkFDRixPQUFPO2lCQUNSO1NBQ0o7UUFFRCxNQUFNLElBQUksS0FBSyxDQUNiLHFEQUFxRCxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxDQUM3RSxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxjQUFjO1FBQ25CLHlEQUF5RDtRQUN6RCxpRUFBaUU7UUFDakUsc0RBQXNEO1FBQ3RELEtBQUssTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7SUFZRDs7T0FFRztJQUNJLFFBQVEsQ0FBQyxTQUF3QjtRQUN0QyxTQUFTLENBQUMsWUFBWSxDQUFDLDZDQUFnQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RSxTQUFTLENBQUMsWUFBWSxDQUNwQixnREFBbUMsRUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDL0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNqQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDLENBQ0osQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNPLEtBQUssQ0FBQyxLQUFVO1FBQ3hCLE9BQU8sSUFBQSxpQ0FBc0IsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7QUE1UkQsNEJBNFJDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxJQUFZLFNBWVg7QUFaRCxXQUFZLFNBQVM7SUFDbkI7OztPQUdHO0lBQ0gsa0NBQXFCLENBQUE7SUFFckI7OztPQUdHO0lBQ0gsZ0NBQW1CLENBQUE7QUFDckIsQ0FBQyxFQVpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBWXBCO0FBNkZEOztHQUVHO0FBQ0gsTUFBYSxPQUFPO0lBZ0JsQixZQUFtQixLQUFvQjtRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsV0FBVyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFyQkQsMEJBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0LCBJQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCB7XG4gIFdJTkdfQVRUUklCVVRFX1JFU09VUkNFX0NPTk5FQ1RJT05TLFxuICBXSU5HX0FUVFJJQlVURV9SRVNPVVJDRV9TVEFURUZVTCxcbn0gZnJvbSBcIi4vYXR0cmlidXRlc1wiO1xuaW1wb3J0IHsgQ29kZSB9IGZyb20gXCIuL2luZmxpZ2h0XCI7XG5pbXBvcnQgeyBzZXJpYWxpemVJbW11dGFibGVEYXRhIH0gZnJvbSBcIi4vaW50ZXJuYWxcIjtcbmltcG9ydCB7IElJbnNwZWN0YWJsZSwgVHJlZUluc3BlY3RvciB9IGZyb20gXCIuL3RyZWVcIjtcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSBcIi4uL3N0ZFwiO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSBcIi4uL3V0aWxcIjtcblxuLyoqXG4gKiBBIHJlc291cmNlIHRoYXQgY2FuIHJ1biBpbmZsaWdodCBjb2RlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElJbmZsaWdodEhvc3QgZXh0ZW5kcyBJUmVzb3VyY2Uge31cblxuLyoqXG4gKiBBYnN0cmFjdCBpbnRlcmZhY2UgZm9yIGBSZXNvdXJjZWAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVJlc291cmNlIGV4dGVuZHMgSUluc3BlY3RhYmxlLCBJQ29uc3RydWN0IHtcbiAgLyoqXG4gICAqIExpc3Qgb2YgaW5ib3VuZCBhbmQgb3V0Ym91bmQgY29ubmVjdGlvbnMgdG8gb3RoZXIgcmVzb3VyY2VzLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9jb25uZWN0aW9uczogQ29ubmVjdGlvbltdO1xuXG4gIC8qKlxuICAgKiBJbmZvcm1hdGlvbiBvbiBob3cgdG8gZGlzcGxheSBhIHJlc291cmNlIGluIHRoZSBVSS5cbiAgICovXG4gIHJlYWRvbmx5IGRpc3BsYXk6IERpc3BsYXk7XG5cbiAgLyoqXG4gICAqIEJpbmRzIHRoZSByZXNvdXJjZSB0byB0aGUgaG9zdCBzbyB0aGF0IGl0IGNhbiBiZSB1c2VkIGJ5IGluZmxpZ2h0IGNvZGUuXG4gICAqXG4gICAqIElmIHRoZSByZXNvdXJjZSBkb2VzIG5vdCBzdXBwb3J0IGFueSBvZiB0aGUgb3BlcmF0aW9ucywgaXQgc2hvdWxkIHRocm93IGFuXG4gICAqIGVycm9yLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9iaW5kKGhvc3Q6IElJbmZsaWdodEhvc3QsIG9wczogc3RyaW5nW10pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0aGF0IHRoZSByZXNvdXJjZSBuZWVkcyB0byBiZSBib3VuZCB0byB0aGUgaG9zdCBmb3IgdGhlIGdpdmVuXG4gICAqIG9wZXJhdGlvbnMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgcmVzb3VyY2UncyBgX2JpbmRgIG1ldGhvZCB3aWxsIGJlIGNhbGxlZFxuICAgKiBkdXJpbmcgcHJlLXN5bnRoZXNpcy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfcmVnaXN0ZXJCaW5kKGhvc3Q6IElJbmZsaWdodEhvc3QsIG9wczogc3RyaW5nW10pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBjb2RlIHNuaXBwZXQgdGhhdCBjYW4gYmUgdXNlZCB0byByZWZlcmVuY2UgdGhpcyByZXNvdXJjZSBpbmZsaWdodC5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBfdG9JbmZsaWdodCgpOiBDb2RlO1xuXG4gIC8qKlxuICAgKiBBIGhvb2sgZm9yIHBlcmZvcm1pbmcgb3BlcmF0aW9ucyBhZnRlciB0aGUgdHJlZSBvZiByZXNvdXJjZXMgaGFzIGJlZW5cbiAgICogY3JlYXRlZCwgYnV0IGJlZm9yZSB0aGV5IGFyZSBzeW50aGVzaXplZC5cbiAgICpcbiAgICogQ3VycmVudGx5IHVzZWQgZm9yIGJpbmRpbmcgcmVzb3VyY2VzIHRvIGhvc3RzLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9wcmVTeW50aGVzaXplKCk6IHZvaWQ7XG59XG5cbmNvbnN0IEJJTkRfTUVUQURBVEFfUFJFRklYID0gXCIkYmluZGluZ3NfX1wiO1xuXG4vKipcbiAqIFNoYXJlZCBiZWhhdmlvciBiZXR3ZWVuIGFsbCBXaW5nIFNESyByZXNvdXJjZXMuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZXNvdXJjZSBleHRlbmRzIENvbnN0cnVjdCBpbXBsZW1lbnRzIElSZXNvdXJjZSB7XG4gIC8qKlxuICAgKiBBZGRzIGEgY29ubmVjdGlvbiBiZXR3ZWVuIHR3byByZXNvdXJjZXMuIEEgY29ubmVjdGlvbiBpcyBhIHBpZWNlIG9mXG4gICAqIG1ldGFkYXRhIGRlc2NyaWJpbmcgaG93IG9uZSByZXNvdXJjZSBpcyByZWxhdGVkIHRvIGFub3RoZXIgcmVzb3VyY2UuIFRoaXNcbiAgICogbWV0YWRhdGEgaXMgcmVjb3JkZWQgaW4gdGhlIHRyZWUuanNvbiBmaWxlLlxuICAgKlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFkZENvbm5lY3Rpb24ocHJvcHM6IEFkZENvbm5lY3Rpb25Qcm9wcykge1xuICAgIGNvbnN0IGZyb20gPSBwcm9wcy5mcm9tO1xuICAgIGNvbnN0IHRvID0gcHJvcHMudG87XG4gICAgY29uc3QgaW1wbGljaXQgPSBwcm9wcy5pbXBsaWNpdCA/PyBmYWxzZTtcbiAgICBmcm9tLl9jb25uZWN0aW9ucy5wdXNoKHtcbiAgICAgIHJlc291cmNlOiB0byxcbiAgICAgIHJlbGF0aW9uc2hpcDogcHJvcHMucmVsYXRpb25zaGlwLFxuICAgICAgZGlyZWN0aW9uOiBEaXJlY3Rpb24uT1VUQk9VTkQsXG4gICAgICBpbXBsaWNpdCxcbiAgICB9KTtcbiAgICB0by5fY29ubmVjdGlvbnMucHVzaCh7XG4gICAgICByZXNvdXJjZTogZnJvbSxcbiAgICAgIHJlbGF0aW9uc2hpcDogcHJvcHMucmVsYXRpb25zaGlwLFxuICAgICAgZGlyZWN0aW9uOiBEaXJlY3Rpb24uSU5CT1VORCxcbiAgICAgIGltcGxpY2l0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFubm90YXRlIGEgY2xhc3Mgd2l0aCB3aXRoIG1ldGFkYXRhIGFib3V0IHdoYXQgb3BlcmF0aW9ucyBpdCBzdXBwb3J0c1xuICAgKiBpbmZsaWdodCwgYW5kIHdoYXQgc3ViLXJlc291cmNlcyBlYWNoIG9wZXJhdGlvbiByZXF1aXJlcyBhY2Nlc3MgdG8uXG4gICAqXG4gICAqIEZvciBleGFtcGxlIGlmIGBNeUJ1Y2tldGAgaGFzIGEgYGZhbmN5X2dldGAgbWV0aG9kIHRoYXQgY2FsbHMgYGdldGAgb24gYW5cbiAgICogdW5kZXJseWluZyBgY2xvdWQuQnVja2V0YCwgdGhlbiBpdCB3b3VsZCBiZSBhbm5vdGF0ZWQgYXMgZm9sbG93czpcbiAgICogYGBgXG4gICAqIE15QnVja2V0Ll9hbm5vdGF0ZUluZmxpZ2h0KFwiZmFuY3lfZ2V0XCIsIHtcbiAgICogIFwidGhpcy5idWNrZXRcIjogeyBvcHM6IFtcImdldFwiXSB9XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogVGhlIFdpbmcgY29tcGlsZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlIHRoZSBjb3JyZWN0IGFubm90YXRpb25zIGJ5XG4gICAqIHNjYW5uaW5nIHRoZSBzb3VyY2UgY29kZSwgYnV0IGluIHRoZSBXaW5nIFNESyB3ZSBoYXZlIHRvIGFkZCB0aGVtIG1hbnVhbGx5LlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgX2Fubm90YXRlSW5mbGlnaHQob3A6IHN0cmluZywgYW5ub3RhdGlvbjogT3BlcmF0aW9uQW5ub3RhdGlvbikge1xuICAgIGNvbnN0IHN5bSA9IFN5bWJvbC5mb3IoQklORF9NRVRBREFUQV9QUkVGSVggKyBvcCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMucHJvdG90eXBlLCBzeW0sIHtcbiAgICAgIHZhbHVlOiBhbm5vdGF0aW9uLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlYWRvbmx5IGJpbmRNYXA6IE1hcDxJSW5mbGlnaHRIb3N0LCBTZXQ8c3RyaW5nPj4gPSBuZXcgTWFwKCk7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwdWJsaWMgcmVhZG9ubHkgX2Nvbm5lY3Rpb25zOiBDb25uZWN0aW9uW10gPSBbXTtcblxuICAvKipcbiAgICogSW5mb3JtYXRpb24gb24gaG93IHRvIGRpc3BsYXkgYSByZXNvdXJjZSBpbiB0aGUgVUkuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgZGlzcGxheSA9IG5ldyBEaXNwbGF5KCk7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgYSByZXNvdXJjZSBpcyBzdGF0ZWZ1bCwgaS5lLiBpdCBzdG9yZXMgaW5mb3JtYXRpb24gdGhhdCBpcyBub3RcbiAgICogZGVmaW5lZCBieSB5b3VyIGFwcGxpY2F0aW9uLlxuICAgKlxuICAgKiBBIG5vbi1zdGF0ZWZ1bCByZXNvdXJjZSBkb2VzIG5vdCByZW1lbWJlciBpbmZvcm1hdGlvbiBhYm91dCBwYXN0XG4gICAqIHRyYW5zYWN0aW9ucyBvciBldmVudHMsIGFuZCBjYW4gdHlwaWNhbGx5IGJlIHJlcGxhY2VkIGJ5IGEgY2xvdWQgcHJvdmlkZXJcbiAgICogd2l0aCBhIGZyZXNoIGNvcHkgd2l0aG91dCBhbnkgY29uc2VxdWVuY2VzLlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IHN0YXRlZnVsOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCaW5kcyB0aGUgcmVzb3VyY2UgdG8gdGhlIGhvc3Qgc28gdGhhdCBpdCBjYW4gYmUgdXNlZCBieSBpbmZsaWdodCBjb2RlLlxuICAgKlxuICAgKiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gYWRkaXRpb25hbCBsb2dpYyBsaWtlIGdyYW50aW5nXG4gICAqIElBTSBwZXJtaXNzaW9ucyB0byB0aGUgaG9zdCBiYXNlZCBvbiB3aGF0IG1ldGhvZHMgYXJlIGJlaW5nIGNhbGxlZC4gQnV0XG4gICAqIHlvdSBtdXN0IGNhbGwgYHN1cGVyLl9iaW5kKGhvc3QsIG9wcylgIHRvIGVuc3VyZSB0aGF0IHRoZSByZXNvdXJjZSBpc1xuICAgKiBhY3R1YWxseSBib3VuZC5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgX2JpbmQoaG9zdDogSUluZmxpZ2h0SG9zdCwgb3BzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIC8vIERvIG5vdGhpbmcgYnkgZGVmYXVsdFxuICAgIGhvc3Q7XG4gICAgb3BzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHRoYXQgdGhlIHJlc291cmNlIG5lZWRzIHRvIGJlIGJvdW5kIHRvIHRoZSBob3N0IGZvciB0aGUgZ2l2ZW5cbiAgICogb3BlcmF0aW9ucy4gVGhpcyBtZWFucyB0aGF0IHRoZSByZXNvdXJjZSdzIGBfYmluZGAgbWV0aG9kIHdpbGwgYmUgY2FsbGVkXG4gICAqIGR1cmluZyBwcmUtc3ludGhlc2lzLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBfcmVnaXN0ZXJCaW5kKGhvc3Q6IElJbmZsaWdodEhvc3QsIG9wczogc3RyaW5nW10pIHtcbiAgICBsb2coXG4gICAgICBgUmVnaXN0ZXJpbmcgYSBiaW5kaW5nIGZvciBhIHJlc291cmNlICgke3RoaXMubm9kZS5wYXRofSkgdG8gYSBob3N0ICgke1xuICAgICAgICBob3N0Lm5vZGUucGF0aFxuICAgICAgfSkgd2l0aCBvcHM6ICR7SlNPTi5zdHJpbmdpZnkob3BzKX1gXG4gICAgKTtcblxuICAgIC8vIFJlZ2lzdGVyIHRoZSBiaW5kaW5nIGJldHdlZW4gdGhpcyByZXNvdXJjZSBhbmQgdGhlIGhvc3RcbiAgICBpZiAoIXRoaXMuYmluZE1hcC5oYXMoaG9zdCkpIHtcbiAgICAgIHRoaXMuYmluZE1hcC5zZXQoaG9zdCwgbmV3IFNldCgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBvcCBvZiBvcHMpIHtcbiAgICAgIHRoaXMuYmluZE1hcC5nZXQoaG9zdCkhLmFkZChvcCk7XG4gICAgfVxuXG4gICAgLy8gQ29sbGVjdCBhIGxpc3Qgb2YgYWxsIGltbWVkaWF0ZSBjaGlsZCBiaW5kaW5nc1xuICAgIGNvbnN0IHJlc291cmNlczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG4gICAgZm9yIChjb25zdCBvcCBvZiBvcHMpIHtcbiAgICAgIGNvbnN0IHN5bSA9IFN5bWJvbC5mb3IoQklORF9NRVRBREFUQV9QUkVGSVggKyBvcCk7XG4gICAgICBjb25zdCBiaW5kQW5ub3RhdGlvbjogT3BlcmF0aW9uQW5ub3RhdGlvbiA9ICh0aGlzIGFzIGFueSlbc3ltXTtcbiAgICAgIGlmICghYmluZEFubm90YXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBVbmFibGUgdG8gcmVmZXJlbmNlIFwiJHt0aGlzLm5vZGUucGF0aH1cIiBmcm9tIFwiJHtob3N0Lm5vZGUucGF0aH1cIiBiZWNhdXNlIGl0IGRvZXMgbm90IHN1cHBvcnQgb3BlcmF0aW9uIFwiJHtvcH1cImBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgcmVzb3VyY2Ugb2YgT2JqZWN0LmtleXMoYmluZEFubm90YXRpb24pKSB7XG4gICAgICAgIHJlc291cmNlc1tyZXNvdXJjZV0gPSByZXNvdXJjZXNbcmVzb3VyY2VdID8/IFtdO1xuICAgICAgICByZXNvdXJjZXNbcmVzb3VyY2VdLnB1c2goLi4uYmluZEFubm90YXRpb25bcmVzb3VyY2VdLm9wcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhpcyBpcyBob3cgcmVzb3VyY2VzIHdpbGwgbG9vazpcbiAgICAvLyByZXNvdXJjZXMgPSB7XG4gICAgLy8gICBcInRoaXMuYnVja2V0XCI6IFsgXCJwdXRcIiwgXCJnZXRcIiBdLFxuICAgIC8vICAgXCJjb3VudGVyXCI6IFsgXCJpbmNcIiBdXG4gICAgLy8gfTtcblxuICAgIC8vIFJlZ2lzdGVyIHRoZSBiaW5kaW5ncyBmb3IgYWxsIGNoaWxkIHJlc291cmNlc1xuICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LmtleXMocmVzb3VyY2VzKSkge1xuICAgICAgaWYgKGZpZWxkLnN0YXJ0c1dpdGgoXCJ0aGlzLlwiKSkge1xuICAgICAgICBjb25zdCBrZXkgPSBmaWVsZC5zdWJzdHJpbmcoNSk7XG4gICAgICAgIGNvbnN0IG9iajogUmVzb3VyY2UgPSAodGhpcyBhcyBhbnkpW2tleV07XG4gICAgICAgIGlmIChvYmogPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBSZXNvdXJjZSAke3RoaXMubm9kZS5wYXRofSBkb2VzIG5vdCBoYXZlIGZpZWxkICR7a2V5fWBcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlckJpbmRPYmplY3Qob2JqLCBob3N0LCByZXNvdXJjZXNbZmllbGRdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZyhgU2tpcHBlZCBiaW5kaW5nICR7ZmllbGR9IHNpbmNlIGl0IHNob3VsZCBiZSBib3VuZCBhbHJlYWR5LmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGJpbmRpbmcgYmV0d2VlbiBhbiBvYmplY3QgKGVpdGhlciBkYXRhIG9yIHJlc291cmNlKSBhbmQgYSBob3N0LlxuICAgKlxuICAgKiAtIFByaW1pdGl2ZXMgYW5kIER1cmF0aW9uIG9iamVjdHMgYXJlIGlnbm9yZWQuXG4gICAqIC0gQXJyYXlzLCBzZXRzIGFuZCBtYXBzIGFuZCBzdHJ1Y3RzIChPYmplY3RzKSBhcmUgcmVjdXJzaXZlbHkgYm91bmQuXG4gICAqIC0gUmVzb3VyY2VzIGFyZSBib3VuZCB0byB0aGUgaG9zdCBieSBjYWxsaW5nIHRoZWlyIF9iaW5kKCkgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gYmluZC5cbiAgICogQHBhcmFtIGhvc3QgVGhlIGhvc3QgdG8gYmluZCB0b1xuICAgKiBAcGFyYW0gb3BzIFRoZSBzZXQgb2Ygb3BlcmF0aW9ucyB0aGF0IG1heSBhY2Nlc3MgdGhlIG9iamVjdCAodXNlIFwiP1wiIHRvIGluZGljYXRlIHRoYXQgd2UgZG9uJ3RcbiAgICoga25vdyB0aGUgb3BlcmF0aW9uKVxuICAgKi9cbiAgcHJpdmF0ZSByZWdpc3RlckJpbmRPYmplY3QoXG4gICAgb2JqOiBhbnksXG4gICAgaG9zdDogSVJlc291cmNlLFxuICAgIG9wczogc3RyaW5nW10gPSBbXVxuICApOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBvYmopIHtcbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgb2JqLmZvckVhY2goKGl0ZW0pID0+IHRoaXMucmVnaXN0ZXJCaW5kT2JqZWN0KGl0ZW0sIGhvc3QpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgRHVyYXRpb24pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ob2JqKS5mb3JFYWNoKChpdGVtKSA9PlxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckJpbmRPYmplY3QoaXRlbSwgaG9zdClcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICAgIEFycmF5LmZyb20ob2JqLnZhbHVlcygpKS5mb3JFYWNoKChpdGVtKSA9PlxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckJpbmRPYmplY3QoaXRlbSwgaG9zdClcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHRoZSBvYmplY3QgaXMgYSByZXNvdXJjZSAoaS5lLiBoYXMgYSBcIl9iaW5kXCIgbWV0aG9kXCIpLCByZWdpc3RlciBhIGJpbmRpbmcgYmV0d2VlbiBpdCBhbmQgdGhlIGhvc3QuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0eXBlb2YgKG9iaiBhcyBJUmVzb3VyY2UpLl9iaW5kID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICB0eXBlb2YgKG9iaiBhcyBJUmVzb3VyY2UpLl9yZWdpc3RlckJpbmQgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICApIHtcbiAgICAgICAgICAob2JqIGFzIElSZXNvdXJjZSkuX3JlZ2lzdGVyQmluZChob3N0LCBvcHMpO1xuXG4gICAgICAgICAgLy8gYWRkIGNvbm5lY3Rpb24gbWV0YWRhdGFcbiAgICAgICAgICBmb3IgKGNvbnN0IG9wIG9mIG9wcykge1xuICAgICAgICAgICAgUmVzb3VyY2UuYWRkQ29ubmVjdGlvbih7XG4gICAgICAgICAgICAgIGZyb206IGhvc3QsXG4gICAgICAgICAgICAgIHRvOiBvYmosXG4gICAgICAgICAgICAgIHJlbGF0aW9uc2hpcDogb3AsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdHJ1Y3RzIGFyZSBqdXN0IHBsYWluIG9iamVjdHNcbiAgICAgICAgaWYgKG9iai5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIk9iamVjdFwiKSB7XG4gICAgICAgICAgT2JqZWN0LnZhbHVlcyhvYmopLmZvckVhY2goKGl0ZW0pID0+XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQmluZE9iamVjdChpdGVtLCBob3N0LCBvcHMpXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgdW5hYmxlIHRvIHNlcmlhbGl6ZSBpbW11dGFibGUgZGF0YSBvYmplY3Qgb2YgdHlwZSAke29iai5jb25zdHJ1Y3Rvcj8ubmFtZX1gXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhvb2sgZm9yIHBlcmZvcm1pbmcgb3BlcmF0aW9ucyBhZnRlciB0aGUgdHJlZSBvZiByZXNvdXJjZXMgaGFzIGJlZW5cbiAgICogY3JlYXRlZCwgYnV0IGJlZm9yZSB0aGV5IGFyZSBzeW50aGVzaXplZC5cbiAgICpcbiAgICogQ3VycmVudGx5IHVzZWQgZm9yIGJpbmRpbmcgcmVzb3VyY2VzIHRvIGhvc3RzLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBfcHJlU3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICAvLyBQZXJmb3JtIHRoZSBsaXZlIGJpbmRpbmdzIGJldHdlZWVuIHJlc291cmNlcyBhbmQgaG9zdHNcbiAgICAvLyBCeSBhZ2dyZWdhdGluZyB0aGUgYmluZGluZyBvcGVyYXRpb25zLCB3ZSBjYW4gYXZvaWQgcGVyZm9ybWluZ1xuICAgIC8vIG11bHRpcGxlIGJpbmRpbmdzIGZvciB0aGUgc2FtZSByZXNvdXJjZS1ob3N0IHBhaXJzLlxuICAgIGZvciAoY29uc3QgW2hvc3QsIG9wc10gb2YgdGhpcy5iaW5kTWFwLmVudHJpZXMoKSkge1xuICAgICAgdGhpcy5fYmluZChob3N0LCBBcnJheS5mcm9tKG9wcykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBjb2RlIHNuaXBwZXQgdGhhdCBjYW4gYmUgdXNlZCB0byByZWZlcmVuY2UgdGhpcyByZXNvdXJjZSBpbmZsaWdodC5cbiAgICpcbiAgICogVE9ETzogc3VwcG9ydCBwYXNzaW5nIGFuIEluZmxpZ2h0UnVudGltZSBlbnVtIHRvIGluZGljYXRlIHdoaWNoIGxhbmd1YWdlXG4gICAqIHJ1bnRpbWUgd2UncmUgdGFyZ2V0aW5nLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBfdG9JbmZsaWdodCgpOiBDb2RlO1xuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBfaW5zcGVjdChpbnNwZWN0b3I6IFRyZWVJbnNwZWN0b3IpOiB2b2lkIHtcbiAgICBpbnNwZWN0b3IuYWRkQXR0cmlidXRlKFdJTkdfQVRUUklCVVRFX1JFU09VUkNFX1NUQVRFRlVMLCB0aGlzLnN0YXRlZnVsKTtcbiAgICBpbnNwZWN0b3IuYWRkQXR0cmlidXRlKFxuICAgICAgV0lOR19BVFRSSUJVVEVfUkVTT1VSQ0VfQ09OTkVDVElPTlMsXG4gICAgICB0aGlzLl9jb25uZWN0aW9ucy5tYXAoKGNvbm4pID0+ICh7XG4gICAgICAgIGRpcmVjdGlvbjogY29ubi5kaXJlY3Rpb24sXG4gICAgICAgIHJlbGF0aW9uc2hpcDogY29ubi5yZWxhdGlvbnNoaXAsXG4gICAgICAgIHJlc291cmNlOiBjb25uLnJlc291cmNlLm5vZGUucGF0aCxcbiAgICAgICAgaW1wbGljaXQ6IGNvbm4uaW1wbGljaXQsXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiTGlmdHNcIiBhIHZhbHVlIGludG8gYW4gaW5mbGlnaHQgY29udGV4dC4gSWYgdGhlIHZhbHVlIGlzIGEgcmVzb3VyY2UgKGkuZS4gaGFzIGEgYF90b0luZmxpZ2h0YFxuICAgKiBtZXRob2QpLCB0aGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBhbmQgdGhlIHJlc3VsdCB3aWxsIGJlIHJldHVybmVkLiBPdGhlcndpc2UsIHRoZSB2YWx1ZSBpc1xuICAgKiByZXR1cm5lZCBhcy1pcy5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBsaWZ0LlxuICAgKiBAcmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmFsdWUgaW4gYW4gaW5mbGlnaHQgY29udGV4dC5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcm90ZWN0ZWQgX2xpZnQodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZUltbXV0YWJsZURhdGEodmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGRpcmVjdGlvbiBvZiBhIGNvbm5lY3Rpb24uXG4gKlxuICogVmlzdWFsbHkgc3BlYWtpbmcsIGlmIGEgcmVzb3VyY2UgQSBoYXMgYW4gb3V0Ym91bmQgY29ubmVjdGlvbiB3aXRoIHJlc291cmNlIEIsXG4gKiB0aGUgYXJyb3cgd291bGQgcG9pbnQgZnJvbSBBIHRvIEIsIGFuZCB2aWNlIHZlcnNhIGZvciBpbmJvdW5kIGNvbm5lY3Rpb25zLlxuICovXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhpcyByZXNvdXJjZSBjYWxscywgdHJpZ2dlcnMsIG9yIHJlZmVyZW5jZXNcbiAgICogdGhlIHJlc291cmNlIGl0IGlzIGNvbm5lY3RlZCB0by5cbiAgICovXG4gIE9VVEJPVU5EID0gXCJvdXRib3VuZFwiLFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGlzIHJlc291cmNlIGlzIGNhbGxlZCwgdHJpZ2dlcmVkLCBvciByZWZlcmVuY2VkIGJ5XG4gICAqIHRoZSByZXNvdXJjZSBpdCBpcyBjb25uZWN0ZWQgdG8uXG4gICAqL1xuICBJTkJPVU5EID0gXCJpbmJvdW5kXCIsXG59XG5cbi8qKlxuICogUHJvcHMgZm9yIGBSZXNvdXJjZS5hZGRDb25uZWN0aW9uYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBZGRDb25uZWN0aW9uUHJvcHMge1xuICAvKipcbiAgICogVGhlIHJlc291cmNlIGNyZWF0aW5nIHRoZSBjb25uZWN0aW9uIHRvIGB0b2AuXG4gICAqL1xuICByZWFkb25seSBmcm9tOiBJUmVzb3VyY2U7XG5cbiAgLyoqXG4gICAqIFRoZSByZXNvdXJjZSBgZnJvbWAgaXMgY29ubmVjdGluZyB0by5cbiAgICovXG4gIHJlYWRvbmx5IHRvOiBJUmVzb3VyY2U7XG5cbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHRoZSByZXNvdXJjZXMuXG4gICAqL1xuICByZWFkb25seSByZWxhdGlvbnNoaXA6IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgcmVsYXRpb25zaGlwIGlzIGltcGxpY2l0LCBpLmUuIGl0IGlzIG5vdCBleHBsaWNpdGx5XG4gICAqIGRlZmluZWQgYnkgdGhlIHVzZXIuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICByZWFkb25seSBpbXBsaWNpdD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQSBjb25uZWN0aW9uIGJldHdlZW4gdHdvIHJlc291cmNlcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb25uZWN0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSByZXNvdXJjZSB0aGlzIGNvbm5lY3Rpb24gaXMgdG8uXG4gICAqL1xuICByZWFkb25seSByZXNvdXJjZTogSVJlc291cmNlO1xuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiByZWxhdGlvbnNoaXAgd2l0aCB0aGUgcmVzb3VyY2UuXG4gICAqL1xuICByZWFkb25seSByZWxhdGlvbnNoaXA6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGRpcmVjdGlvbiBvZiB0aGUgY29ubmVjdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5IGRpcmVjdGlvbjogRGlyZWN0aW9uO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSByZWxhdGlvbnNoaXAgaXMgaW1wbGljaXQsIGkuZS4gaXQgaXMgbm90IGV4cGxpY2l0bHlcbiAgICogZGVmaW5lZCBieSB0aGUgdXNlci5cbiAgICovXG4gIHJlYWRvbmx5IGltcGxpY2l0OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEFubm90YXRpb25zIGFib3V0IHdoYXQgcmVzb3VyY2VzIGFuIGluZmxpZ2h0IG9wZXJhdGlvbiBtYXkgYWNjZXNzLlxuICpcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBzYXlzIHRoYXQgdGhlIG9wZXJhdGlvbiBtYXkgY2FsbCBcInB1dFwiIG9uIGEgcmVzb3VyY2VcbiAqIGF0IFwidGhpcy5pbm5lclwiLCBvciBpdCBtYXkgY2FsbCBcImdldFwiIG9uIGEgcmVzb3VyY2UgcGFzc2VkIGFzIGFuIGFyZ3VtZW50IG5hbWVkXG4gKiBcIm90aGVyXCIuXG4gKiBAZXhhbXBsZVxuICogeyBcInRoaXMuaW5uZXJcIjogeyBvcHM6IFtcInB1dFwiXSB9LCBcIm90aGVyXCI6IHsgb3BzOiBbXCJnZXRcIl0gfSB9XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT3BlcmF0aW9uQW5ub3RhdGlvbiB7XG4gIFtyZXNvdXJjZTogc3RyaW5nXToge1xuICAgIG9wczogc3RyaW5nW107XG4gIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgdGhlIERpc3BsYXkgY2xhc3MuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlzcGxheVByb3BzIHtcbiAgLyoqXG4gICAqIFRpdGxlIG9mIHRoZSByZXNvdXJjZS5cbiAgICogQGRlZmF1bHQgLSBObyB0aXRsZS5cbiAgICovXG4gIHJlYWRvbmx5IHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiBvZiB0aGUgcmVzb3VyY2UuXG4gICAqIEBkZWZhdWx0IC0gTm8gZGVzY3JpcHRpb24uXG4gICAqL1xuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgcmVzb3VyY2Ugc2hvdWxkIGJlIGhpZGRlbiBmcm9tIHRoZSBVSS5cbiAgICogQGRlZmF1bHQgLSBVbmRlZmluZWRcbiAgICovXG4gIHJlYWRvbmx5IGhpZGRlbj86IGJvb2xlYW47XG59XG5cbi8qKlxuICogSW5mb3JtYXRpb24gb24gaG93IHRvIGRpc3BsYXkgYSByZXNvdXJjZSBpbiB0aGUgVUkuXG4gKi9cbmV4cG9ydCBjbGFzcyBEaXNwbGF5IHtcbiAgLyoqXG4gICAqIFRpdGxlIG9mIHRoZSByZXNvdXJjZS5cbiAgICovXG4gIHB1YmxpYyB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogRGVzY3JpcHRpb24gb2YgdGhlIHJlc291cmNlLlxuICAgKi9cbiAgcHVibGljIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSByZXNvdXJjZSBzaG91bGQgYmUgaGlkZGVuIGZyb20gdGhlIFVJLlxuICAgKi9cbiAgcHVibGljIGhpZGRlbj86IGJvb2xlYW47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByb3BzPzogRGlzcGxheVByb3BzKSB7XG4gICAgdGhpcy50aXRsZSA9IHByb3BzPy50aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHM/LmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaGlkZGVuID0gcHJvcHM/LmhpZGRlbjtcbiAgfVxufVxuIl19

/***/ }),

/***/ 9162:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TreeInspector = exports.synthesizeTree = void 0;
const fs = __importStar(__nccwpck_require__(7147));
const path = __importStar(__nccwpck_require__(1017));
const inflight_1 = __nccwpck_require__(4822);
const resource_1 = __nccwpck_require__(3468);
const TREE_FILE_PATH = "tree.json";
/**
 * Symbol for accessing jsii runtime information.
 */
const JSII_RUNTIME_SYMBOL = Symbol.for("jsii.rtti");
function constructInfoFromConstruct(construct) {
    const jsiiRuntimeInfo = Object.getPrototypeOf(construct).constructor[JSII_RUNTIME_SYMBOL];
    if (typeof jsiiRuntimeInfo === "object" &&
        jsiiRuntimeInfo !== null &&
        typeof jsiiRuntimeInfo.fqn === "string" &&
        typeof jsiiRuntimeInfo.version === "string") {
        return { fqn: jsiiRuntimeInfo.fqn, version: jsiiRuntimeInfo.version };
    }
    return undefined;
}
function synthesizeTree(app, outdir) {
    const visit = (construct) => {
        const children = construct.node.children.map((c) => visit(c));
        const childrenMap = children
            .filter((child) => child !== undefined)
            .reduce((map, child) => Object.assign(map, { [child.id]: child }), {});
        const node = {
            id: construct.node.id || "App",
            path: construct.node.path,
            children: Object.keys(childrenMap).length === 0 ? undefined : childrenMap,
            attributes: synthAttributes(construct),
            constructInfo: constructInfoFromConstruct(construct),
            display: synthDisplay(construct),
        };
        return node;
    };
    const tree = {
        version: "tree-0.1",
        tree: visit(app.node.root),
    };
    fs.writeFileSync(path.join(outdir, TREE_FILE_PATH), JSON.stringify(tree, undefined, 2), { encoding: "utf8" });
}
exports.synthesizeTree = synthesizeTree;
function synthAttributes(construct) {
    // check if a construct implements IInspectable
    function canInspect(inspectable) {
        return inspectable._inspect !== undefined;
    }
    const inspector = new TreeInspector();
    // get attributes from the inspector
    if (canInspect(construct)) {
        construct._inspect(inspector);
        return inspector.attributes;
    }
    return undefined;
}
function isIResource(construct) {
    return construct instanceof resource_1.Resource || construct instanceof inflight_1.Inflight;
}
function synthDisplay(construct) {
    if (!isIResource(construct)) {
        return;
    }
    const { display } = construct;
    if (display.description || display.title || display.hidden) {
        return display;
    }
    return;
}
/**
 * Inspector that maintains an attribute bag
 */
class TreeInspector {
    constructor() {
        /**
         * Represents the bag of attributes as key-value pairs.
         */
        this.attributes = {};
    }
    /**
     * Adds attribute to bag.
     *
     * @param key - key for metadata
     * @param value - value of metadata.
     */
    addAttribute(key, value) {
        this.attributes[key] = value;
    }
}
exports.TreeInspector = TreeInspector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3RyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBeUI7QUFDekIsMkNBQTZCO0FBRzdCLHlDQUFzQztBQUN0Qyx5Q0FBaUQ7QUFFakQsTUFBTSxjQUFjLEdBQUcsV0FBVyxDQUFDO0FBMkVuQzs7R0FFRztBQUNILE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQWlCcEQsU0FBUywwQkFBMEIsQ0FDakMsU0FBcUI7SUFFckIsTUFBTSxlQUFlLEdBQ25CLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDcEUsSUFDRSxPQUFPLGVBQWUsS0FBSyxRQUFRO1FBQ25DLGVBQWUsS0FBSyxJQUFJO1FBQ3hCLE9BQU8sZUFBZSxDQUFDLEdBQUcsS0FBSyxRQUFRO1FBQ3ZDLE9BQU8sZUFBZSxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQzNDO1FBQ0EsT0FBTyxFQUFFLEdBQUcsRUFBRSxlQUFlLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDdkU7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBRUQsU0FBZ0IsY0FBYyxDQUFDLEdBQVEsRUFBRSxNQUFjO0lBQ3JELE1BQU0sS0FBSyxHQUFHLENBQUMsU0FBcUIsRUFBcUIsRUFBRTtRQUN6RCxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELE1BQU0sV0FBVyxHQUFHLFFBQVE7YUFDekIsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDO2FBQ3RDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxLQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUxRSxNQUFNLElBQUksR0FBc0I7WUFDOUIsRUFBRSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEtBQUs7WUFDOUIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVc7WUFDekUsVUFBVSxFQUFFLGVBQWUsQ0FBQyxTQUFTLENBQUM7WUFDdEMsYUFBYSxFQUFFLDBCQUEwQixDQUFDLFNBQVMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsWUFBWSxDQUFDLFNBQVMsQ0FBQztTQUNqQyxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDLENBQUM7SUFFRixNQUFNLElBQUksR0FBa0I7UUFDMUIsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztLQUMzQixDQUFDO0lBRUYsRUFBRSxDQUFDLGFBQWEsQ0FDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsRUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUNsQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FDckIsQ0FBQztBQUNKLENBQUM7QUE3QkQsd0NBNkJDO0FBRUQsU0FBUyxlQUFlLENBQ3RCLFNBQXFCO0lBRXJCLCtDQUErQztJQUMvQyxTQUFTLFVBQVUsQ0FBQyxXQUFnQjtRQUNsQyxPQUFPLFdBQVcsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDO0lBQzVDLENBQUM7SUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO0lBRXRDLG9DQUFvQztJQUNwQyxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUN6QixTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sU0FBUyxDQUFDLFVBQVUsQ0FBQztLQUM3QjtJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxTQUFxQjtJQUN4QyxPQUFPLFNBQVMsWUFBWSxtQkFBUSxJQUFJLFNBQVMsWUFBWSxtQkFBUSxDQUFDO0FBQ3hFLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxTQUFxQjtJQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQzNCLE9BQU87S0FDUjtJQUNELE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxTQUFTLENBQUM7SUFDOUIsSUFBSSxPQUFPLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUMxRCxPQUFPLE9BQU8sQ0FBQztLQUNoQjtJQUNELE9BQU87QUFDVCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFhLGFBQWE7SUFBMUI7UUFDRTs7V0FFRztRQUNhLGVBQVUsR0FBMkIsRUFBRSxDQUFDO0lBVzFELENBQUM7SUFUQzs7Ozs7T0FLRztJQUNJLFlBQVksQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0NBQ0Y7QUFmRCxzQ0FlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgSUNvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IEluZmxpZ2h0IH0gZnJvbSBcIi4vaW5mbGlnaHRcIjtcbmltcG9ydCB7IElSZXNvdXJjZSwgUmVzb3VyY2UgfSBmcm9tIFwiLi9yZXNvdXJjZVwiO1xuXG5jb25zdCBUUkVFX0ZJTEVfUEFUSCA9IFwidHJlZS5qc29uXCI7XG5cbi8qKlxuICogQSBub2RlIGluIHRoZSBjb25zdHJ1Y3QgdHJlZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb25zdHJ1Y3RUcmVlTm9kZSB7XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIG5vZGUuIElzIHBhcnQgb2YgdGhlIGBwYXRoYC5cbiAgICovXG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwYXRoIG9mIHRoZSBub2RlLlxuICAgKi9cbiAgcmVhZG9ubHkgcGF0aDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgY2hpbGQgbm9kZXMuXG4gICAqL1xuICByZWFkb25seSBjaGlsZHJlbj86IHsgW2tleTogc3RyaW5nXTogQ29uc3RydWN0VHJlZU5vZGUgfTtcblxuICAvKipcbiAgICogVGhlIG5vZGUgYXR0cmlidXRlcy5cbiAgICovXG4gIHJlYWRvbmx5IGF0dHJpYnV0ZXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuXG4gIC8qKlxuICAgKiBJbmZvcm1hdGlvbiBvbiB0aGUgY29uc3RydWN0IGNsYXNzIHRoYXQgbGVkIHRvIHRoaXMgbm9kZSwgaWYgYXZhaWxhYmxlLlxuICAgKi9cbiAgcmVhZG9ubHkgY29uc3RydWN0SW5mbz86IENvbnN0cnVjdEluZm87XG5cbiAgLyoqXG4gICAqIEluZm9ybWF0aW9uIG9uIGhvdyB0byBkaXNwbGF5IHRoaXMgbm9kZSBpbiB0aGUgVUkuXG4gICAqL1xuICByZWFkb25seSBkaXNwbGF5PzogRGlzcGxheUluZm87XG59XG5cbi8qKlxuICogSW5mb3JtYXRpb24gb24gaG93IHRvIGRpc3BsYXkgYSBjb25zdHJ1Y3QgaW4gdGhlIFVJLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXlJbmZvIHtcbiAgLyoqXG4gICAqIFRpdGxlIG9mIHRoZSByZXNvdXJjZS5cbiAgICogQGRlZmF1bHQgLSBUaGUgdHlwZSBhbmQvb3IgaWRlbnRpZmllciBvZiB0aGUgcmVzb3VyY2VcbiAgICovXG4gIHJlYWRvbmx5IHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiBvZiB0aGUgcmVzb3VyY2UuXG4gICAqIEBkZWZhdWx0IC0gTm8gZGVzY3JpcHRpb25cbiAgICovXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSByZXNvdXJjZSBzaG91bGQgYmUgaGlkZGVuIGZyb20gdGhlIFVJLlxuICAgKiBAZGVmYXVsdCBmYWxzZSAodmlzaWJsZSlcbiAgICovXG4gIHJlYWRvbmx5IGhpZGRlbj86IGJvb2xlYW47XG59XG5cbi8qKlxuICogVGhlIGNvbnN0cnVjdCB0cmVlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbnN0cnVjdFRyZWUge1xuICAvKipcbiAgICogVGhlIGNvbnN0cnVjdCB0cmVlIHZlcnNpb24uXG4gICAqL1xuICByZWFkb25seSB2ZXJzaW9uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSByb290IG5vZGUuXG4gICAqL1xuICByZWFkb25seSB0cmVlOiBDb25zdHJ1Y3RUcmVlTm9kZTtcbn1cblxuLyoqXG4gKiBTeW1ib2wgZm9yIGFjY2Vzc2luZyBqc2lpIHJ1bnRpbWUgaW5mb3JtYXRpb24uXG4gKi9cbmNvbnN0IEpTSUlfUlVOVElNRV9TWU1CT0wgPSBTeW1ib2wuZm9yKFwianNpaS5ydHRpXCIpO1xuXG4vKipcbiAqIFNvdXJjZSBpbmZvcm1hdGlvbiBvbiBhIGNvbnN0cnVjdCAoY2xhc3MgZnFuIGFuZCB2ZXJzaW9uKS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb25zdHJ1Y3RJbmZvIHtcbiAgLyoqXG4gICAqIEZ1bGx5IHF1YWxpZmllZCBjbGFzcyBuYW1lLlxuICAgKi9cbiAgcmVhZG9ubHkgZnFuOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZlcnNpb24gb2YgdGhlIG1vZHVsZS5cbiAgICovXG4gIHJlYWRvbmx5IHZlcnNpb246IHN0cmluZztcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0SW5mb0Zyb21Db25zdHJ1Y3QoXG4gIGNvbnN0cnVjdDogSUNvbnN0cnVjdFxuKTogQ29uc3RydWN0SW5mbyB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IGpzaWlSdW50aW1lSW5mbyA9XG4gICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKGNvbnN0cnVjdCkuY29uc3RydWN0b3JbSlNJSV9SVU5USU1FX1NZTUJPTF07XG4gIGlmIChcbiAgICB0eXBlb2YganNpaVJ1bnRpbWVJbmZvID09PSBcIm9iamVjdFwiICYmXG4gICAganNpaVJ1bnRpbWVJbmZvICE9PSBudWxsICYmXG4gICAgdHlwZW9mIGpzaWlSdW50aW1lSW5mby5mcW4gPT09IFwic3RyaW5nXCIgJiZcbiAgICB0eXBlb2YganNpaVJ1bnRpbWVJbmZvLnZlcnNpb24gPT09IFwic3RyaW5nXCJcbiAgKSB7XG4gICAgcmV0dXJuIHsgZnFuOiBqc2lpUnVudGltZUluZm8uZnFuLCB2ZXJzaW9uOiBqc2lpUnVudGltZUluZm8udmVyc2lvbiB9O1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzeW50aGVzaXplVHJlZShhcHA6IEFwcCwgb3V0ZGlyOiBzdHJpbmcpIHtcbiAgY29uc3QgdmlzaXQgPSAoY29uc3RydWN0OiBJQ29uc3RydWN0KTogQ29uc3RydWN0VHJlZU5vZGUgPT4ge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gY29uc3RydWN0Lm5vZGUuY2hpbGRyZW4ubWFwKChjKSA9PiB2aXNpdChjKSk7XG4gICAgY29uc3QgY2hpbGRyZW5NYXAgPSBjaGlsZHJlblxuICAgICAgLmZpbHRlcigoY2hpbGQpID0+IGNoaWxkICE9PSB1bmRlZmluZWQpXG4gICAgICAucmVkdWNlKChtYXAsIGNoaWxkKSA9PiBPYmplY3QuYXNzaWduKG1hcCwgeyBbY2hpbGQhLmlkXTogY2hpbGQgfSksIHt9KTtcblxuICAgIGNvbnN0IG5vZGU6IENvbnN0cnVjdFRyZWVOb2RlID0ge1xuICAgICAgaWQ6IGNvbnN0cnVjdC5ub2RlLmlkIHx8IFwiQXBwXCIsXG4gICAgICBwYXRoOiBjb25zdHJ1Y3Qubm9kZS5wYXRoLFxuICAgICAgY2hpbGRyZW46IE9iamVjdC5rZXlzKGNoaWxkcmVuTWFwKS5sZW5ndGggPT09IDAgPyB1bmRlZmluZWQgOiBjaGlsZHJlbk1hcCxcbiAgICAgIGF0dHJpYnV0ZXM6IHN5bnRoQXR0cmlidXRlcyhjb25zdHJ1Y3QpLFxuICAgICAgY29uc3RydWN0SW5mbzogY29uc3RydWN0SW5mb0Zyb21Db25zdHJ1Y3QoY29uc3RydWN0KSxcbiAgICAgIGRpc3BsYXk6IHN5bnRoRGlzcGxheShjb25zdHJ1Y3QpLFxuICAgIH07XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICBjb25zdCB0cmVlOiBDb25zdHJ1Y3RUcmVlID0ge1xuICAgIHZlcnNpb246IFwidHJlZS0wLjFcIixcbiAgICB0cmVlOiB2aXNpdChhcHAubm9kZS5yb290KSxcbiAgfTtcblxuICBmcy53cml0ZUZpbGVTeW5jKFxuICAgIHBhdGguam9pbihvdXRkaXIsIFRSRUVfRklMRV9QQVRIKSxcbiAgICBKU09OLnN0cmluZ2lmeSh0cmVlLCB1bmRlZmluZWQsIDIpLFxuICAgIHsgZW5jb2Rpbmc6IFwidXRmOFwiIH1cbiAgKTtcbn1cblxuZnVuY3Rpb24gc3ludGhBdHRyaWJ1dGVzKFxuICBjb25zdHJ1Y3Q6IElDb25zdHJ1Y3Rcbik6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCB1bmRlZmluZWQge1xuICAvLyBjaGVjayBpZiBhIGNvbnN0cnVjdCBpbXBsZW1lbnRzIElJbnNwZWN0YWJsZVxuICBmdW5jdGlvbiBjYW5JbnNwZWN0KGluc3BlY3RhYmxlOiBhbnkpOiBpbnNwZWN0YWJsZSBpcyBJSW5zcGVjdGFibGUge1xuICAgIHJldHVybiBpbnNwZWN0YWJsZS5faW5zcGVjdCAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3QgaW5zcGVjdG9yID0gbmV3IFRyZWVJbnNwZWN0b3IoKTtcblxuICAvLyBnZXQgYXR0cmlidXRlcyBmcm9tIHRoZSBpbnNwZWN0b3JcbiAgaWYgKGNhbkluc3BlY3QoY29uc3RydWN0KSkge1xuICAgIGNvbnN0cnVjdC5faW5zcGVjdChpbnNwZWN0b3IpO1xuICAgIHJldHVybiBpbnNwZWN0b3IuYXR0cmlidXRlcztcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc0lSZXNvdXJjZShjb25zdHJ1Y3Q6IElDb25zdHJ1Y3QpOiBjb25zdHJ1Y3QgaXMgSVJlc291cmNlIHtcbiAgcmV0dXJuIGNvbnN0cnVjdCBpbnN0YW5jZW9mIFJlc291cmNlIHx8IGNvbnN0cnVjdCBpbnN0YW5jZW9mIEluZmxpZ2h0O1xufVxuXG5mdW5jdGlvbiBzeW50aERpc3BsYXkoY29uc3RydWN0OiBJQ29uc3RydWN0KTogRGlzcGxheUluZm8gfCB1bmRlZmluZWQge1xuICBpZiAoIWlzSVJlc291cmNlKGNvbnN0cnVjdCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBkaXNwbGF5IH0gPSBjb25zdHJ1Y3Q7XG4gIGlmIChkaXNwbGF5LmRlc2NyaXB0aW9uIHx8IGRpc3BsYXkudGl0bGUgfHwgZGlzcGxheS5oaWRkZW4pIHtcbiAgICByZXR1cm4gZGlzcGxheTtcbiAgfVxuICByZXR1cm47XG59XG5cbi8qKlxuICogSW5zcGVjdG9yIHRoYXQgbWFpbnRhaW5zIGFuIGF0dHJpYnV0ZSBiYWdcbiAqL1xuZXhwb3J0IGNsYXNzIFRyZWVJbnNwZWN0b3Ige1xuICAvKipcbiAgICogUmVwcmVzZW50cyB0aGUgYmFnIG9mIGF0dHJpYnV0ZXMgYXMga2V5LXZhbHVlIHBhaXJzLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICAvKipcbiAgICogQWRkcyBhdHRyaWJ1dGUgdG8gYmFnLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IC0ga2V5IGZvciBtZXRhZGF0YVxuICAgKiBAcGFyYW0gdmFsdWUgLSB2YWx1ZSBvZiBtZXRhZGF0YS5cbiAgICovXG4gIHB1YmxpYyBhZGRBdHRyaWJ1dGUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmF0dHJpYnV0ZXNba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBleGFtaW5pbmcgYSBjb25zdHJ1Y3QgYW5kIGV4cG9zaW5nIG1ldGFkYXRhLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElJbnNwZWN0YWJsZSB7XG4gIC8qKlxuICAgKiBFeGFtaW5lcyBjb25zdHJ1Y3RcbiAgICpcbiAgICogQHBhcmFtIGluc3BlY3RvciAtIHRyZWUgaW5zcGVjdG9yIHRvIGNvbGxlY3QgYW5kIHByb2Nlc3MgYXR0cmlidXRlc1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9pbnNwZWN0KGluc3BlY3RvcjogVHJlZUluc3BlY3Rvcik6IHZvaWQ7XG59XG4iXX0=

/***/ }),

/***/ 7229:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(493), exports);
__exportStar(__nccwpck_require__(5292), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE0QjtBQUM1Qiw4Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9qc29uLWZpbGVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RleHQtZmlsZVwiO1xuIl19

/***/ }),

/***/ 493:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JsonFile = void 0;
const core_1 = __nccwpck_require__(6526);
/**
 * Represents a text file that should be synthesized in the app's outdir.
 */
class JsonFile extends core_1.FileBase {
    constructor(scope, id, filePath, props) {
        super(scope, id, filePath);
        this.obj = props.obj;
    }
    render() {
        return JSON.stringify(this.obj, undefined, 2);
    }
}
exports.JsonFile = JsonFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1maWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZzL2pzb24tZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxrQ0FBbUM7QUFZbkM7O0dBRUc7QUFDSCxNQUFhLFFBQVMsU0FBUSxlQUFRO0lBR3BDLFlBQ0UsS0FBZ0IsRUFDaEIsRUFBVSxFQUNWLFFBQWdCLEVBQ2hCLEtBQW9CO1FBRXBCLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2QixDQUFDO0lBRVMsTUFBTTtRQUNkLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0Y7QUFqQkQsNEJBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCB7IEZpbGVCYXNlIH0gZnJvbSBcIi4uL2NvcmVcIjtcblxuLyoqXG4gKiBQcm9wcyBmb3IgYEpzb25GaWxlYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBKc29uRmlsZVByb3BzIHtcbiAgLyoqXG4gICAqIFRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIHNlcmlhbGl6ZWQgaW50byB0aGUgZmlsZSBkdXJpbmcgc3ludGhlc2lzLlxuICAgKi9cbiAgcmVhZG9ubHkgb2JqOiBhbnk7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHRleHQgZmlsZSB0aGF0IHNob3VsZCBiZSBzeW50aGVzaXplZCBpbiB0aGUgYXBwJ3Mgb3V0ZGlyLlxuICovXG5leHBvcnQgY2xhc3MgSnNvbkZpbGUgZXh0ZW5kcyBGaWxlQmFzZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgb2JqOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NvcGU6IENvbnN0cnVjdCxcbiAgICBpZDogc3RyaW5nLFxuICAgIGZpbGVQYXRoOiBzdHJpbmcsXG4gICAgcHJvcHM6IEpzb25GaWxlUHJvcHNcbiAgKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBmaWxlUGF0aCk7XG5cbiAgICB0aGlzLm9iaiA9IHByb3BzLm9iajtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMub2JqLCB1bmRlZmluZWQsIDIpO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ 5292:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextFile = void 0;
const core_1 = __nccwpck_require__(6526);
/**
 * Represents a text file that should be synthesized in the app's outdir.
 */
class TextFile extends core_1.FileBase {
    constructor(scope, id, filePath, props) {
        super(scope, id, filePath);
        this.lines = props?.lines ?? [];
    }
    /**
     * Append a line to the text file's contents.
     */
    addLine(line) {
        this.lines.push(line);
    }
    render() {
        return this.lines.join("\n");
    }
}
exports.TextFile = TextFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZzL3RleHQtZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxrQ0FBbUM7QUFlbkM7O0dBRUc7QUFDSCxNQUFhLFFBQVMsU0FBUSxlQUFRO0lBR3BDLFlBQ0UsS0FBZ0IsRUFDaEIsRUFBVSxFQUNWLFFBQWdCLEVBQ2hCLEtBQXFCO1FBRXJCLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksT0FBTyxDQUFDLElBQVk7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVTLE1BQU07UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDRjtBQXhCRCw0QkF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgRmlsZUJhc2UgfSBmcm9tIFwiLi4vY29yZVwiO1xuXG4vKipcbiAqIFByb3BzIGZvciBgVGV4dEZpbGVgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRleHRGaWxlUHJvcHMge1xuICAvKipcbiAgICogVGhlIGxpbmVzIG9mIHRleHQgdGhhdCB3aWxsIGJlIHNlcmlhbGl6ZWQgaW50byB0aGUgZmlsZSBkdXJpbmcgc3ludGhlc2lzLlxuICAgKiBUaGV5IHdpbGwgYmUgam9pbmVkIHdpdGggbmV3bGluZSBjaGFyYWN0ZXJzLlxuICAgKlxuICAgKiBAZGVmYXVsdCBbXVxuICAgKi9cbiAgcmVhZG9ubHkgbGluZXM/OiBzdHJpbmdbXTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgdGV4dCBmaWxlIHRoYXQgc2hvdWxkIGJlIHN5bnRoZXNpemVkIGluIHRoZSBhcHAncyBvdXRkaXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0RmlsZSBleHRlbmRzIEZpbGVCYXNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBsaW5lczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NvcGU6IENvbnN0cnVjdCxcbiAgICBpZDogc3RyaW5nLFxuICAgIGZpbGVQYXRoOiBzdHJpbmcsXG4gICAgcHJvcHM/OiBUZXh0RmlsZVByb3BzXG4gICkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgZmlsZVBhdGgpO1xuXG4gICAgdGhpcy5saW5lcyA9IHByb3BzPy5saW5lcyA/PyBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmQgYSBsaW5lIHRvIHRoZSB0ZXh0IGZpbGUncyBjb250ZW50cy5cbiAgICovXG4gIHB1YmxpYyBhZGRMaW5lKGxpbmU6IHN0cmluZykge1xuICAgIHRoaXMubGluZXMucHVzaChsaW5lKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZXMuam9pbihcIlxcblwiKTtcbiAgfVxufVxuIl19

/***/ }),

/***/ 2898:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// These classes are used by Wing to provide JSII subsets of the JS Array class.
// They should not be consumed directly by users.
// TODO: These should be interfaces, currently Wing does not support interface JSII imports
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MutableArray = exports.ImmutableArray = void 0;
/**
 * Immutable Array
 *
 * @typeparam T1
 */
class ImmutableArray {
    /**
     * The length of the array
     * @returns the length of the array
     */
    get length() {
        throw new Error("Abstract");
    }
    /**
     * Get the value at the given index
     * @param index index of the value to get
     * @returns the value at the given index
     */
    at(index) {
        index;
        throw new Error("Abstract");
    }
    /**
     * Create a mutable shallow copy of this array
     *
     * @macro [...($self$)]
     *
     * @returns a MutableArray with the same values as this array
     */
    copyMut() {
        throw new Error("Macro");
    }
    /**
     * Create an immutable shallow copy of this array
     *
     * @macro Object.freeze([...($self$)])
     *
     * @returns an ImmutableArray with the same values as this array
     */
    copy() {
        throw new Error("Macro");
    }
}
exports.ImmutableArray = ImmutableArray;
/**
 * Mutable Array
 *
 * @typeparam T1
 */
class MutableArray extends ImmutableArray {
    /**
     * Add value to end of array
     * @param value value to add
     */
    push(value) {
        value;
        throw new Error("Abstract");
    }
    /**
     * Remove value from end of array
     * @returns the value removed
     */
    pop() {
        throw new Error("Abstract");
    }
}
exports.MutableArray = MutableArray;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc3RkL2FycmF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnRkFBZ0Y7QUFDaEYsaURBQWlEO0FBQ2pELDJGQUEyRjs7O0FBSTNGOzs7O0dBSUc7QUFDSCxNQUFhLGNBQWM7SUFDekI7OztPQUdHO0lBQ0gsSUFBVyxNQUFNO1FBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEVBQUUsQ0FBQyxLQUFhO1FBQ3JCLEtBQUssQ0FBQztRQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLE9BQU87UUFDWixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxJQUFJO1FBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUF4Q0Qsd0NBd0NDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQWEsWUFBYSxTQUFRLGNBQWM7SUFDOUM7OztPQUdHO0lBQ0ksSUFBSSxDQUFDLEtBQVM7UUFDbkIsS0FBSyxDQUFDO1FBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksR0FBRztRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGO0FBakJELG9DQWlCQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZXNlIGNsYXNzZXMgYXJlIHVzZWQgYnkgV2luZyB0byBwcm92aWRlIEpTSUkgc3Vic2V0cyBvZiB0aGUgSlMgQXJyYXkgY2xhc3MuXG4vLyBUaGV5IHNob3VsZCBub3QgYmUgY29uc3VtZWQgZGlyZWN0bHkgYnkgdXNlcnMuXG4vLyBUT0RPOiBUaGVzZSBzaG91bGQgYmUgaW50ZXJmYWNlcywgY3VycmVudGx5IFdpbmcgZG9lcyBub3Qgc3VwcG9ydCBpbnRlcmZhY2UgSlNJSSBpbXBvcnRzXG5cbmltcG9ydCB7IFQxIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG4vKipcbiAqIEltbXV0YWJsZSBBcnJheVxuICpcbiAqIEB0eXBlcGFyYW0gVDFcbiAqL1xuZXhwb3J0IGNsYXNzIEltbXV0YWJsZUFycmF5IHtcbiAgLyoqXG4gICAqIFRoZSBsZW5ndGggb2YgdGhlIGFycmF5XG4gICAqIEByZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5XG4gICAqL1xuICBwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0XCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAqIEBwYXJhbSBpbmRleCBpbmRleCBvZiB0aGUgdmFsdWUgdG8gZ2V0XG4gICAqIEByZXR1cm5zIHRoZSB2YWx1ZSBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICovXG4gIHB1YmxpYyBhdChpbmRleDogbnVtYmVyKTogVDEge1xuICAgIGluZGV4O1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0XCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG11dGFibGUgc2hhbGxvdyBjb3B5IG9mIHRoaXMgYXJyYXlcbiAgICpcbiAgICogQG1hY3JvIFsuLi4oJHNlbGYkKV1cbiAgICpcbiAgICogQHJldHVybnMgYSBNdXRhYmxlQXJyYXkgd2l0aCB0aGUgc2FtZSB2YWx1ZXMgYXMgdGhpcyBhcnJheVxuICAgKi9cbiAgcHVibGljIGNvcHlNdXQoKTogTXV0YWJsZUFycmF5IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNYWNyb1wiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW1tdXRhYmxlIHNoYWxsb3cgY29weSBvZiB0aGlzIGFycmF5XG4gICAqXG4gICAqIEBtYWNybyBPYmplY3QuZnJlZXplKFsuLi4oJHNlbGYkKV0pXG4gICAqXG4gICAqIEByZXR1cm5zIGFuIEltbXV0YWJsZUFycmF5IHdpdGggdGhlIHNhbWUgdmFsdWVzIGFzIHRoaXMgYXJyYXlcbiAgICovXG4gIHB1YmxpYyBjb3B5KCk6IEltbXV0YWJsZUFycmF5IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNYWNyb1wiKTtcbiAgfVxufVxuXG4vKipcbiAqIE11dGFibGUgQXJyYXlcbiAqXG4gKiBAdHlwZXBhcmFtIFQxXG4gKi9cbmV4cG9ydCBjbGFzcyBNdXRhYmxlQXJyYXkgZXh0ZW5kcyBJbW11dGFibGVBcnJheSB7XG4gIC8qKlxuICAgKiBBZGQgdmFsdWUgdG8gZW5kIG9mIGFycmF5XG4gICAqIEBwYXJhbSB2YWx1ZSB2YWx1ZSB0byBhZGRcbiAgICovXG4gIHB1YmxpYyBwdXNoKHZhbHVlOiBUMSk6IHZvaWQge1xuICAgIHZhbHVlO1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0XCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB2YWx1ZSBmcm9tIGVuZCBvZiBhcnJheVxuICAgKiBAcmV0dXJucyB0aGUgdmFsdWUgcmVtb3ZlZFxuICAgKi9cbiAgcHVibGljIHBvcCgpOiBUMSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3RcIik7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ 9702:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Duration = void 0;
/**
 * Represents a length of time.
 */
class Duration {
    /**
     * Create a Duration representing an amount of minutes
     *
     * @param amount the amount of Minutes the `Duration` will represent.
     * @returns a new `Duration` representing `amount` Minutes.
     */
    static fromMinutes(amount) {
        return new Duration(amount * 60);
    }
    /**
     * Create a Duration representing an amount of hours
     *
     * @param amount the amount of Hours the `Duration` will represent.
     * @returns a new `Duration` representing `amount` Hours.
     */
    static fromHours(amount) {
        return new Duration(amount * 60 * 60);
    }
    /**
     * Create a Duration representing an amount of seconds
     *
     * @param amount the amount of Seconds the `Duration` will represent.
     * @returns a new `Duration` representing `amount` Seconds.
     */
    static fromSeconds(amount) {
        return new Duration(amount);
    }
    constructor(seconds) {
        this.seconds = seconds;
    }
    /**
     * Return the total number of minutes in this Duration
     *
     * @returns the value of this `Duration` expressed in Minutes.
     */
    get minutes() {
        return this.seconds / 60;
    }
    /**
     * Return the total number of hours in this Duration
     *
     * @returns the value of this `Duration` expressed in Hours.
     */
    get hours() {
        return this.minutes / 60;
    }
}
exports.Duration = Duration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc3RkL2R1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOztHQUVHO0FBQ0gsTUFBYSxRQUFRO0lBQ25COzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFjO1FBQ3RDLE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBYztRQUNwQyxPQUFPLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFjO1FBQ3RDLE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVNELFlBQW9CLE9BQWU7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQztDQUNGO0FBM0RELDRCQTJEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVwcmVzZW50cyBhIGxlbmd0aCBvZiB0aW1lLlxuICovXG5leHBvcnQgY2xhc3MgRHVyYXRpb24ge1xuICAvKipcbiAgICogQ3JlYXRlIGEgRHVyYXRpb24gcmVwcmVzZW50aW5nIGFuIGFtb3VudCBvZiBtaW51dGVzXG4gICAqXG4gICAqIEBwYXJhbSBhbW91bnQgdGhlIGFtb3VudCBvZiBNaW51dGVzIHRoZSBgRHVyYXRpb25gIHdpbGwgcmVwcmVzZW50LlxuICAgKiBAcmV0dXJucyBhIG5ldyBgRHVyYXRpb25gIHJlcHJlc2VudGluZyBgYW1vdW50YCBNaW51dGVzLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmcm9tTWludXRlcyhhbW91bnQ6IG51bWJlcik6IER1cmF0aW9uIHtcbiAgICByZXR1cm4gbmV3IER1cmF0aW9uKGFtb3VudCAqIDYwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEdXJhdGlvbiByZXByZXNlbnRpbmcgYW4gYW1vdW50IG9mIGhvdXJzXG4gICAqXG4gICAqIEBwYXJhbSBhbW91bnQgdGhlIGFtb3VudCBvZiBIb3VycyB0aGUgYER1cmF0aW9uYCB3aWxsIHJlcHJlc2VudC5cbiAgICogQHJldHVybnMgYSBuZXcgYER1cmF0aW9uYCByZXByZXNlbnRpbmcgYGFtb3VudGAgSG91cnMuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZyb21Ib3VycyhhbW91bnQ6IG51bWJlcik6IER1cmF0aW9uIHtcbiAgICByZXR1cm4gbmV3IER1cmF0aW9uKGFtb3VudCAqIDYwICogNjApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIER1cmF0aW9uIHJlcHJlc2VudGluZyBhbiBhbW91bnQgb2Ygc2Vjb25kc1xuICAgKlxuICAgKiBAcGFyYW0gYW1vdW50IHRoZSBhbW91bnQgb2YgU2Vjb25kcyB0aGUgYER1cmF0aW9uYCB3aWxsIHJlcHJlc2VudC5cbiAgICogQHJldHVybnMgYSBuZXcgYER1cmF0aW9uYCByZXByZXNlbnRpbmcgYGFtb3VudGAgU2Vjb25kcy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZnJvbVNlY29uZHMoYW1vdW50OiBudW1iZXIpOiBEdXJhdGlvbiB7XG4gICAgcmV0dXJuIG5ldyBEdXJhdGlvbihhbW91bnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgdG90YWwgbnVtYmVyIG9mIHNlY29uZHMgaW4gdGhpcyBEdXJhdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhpcyBgRHVyYXRpb25gIGV4cHJlc3NlZCBpbiBTZWNvbmRzLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHNlY29uZHM6IG51bWJlcjtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHNlY29uZHM6IG51bWJlcikge1xuICAgIHRoaXMuc2Vjb25kcyA9IHNlY29uZHM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSB0b3RhbCBudW1iZXIgb2YgbWludXRlcyBpbiB0aGlzIER1cmF0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGlzIGBEdXJhdGlvbmAgZXhwcmVzc2VkIGluIE1pbnV0ZXMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IG1pbnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vjb25kcyAvIDYwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgdG90YWwgbnVtYmVyIG9mIGhvdXJzIGluIHRoaXMgRHVyYXRpb25cbiAgICpcbiAgICogQHJldHVybnMgdGhlIHZhbHVlIG9mIHRoaXMgYER1cmF0aW9uYCBleHByZXNzZWQgaW4gSG91cnMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGhvdXJzKCkge1xuICAgIHJldHVybiB0aGlzLm1pbnV0ZXMgLyA2MDtcbiAgfVxufVxuIl19

/***/ }),

/***/ 15:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(2898), exports);
__exportStar(__nccwpck_require__(9702), exports);
__exportStar(__nccwpck_require__(5985), exports);
__exportStar(__nccwpck_require__(559), exports);
__exportStar(__nccwpck_require__(6597), exports);
__exportStar(__nccwpck_require__(7154), exports);
__exportStar(__nccwpck_require__(6198), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc3RkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBd0I7QUFDeEIsNkNBQTJCO0FBQzNCLHlDQUF1QjtBQUN2Qix3Q0FBc0I7QUFDdEIsd0NBQXNCO0FBQ3RCLDJDQUF5QjtBQUN6Qix5Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9hcnJheVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vZHVyYXRpb25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL2pzb25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL21hcFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2V0XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zdHJpbmdcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxcIjtcbiJdfQ==

/***/ }),

/***/ 5985:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MutJson = exports.Json = void 0;
/**
 * Immutable Json
 */
class Json {
    /**
     * Returns a specified element from the Json.
     *
     * @macro ($self$)[$args$]
     *
     * @param key The key of the element to return
     * @returns The element associated with the specified key, or undefined if the key can't be found
     */
    get(key) {
        key;
        throw new Error("Macro");
    }
    /**
     * Returns a specified element at a given index from Json Array
     *
     * @macro ($self$)[$args$]
     *
     * @param index The index of the element in the Json Array to return
     * @returns The element at given index in Json Array, or undefined if index is not valid
     */
    getAt(index) {
        index;
        throw new Error("Macro");
    }
}
exports.Json = Json;
/**
 * Mutable Json
 */
class MutJson {
    /**
     * Returns a specified element from the Json.
     *
     * @macro ($self$)[$args$]
     *
     * @param key The key of the element to return
     * @returns The element associated with the specified key, or undefined if the key can't be found
     */
    get(key) {
        key;
        throw new Error("Macro");
    }
    /**
     * Returns a specified element at a given index from MutJson Array
     *
     * @macro ($self$)[$args$]
     *
     * @param index The index of the element in the MutJson Array to return
     * @returns The element at given index in MutJson Array, or undefined if index is not valid
     */
    getAt(index) {
        index;
        throw new Error("Macro");
    }
    /**
     * Adds or updates an element in MutJson with a specific key and value
     *
     * @macro ((obj, args) => { obj[args[0]] = args[1]; })($self$, [$args$])
     *
     * @param key The key of the element to add
     * @param value The value of the element to add
     */
    set(key, value) {
        key;
        value;
        throw new Error("Macro");
    }
    /**
     * Set element in MutJson Array with a specific key and value
     *
     * @macro ((obj, args)) => { obj[args[0]] = args[1]; })($self$, [$args$])
     *
     * @param value The value of the element to set
     */
    setAt(index, value) {
        index;
        value;
        throw new Error("Macro");
    }
}
exports.MutJson = MutJson;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGQvanNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7R0FFRztBQUNILE1BQWEsSUFBSTtJQUNmOzs7Ozs7O09BT0c7SUFDSSxHQUFHLENBQUMsR0FBVztRQUNwQixHQUFHLENBQUM7UUFDSixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksS0FBSyxDQUFDLEtBQWE7UUFDeEIsS0FBSyxDQUFDO1FBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUExQkQsb0JBMEJDO0FBRUQ7O0dBRUc7QUFDSCxNQUFhLE9BQU87SUFDbEI7Ozs7Ozs7T0FPRztJQUNJLEdBQUcsQ0FBQyxHQUFXO1FBQ3BCLEdBQUcsQ0FBQztRQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxLQUFLLENBQUMsS0FBYTtRQUN4QixLQUFLLENBQUM7UUFDTixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFVO1FBQ2hDLEdBQUcsQ0FBQztRQUNKLEtBQUssQ0FBQztRQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLEtBQUssQ0FBQyxLQUFhLEVBQUUsS0FBVTtRQUNwQyxLQUFLLENBQUM7UUFDTixLQUFLLENBQUM7UUFDTixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQXJERCwwQkFxREMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEltbXV0YWJsZSBKc29uXG4gKi9cbmV4cG9ydCBjbGFzcyBKc29uIHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzcGVjaWZpZWQgZWxlbWVudCBmcm9tIHRoZSBKc29uLlxuICAgKlxuICAgKiBAbWFjcm8gKCRzZWxmJClbJGFyZ3MkXVxuICAgKlxuICAgKiBAcGFyYW0ga2V5IFRoZSBrZXkgb2YgdGhlIGVsZW1lbnQgdG8gcmV0dXJuXG4gICAqIEByZXR1cm5zIFRoZSBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgc3BlY2lmaWVkIGtleSwgb3IgdW5kZWZpbmVkIGlmIHRoZSBrZXkgY2FuJ3QgYmUgZm91bmRcbiAgICovXG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBKc29uIHtcbiAgICBrZXk7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWFjcm9cIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHNwZWNpZmllZCBlbGVtZW50IGF0IGEgZ2l2ZW4gaW5kZXggZnJvbSBKc29uIEFycmF5XG4gICAqXG4gICAqIEBtYWNybyAoJHNlbGYkKVskYXJncyRdXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGVsZW1lbnQgaW4gdGhlIEpzb24gQXJyYXkgdG8gcmV0dXJuXG4gICAqIEByZXR1cm5zIFRoZSBlbGVtZW50IGF0IGdpdmVuIGluZGV4IGluIEpzb24gQXJyYXksIG9yIHVuZGVmaW5lZCBpZiBpbmRleCBpcyBub3QgdmFsaWRcbiAgICovXG4gIHB1YmxpYyBnZXRBdChpbmRleDogbnVtYmVyKTogSnNvbiB7XG4gICAgaW5kZXg7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWFjcm9cIik7XG4gIH1cbn1cblxuLyoqXG4gKiBNdXRhYmxlIEpzb25cbiAqL1xuZXhwb3J0IGNsYXNzIE11dEpzb24ge1xuICAvKipcbiAgICogUmV0dXJucyBhIHNwZWNpZmllZCBlbGVtZW50IGZyb20gdGhlIEpzb24uXG4gICAqXG4gICAqIEBtYWNybyAoJHNlbGYkKVskYXJncyRdXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgVGhlIGtleSBvZiB0aGUgZWxlbWVudCB0byByZXR1cm5cbiAgICogQHJldHVybnMgVGhlIGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5LCBvciB1bmRlZmluZWQgaWYgdGhlIGtleSBjYW4ndCBiZSBmb3VuZFxuICAgKi9cbiAgcHVibGljIGdldChrZXk6IHN0cmluZyk6IE11dEpzb24ge1xuICAgIGtleTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNYWNyb1wiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3BlY2lmaWVkIGVsZW1lbnQgYXQgYSBnaXZlbiBpbmRleCBmcm9tIE11dEpzb24gQXJyYXlcbiAgICpcbiAgICogQG1hY3JvICgkc2VsZiQpWyRhcmdzJF1cbiAgICpcbiAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgZWxlbWVudCBpbiB0aGUgTXV0SnNvbiBBcnJheSB0byByZXR1cm5cbiAgICogQHJldHVybnMgVGhlIGVsZW1lbnQgYXQgZ2l2ZW4gaW5kZXggaW4gTXV0SnNvbiBBcnJheSwgb3IgdW5kZWZpbmVkIGlmIGluZGV4IGlzIG5vdCB2YWxpZFxuICAgKi9cbiAgcHVibGljIGdldEF0KGluZGV4OiBudW1iZXIpOiBNdXRKc29uIHtcbiAgICBpbmRleDtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNYWNyb1wiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIG9yIHVwZGF0ZXMgYW4gZWxlbWVudCBpbiBNdXRKc29uIHdpdGggYSBzcGVjaWZpYyBrZXkgYW5kIHZhbHVlXG4gICAqXG4gICAqIEBtYWNybyAoKG9iaiwgYXJncykgPT4geyBvYmpbYXJnc1swXV0gPSBhcmdzWzFdOyB9KSgkc2VsZiQsIFskYXJncyRdKVxuICAgKlxuICAgKiBAcGFyYW0ga2V5IFRoZSBrZXkgb2YgdGhlIGVsZW1lbnQgdG8gYWRkXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGVsZW1lbnQgdG8gYWRkXG4gICAqL1xuICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAga2V5O1xuICAgIHZhbHVlO1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1hY3JvXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBlbGVtZW50IGluIE11dEpzb24gQXJyYXkgd2l0aCBhIHNwZWNpZmljIGtleSBhbmQgdmFsdWVcbiAgICpcbiAgICogQG1hY3JvICgob2JqLCBhcmdzKSkgPT4geyBvYmpbYXJnc1swXV0gPSBhcmdzWzFdOyB9KSgkc2VsZiQsIFskYXJncyRdKVxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50IHRvIHNldFxuICAgKi9cbiAgcHVibGljIHNldEF0KGluZGV4OiBudW1iZXIsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpbmRleDtcbiAgICB2YWx1ZTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNYWNyb1wiKTtcbiAgfVxufVxuIl19

/***/ }),

/***/ 559:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// These classes are used by Wing to provide JSII subsets of the JS Array class.
// They should not be consumed directly by users.
// TODO: These should be interfaces, currently Wing does not support interface JSII imports
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MutableMap = exports.ImmutableMap = void 0;
/**
 * Immutable Map
 *
 * @typeparam T1
 */
class ImmutableMap {
    /**
     * Returns the number of elements in the map.
     *
     * TODO: For now this has to be a method rather than a getter as macros only work on methods https://github.com/winglang/wing/issues/1658
     * @macro Object.keys($self$).length
     *
     * @returns The number of elements in map
     */
    size() {
        throw new Error("Macro");
    }
    /**
     * Returns a specified element from the map.
     *
     * If the value that is associated to the provided key is an object, then you will get a reference
     * to that object and any change made to that object will effectively modify it inside the map.
     *
     * @macro ($self$)[$args$]
     *
     * @param key The key of the element to return.
     * @returns The element associated with the specified key, or undefined if the key can't be found
     */
    get(key) {
        key;
        throw new Error("Macro");
    }
    /**
     * Returns a boolean indicating whether an element with the specified key exists or not.
     *
     * @macro ($args$ in ($self$))
     *
     * @param key The key of the element to test for presence
     * @returns true if an element with the specified key exists in the map; otherwise false.
     */
    has(key) {
        key;
        throw new Error("Macro");
    }
    /**
     * Create a mutable shallow copy of this map
     *
     * @macro {...($self$)}
     *
     * @returns a MutableMap with the same values as this map
     */
    copyMut() {
        throw new Error("Macro");
    }
    /**
     * Create an immutable shallow copy of this map
     *
     * @macro Object.freeze({...($self$)})
     *
     * @returns an ImmutableMap with the same values as this map
     */
    copy() {
        throw new Error("Macro");
    }
}
exports.ImmutableMap = ImmutableMap;
/**
 * Mutable Map
 *
 * @typeparam T1
 */
class MutableMap extends ImmutableMap {
    /**
     * Removes all elements
     *
     * @macro ((map) => { for(const k in map){delete map[k]}; })($self$)
     */
    clear() {
        throw new Error("Macro");
    }
    /**
     * Removes the specified element from a map.
     *
     * @macro (delete ($self$)[$args$])
     *
     * @param key The key
     * @returns true if the given key is no longer present
     */
    delete(key) {
        key;
        throw new Error("Macro");
    }
    /**
     * Adds or updates an entry in a Map object with a specified key and a value.
     *
     * TODO: revisit this macro after we support indexed args https://github.com/winglang/wing/issues/1659
     * @macro ((obj, args) => { obj[args[0]] = args[1]; })($self$, [$args$])
     *
     * @param key The key of the element to add
     * @param value The value of the element to add
     */
    set(key, value) {
        key;
        value;
        throw new Error("Macro");
    }
}
exports.MutableMap = MutableMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0ZC9tYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdGQUFnRjtBQUNoRixpREFBaUQ7QUFDakQsMkZBQTJGOzs7QUFJM0Y7Ozs7R0FJRztBQUNILE1BQWEsWUFBWTtJQUN2Qjs7Ozs7OztPQU9HO0lBQ0ksSUFBSTtRQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7SUFDSSxHQUFHLENBQUMsR0FBVztRQUNwQixHQUFHLENBQUM7UUFDSixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksR0FBRyxDQUFDLEdBQVc7UUFDcEIsR0FBRyxDQUFDO1FBQ0osTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksT0FBTztRQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLElBQUk7UUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQS9ERCxvQ0ErREM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsWUFBWTtJQUMxQzs7OztPQUlHO0lBQ0ksS0FBSztRQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxNQUFNLENBQUMsR0FBVztRQUN2QixHQUFHLENBQUM7UUFDSixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBUztRQUMvQixHQUFHLENBQUM7UUFDSixLQUFLLENBQUM7UUFDTixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQXJDRCxnQ0FxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGVzZSBjbGFzc2VzIGFyZSB1c2VkIGJ5IFdpbmcgdG8gcHJvdmlkZSBKU0lJIHN1YnNldHMgb2YgdGhlIEpTIEFycmF5IGNsYXNzLlxuLy8gVGhleSBzaG91bGQgbm90IGJlIGNvbnN1bWVkIGRpcmVjdGx5IGJ5IHVzZXJzLlxuLy8gVE9ETzogVGhlc2Ugc2hvdWxkIGJlIGludGVyZmFjZXMsIGN1cnJlbnRseSBXaW5nIGRvZXMgbm90IHN1cHBvcnQgaW50ZXJmYWNlIEpTSUkgaW1wb3J0c1xuXG5pbXBvcnQgeyBUMSB9IGZyb20gXCIuL3V0aWxcIjtcblxuLyoqXG4gKiBJbW11dGFibGUgTWFwXG4gKlxuICogQHR5cGVwYXJhbSBUMVxuICovXG5leHBvcnQgY2xhc3MgSW1tdXRhYmxlTWFwIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgbWFwLlxuICAgKlxuICAgKiBUT0RPOiBGb3Igbm93IHRoaXMgaGFzIHRvIGJlIGEgbWV0aG9kIHJhdGhlciB0aGFuIGEgZ2V0dGVyIGFzIG1hY3JvcyBvbmx5IHdvcmsgb24gbWV0aG9kcyBodHRwczovL2dpdGh1Yi5jb20vd2luZ2xhbmcvd2luZy9pc3N1ZXMvMTY1OFxuICAgKiBAbWFjcm8gT2JqZWN0LmtleXMoJHNlbGYkKS5sZW5ndGhcbiAgICpcbiAgICogQHJldHVybnMgVGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBtYXBcbiAgICovXG4gIHB1YmxpYyBzaXplKCk6IG51bWJlciB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWFjcm9cIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHNwZWNpZmllZCBlbGVtZW50IGZyb20gdGhlIG1hcC5cbiAgICpcbiAgICogSWYgdGhlIHZhbHVlIHRoYXQgaXMgYXNzb2NpYXRlZCB0byB0aGUgcHJvdmlkZWQga2V5IGlzIGFuIG9iamVjdCwgdGhlbiB5b3Ugd2lsbCBnZXQgYSByZWZlcmVuY2VcbiAgICogdG8gdGhhdCBvYmplY3QgYW5kIGFueSBjaGFuZ2UgbWFkZSB0byB0aGF0IG9iamVjdCB3aWxsIGVmZmVjdGl2ZWx5IG1vZGlmeSBpdCBpbnNpZGUgdGhlIG1hcC5cbiAgICpcbiAgICogQG1hY3JvICgkc2VsZiQpWyRhcmdzJF1cbiAgICpcbiAgICogQHBhcmFtIGtleSBUaGUga2V5IG9mIHRoZSBlbGVtZW50IHRvIHJldHVybi5cbiAgICogQHJldHVybnMgVGhlIGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5LCBvciB1bmRlZmluZWQgaWYgdGhlIGtleSBjYW4ndCBiZSBmb3VuZFxuICAgKi9cbiAgcHVibGljIGdldChrZXk6IHN0cmluZyk6IFQxIHtcbiAgICBrZXk7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWFjcm9cIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIGtleSBleGlzdHMgb3Igbm90LlxuICAgKlxuICAgKiBAbWFjcm8gKCRhcmdzJCBpbiAoJHNlbGYkKSlcbiAgICpcbiAgICogQHBhcmFtIGtleSBUaGUga2V5IG9mIHRoZSBlbGVtZW50IHRvIHRlc3QgZm9yIHByZXNlbmNlXG4gICAqIEByZXR1cm5zIHRydWUgaWYgYW4gZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5IGV4aXN0cyBpbiB0aGUgbWFwOyBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBwdWJsaWMgaGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAga2V5O1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1hY3JvXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG11dGFibGUgc2hhbGxvdyBjb3B5IG9mIHRoaXMgbWFwXG4gICAqXG4gICAqIEBtYWNybyB7Li4uKCRzZWxmJCl9XG4gICAqXG4gICAqIEByZXR1cm5zIGEgTXV0YWJsZU1hcCB3aXRoIHRoZSBzYW1lIHZhbHVlcyBhcyB0aGlzIG1hcFxuICAgKi9cbiAgcHVibGljIGNvcHlNdXQoKTogTXV0YWJsZU1hcCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWFjcm9cIik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGltbXV0YWJsZSBzaGFsbG93IGNvcHkgb2YgdGhpcyBtYXBcbiAgICpcbiAgICogQG1hY3JvIE9iamVjdC5mcmVlemUoey4uLigkc2VsZiQpfSlcbiAgICpcbiAgICogQHJldHVybnMgYW4gSW1tdXRhYmxlTWFwIHdpdGggdGhlIHNhbWUgdmFsdWVzIGFzIHRoaXMgbWFwXG4gICAqL1xuICBwdWJsaWMgY29weSgpOiBJbW11dGFibGVNYXAge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1hY3JvXCIpO1xuICB9XG59XG5cbi8qKlxuICogTXV0YWJsZSBNYXBcbiAqXG4gKiBAdHlwZXBhcmFtIFQxXG4gKi9cbmV4cG9ydCBjbGFzcyBNdXRhYmxlTWFwIGV4dGVuZHMgSW1tdXRhYmxlTWFwIHtcbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIGVsZW1lbnRzXG4gICAqXG4gICAqIEBtYWNybyAoKG1hcCkgPT4geyBmb3IoY29uc3QgayBpbiBtYXApe2RlbGV0ZSBtYXBba119OyB9KSgkc2VsZiQpXG4gICAqL1xuICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWFjcm9cIik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgZnJvbSBhIG1hcC5cbiAgICpcbiAgICogQG1hY3JvIChkZWxldGUgKCRzZWxmJClbJGFyZ3MkXSlcbiAgICpcbiAgICogQHBhcmFtIGtleSBUaGUga2V5XG4gICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGtleSBpcyBubyBsb25nZXIgcHJlc2VudFxuICAgKi9cbiAgcHVibGljIGRlbGV0ZShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGtleTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNYWNyb1wiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIG9yIHVwZGF0ZXMgYW4gZW50cnkgaW4gYSBNYXAgb2JqZWN0IHdpdGggYSBzcGVjaWZpZWQga2V5IGFuZCBhIHZhbHVlLlxuICAgKlxuICAgKiBUT0RPOiByZXZpc2l0IHRoaXMgbWFjcm8gYWZ0ZXIgd2Ugc3VwcG9ydCBpbmRleGVkIGFyZ3MgaHR0cHM6Ly9naXRodWIuY29tL3dpbmdsYW5nL3dpbmcvaXNzdWVzLzE2NTlcbiAgICogQG1hY3JvICgob2JqLCBhcmdzKSA9PiB7IG9ialthcmdzWzBdXSA9IGFyZ3NbMV07IH0pKCRzZWxmJCwgWyRhcmdzJF0pXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgVGhlIGtleSBvZiB0aGUgZWxlbWVudCB0byBhZGRcbiAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCB0byBhZGRcbiAgICovXG4gIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBUMSk6IHZvaWQge1xuICAgIGtleTtcbiAgICB2YWx1ZTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNYWNyb1wiKTtcbiAgfVxufVxuIl19

/***/ }),

/***/ 6597:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// These classes are used by Wing to provide JSII subsets of the JS Set class.
// They should not be consumed directly by users.
// TODO: These should be interfaces, currently Wing does not support interface JSII imports
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MutableSet = exports.ImmutableSet = void 0;
/**
 * Immutable Set
 *
 * @typeparam T1
 */
class ImmutableSet {
    /**
     * The length of the set
     * @returns the length of the set
     */
    get size() {
        throw new Error("Abstract");
    }
    /**
     * Returns a boolean indicating whether an element with the specified value exists in the set.
     * @param value The value to test for presence in the Set object.
     * @returns `true` if an element with the specified value exists in the set; otherwise `false`.
     */
    has(value) {
        value;
        throw new Error("Abstract");
    }
    /**
     * Create a mutable shallow copy of this set
     *
     * @macro new Set($self$)
     *
     * @returns a MutableSet with the same values as this set
     */
    copyMut() {
        throw new Error("Macro");
    }
    /**
     * Create an immutable shallow copy of this set
     *
     * @macro Object.freeze(new Set($self$))
     *
     * @returns an ImmutableSet with the same values as this set
     */
    copy() {
        throw new Error("Macro");
    }
}
exports.ImmutableSet = ImmutableSet;
/**
 * Mutable Set
 *
 * @typeparam T1
 */
class MutableSet extends ImmutableSet {
    /**
     * Add value to set
     * @param value value to add
     * @returns true if the value was added, false if it was already in the set
     */
    add(value) {
        value;
        throw new Error("Abstract");
    }
    /**
     * The clear() method removes all elements from a set.
     */
    clear() {
        throw new Error("Abstract");
    }
    /**
     * Removes a specified value from a set, if it is in the set.
     * @param value The value to remove from the set.
     * @returns Returns `true` if `value` was already in the set; otherwise `false`.
     */
    delete(value) {
        value;
        throw new Error("Abstract");
    }
}
exports.MutableSet = MutableSet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0ZC9zZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhFQUE4RTtBQUM5RSxpREFBaUQ7QUFDakQsMkZBQTJGOzs7QUFJM0Y7Ozs7R0FJRztBQUNILE1BQWEsWUFBWTtJQUN2Qjs7O09BR0c7SUFDSCxJQUFXLElBQUk7UUFDYixNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksR0FBRyxDQUFDLEtBQVM7UUFDbEIsS0FBSyxDQUFDO1FBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksT0FBTztRQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLElBQUk7UUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQXhDRCxvQ0F3Q0M7QUFFRDs7OztHQUlHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsWUFBWTtJQUMxQzs7OztPQUlHO0lBQ0ksR0FBRyxDQUFDLEtBQVM7UUFDbEIsS0FBSyxDQUFDO1FBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLO1FBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxLQUFTO1FBQ3JCLEtBQUssQ0FBQztRQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGO0FBM0JELGdDQTJCQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZXNlIGNsYXNzZXMgYXJlIHVzZWQgYnkgV2luZyB0byBwcm92aWRlIEpTSUkgc3Vic2V0cyBvZiB0aGUgSlMgU2V0IGNsYXNzLlxuLy8gVGhleSBzaG91bGQgbm90IGJlIGNvbnN1bWVkIGRpcmVjdGx5IGJ5IHVzZXJzLlxuLy8gVE9ETzogVGhlc2Ugc2hvdWxkIGJlIGludGVyZmFjZXMsIGN1cnJlbnRseSBXaW5nIGRvZXMgbm90IHN1cHBvcnQgaW50ZXJmYWNlIEpTSUkgaW1wb3J0c1xuXG5pbXBvcnQgeyBUMSB9IGZyb20gXCIuL3V0aWxcIjtcblxuLyoqXG4gKiBJbW11dGFibGUgU2V0XG4gKlxuICogQHR5cGVwYXJhbSBUMVxuICovXG5leHBvcnQgY2xhc3MgSW1tdXRhYmxlU2V0IHtcbiAgLyoqXG4gICAqIFRoZSBsZW5ndGggb2YgdGhlIHNldFxuICAgKiBAcmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBzZXRcbiAgICovXG4gIHB1YmxpYyBnZXQgc2l6ZSgpOiBudW1iZXIge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0XCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciBhbiBlbGVtZW50IHdpdGggdGhlIHNwZWNpZmllZCB2YWx1ZSBleGlzdHMgaW4gdGhlIHNldC5cbiAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0IGZvciBwcmVzZW5jZSBpbiB0aGUgU2V0IG9iamVjdC5cbiAgICogQHJldHVybnMgYHRydWVgIGlmIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIHZhbHVlIGV4aXN0cyBpbiB0aGUgc2V0OyBvdGhlcndpc2UgYGZhbHNlYC5cbiAgICovXG4gIHB1YmxpYyBoYXModmFsdWU6IFQxKTogYm9vbGVhbiB7XG4gICAgdmFsdWU7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3RcIik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbXV0YWJsZSBzaGFsbG93IGNvcHkgb2YgdGhpcyBzZXRcbiAgICpcbiAgICogQG1hY3JvIG5ldyBTZXQoJHNlbGYkKVxuICAgKlxuICAgKiBAcmV0dXJucyBhIE11dGFibGVTZXQgd2l0aCB0aGUgc2FtZSB2YWx1ZXMgYXMgdGhpcyBzZXRcbiAgICovXG4gIHB1YmxpYyBjb3B5TXV0KCk6IE11dGFibGVTZXQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1hY3JvXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpbW11dGFibGUgc2hhbGxvdyBjb3B5IG9mIHRoaXMgc2V0XG4gICAqXG4gICAqIEBtYWNybyBPYmplY3QuZnJlZXplKG5ldyBTZXQoJHNlbGYkKSlcbiAgICpcbiAgICogQHJldHVybnMgYW4gSW1tdXRhYmxlU2V0IHdpdGggdGhlIHNhbWUgdmFsdWVzIGFzIHRoaXMgc2V0XG4gICAqL1xuICBwdWJsaWMgY29weSgpOiBJbW11dGFibGVTZXQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1hY3JvXCIpO1xuICB9XG59XG5cbi8qKlxuICogTXV0YWJsZSBTZXRcbiAqXG4gKiBAdHlwZXBhcmFtIFQxXG4gKi9cbmV4cG9ydCBjbGFzcyBNdXRhYmxlU2V0IGV4dGVuZHMgSW1tdXRhYmxlU2V0IHtcbiAgLyoqXG4gICAqIEFkZCB2YWx1ZSB0byBzZXRcbiAgICogQHBhcmFtIHZhbHVlIHZhbHVlIHRvIGFkZFxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSB3YXMgYWRkZWQsIGZhbHNlIGlmIGl0IHdhcyBhbHJlYWR5IGluIHRoZSBzZXRcbiAgICovXG4gIHB1YmxpYyBhZGQodmFsdWU6IFQxKTogTXV0YWJsZVNldCB7XG4gICAgdmFsdWU7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3RcIik7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGNsZWFyKCkgbWV0aG9kIHJlbW92ZXMgYWxsIGVsZW1lbnRzIGZyb20gYSBzZXQuXG4gICAqL1xuICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3RcIik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIHNwZWNpZmllZCB2YWx1ZSBmcm9tIGEgc2V0LCBpZiBpdCBpcyBpbiB0aGUgc2V0LlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlbW92ZSBmcm9tIHRoZSBzZXQuXG4gICAqIEByZXR1cm5zIFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgd2FzIGFscmVhZHkgaW4gdGhlIHNldDsgb3RoZXJ3aXNlIGBmYWxzZWAuXG4gICAqL1xuICBwdWJsaWMgZGVsZXRlKHZhbHVlOiBUMSk6IGJvb2xlYW4ge1xuICAgIHZhbHVlO1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0XCIpO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ 7154:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// This class is used by Wing to provide JSII subsets of the JS string object.
// They should not be consumed directly by users.
// TODO: This should be an interface, currently Wing does not support interface JSII imports
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.String = void 0;
/**
 * String
 */
class String {
    /**
     * The length of the string.
     */
    get length() {
        throw new Error("Abstract");
    }
    /**
     * Returns the character at the specified index.
     *
     * @param index position of the character.
     * @returns string at the specified index.
     */
    at(index) {
        index;
        throw new Error("Abstract");
    }
    /**
     * Combines the text of two (or more) strings and returns a new string.
     *
     * @param strN one or more strings to concatenate to this string.
     * @returns a new combined string.
     */
    concat(strN) {
        strN;
        throw new Error("Abstract");
    }
    /**
     * Checks if string includes substring.
     *
     * @macro $self$.includes($args$)
     *
     * @param searchString substring to search for.
     * @returns true if string includes substring.
     */
    contains(searchString) {
        searchString;
        throw new Error("Macro");
    }
    /**
     * Does this string end with the given searchString?
     *
     * @macro $self$.endsWith($args$)
     *
     * @param searchString substring to search for.
     * @returns true if string ends with searchString.
     */
    ends(searchString) {
        searchString;
        throw new Error("Abstract");
    }
    /**
     * Returns the index of the first occurrence of searchString found.
     *
     * @macro $self$.indexOf($args$)
     *
     * @param searchString substring to search for.
     * @returns the index of the first occurrence of searchString found, or -1 if not found.
     */
    indexOf(searchString) {
        searchString;
        throw new Error("Abstract");
    }
    /**
     * Returns this string in lower case.
     *
     * @macro $self$.toLocaleLowerCase()
     *
     * @returns a new lower case string.
     */
    lowercase() {
        throw new Error("Abstract");
    }
    /**
     * Splits string by separator.
     *
     * @param separator separator to split by.
     * @returns array of strings.
     */
    split(separator) {
        separator;
        throw new Error("Abstract");
    }
    /**
     * Does this string start with the given searchString?
     *
     * @macro $self$.startsWith($args$)
     *
     * @param searchString substring to search for.
     * @returns true if string starts with searchString.
     */
    starts(searchString) {
        searchString;
        throw new Error("Abstract");
    }
    /**
     * Returns a string between indexStart, indexEnd.
     *
     * @param indexStart index of the character we slice at.
     * @param indexEnd optional - index of the character we end slicing at.
     * @returns the string contained from indexStart to indexEnd.
     */
    substring(indexStart, indexEnd) {
        indexStart;
        indexEnd;
        throw new Error("Abstract");
    }
    /**
     * Removes white spaces from start and end of this string.
     *
     * @returns a new string with white spaces removed from start and end.
     */
    trim() {
        throw new Error("Abstract");
    }
    /**
     * Returns this string in upper case.
     *
     * @macro $self$.toLocaleUpperCase()
     *
     * @returns a new upper case string.
     */
    uppercase() {
        throw new Error("Abstract");
    }
}
exports.String = String;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0ZC9zdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhFQUE4RTtBQUM5RSxpREFBaUQ7QUFDakQsNEZBQTRGOzs7QUFFNUY7O0dBRUc7QUFDSCxNQUFhLE1BQU07SUFDakI7O09BRUc7SUFDSCxJQUFXLE1BQU07UUFDZixNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEVBQUUsQ0FBQyxLQUFhO1FBQ3JCLEtBQUssQ0FBQztRQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLElBQVk7UUFDeEIsSUFBSSxDQUFDO1FBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLFFBQVEsQ0FBQyxZQUFvQjtRQUNsQyxZQUFZLENBQUM7UUFDYixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksSUFBSSxDQUFDLFlBQW9CO1FBQzlCLFlBQVksQ0FBQztRQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxPQUFPLENBQUMsWUFBb0I7UUFDakMsWUFBWSxDQUFDO1FBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksU0FBUztRQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLFNBQWlCO1FBQzVCLFNBQVMsQ0FBQztRQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxNQUFNLENBQUMsWUFBb0I7UUFDaEMsWUFBWSxDQUFDO1FBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksU0FBUyxDQUFDLFVBQWtCLEVBQUUsUUFBaUI7UUFDcEQsVUFBVSxDQUFDO1FBQ1gsUUFBUSxDQUFDO1FBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLElBQUk7UUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxTQUFTO1FBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUF4SUQsd0JBd0lDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBjbGFzcyBpcyB1c2VkIGJ5IFdpbmcgdG8gcHJvdmlkZSBKU0lJIHN1YnNldHMgb2YgdGhlIEpTIHN0cmluZyBvYmplY3QuXG4vLyBUaGV5IHNob3VsZCBub3QgYmUgY29uc3VtZWQgZGlyZWN0bHkgYnkgdXNlcnMuXG4vLyBUT0RPOiBUaGlzIHNob3VsZCBiZSBhbiBpbnRlcmZhY2UsIGN1cnJlbnRseSBXaW5nIGRvZXMgbm90IHN1cHBvcnQgaW50ZXJmYWNlIEpTSUkgaW1wb3J0c1xuXG4vKipcbiAqIFN0cmluZ1xuICovXG5leHBvcnQgY2xhc3MgU3RyaW5nIHtcbiAgLyoqXG4gICAqIFRoZSBsZW5ndGggb2YgdGhlIHN0cmluZy5cbiAgICovXG4gIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3RcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2hhcmFjdGVyIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleCBwb3NpdGlvbiBvZiB0aGUgY2hhcmFjdGVyLlxuICAgKiBAcmV0dXJucyBzdHJpbmcgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICovXG4gIHB1YmxpYyBhdChpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpbmRleDtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdFwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21iaW5lcyB0aGUgdGV4dCBvZiB0d28gKG9yIG1vcmUpIHN0cmluZ3MgYW5kIHJldHVybnMgYSBuZXcgc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gc3RyTiBvbmUgb3IgbW9yZSBzdHJpbmdzIHRvIGNvbmNhdGVuYXRlIHRvIHRoaXMgc3RyaW5nLlxuICAgKiBAcmV0dXJucyBhIG5ldyBjb21iaW5lZCBzdHJpbmcuXG4gICAqL1xuICBwdWJsaWMgY29uY2F0KHN0ck46IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3RyTjtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdFwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgc3RyaW5nIGluY2x1ZGVzIHN1YnN0cmluZy5cbiAgICpcbiAgICogQG1hY3JvICRzZWxmJC5pbmNsdWRlcygkYXJncyQpXG4gICAqXG4gICAqIEBwYXJhbSBzZWFyY2hTdHJpbmcgc3Vic3RyaW5nIHRvIHNlYXJjaCBmb3IuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgc3RyaW5nIGluY2x1ZGVzIHN1YnN0cmluZy5cbiAgICovXG4gIHB1YmxpYyBjb250YWlucyhzZWFyY2hTdHJpbmc6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHNlYXJjaFN0cmluZztcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNYWNyb1wiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEb2VzIHRoaXMgc3RyaW5nIGVuZCB3aXRoIHRoZSBnaXZlbiBzZWFyY2hTdHJpbmc/XG4gICAqXG4gICAqIEBtYWNybyAkc2VsZiQuZW5kc1dpdGgoJGFyZ3MkKVxuICAgKlxuICAgKiBAcGFyYW0gc2VhcmNoU3RyaW5nIHN1YnN0cmluZyB0byBzZWFyY2ggZm9yLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHN0cmluZyBlbmRzIHdpdGggc2VhcmNoU3RyaW5nLlxuICAgKi9cbiAgcHVibGljIGVuZHMoc2VhcmNoU3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBzZWFyY2hTdHJpbmc7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3RcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2Ygc2VhcmNoU3RyaW5nIGZvdW5kLlxuICAgKlxuICAgKiBAbWFjcm8gJHNlbGYkLmluZGV4T2YoJGFyZ3MkKVxuICAgKlxuICAgKiBAcGFyYW0gc2VhcmNoU3RyaW5nIHN1YnN0cmluZyB0byBzZWFyY2ggZm9yLlxuICAgKiBAcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2Ygc2VhcmNoU3RyaW5nIGZvdW5kLCBvciAtMSBpZiBub3QgZm91bmQuXG4gICAqL1xuICBwdWJsaWMgaW5kZXhPZihzZWFyY2hTdHJpbmc6IHN0cmluZyk6IG51bWJlciB7XG4gICAgc2VhcmNoU3RyaW5nO1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0XCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhpcyBzdHJpbmcgaW4gbG93ZXIgY2FzZS5cbiAgICpcbiAgICogQG1hY3JvICRzZWxmJC50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAqXG4gICAqIEByZXR1cm5zIGEgbmV3IGxvd2VyIGNhc2Ugc3RyaW5nLlxuICAgKi9cbiAgcHVibGljIGxvd2VyY2FzZSgpOiBzdHJpbmcge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0XCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0cyBzdHJpbmcgYnkgc2VwYXJhdG9yLlxuICAgKlxuICAgKiBAcGFyYW0gc2VwYXJhdG9yIHNlcGFyYXRvciB0byBzcGxpdCBieS5cbiAgICogQHJldHVybnMgYXJyYXkgb2Ygc3RyaW5ncy5cbiAgICovXG4gIHB1YmxpYyBzcGxpdChzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBzZXBhcmF0b3I7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3RcIik7XG4gIH1cblxuICAvKipcbiAgICogRG9lcyB0aGlzIHN0cmluZyBzdGFydCB3aXRoIHRoZSBnaXZlbiBzZWFyY2hTdHJpbmc/XG4gICAqXG4gICAqIEBtYWNybyAkc2VsZiQuc3RhcnRzV2l0aCgkYXJncyQpXG4gICAqXG4gICAqIEBwYXJhbSBzZWFyY2hTdHJpbmcgc3Vic3RyaW5nIHRvIHNlYXJjaCBmb3IuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgc3RyaW5nIHN0YXJ0cyB3aXRoIHNlYXJjaFN0cmluZy5cbiAgICovXG4gIHB1YmxpYyBzdGFydHMoc2VhcmNoU3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBzZWFyY2hTdHJpbmc7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3RcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyBiZXR3ZWVuIGluZGV4U3RhcnQsIGluZGV4RW5kLlxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXhTdGFydCBpbmRleCBvZiB0aGUgY2hhcmFjdGVyIHdlIHNsaWNlIGF0LlxuICAgKiBAcGFyYW0gaW5kZXhFbmQgb3B0aW9uYWwgLSBpbmRleCBvZiB0aGUgY2hhcmFjdGVyIHdlIGVuZCBzbGljaW5nIGF0LlxuICAgKiBAcmV0dXJucyB0aGUgc3RyaW5nIGNvbnRhaW5lZCBmcm9tIGluZGV4U3RhcnQgdG8gaW5kZXhFbmQuXG4gICAqL1xuICBwdWJsaWMgc3Vic3RyaW5nKGluZGV4U3RhcnQ6IG51bWJlciwgaW5kZXhFbmQ/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGluZGV4U3RhcnQ7XG4gICAgaW5kZXhFbmQ7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3RcIik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB3aGl0ZSBzcGFjZXMgZnJvbSBzdGFydCBhbmQgZW5kIG9mIHRoaXMgc3RyaW5nLlxuICAgKlxuICAgKiBAcmV0dXJucyBhIG5ldyBzdHJpbmcgd2l0aCB3aGl0ZSBzcGFjZXMgcmVtb3ZlZCBmcm9tIHN0YXJ0IGFuZCBlbmQuXG4gICAqL1xuICBwdWJsaWMgdHJpbSgpOiBzdHJpbmcge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0XCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhpcyBzdHJpbmcgaW4gdXBwZXIgY2FzZS5cbiAgICpcbiAgICogQG1hY3JvICRzZWxmJC50b0xvY2FsZVVwcGVyQ2FzZSgpXG4gICAqXG4gICAqIEByZXR1cm5zIGEgbmV3IHVwcGVyIGNhc2Ugc3RyaW5nLlxuICAgKi9cbiAgcHVibGljIHVwcGVyY2FzZSgpOiBzdHJpbmcge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0XCIpO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ 6198:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.T1 = void 0;
/**
 * Generic type argument. This type is replaced at compile time.
 *
 * @hidden
 */
class T1 {
}
exports.T1 = T1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGQvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7OztHQUlHO0FBQ0gsTUFBYSxFQUFFO0NBQUc7QUFBbEIsZ0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHZW5lcmljIHR5cGUgYXJndW1lbnQuIFRoaXMgdHlwZSBpcyByZXBsYWNlZCBhdCBjb21waWxlIHRpbWUuXG4gKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgVDEge31cbiJdfQ==

/***/ }),

/***/ 4364:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
const fs = __importStar(__nccwpck_require__(7147));
const path = __importStar(__nccwpck_require__(1017));
const tar = __importStar(__nccwpck_require__(3002));
const bucket_1 = __nccwpck_require__(4653);
const counter_1 = __nccwpck_require__(5381);
const function_1 = __nccwpck_require__(3633);
const logger_1 = __nccwpck_require__(9236);
const queue_1 = __nccwpck_require__(2849);
const resource_1 = __nccwpck_require__(7516);
const topic_1 = __nccwpck_require__(5628);
const cloud_1 = __nccwpck_require__(832);
const constants_1 = __nccwpck_require__(5484);
const core = __importStar(__nccwpck_require__(6526));
const app_1 = __nccwpck_require__(4919);
const util_1 = __nccwpck_require__(5353);
/**
 * A construct that knows how to synthesize simulator resources into a
 * Wing simulator (.wsim) file.
 */
class App extends core.App {
    constructor(props) {
        super(undefined, "root");
        this.synthed = false;
        this.name = props.name ?? "app";
        this.outdir = props.outdir ?? ".";
        logger_1.Logger.register(this);
        this.files = new core.Files({ app: this, stateFile: props.stateFile });
        this.simfile = path.join(this.outdir, `${this.name}.wsim`);
    }
    tryNew(fqn, scope, id, ...args) {
        switch (fqn) {
            case cloud_1.FUNCTION_FQN:
                return new function_1.Function(scope, id, args[0], args[1]);
            case cloud_1.BUCKET_FQN:
                return new bucket_1.Bucket(scope, id, args[0]);
            case cloud_1.LOGGER_FQN:
                return new logger_1.Logger(scope, id);
            case cloud_1.QUEUE_FQN:
                return new queue_1.Queue(scope, id, args[0]);
            case cloud_1.TOPIC_FQN:
                return new topic_1.Topic(scope, id, args[0]);
            case cloud_1.COUNTER_FQN:
                return new counter_1.Counter(scope, id, args[0]);
            case cloud_1.TOPIC_FQN:
                return new topic_1.Topic(scope, id, args[0]);
        }
        return undefined;
    }
    /**
     * Synthesize the app. This creates a tree.json file and a .wsim file in the
     * app's outdir, and returns a path to the .wsim file.
     */
    synth() {
        if (this.synthed) {
            return this.simfile;
        }
        // call preSynthesize() on every construct in the tree
        (0, app_1.preSynthesizeAllConstructs)(this);
        const workdir = (0, util_1.mkdtemp)();
        // write application assets into workdir
        this.files.synth(workdir);
        // write simulator.json file into workdir
        this.synthSimulatorFile(workdir);
        // write tree.json file into workdir
        core.synthesizeTree(this, workdir);
        // tar + gzip the workdir, and write it as a .wsim file to the simfile
        tar.create({
            gzip: true,
            cwd: workdir,
            sync: true,
            file: this.simfile,
        }, ["./"]);
        // write tree.json file into the app's outdir
        // (for backwards compatibility with older versions of the Wing console)
        core.synthesizeTree(this, this.outdir);
        this.synthed = true;
        return this.simfile;
    }
    synthSimulatorFile(outdir) {
        const resources = new core.DependencyGraph(this.node)
            .topology()
            .filter(resource_1.isSimulatorResource)
            .map((res) => res.toSimulator());
        const contents = {
            resources,
            sdkVersion: constants_1.SDK_VERSION,
        };
        // write simulator.json file
        fs.writeFileSync(path.join(outdir, util_1.SIMULATOR_FILE_PATH), JSON.stringify(contents, undefined, 2), { encoding: "utf8" });
    }
}
exports.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RhcmdldC1zaW0vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXlCO0FBQ3pCLDJDQUE2QjtBQUU3Qix5Q0FBMkI7QUFDM0IscUNBQWtDO0FBQ2xDLHVDQUFvQztBQUNwQyx5Q0FBc0M7QUFDdEMscUNBQWtDO0FBQ2xDLG1DQUFnQztBQUNoQyx5Q0FBaUQ7QUFFakQsbUNBQWdDO0FBQ2hDLG9DQU9rQjtBQUNsQiw0Q0FBMkM7QUFDM0MsOENBQWdDO0FBQ2hDLHFDQUF5RDtBQUN6RCxrQ0FBdUQ7QUFFdkQ7OztHQUdHO0FBQ0gsTUFBYSxHQUFJLFNBQVEsSUFBSSxDQUFDLEdBQUc7SUFVL0IsWUFBWSxLQUFvQjtRQUM5QixLQUFLLENBQUMsU0FBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUgxQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBSXRCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztRQUNsQyxlQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRVMsTUFBTSxDQUNkLEdBQVcsRUFDWCxLQUFnQixFQUNoQixFQUFVLEVBQ1YsR0FBRyxJQUFX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LENBQUMsRUFDdEMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQ3JCLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFoSEQsa0JBZ0hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0ICogYXMgdGFyIGZyb20gXCJ0YXJcIjtcbmltcG9ydCB7IEJ1Y2tldCB9IGZyb20gXCIuL2J1Y2tldFwiO1xuaW1wb3J0IHsgQ291bnRlciB9IGZyb20gXCIuL2NvdW50ZXJcIjtcbmltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSBcIi4vZnVuY3Rpb25cIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL2xvZ2dlclwiO1xuaW1wb3J0IHsgUXVldWUgfSBmcm9tIFwiLi9xdWV1ZVwiO1xuaW1wb3J0IHsgaXNTaW11bGF0b3JSZXNvdXJjZSB9IGZyb20gXCIuL3Jlc291cmNlXCI7XG5pbXBvcnQgeyBXaW5nU2ltdWxhdG9yU2NoZW1hIH0gZnJvbSBcIi4vc2NoZW1hXCI7XG5pbXBvcnQgeyBUb3BpYyB9IGZyb20gXCIuL3RvcGljXCI7XG5pbXBvcnQge1xuICBCVUNLRVRfRlFOLFxuICBDT1VOVEVSX0ZRTixcbiAgRlVOQ1RJT05fRlFOLFxuICBMT0dHRVJfRlFOLFxuICBRVUVVRV9GUU4sXG4gIFRPUElDX0ZRTixcbn0gZnJvbSBcIi4uL2Nsb3VkXCI7XG5pbXBvcnQgeyBTREtfVkVSU0lPTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCAqIGFzIGNvcmUgZnJvbSBcIi4uL2NvcmVcIjtcbmltcG9ydCB7IHByZVN5bnRoZXNpemVBbGxDb25zdHJ1Y3RzIH0gZnJvbSBcIi4uL2NvcmUvYXBwXCI7XG5pbXBvcnQgeyBta2R0ZW1wLCBTSU1VTEFUT1JfRklMRV9QQVRIIH0gZnJvbSBcIi4uL3V0aWxcIjtcblxuLyoqXG4gKiBBIGNvbnN0cnVjdCB0aGF0IGtub3dzIGhvdyB0byBzeW50aGVzaXplIHNpbXVsYXRvciByZXNvdXJjZXMgaW50byBhXG4gKiBXaW5nIHNpbXVsYXRvciAoLndzaW0pIGZpbGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHAgZXh0ZW5kcyBjb3JlLkFwcCB7XG4gIC8qKlxuICAgKiBEaXJlY3Rvcnkgd2hlcmUgYXJ0aWZhY3RzIGFyZSBzeW50aGVzaXplZCB0by5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBvdXRkaXI6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBmaWxlczogY29yZS5GaWxlcztcbiAgcHJpdmF0ZSByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2ltZmlsZTogc3RyaW5nO1xuICBwcml2YXRlIHN5bnRoZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogY29yZS5BcHBQcm9wcykge1xuICAgIHN1cGVyKHVuZGVmaW5lZCBhcyBhbnksIFwicm9vdFwiKTtcbiAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lID8/IFwiYXBwXCI7XG4gICAgdGhpcy5vdXRkaXIgPSBwcm9wcy5vdXRkaXIgPz8gXCIuXCI7XG4gICAgTG9nZ2VyLnJlZ2lzdGVyKHRoaXMpO1xuICAgIHRoaXMuZmlsZXMgPSBuZXcgY29yZS5GaWxlcyh7IGFwcDogdGhpcywgc3RhdGVGaWxlOiBwcm9wcy5zdGF0ZUZpbGUgfSk7XG4gICAgdGhpcy5zaW1maWxlID0gcGF0aC5qb2luKHRoaXMub3V0ZGlyLCBgJHt0aGlzLm5hbWV9LndzaW1gKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB0cnlOZXcoXG4gICAgZnFuOiBzdHJpbmcsXG4gICAgc2NvcGU6IENvbnN0cnVjdCxcbiAgICBpZDogc3RyaW5nLFxuICAgIC4uLmFyZ3M6IGFueVtdXG4gICk6IGFueSB7XG4gICAgc3dpdGNoIChmcW4pIHtcbiAgICAgIGNhc2UgRlVOQ1RJT05fRlFOOlxuICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKHNjb3BlLCBpZCwgYXJnc1swXSwgYXJnc1sxXSk7XG5cbiAgICAgIGNhc2UgQlVDS0VUX0ZRTjpcbiAgICAgICAgcmV0dXJuIG5ldyBCdWNrZXQoc2NvcGUsIGlkLCBhcmdzWzBdKTtcblxuICAgICAgY2FzZSBMT0dHRVJfRlFOOlxuICAgICAgICByZXR1cm4gbmV3IExvZ2dlcihzY29wZSwgaWQpO1xuXG4gICAgICBjYXNlIFFVRVVFX0ZRTjpcbiAgICAgICAgcmV0dXJuIG5ldyBRdWV1ZShzY29wZSwgaWQsIGFyZ3NbMF0pO1xuXG4gICAgICBjYXNlIFRPUElDX0ZRTjpcbiAgICAgICAgcmV0dXJuIG5ldyBUb3BpYyhzY29wZSwgaWQsIGFyZ3NbMF0pO1xuXG4gICAgICBjYXNlIENPVU5URVJfRlFOOlxuICAgICAgICByZXR1cm4gbmV3IENvdW50ZXIoc2NvcGUsIGlkLCBhcmdzWzBdKTtcblxuICAgICAgY2FzZSBUT1BJQ19GUU46XG4gICAgICAgIHJldHVybiBuZXcgVG9waWMoc2NvcGUsIGlkLCBhcmdzWzBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRoZXNpemUgdGhlIGFwcC4gVGhpcyBjcmVhdGVzIGEgdHJlZS5qc29uIGZpbGUgYW5kIGEgLndzaW0gZmlsZSBpbiB0aGVcbiAgICogYXBwJ3Mgb3V0ZGlyLCBhbmQgcmV0dXJucyBhIHBhdGggdG8gdGhlIC53c2ltIGZpbGUuXG4gICAqL1xuICBwdWJsaWMgc3ludGgoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zeW50aGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaW1maWxlO1xuICAgIH1cblxuICAgIC8vIGNhbGwgcHJlU3ludGhlc2l6ZSgpIG9uIGV2ZXJ5IGNvbnN0cnVjdCBpbiB0aGUgdHJlZVxuICAgIHByZVN5bnRoZXNpemVBbGxDb25zdHJ1Y3RzKHRoaXMpO1xuXG4gICAgY29uc3Qgd29ya2RpciA9IG1rZHRlbXAoKTtcblxuICAgIC8vIHdyaXRlIGFwcGxpY2F0aW9uIGFzc2V0cyBpbnRvIHdvcmtkaXJcbiAgICB0aGlzLmZpbGVzLnN5bnRoKHdvcmtkaXIpO1xuXG4gICAgLy8gd3JpdGUgc2ltdWxhdG9yLmpzb24gZmlsZSBpbnRvIHdvcmtkaXJcbiAgICB0aGlzLnN5bnRoU2ltdWxhdG9yRmlsZSh3b3JrZGlyKTtcblxuICAgIC8vIHdyaXRlIHRyZWUuanNvbiBmaWxlIGludG8gd29ya2RpclxuICAgIGNvcmUuc3ludGhlc2l6ZVRyZWUodGhpcywgd29ya2Rpcik7XG5cbiAgICAvLyB0YXIgKyBnemlwIHRoZSB3b3JrZGlyLCBhbmQgd3JpdGUgaXQgYXMgYSAud3NpbSBmaWxlIHRvIHRoZSBzaW1maWxlXG4gICAgdGFyLmNyZWF0ZShcbiAgICAgIHtcbiAgICAgICAgZ3ppcDogdHJ1ZSxcbiAgICAgICAgY3dkOiB3b3JrZGlyLFxuICAgICAgICBzeW5jOiB0cnVlLFxuICAgICAgICBmaWxlOiB0aGlzLnNpbWZpbGUsXG4gICAgICB9LFxuICAgICAgW1wiLi9cIl1cbiAgICApO1xuXG4gICAgLy8gd3JpdGUgdHJlZS5qc29uIGZpbGUgaW50byB0aGUgYXBwJ3Mgb3V0ZGlyXG4gICAgLy8gKGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIG9sZGVyIHZlcnNpb25zIG9mIHRoZSBXaW5nIGNvbnNvbGUpXG4gICAgY29yZS5zeW50aGVzaXplVHJlZSh0aGlzLCB0aGlzLm91dGRpcik7XG5cbiAgICB0aGlzLnN5bnRoZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXMuc2ltZmlsZTtcbiAgfVxuXG4gIHByaXZhdGUgc3ludGhTaW11bGF0b3JGaWxlKG91dGRpcjogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzb3VyY2VzID0gbmV3IGNvcmUuRGVwZW5kZW5jeUdyYXBoKHRoaXMubm9kZSlcbiAgICAgIC50b3BvbG9neSgpXG4gICAgICAuZmlsdGVyKGlzU2ltdWxhdG9yUmVzb3VyY2UpXG4gICAgICAubWFwKChyZXMpID0+IHJlcy50b1NpbXVsYXRvcigpKTtcblxuICAgIGNvbnN0IGNvbnRlbnRzOiBXaW5nU2ltdWxhdG9yU2NoZW1hID0ge1xuICAgICAgcmVzb3VyY2VzLFxuICAgICAgc2RrVmVyc2lvbjogU0RLX1ZFUlNJT04sXG4gICAgfTtcblxuICAgIC8vIHdyaXRlIHNpbXVsYXRvci5qc29uIGZpbGVcbiAgICBmcy53cml0ZUZpbGVTeW5jKFxuICAgICAgcGF0aC5qb2luKG91dGRpciwgU0lNVUxBVE9SX0ZJTEVfUEFUSCksXG4gICAgICBKU09OLnN0cmluZ2lmeShjb250ZW50cywgdW5kZWZpbmVkLCAyKSxcbiAgICAgIHsgZW5jb2Rpbmc6IFwidXRmOFwiIH1cbiAgICApO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ 2981:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bucket = void 0;
const crypto = __importStar(__nccwpck_require__(6113));
const fs = __importStar(__nccwpck_require__(7147));
const os = __importStar(__nccwpck_require__(2037));
const path_1 = __nccwpck_require__(1017);
class Bucket {
    constructor(props, context) {
        this.objectKeys = new Set();
        this.fileDir = fs.mkdtempSync((0, path_1.join)(os.tmpdir(), "wing-sim-"));
        this.context = context;
        this.initialObjects = props.initialObjects ?? {};
    }
    async init() {
        for (const [key, value] of Object.entries(this.initialObjects)) {
            await this.context.withTrace({
                message: `Adding object from preflight (key=${key}).`,
                activity: async () => {
                    return this.addFile(key, value);
                },
            });
        }
    }
    async cleanup() {
        await fs.promises.rm(this.fileDir, { recursive: true, force: true });
    }
    async put(key, value) {
        return this.context.withTrace({
            message: `Put (key=${key}).`,
            activity: async () => {
                return this.addFile(key, value);
            },
        });
    }
    async putJson(key, body) {
        return this.context.withTrace({
            message: `Put Json (key=${key}).`,
            activity: async () => {
                const filename = (0, path_1.join)(this.fileDir, key);
                await fs.promises.writeFile(filename, JSON.stringify(body, null, 2));
            },
        });
    }
    async get(key) {
        return this.context.withTrace({
            message: `Get (key=${key}).`,
            activity: async () => {
                const hash = this.hashKey(key);
                const filename = (0, path_1.join)(this.fileDir, hash);
                return fs.promises.readFile(filename, "utf8");
            },
        });
    }
    async getJson(key) {
        return this.context.withTrace({
            message: `Get Json (key=${key}).`,
            activity: async () => {
                const filename = (0, path_1.join)(this.fileDir, key);
                return JSON.parse(await fs.promises.readFile(filename, "utf8"));
            },
        });
    }
    async list(prefix) {
        return this.context.withTrace({
            message: `List (prefix=${prefix ?? "null"}).`,
            activity: async () => {
                return Array.from(this.objectKeys.values()).filter((key) => {
                    if (prefix) {
                        return key.startsWith(prefix);
                    }
                    else {
                        return true;
                    }
                });
            },
        });
    }
    async delete(key, opts) {
        return this.context.withTrace({
            message: `Delete (key=${key}).`,
            activity: async () => {
                const mustExist = opts?.mustExist ?? false;
                if (!this.objectKeys.has(key) && mustExist) {
                    throw new Error(`Object does not exist (key=${key}).`);
                }
                if (!this.objectKeys.has(key)) {
                    return;
                }
                const hash = this.hashKey(key);
                const filename = (0, path_1.join)(this.fileDir, hash);
                await fs.promises.unlink(filename);
                this.objectKeys.delete(key);
            },
        });
    }
    async addFile(key, value) {
        const hash = this.hashKey(key);
        const filename = (0, path_1.join)(this.fileDir, hash);
        const dirName = (0, path_1.dirname)(filename);
        await fs.promises.mkdir(dirName, { recursive: true });
        await fs.promises.writeFile(filename, value);
        this.objectKeys.add(key);
    }
    hashKey(key) {
        return crypto.createHash("sha512").update(key).digest("hex");
    }
}
exports.Bucket = Bucket;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVja2V0LmluZmxpZ2h0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RhcmdldC1zaW0vYnVja2V0LmluZmxpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQWlDO0FBQ2pDLHVDQUF5QjtBQUN6Qix1Q0FBeUI7QUFDekIsK0JBQXFDO0FBT3JDLE1BQWEsTUFBTTtJQU1qQixZQUFtQixLQUE0QixFQUFFLE9BQTBCO1FBQ3pFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBQSxXQUFJLEVBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUk7UUFDZixLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDOUQsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztnQkFDM0IsT0FBTyxFQUFFLHFDQUFxQyxHQUFHLElBQUk7Z0JBQ3JELFFBQVEsRUFBRSxLQUFLLElBQUksRUFBRTtvQkFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbEMsQ0FBQzthQUNGLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFPO1FBQ2xCLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9B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LEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTyxPQUFPLENBQUMsR0FBVztRQUN6QixPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBQ0Y7QUFySEQsd0JBcUhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gXCJjcnlwdG9cIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0ICogYXMgb3MgZnJvbSBcIm9zXCI7XG5pbXBvcnQgeyBkaXJuYW1lLCBqb2luIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IElTaW11bGF0b3JSZXNvdXJjZUluc3RhbmNlIH0gZnJvbSBcIi4vcmVzb3VyY2VcIjtcbmltcG9ydCB7IEJ1Y2tldFNjaGVtYSB9IGZyb20gXCIuL3NjaGVtYS1yZXNvdXJjZXNcIjtcbmltcG9ydCB7IEJ1Y2tldERlbGV0ZU9wdGlvbnMsIElCdWNrZXRDbGllbnQgfSBmcm9tIFwiLi4vY2xvdWRcIjtcbmltcG9ydCB7IEpzb24gfSBmcm9tIFwiLi4vc3RkXCI7XG5pbXBvcnQgeyBJU2ltdWxhdG9yQ29udGV4dCB9IGZyb20gXCIuLi90ZXN0aW5nL3NpbXVsYXRvclwiO1xuXG5leHBvcnQgY2xhc3MgQnVja2V0IGltcGxlbWVudHMgSUJ1Y2tldENsaWVudCwgSVNpbXVsYXRvclJlc291cmNlSW5zdGFuY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IG9iamVjdEtleXM6IFNldDxzdHJpbmc+O1xuICBwcml2YXRlIHJlYWRvbmx5IGZpbGVEaXI6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBJU2ltdWxhdG9yQ29udGV4dDtcbiAgcHJpdmF0ZSByZWFkb25seSBpbml0aWFsT2JqZWN0czogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvcHM6IEJ1Y2tldFNjaGVtYVtcInByb3BzXCJdLCBjb250ZXh0OiBJU2ltdWxhdG9yQ29udGV4dCkge1xuICAgIHRoaXMub2JqZWN0S2V5cyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLmZpbGVEaXIgPSBmcy5ta2R0ZW1wU3luYyhqb2luKG9zLnRtcGRpcigpLCBcIndpbmctc2ltLVwiKSk7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmluaXRpYWxPYmplY3RzID0gcHJvcHMuaW5pdGlhbE9iamVjdHMgPz8ge307XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmluaXRpYWxPYmplY3RzKSkge1xuICAgICAgYXdhaXQgdGhpcy5jb250ZXh0LndpdGhUcmFjZSh7XG4gICAgICAgIG1lc3NhZ2U6IGBBZGRpbmcgb2JqZWN0IGZyb20gcHJlZmxpZ2h0IChrZXk9JHtrZXl9KS5gLFxuICAgICAgICBhY3Rpdml0eTogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmFkZEZpbGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgY2xlYW51cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBmcy5wcm9taXNlcy5ybSh0aGlzLmZpbGVEaXIsIHsgcmVjdXJzaXZlOiB0cnVlLCBmb3JjZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBwdXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LndpdGhUcmFjZSh7XG4gICAgICBtZXNzYWdlOiBgUHV0IChrZXk9JHtrZXl9KS5gLFxuICAgICAgYWN0aXZpdHk6IGFzeW5jICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRmlsZShrZXksIHZhbHVlKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcHV0SnNvbihrZXk6IHN0cmluZywgYm9keTogSnNvbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQud2l0aFRyYWNlKHtcbiAgICAgIG1lc3NhZ2U6IGBQdXQgSnNvbiAoa2V5PSR7a2V5fSkuYCxcbiAgICAgIGFjdGl2aXR5OiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVuYW1lID0gam9pbih0aGlzLmZpbGVEaXIsIGtleSk7XG4gICAgICAgIGF3YWl0IGZzLnByb21pc2VzLndyaXRlRmlsZShmaWxlbmFtZSwgSlNPTi5zdHJpbmdpZnkoYm9keSwgbnVsbCwgMikpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQud2l0aFRyYWNlKHtcbiAgICAgIG1lc3NhZ2U6IGBHZXQgKGtleT0ke2tleX0pLmAsXG4gICAgICBhY3Rpdml0eTogYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBoYXNoID0gdGhpcy5oYXNoS2V5KGtleSk7XG4gICAgICAgIGNvbnN0IGZpbGVuYW1lID0gam9pbih0aGlzLmZpbGVEaXIsIGhhc2gpO1xuICAgICAgICByZXR1cm4gZnMucHJvbWlzZXMucmVhZEZpbGUoZmlsZW5hbWUsIFwidXRmOFwiKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0SnNvbihrZXk6IHN0cmluZyk6IFByb21pc2U8SnNvbj4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQud2l0aFRyYWNlKHtcbiAgICAgIG1lc3NhZ2U6IGBHZXQgSnNvbiAoa2V5PSR7a2V5fSkuYCxcbiAgICAgIGFjdGl2aXR5OiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVuYW1lID0gam9pbih0aGlzLmZpbGVEaXIsIGtleSk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGF3YWl0IGZzLnByb21pc2VzLnJlYWRGaWxlKGZpbGVuYW1lLCBcInV0ZjhcIikpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBsaXN0KHByZWZpeD86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LndpdGhUcmFjZSh7XG4gICAgICBtZXNzYWdlOiBgTGlzdCAocHJlZml4PSR7cHJlZml4ID8/IFwibnVsbFwifSkuYCxcbiAgICAgIGFjdGl2aXR5OiBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMub2JqZWN0S2V5cy52YWx1ZXMoKSkuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5LnN0YXJ0c1dpdGgocHJlZml4KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZGVsZXRlKGtleTogc3RyaW5nLCBvcHRzPzogQnVja2V0RGVsZXRlT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQud2l0aFRyYWNlKHtcbiAgICAgIG1lc3NhZ2U6IGBEZWxldGUgKGtleT0ke2tleX0pLmAsXG4gICAgICBhY3Rpdml0eTogYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBtdXN0RXhpc3QgPSBvcHRzPy5tdXN0RXhpc3QgPz8gZmFsc2U7XG5cbiAgICAgICAgaWYgKCF0aGlzLm9iamVjdEtleXMuaGFzKGtleSkgJiYgbXVzdEV4aXN0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBPYmplY3QgZG9lcyBub3QgZXhpc3QgKGtleT0ke2tleX0pLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm9iamVjdEtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYXNoID0gdGhpcy5oYXNoS2V5KGtleSk7XG4gICAgICAgIGNvbnN0IGZpbGVuYW1lID0gam9pbih0aGlzLmZpbGVEaXIsIGhhc2gpO1xuICAgICAgICBhd2FpdCBmcy5wcm9taXNlcy51bmxpbmsoZmlsZW5hbWUpO1xuICAgICAgICB0aGlzLm9iamVjdEtleXMuZGVsZXRlKGtleSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBhZGRGaWxlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgaGFzaCA9IHRoaXMuaGFzaEtleShrZXkpO1xuICAgIGNvbnN0IGZpbGVuYW1lID0gam9pbih0aGlzLmZpbGVEaXIsIGhhc2gpO1xuICAgIGNvbnN0IGRpck5hbWUgPSBkaXJuYW1lKGZpbGVuYW1lKTtcbiAgICBhd2FpdCBmcy5wcm9taXNlcy5ta2RpcihkaXJOYW1lLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgICBhd2FpdCBmcy5wcm9taXNlcy53cml0ZUZpbGUoZmlsZW5hbWUsIHZhbHVlKTtcbiAgICB0aGlzLm9iamVjdEtleXMuYWRkKGtleSk7XG4gIH1cblxuICBwcml2YXRlIGhhc2hLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBjcnlwdG8uY3JlYXRlSGFzaChcInNoYTUxMlwiKS51cGRhdGUoa2V5KS5kaWdlc3QoXCJoZXhcIik7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ 4653:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bucket = void 0;
const schema_resources_1 = __nccwpck_require__(3083);
const util_1 = __nccwpck_require__(7961);
const cloud = __importStar(__nccwpck_require__(832));
/**
 * Simulator implementation of `cloud.Bucket`.
 *
 * @inflight `@winglang/sdk.cloud.IBucketClient`
 */
class Bucket extends cloud.Bucket {
    constructor(scope, id, props = {}) {
        super(scope, id, props);
        this.initialObjects = {};
        this.public = props.public ?? false;
    }
    addObject(key, body) {
        this.initialObjects[key] = body;
    }
    toSimulator() {
        const schema = {
            type: schema_resources_1.BUCKET_TYPE,
            path: this.node.path,
            props: {
                public: this.public,
                initialObjects: this.initialObjects,
            },
            attrs: {},
        };
        return schema;
    }
    /** @internal */
    _bind(host, ops) {
        (0, util_1.bindSimulatorResource)("bucket", this, host);
        super._bind(host, ops);
    }
    /** @internal */
    _toInflight() {
        return (0, util_1.makeSimulatorJsClient)("bucket", this);
    }
}
exports.Bucket = Bucket;
Bucket._annotateInflight("put", {});
Bucket._annotateInflight("get", {});
Bucket._annotateInflight("delete", {});
Bucket._annotateInflight("list", {});
Bucket._annotateInflight("put_json", {});
Bucket._annotateInflight("get_json", {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RhcmdldC1zaW0vYnVja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EseURBQStEO0FBQy9ELGlDQUFzRTtBQUN0RSxnREFBa0M7QUFHbEM7Ozs7R0FJRztBQUNILE1BQWEsTUFBTyxTQUFRLEtBQUssQ0FBQyxNQUFNO0lBR3RDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsUUFBMkIsRUFBRTtRQUNyRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUZULG1CQUFjLEdBQTJCLEVBQUUsQ0FBQztRQUkzRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxTQUFTLENBQUMsR0FBVyxFQUFFLElBQVk7UUFDeEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxNQUFNLEdBQWlCO1lBQzNCLElBQUksRUFBRSw4QkFBVztZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ3BCLEtBQUssRUFBRTtnQkFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYzthQUNwQztZQUNELEtBQUssRUFBRSxFQUFTO1NBQ2pCLENBQUM7UUFDRixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsZ0JBQWdCO0lBQ1QsS0FBSyxDQUFDLElBQXdCLEVBQUUsR0FBYTtRQUNsRCxJQUFBLDRCQUFxQixFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELGdCQUFnQjtJQUNULFdBQVc7UUFDaEIsT0FBTyxJQUFBLDRCQUFxQixFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0Y7QUFwQ0Qsd0JBb0NDO0FBRUQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNwQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdkMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNyQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgSVNpbXVsYXRvclJlc291cmNlIH0gZnJvbSBcIi4vcmVzb3VyY2VcIjtcbmltcG9ydCB7IEJhc2VSZXNvdXJjZVNjaGVtYSB9IGZyb20gXCIuL3NjaGVtYVwiO1xuaW1wb3J0IHsgQnVja2V0U2NoZW1hLCBCVUNLRVRfVFlQRSB9IGZyb20gXCIuL3NjaGVtYS1yZXNvdXJjZXNcIjtcbmltcG9ydCB7IGJpbmRTaW11bGF0b3JSZXNvdXJjZSwgbWFrZVNpbXVsYXRvckpzQ2xpZW50IH0gZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0ICogYXMgY2xvdWQgZnJvbSBcIi4uL2Nsb3VkXCI7XG5pbXBvcnQgKiBhcyBjb3JlIGZyb20gXCIuLi9jb3JlXCI7XG5cbi8qKlxuICogU2ltdWxhdG9yIGltcGxlbWVudGF0aW9uIG9mIGBjbG91ZC5CdWNrZXRgLlxuICpcbiAqIEBpbmZsaWdodCBgQHdpbmdsYW5nL3Nkay5jbG91ZC5JQnVja2V0Q2xpZW50YFxuICovXG5leHBvcnQgY2xhc3MgQnVja2V0IGV4dGVuZHMgY2xvdWQuQnVja2V0IGltcGxlbWVudHMgSVNpbXVsYXRvclJlc291cmNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBwdWJsaWM6IGJvb2xlYW47XG4gIHByaXZhdGUgcmVhZG9ubHkgaW5pdGlhbE9iamVjdHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IGNsb3VkLkJ1Y2tldFByb3BzID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIHRoaXMucHVibGljID0gcHJvcHMucHVibGljID8/IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGFkZE9iamVjdChrZXk6IHN0cmluZywgYm9keTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pbml0aWFsT2JqZWN0c1trZXldID0gYm9keTtcbiAgfVxuXG4gIHB1YmxpYyB0b1NpbXVsYXRvcigpOiBCYXNlUmVzb3VyY2VTY2hlbWEge1xuICAgIGNvbnN0IHNjaGVtYTogQnVja2V0U2NoZW1hID0ge1xuICAgICAgdHlwZTogQlVDS0VUX1RZUEUsXG4gICAgICBwYXRoOiB0aGlzLm5vZGUucGF0aCxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHB1YmxpYzogdGhpcy5wdWJsaWMsXG4gICAgICAgIGluaXRpYWxPYmplY3RzOiB0aGlzLmluaXRpYWxPYmplY3RzLFxuICAgICAgfSxcbiAgICAgIGF0dHJzOiB7fSBhcyBhbnksXG4gICAgfTtcbiAgICByZXR1cm4gc2NoZW1hO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwdWJsaWMgX2JpbmQoaG9zdDogY29yZS5JSW5mbGlnaHRIb3N0LCBvcHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgYmluZFNpbXVsYXRvclJlc291cmNlKFwiYnVja2V0XCIsIHRoaXMsIGhvc3QpO1xuICAgIHN1cGVyLl9iaW5kKGhvc3QsIG9wcyk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHB1YmxpYyBfdG9JbmZsaWdodCgpOiBjb3JlLkNvZGUge1xuICAgIHJldHVybiBtYWtlU2ltdWxhdG9ySnNDbGllbnQoXCJidWNrZXRcIiwgdGhpcyk7XG4gIH1cbn1cblxuQnVja2V0Ll9hbm5vdGF0ZUluZmxpZ2h0KFwicHV0XCIsIHt9KTtcbkJ1Y2tldC5fYW5ub3RhdGVJbmZsaWdodChcImdldFwiLCB7fSk7XG5CdWNrZXQuX2Fubm90YXRlSW5mbGlnaHQoXCJkZWxldGVcIiwge30pO1xuQnVja2V0Ll9hbm5vdGF0ZUluZmxpZ2h0KFwibGlzdFwiLCB7fSk7XG5CdWNrZXQuX2Fubm90YXRlSW5mbGlnaHQoXCJwdXRfanNvblwiLCB7fSk7XG5CdWNrZXQuX2Fubm90YXRlSW5mbGlnaHQoXCJnZXRfanNvblwiLCB7fSk7XG4iXX0=

/***/ }),

/***/ 4864:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Counter = void 0;
class Counter {
    constructor(props, context) {
        this.value = props.initial;
        this.context = context;
    }
    async init() { }
    async cleanup() { }
    async inc(amount = 1) {
        return this.context.withTrace({
            message: `Inc (amount=${amount}).`,
            activity: async () => {
                const prev = this.value;
                this.value += amount;
                return prev;
            },
        });
    }
    async dec(amount = 1) {
        return this.context.withTrace({
            message: `Dec (amount=${amount}).`,
            activity: async () => {
                const prev = this.value;
                this.value -= amount;
                return prev;
            },
        });
    }
    async peek() {
        return this.context.withTrace({
            message: `Peek (value=${this.value}).`,
            activity: async () => {
                return this.value;
            },
        });
    }
    async reset(reset_value = 0) {
        return this.context.withTrace({
            message: `Reset (value=${this.value}).`,
            activity: async () => {
                this.value = reset_value;
            },
        });
    }
}
exports.Counter = Counter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5pbmZsaWdodC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXJnZXQtc2ltL2NvdW50ZXIuaW5mbGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBS0EsTUFBYSxPQUFPO0lBSWxCLFlBQ0UsS0FBNkIsRUFDN0IsT0FBMEI7UUFFMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxLQUFtQixDQUFDO0lBQzlCLEtBQUssQ0FBQyxPQUFPLEtBQW1CLENBQUM7SUFFakMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFpQixDQUFDO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDNUIsT0FBTyxFQUFFLGVBQWUsTUFBTSxJQUFJO1lBQ2xDLFFBQVEsRUFBRSxLQUFLLElBQUksRUFBRTtnQkFDbkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUM7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQWlCLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUM1QixPQUFPLEVBQUUsZUFBZSxNQUFNLElBQUk7WUFDbEMsUUFBUSxFQUFFLEtBQUssSUFBSSxFQUFFO2dCQUNuQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN4QixJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQztnQkFDckIsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUM1QixPQUFPLEVBQUUsZUFBZSxJQUFJLENBQUMsS0FBSyxJQUFJO1lBQ3RDLFFBQVEsRUFBRSxLQUFLLElBQUksRUFBRTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFzQixDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDNUIsT0FBTyxFQUFFLGdCQUFnQixJQUFJLENBQUMsS0FBSyxJQUFJO1lBQ3ZDLFFBQVEsRUFBRSxLQUFLLElBQUksRUFBRTtnQkFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7WUFDM0IsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQXRERCwwQkFzREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU2ltdWxhdG9yUmVzb3VyY2VJbnN0YW5jZSB9IGZyb20gXCIuL3Jlc291cmNlXCI7XG5pbXBvcnQgeyBDb3VudGVyU2NoZW1hIH0gZnJvbSBcIi4vc2NoZW1hLXJlc291cmNlc1wiO1xuaW1wb3J0IHsgSUNvdW50ZXJDbGllbnQgfSBmcm9tIFwiLi4vY2xvdWRcIjtcbmltcG9ydCB7IElTaW11bGF0b3JDb250ZXh0IH0gZnJvbSBcIi4uL3Rlc3Rpbmcvc2ltdWxhdG9yXCI7XG5cbmV4cG9ydCBjbGFzcyBDb3VudGVyIGltcGxlbWVudHMgSUNvdW50ZXJDbGllbnQsIElTaW11bGF0b3JSZXNvdXJjZUluc3RhbmNlIHtcbiAgcHJpdmF0ZSB2YWx1ZTogbnVtYmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IElTaW11bGF0b3JDb250ZXh0O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcm9wczogQ291bnRlclNjaGVtYVtcInByb3BzXCJdLFxuICAgIGNvbnRleHQ6IElTaW11bGF0b3JDb250ZXh0XG4gICkge1xuICAgIHRoaXMudmFsdWUgPSBwcm9wcy5pbml0aWFsO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHt9XG4gIHB1YmxpYyBhc3luYyBjbGVhbnVwKCk6IFByb21pc2U8dm9pZD4ge31cblxuICBwdWJsaWMgYXN5bmMgaW5jKGFtb3VudDogbnVtYmVyID0gMSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC53aXRoVHJhY2Uoe1xuICAgICAgbWVzc2FnZTogYEluYyAoYW1vdW50PSR7YW1vdW50fSkuYCxcbiAgICAgIGFjdGl2aXR5OiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXYgPSB0aGlzLnZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlICs9IGFtb3VudDtcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGRlYyhhbW91bnQ6IG51bWJlciA9IDEpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQud2l0aFRyYWNlKHtcbiAgICAgIG1lc3NhZ2U6IGBEZWMgKGFtb3VudD0ke2Ftb3VudH0pLmAsXG4gICAgICBhY3Rpdml0eTogYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2ID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSAtPSBhbW91bnQ7XG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBwZWVrKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC53aXRoVHJhY2Uoe1xuICAgICAgbWVzc2FnZTogYFBlZWsgKHZhbHVlPSR7dGhpcy52YWx1ZX0pLmAsXG4gICAgICBhY3Rpdml0eTogYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVzZXQocmVzZXRfdmFsdWU6IG51bWJlciA9IDApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LndpdGhUcmFjZSh7XG4gICAgICBtZXNzYWdlOiBgUmVzZXQgKHZhbHVlPSR7dGhpcy52YWx1ZX0pLmAsXG4gICAgICBhY3Rpdml0eTogYXN5bmMgKCkgPT4ge1xuICAgICAgICB0aGlzLnZhbHVlID0gcmVzZXRfdmFsdWU7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ 5381:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Counter = void 0;
const schema_resources_1 = __nccwpck_require__(3083);
const util_1 = __nccwpck_require__(7961);
const cloud = __importStar(__nccwpck_require__(832));
/**
 * Simulator implementation of `cloud.Counter`.
 *
 * @inflight `@winglang/sdk.cloud.ICounterClient`
 */
class Counter extends cloud.Counter {
    constructor(scope, id, props = {}) {
        super(scope, id, props);
        this.initial = props.initial ?? 0;
    }
    toSimulator() {
        const schema = {
            type: schema_resources_1.COUNTER_TYPE,
            path: this.node.path,
            props: {
                initial: this.initial,
            },
            attrs: {},
        };
        return schema;
    }
    /** @internal */
    _bind(host, ops) {
        (0, util_1.bindSimulatorResource)("counter", this, host);
        super._bind(host, ops);
    }
    /** @internal */
    _toInflight() {
        return (0, util_1.makeSimulatorJsClient)("counter", this);
    }
}
exports.Counter = Counter;
Counter._annotateInflight("inc", {});
Counter._annotateInflight("dec", {});
Counter._annotateInflight("peek", {});
Counter._annotateInflight("reset", {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXJnZXQtc2ltL2NvdW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSx5REFBaUU7QUFDakUsaUNBQXNFO0FBQ3RFLGdEQUFrQztBQUdsQzs7OztHQUlHO0FBQ0gsTUFBYSxPQUFRLFNBQVEsS0FBSyxDQUFDLE9BQU87SUFFeEMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxRQUE0QixFQUFFO1FBQ3RFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxNQUFNLEdBQWtCO1lBQzVCLElBQUksRUFBRSwrQkFBWTtZQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ3BCLEtBQUssRUFBRTtnQkFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDdEI7WUFDRCxLQUFLLEVBQUUsRUFBUztTQUNqQixDQUFDO1FBQ0YsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELGdCQUFnQjtJQUNULEtBQUssQ0FBQyxJQUF3QixFQUFFLEdBQWE7UUFDbEQsSUFBQSw0QkFBcUIsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxnQkFBZ0I7SUFDVCxXQUFXO1FBQ2hCLE9BQU8sSUFBQSw0QkFBcUIsRUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNGO0FBOUJELDBCQThCQztBQUVELE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDckMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNyQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3RDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgSVNpbXVsYXRvclJlc291cmNlIH0gZnJvbSBcIi4vcmVzb3VyY2VcIjtcbmltcG9ydCB7IEJhc2VSZXNvdXJjZVNjaGVtYSB9IGZyb20gXCIuL3NjaGVtYVwiO1xuaW1wb3J0IHsgQ291bnRlclNjaGVtYSwgQ09VTlRFUl9UWVBFIH0gZnJvbSBcIi4vc2NoZW1hLXJlc291cmNlc1wiO1xuaW1wb3J0IHsgYmluZFNpbXVsYXRvclJlc291cmNlLCBtYWtlU2ltdWxhdG9ySnNDbGllbnQgfSBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgKiBhcyBjbG91ZCBmcm9tIFwiLi4vY2xvdWRcIjtcbmltcG9ydCAqIGFzIGNvcmUgZnJvbSBcIi4uL2NvcmVcIjtcblxuLyoqXG4gKiBTaW11bGF0b3IgaW1wbGVtZW50YXRpb24gb2YgYGNsb3VkLkNvdW50ZXJgLlxuICpcbiAqIEBpbmZsaWdodCBgQHdpbmdsYW5nL3Nkay5jbG91ZC5JQ291bnRlckNsaWVudGBcbiAqL1xuZXhwb3J0IGNsYXNzIENvdW50ZXIgZXh0ZW5kcyBjbG91ZC5Db3VudGVyIGltcGxlbWVudHMgSVNpbXVsYXRvclJlc291cmNlIHtcbiAgcHVibGljIHJlYWRvbmx5IGluaXRpYWw6IG51bWJlcjtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IGNsb3VkLkNvdW50ZXJQcm9wcyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICB0aGlzLmluaXRpYWwgPSBwcm9wcy5pbml0aWFsID8/IDA7XG4gIH1cblxuICBwdWJsaWMgdG9TaW11bGF0b3IoKTogQmFzZVJlc291cmNlU2NoZW1hIHtcbiAgICBjb25zdCBzY2hlbWE6IENvdW50ZXJTY2hlbWEgPSB7XG4gICAgICB0eXBlOiBDT1VOVEVSX1RZUEUsXG4gICAgICBwYXRoOiB0aGlzLm5vZGUucGF0aCxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGluaXRpYWw6IHRoaXMuaW5pdGlhbCxcbiAgICAgIH0sXG4gICAgICBhdHRyczoge30gYXMgYW55LFxuICAgIH07XG4gICAgcmV0dXJuIHNjaGVtYTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHVibGljIF9iaW5kKGhvc3Q6IGNvcmUuSUluZmxpZ2h0SG9zdCwgb3BzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGJpbmRTaW11bGF0b3JSZXNvdXJjZShcImNvdW50ZXJcIiwgdGhpcywgaG9zdCk7XG4gICAgc3VwZXIuX2JpbmQoaG9zdCwgb3BzKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHVibGljIF90b0luZmxpZ2h0KCk6IGNvcmUuQ29kZSB7XG4gICAgcmV0dXJuIG1ha2VTaW11bGF0b3JKc0NsaWVudChcImNvdW50ZXJcIiwgdGhpcyk7XG4gIH1cbn1cblxuQ291bnRlci5fYW5ub3RhdGVJbmZsaWdodChcImluY1wiLCB7fSk7XG5Db3VudGVyLl9hbm5vdGF0ZUluZmxpZ2h0KFwiZGVjXCIsIHt9KTtcbkNvdW50ZXIuX2Fubm90YXRlSW5mbGlnaHQoXCJwZWVrXCIsIHt9KTtcbkNvdW50ZXIuX2Fubm90YXRlSW5mbGlnaHQoXCJyZXNldFwiLCB7fSk7XG4iXX0=

/***/ }),

/***/ 5242:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultSimulatorFactory = void 0;
const bucket_inflight_1 = __nccwpck_require__(2981);
const counter_inflight_1 = __nccwpck_require__(4864);
const function_inflight_1 = __nccwpck_require__(8323);
const logger_inflight_1 = __nccwpck_require__(2007);
const queue_inflight_1 = __nccwpck_require__(2609);
const schema_resources_1 = __nccwpck_require__(3083);
const topic_inflight_1 = __nccwpck_require__(5960);
class DefaultSimulatorFactory {
    /**
     * Creates a new simulator runtime resource
     * @param type type id
     * @param props resource properties
     * @param context simulator context
     * @returns a new instance
     */
    resolve(type, props, context) {
        switch (type) {
            case schema_resources_1.BUCKET_TYPE:
                return new bucket_inflight_1.Bucket(props, context);
            case schema_resources_1.FUNCTION_TYPE:
                return new function_inflight_1.Function(props, context);
            case schema_resources_1.QUEUE_TYPE:
                return new queue_inflight_1.Queue(props, context);
            case schema_resources_1.LOGGER_TYPE:
                return new logger_inflight_1.Logger(props, context);
            case schema_resources_1.COUNTER_TYPE:
                return new counter_inflight_1.Counter(props, context);
            case schema_resources_1.TOPIC_TYPE:
                return new topic_inflight_1.Topic(props, context);
            default:
                throw new Error(`Type ${type} not implemented.`);
        }
    }
}
exports.DefaultSimulatorFactory = DefaultSimulatorFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5pbmZsaWdodC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXJnZXQtc2ltL2ZhY3RvcnkuaW5mbGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQTJDO0FBQzNDLHlEQUE2QztBQUM3QywyREFBK0M7QUFDL0MsdURBQTJDO0FBQzNDLHFEQUF5QztBQUV6Qyx5REFPNEI7QUFDNUIscURBQXlDO0FBR3pDLE1BQWEsdUJBQXVCO0lBQ2xDOzs7Ozs7T0FNRztJQUNJLE9BQU8sQ0FDWixJQUFZLEVBQ1osS0FBVSxFQUNWLE9BQTBCO1FBRTFCLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyw4QkFBVztnQkFDZCxPQUFPLElBQUksd0JBQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDcEMsS0FBSyxnQ0FBYTtnQkFDaEIsT0FBTyxJQUFJLDRCQUFRLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3RDLEtBQUssNkJBQVU7Z0JBQ2IsT0FBTyxJQUFJLHNCQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLEtBQUssOEJBQVc7Z0JBQ2QsT0FBTyxJQUFJLHdCQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLEtBQUssK0JBQVk7Z0JBQ2YsT0FBTyxJQUFJLDBCQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3JDLEtBQUssNkJBQVU7Z0JBQ2IsT0FBTyxJQUFJLHNCQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ25DO2dCQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLG1CQUFtQixDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDO0NBQ0Y7QUE5QkQsMERBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVja2V0IH0gZnJvbSBcIi4vYnVja2V0LmluZmxpZ2h0XCI7XG5pbXBvcnQgeyBDb3VudGVyIH0gZnJvbSBcIi4vY291bnRlci5pbmZsaWdodFwiO1xuaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tIFwiLi9mdW5jdGlvbi5pbmZsaWdodFwiO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vbG9nZ2VyLmluZmxpZ2h0XCI7XG5pbXBvcnQgeyBRdWV1ZSB9IGZyb20gXCIuL3F1ZXVlLmluZmxpZ2h0XCI7XG5pbXBvcnQgeyBJU2ltdWxhdG9yUmVzb3VyY2VJbnN0YW5jZSB9IGZyb20gXCIuL3Jlc291cmNlXCI7XG5pbXBvcnQge1xuICBCVUNLRVRfVFlQRSxcbiAgQ09VTlRFUl9UWVBFLFxuICBGVU5DVElPTl9UWVBFLFxuICBMT0dHRVJfVFlQRSxcbiAgUVVFVUVfVFlQRSxcbiAgVE9QSUNfVFlQRSxcbn0gZnJvbSBcIi4vc2NoZW1hLXJlc291cmNlc1wiO1xuaW1wb3J0IHsgVG9waWMgfSBmcm9tIFwiLi90b3BpYy5pbmZsaWdodFwiO1xuaW1wb3J0IHsgSVNpbXVsYXRvckZhY3RvcnksIElTaW11bGF0b3JDb250ZXh0IH0gZnJvbSBcIi4uL3Rlc3Rpbmcvc2ltdWxhdG9yXCI7XG5cbmV4cG9ydCBjbGFzcyBEZWZhdWx0U2ltdWxhdG9yRmFjdG9yeSBpbXBsZW1lbnRzIElTaW11bGF0b3JGYWN0b3J5IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgc2ltdWxhdG9yIHJ1bnRpbWUgcmVzb3VyY2VcbiAgICogQHBhcmFtIHR5cGUgdHlwZSBpZFxuICAgKiBAcGFyYW0gcHJvcHMgcmVzb3VyY2UgcHJvcGVydGllc1xuICAgKiBAcGFyYW0gY29udGV4dCBzaW11bGF0b3IgY29udGV4dFxuICAgKiBAcmV0dXJucyBhIG5ldyBpbnN0YW5jZVxuICAgKi9cbiAgcHVibGljIHJlc29sdmUoXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIHByb3BzOiBhbnksXG4gICAgY29udGV4dDogSVNpbXVsYXRvckNvbnRleHRcbiAgKTogSVNpbXVsYXRvclJlc291cmNlSW5zdGFuY2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBCVUNLRVRfVFlQRTpcbiAgICAgICAgcmV0dXJuIG5ldyBCdWNrZXQocHJvcHMsIGNvbnRleHQpO1xuICAgICAgY2FzZSBGVU5DVElPTl9UWVBFOlxuICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKHByb3BzLCBjb250ZXh0KTtcbiAgICAgIGNhc2UgUVVFVUVfVFlQRTpcbiAgICAgICAgcmV0dXJuIG5ldyBRdWV1ZShwcm9wcywgY29udGV4dCk7XG4gICAgICBjYXNlIExPR0dFUl9UWVBFOlxuICAgICAgICByZXR1cm4gbmV3IExvZ2dlcihwcm9wcywgY29udGV4dCk7XG4gICAgICBjYXNlIENPVU5URVJfVFlQRTpcbiAgICAgICAgcmV0dXJuIG5ldyBDb3VudGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICAgIGNhc2UgVE9QSUNfVFlQRTpcbiAgICAgICAgcmV0dXJuIG5ldyBUb3BpYyhwcm9wcywgY29udGV4dCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFR5cGUgJHt0eXBlfSBub3QgaW1wbGVtZW50ZWQuYCk7XG4gICAgfVxuICB9XG59XG4iXX0=

/***/ }),

/***/ 8323:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Function = void 0;
const fs = __importStar(__nccwpck_require__(7147));
const path_ = __importStar(__nccwpck_require__(1017));
const process = __importStar(__nccwpck_require__(7282));
const vm = __importStar(__nccwpck_require__(6144));
const function_1 = __nccwpck_require__(3633);
const schema_resources_1 = __nccwpck_require__(3083);
class Function {
    constructor(props, context) {
        if (props.sourceCodeLanguage !== "javascript") {
            throw new Error("Only JavaScript is supported");
        }
        this.filename = path_.resolve(context.assetsDir, props.sourceCodeFile);
        this.env = props.environmentVariables ?? {};
        this.context = context;
        this.timeout = props.timeout;
    }
    async init() {
        return;
    }
    async cleanup() {
        return;
    }
    async invoke(payload) {
        const userCode = fs.readFileSync(this.filename, "utf8");
        const wrapper = [
            "const exports = {};",
            "Object.assign(process.env, $env);",
            userCode,
            // The last statement is the value that will be returned by vm.runInThisContext
            `exports.handler(${JSON.stringify(payload)});`,
        ].join("\n");
        const context = vm.createContext({
            // TODO: include all NodeJS globals?
            // https://nodejs.org/api/globals.html#global-objects
            // https://stackoverflow.com/questions/59049140/is-it-possible-to-make-all-of-node-js-globals-available-in-nodes-vm-context
            fs: fs,
            path: path_,
            process: {
                ...process,
                // override process.exit to throw an exception instead of exiting the process
                exit: (code) => {
                    throw new Error("process.exit() was called with exit code " + code);
                },
            },
            // explicitly DO NOT propagate `console` because inflight
            // function bind console.log to the global $logger object.
            $env: {
                ...this.env,
                [function_1.ENV_WING_SIM_INFLIGHT_RESOURCE_PATH]: this.context.resourcePath,
                [function_1.ENV_WING_SIM_INFLIGHT_RESOURCE_TYPE]: schema_resources_1.FUNCTION_TYPE,
            },
            // Make the global simulator available to user code so that they can find
            // and use other resource clients
            // TODO: Object.freeze this?
            $simulator: this.context,
        });
        return this.context.withTrace({
            message: `Invoke (payload="${JSON.stringify(payload)}").`,
            activity: async () => {
                return vm.runInContext(wrapper, context, { timeout: this.timeout });
            },
        });
    }
}
exports.Function = Function;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24uaW5mbGlnaHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGFyZ2V0LXNpbS9mdW5jdGlvbi5pbmZsaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF5QjtBQUN6Qiw0Q0FBOEI7QUFDOUIsaURBQW1DO0FBQ25DLHVDQUF5QjtBQUN6Qix5Q0FHb0I7QUFFcEIseURBQW1FO0FBSW5FLE1BQWEsUUFBUTtJQU1uQixZQUFZLEtBQThCLEVBQUUsT0FBMEI7UUFDcEUsSUFBSSxLQUFLLENBQUMsa0JBQWtCLEtBQUssWUFBWSxFQUFFO1lBQzdDLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsSUFBSSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSTtRQUNmLE9BQU87SUFDVCxDQUFDO0lBRU0sS0FBSyxDQUFDLE9BQU87UUFDbEIsT0FBTztJQUNULENBQUM7SUFFTSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQWU7UUFDakMsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELE1BQU0sT0FBTyxHQUFHO1lBQ2QscUJBQXFCO1lBQ3JCLG1DQUFtQztZQUNuQyxRQUFRO1lBQ1IsK0VBQStFO1lBQy9FLG1CQUFtQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJO1NBQy9DLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWIsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUMvQixvQ0FBb0M7WUFDcEMscURBQXFEO1lBQ3JELDJIQUEySDtZQUMzSCxFQUFFLEVBQUUsRUFBRTtZQUNOLElBQUksRUFBRSxLQUFLO1lBQ1gsT0FBTyxFQUFFO2dCQUNQLEdBQUcsT0FBTztnQkFDViw2RUFBNkU7Z0JBQzdFLElBQUksRUFBRSxDQUFDLElBQVksRUFBRSxFQUFFO29CQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUN0RSxDQUFDO2FBQ0Y7WUFFRCx5REFBeUQ7WUFDekQsMERBQTBEO1lBRTFELElBQUksRUFBRTtnQkFDSixHQUFHLElBQUksQ0FBQyxHQUFHO2dCQUNYLENBQUMsOENBQW1DLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVk7Z0JBQ2hFLENBQUMsOENBQW1DLENBQUMsRUFBRSxnQ0FBYTthQUNyRDtZQUVELHlFQUF5RTtZQUN6RSxpQ0FBaUM7WUFDakMsNEJBQTRCO1lBQzVCLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTztTQUN6QixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQzVCLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSztZQUN6RCxRQUFRLEVBQUUsS0FBSyxJQUFJLEVBQUU7Z0JBQ25CLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3RFLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUF0RUQsNEJBc0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgKiBhcyBwYXRoXyBmcm9tIFwicGF0aFwiO1xuaW1wb3J0ICogYXMgcHJvY2VzcyBmcm9tIFwicHJvY2Vzc1wiO1xuaW1wb3J0ICogYXMgdm0gZnJvbSBcInZtXCI7XG5pbXBvcnQge1xuICBFTlZfV0lOR19TSU1fSU5GTElHSFRfUkVTT1VSQ0VfUEFUSCxcbiAgRU5WX1dJTkdfU0lNX0lORkxJR0hUX1JFU09VUkNFX1RZUEUsXG59IGZyb20gXCIuL2Z1bmN0aW9uXCI7XG5pbXBvcnQgeyBJU2ltdWxhdG9yUmVzb3VyY2VJbnN0YW5jZSB9IGZyb20gXCIuL3Jlc291cmNlXCI7XG5pbXBvcnQgeyBGdW5jdGlvblNjaGVtYSwgRlVOQ1RJT05fVFlQRSB9IGZyb20gXCIuL3NjaGVtYS1yZXNvdXJjZXNcIjtcbmltcG9ydCB7IElGdW5jdGlvbkNsaWVudCB9IGZyb20gXCIuLi9jbG91ZFwiO1xuaW1wb3J0IHsgSVNpbXVsYXRvckNvbnRleHQgfSBmcm9tIFwiLi4vdGVzdGluZy9zaW11bGF0b3JcIjtcblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uIGltcGxlbWVudHMgSUZ1bmN0aW9uQ2xpZW50LCBJU2ltdWxhdG9yUmVzb3VyY2VJbnN0YW5jZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZmlsZW5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBlbnY6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogSVNpbXVsYXRvckNvbnRleHQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgdGltZW91dDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBGdW5jdGlvblNjaGVtYVtcInByb3BzXCJdLCBjb250ZXh0OiBJU2ltdWxhdG9yQ29udGV4dCkge1xuICAgIGlmIChwcm9wcy5zb3VyY2VDb2RlTGFuZ3VhZ2UgIT09IFwiamF2YXNjcmlwdFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IEphdmFTY3JpcHQgaXMgc3VwcG9ydGVkXCIpO1xuICAgIH1cbiAgICB0aGlzLmZpbGVuYW1lID0gcGF0aF8ucmVzb2x2ZShjb250ZXh0LmFzc2V0c0RpciwgcHJvcHMuc291cmNlQ29kZUZpbGUpO1xuICAgIHRoaXMuZW52ID0gcHJvcHMuZW52aXJvbm1lbnRWYXJpYWJsZXMgPz8ge307XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnRpbWVvdXQgPSBwcm9wcy50aW1lb3V0O1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGNsZWFudXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGludm9rZShwYXlsb2FkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IHVzZXJDb2RlID0gZnMucmVhZEZpbGVTeW5jKHRoaXMuZmlsZW5hbWUsIFwidXRmOFwiKTtcbiAgICBjb25zdCB3cmFwcGVyID0gW1xuICAgICAgXCJjb25zdCBleHBvcnRzID0ge307XCIsXG4gICAgICBcIk9iamVjdC5hc3NpZ24ocHJvY2Vzcy5lbnYsICRlbnYpO1wiLFxuICAgICAgdXNlckNvZGUsXG4gICAgICAvLyBUaGUgbGFzdCBzdGF0ZW1lbnQgaXMgdGhlIHZhbHVlIHRoYXQgd2lsbCBiZSByZXR1cm5lZCBieSB2bS5ydW5JblRoaXNDb250ZXh0XG4gICAgICBgZXhwb3J0cy5oYW5kbGVyKCR7SlNPTi5zdHJpbmdpZnkocGF5bG9hZCl9KTtgLFxuICAgIF0uam9pbihcIlxcblwiKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB2bS5jcmVhdGVDb250ZXh0KHtcbiAgICAgIC8vIFRPRE86IGluY2x1ZGUgYWxsIE5vZGVKUyBnbG9iYWxzP1xuICAgICAgLy8gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9nbG9iYWxzLmh0bWwjZ2xvYmFsLW9iamVjdHNcbiAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU5MDQ5MTQwL2lzLWl0LXBvc3NpYmxlLXRvLW1ha2UtYWxsLW9mLW5vZGUtanMtZ2xvYmFscy1hdmFpbGFibGUtaW4tbm9kZXMtdm0tY29udGV4dFxuICAgICAgZnM6IGZzLFxuICAgICAgcGF0aDogcGF0aF8sXG4gICAgICBwcm9jZXNzOiB7XG4gICAgICAgIC4uLnByb2Nlc3MsXG4gICAgICAgIC8vIG92ZXJyaWRlIHByb2Nlc3MuZXhpdCB0byB0aHJvdyBhbiBleGNlcHRpb24gaW5zdGVhZCBvZiBleGl0aW5nIHRoZSBwcm9jZXNzXG4gICAgICAgIGV4aXQ6IChjb2RlOiBudW1iZXIpID0+IHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmV4aXQoKSB3YXMgY2FsbGVkIHdpdGggZXhpdCBjb2RlIFwiICsgY29kZSk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICAvLyBleHBsaWNpdGx5IERPIE5PVCBwcm9wYWdhdGUgYGNvbnNvbGVgIGJlY2F1c2UgaW5mbGlnaHRcbiAgICAgIC8vIGZ1bmN0aW9uIGJpbmQgY29uc29sZS5sb2cgdG8gdGhlIGdsb2JhbCAkbG9nZ2VyIG9iamVjdC5cblxuICAgICAgJGVudjoge1xuICAgICAgICAuLi50aGlzLmVudixcbiAgICAgICAgW0VOVl9XSU5HX1NJTV9JTkZMSUdIVF9SRVNPVVJDRV9QQVRIXTogdGhpcy5jb250ZXh0LnJlc291cmNlUGF0aCxcbiAgICAgICAgW0VOVl9XSU5HX1NJTV9JTkZMSUdIVF9SRVNPVVJDRV9UWVBFXTogRlVOQ1RJT05fVFlQRSxcbiAgICAgIH0sXG5cbiAgICAgIC8vIE1ha2UgdGhlIGdsb2JhbCBzaW11bGF0b3IgYXZhaWxhYmxlIHRvIHVzZXIgY29kZSBzbyB0aGF0IHRoZXkgY2FuIGZpbmRcbiAgICAgIC8vIGFuZCB1c2Ugb3RoZXIgcmVzb3VyY2UgY2xpZW50c1xuICAgICAgLy8gVE9ETzogT2JqZWN0LmZyZWV6ZSB0aGlzP1xuICAgICAgJHNpbXVsYXRvcjogdGhpcy5jb250ZXh0LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC53aXRoVHJhY2Uoe1xuICAgICAgbWVzc2FnZTogYEludm9rZSAocGF5bG9hZD1cIiR7SlNPTi5zdHJpbmdpZnkocGF5bG9hZCl9XCIpLmAsXG4gICAgICBhY3Rpdml0eTogYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gdm0ucnVuSW5Db250ZXh0KHdyYXBwZXIsIGNvbnRleHQsIHsgdGltZW91dDogdGhpcy50aW1lb3V0IH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuIl19

/***/ }),

/***/ 3633:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Function = exports.ENV_WING_SIM_INFLIGHT_RESOURCE_TYPE = exports.ENV_WING_SIM_INFLIGHT_RESOURCE_PATH = void 0;
const fs_1 = __nccwpck_require__(7147);
const path_1 = __nccwpck_require__(1017);
const schema_resources_1 = __nccwpck_require__(3083);
const util_1 = __nccwpck_require__(7961);
const cloud = __importStar(__nccwpck_require__(832));
const core = __importStar(__nccwpck_require__(6526));
const fs_2 = __nccwpck_require__(7229);
const duration_1 = __nccwpck_require__(9702);
const resource_names_1 = __nccwpck_require__(5505);
exports.ENV_WING_SIM_INFLIGHT_RESOURCE_PATH = "WING_SIM_INFLIGHT_RESOURCE_PATH";
exports.ENV_WING_SIM_INFLIGHT_RESOURCE_TYPE = "WING_SIM_INFLIGHT_RESOURCE_TYPE";
/**
 * Simulator implementation of `cloud.Function`.
 *
 * @inflight `@winglang/sdk.cloud.IFunctionClient`
 */
class Function extends cloud.Function {
    constructor(scope, id, inflight, props = {}) {
        super(scope, id, inflight, props);
        // props.memory is unused since we are not simulating it
        this.timeout = props.timeout ?? duration_1.Duration.fromMinutes(1);
        const assetPath = (0, path_1.join)("assets", resource_names_1.ResourceNames.generateName(this, {
            // Avoid characters that may cause path issues
            disallowedRegex: /[><:"/\\|?*]/g,
            case: resource_names_1.CaseConventions.LOWERCASE,
            sep: "_",
        }), "index.js");
        new fs_2.TextFile(this, "Code", assetPath, {
            lines: [(0, fs_1.readFileSync)(this.assetPath, "utf-8")],
        });
        this.code = core.NodeJsCode.fromFile(assetPath);
    }
    toSimulator() {
        const schema = {
            type: schema_resources_1.FUNCTION_TYPE,
            path: this.node.path,
            props: {
                sourceCodeFile: this.code.path,
                sourceCodeLanguage: "javascript",
                environmentVariables: this.env,
                timeout: this.timeout.seconds * 1000,
            },
            attrs: {},
        };
        return schema;
    }
    /** @internal */
    _bind(host, ops) {
        (0, util_1.bindSimulatorResource)("function", this, host);
        super._bind(host, ops);
    }
    /** @internal */
    _toInflight() {
        return (0, util_1.makeSimulatorJsClient)("function", this);
    }
}
exports.Function = Function;
Function._annotateInflight("invoke", {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGFyZ2V0LXNpbS9mdW5jdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJCQUFrQztBQUNsQywrQkFBNEI7QUFJNUIseURBQW1FO0FBQ25FLGlDQUFzRTtBQUN0RSxnREFBa0M7QUFDbEMsOENBQWdDO0FBQ2hDLDhCQUFpQztBQUNqQyw4Q0FBMkM7QUFDM0MsNERBQXlFO0FBRTVELFFBQUEsbUNBQW1DLEdBQzlDLGlDQUFpQyxDQUFDO0FBQ3ZCLFFBQUEsbUNBQW1DLEdBQzlDLGlDQUFpQyxDQUFDO0FBRXBDOzs7O0dBSUc7QUFDSCxNQUFhLFFBQVMsU0FBUSxLQUFLLENBQUMsUUFBUTtJQUcxQyxZQUNFLEtBQWdCLEVBQ2hCLEVBQVUsRUFDVixRQUFnQyxFQUNoQyxRQUE2QixFQUFFO1FBRS9CLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVsQyx3REFBd0Q7UUFFeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLG1CQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sU0FBUyxHQUFHLElBQUEsV0FBSSxFQUNwQixRQUFRLEVBQ1IsOEJBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO1lBQy9CLDhDQUE4QztZQUM5QyxlQUFlLEVBQUUsZUFBZTtZQUNoQyxJQUFJLEVBQUUsZ0NBQWUsQ0FBQyxTQUFTO1lBQy9CLEdBQUcsRUFBRSxHQUFHO1NBQ1QsQ0FBQyxFQUNGLFVBQVUsQ0FDWCxDQUFDO1FBQ0YsSUFBSSxhQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7WUFDcEMsS0FBSyxFQUFFLENBQUMsSUFBQSxpQkFBWSxFQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDL0MsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sV0FBVztRQUNoQixNQUFNLE1BQU0sR0FBbUI7WUFDN0IsSUFBSSxFQUFFLGdDQUFhO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDcEIsS0FBSyxFQUFFO2dCQUNMLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQzlCLGtCQUFrQixFQUFFLFlBQVk7Z0JBQ2hDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxHQUFHO2dCQUM5QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSTthQUNyQztZQUNELEtBQUssRUFBRSxFQUFTO1NBQ2pCLENBQUM7UUFDRixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsZ0JBQWdCO0lBQ1QsS0FBSyxDQUFDLElBQXdCLEVBQUUsR0FBYTtRQUNsRCxJQUFBLDRCQUFxQixFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELGdCQUFnQjtJQUNULFdBQVc7UUFDaEIsT0FBTyxJQUFBLDRCQUFxQixFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0Y7QUF2REQsNEJBdURDO0FBRUQsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgSVNpbXVsYXRvclJlc291cmNlIH0gZnJvbSBcIi4vcmVzb3VyY2VcIjtcbmltcG9ydCB7IEJhc2VSZXNvdXJjZVNjaGVtYSB9IGZyb20gXCIuL3NjaGVtYVwiO1xuaW1wb3J0IHsgRnVuY3Rpb25TY2hlbWEsIEZVTkNUSU9OX1RZUEUgfSBmcm9tIFwiLi9zY2hlbWEtcmVzb3VyY2VzXCI7XG5pbXBvcnQgeyBiaW5kU2ltdWxhdG9yUmVzb3VyY2UsIG1ha2VTaW11bGF0b3JKc0NsaWVudCB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCAqIGFzIGNsb3VkIGZyb20gXCIuLi9jbG91ZFwiO1xuaW1wb3J0ICogYXMgY29yZSBmcm9tIFwiLi4vY29yZVwiO1xuaW1wb3J0IHsgVGV4dEZpbGUgfSBmcm9tIFwiLi4vZnNcIjtcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSBcIi4uL3N0ZC9kdXJhdGlvblwiO1xuaW1wb3J0IHsgQ2FzZUNvbnZlbnRpb25zLCBSZXNvdXJjZU5hbWVzIH0gZnJvbSBcIi4uL3V0aWxzL3Jlc291cmNlLW5hbWVzXCI7XG5cbmV4cG9ydCBjb25zdCBFTlZfV0lOR19TSU1fSU5GTElHSFRfUkVTT1VSQ0VfUEFUSCA9XG4gIFwiV0lOR19TSU1fSU5GTElHSFRfUkVTT1VSQ0VfUEFUSFwiO1xuZXhwb3J0IGNvbnN0IEVOVl9XSU5HX1NJTV9JTkZMSUdIVF9SRVNPVVJDRV9UWVBFID1cbiAgXCJXSU5HX1NJTV9JTkZMSUdIVF9SRVNPVVJDRV9UWVBFXCI7XG5cbi8qKlxuICogU2ltdWxhdG9yIGltcGxlbWVudGF0aW9uIG9mIGBjbG91ZC5GdW5jdGlvbmAuXG4gKlxuICogQGluZmxpZ2h0IGBAd2luZ2xhbmcvc2RrLmNsb3VkLklGdW5jdGlvbkNsaWVudGBcbiAqL1xuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uIGV4dGVuZHMgY2xvdWQuRnVuY3Rpb24gaW1wbGVtZW50cyBJU2ltdWxhdG9yUmVzb3VyY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGNvZGU6IGNvcmUuQ29kZTtcbiAgcHJpdmF0ZSByZWFkb25seSB0aW1lb3V0OiBEdXJhdGlvbjtcbiAgY29uc3RydWN0b3IoXG4gICAgc2NvcGU6IENvbnN0cnVjdCxcbiAgICBpZDogc3RyaW5nLFxuICAgIGluZmxpZ2h0OiBjbG91ZC5JRnVuY3Rpb25IYW5kbGVyLFxuICAgIHByb3BzOiBjbG91ZC5GdW5jdGlvblByb3BzID0ge31cbiAgKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBpbmZsaWdodCwgcHJvcHMpO1xuXG4gICAgLy8gcHJvcHMubWVtb3J5IGlzIHVudXNlZCBzaW5jZSB3ZSBhcmUgbm90IHNpbXVsYXRpbmcgaXRcblxuICAgIHRoaXMudGltZW91dCA9IHByb3BzLnRpbWVvdXQgPz8gRHVyYXRpb24uZnJvbU1pbnV0ZXMoMSk7XG4gICAgY29uc3QgYXNzZXRQYXRoID0gam9pbihcbiAgICAgIFwiYXNzZXRzXCIsXG4gICAgICBSZXNvdXJjZU5hbWVzLmdlbmVyYXRlTmFtZSh0aGlzLCB7XG4gICAgICAgIC8vIEF2b2lkIGNoYXJhY3RlcnMgdGhhdCBtYXkgY2F1c2UgcGF0aCBpc3N1ZXNcbiAgICAgICAgZGlzYWxsb3dlZFJlZ2V4OiAvWz48OlwiL1xcXFx8PypdL2csXG4gICAgICAgIGNhc2U6IENhc2VDb252ZW50aW9ucy5MT1dFUkNBU0UsXG4gICAgICAgIHNlcDogXCJfXCIsXG4gICAgICB9KSxcbiAgICAgIFwiaW5kZXguanNcIlxuICAgICk7XG4gICAgbmV3IFRleHRGaWxlKHRoaXMsIFwiQ29kZVwiLCBhc3NldFBhdGgsIHtcbiAgICAgIGxpbmVzOiBbcmVhZEZpbGVTeW5jKHRoaXMuYXNzZXRQYXRoLCBcInV0Zi04XCIpXSxcbiAgICB9KTtcbiAgICB0aGlzLmNvZGUgPSBjb3JlLk5vZGVKc0NvZGUuZnJvbUZpbGUoYXNzZXRQYXRoKTtcbiAgfVxuXG4gIHB1YmxpYyB0b1NpbXVsYXRvcigpOiBCYXNlUmVzb3VyY2VTY2hlbWEge1xuICAgIGNvbnN0IHNjaGVtYTogRnVuY3Rpb25TY2hlbWEgPSB7XG4gICAgICB0eXBlOiBGVU5DVElPTl9UWVBFLFxuICAgICAgcGF0aDogdGhpcy5ub2RlLnBhdGgsXG4gICAgICBwcm9wczoge1xuICAgICAgICBzb3VyY2VDb2RlRmlsZTogdGhpcy5jb2RlLnBhdGgsXG4gICAgICAgIHNvdXJjZUNvZGVMYW5ndWFnZTogXCJqYXZhc2NyaXB0XCIsXG4gICAgICAgIGVudmlyb25tZW50VmFyaWFibGVzOiB0aGlzLmVudixcbiAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0LnNlY29uZHMgKiAxMDAwLFxuICAgICAgfSxcbiAgICAgIGF0dHJzOiB7fSBhcyBhbnksXG4gICAgfTtcbiAgICByZXR1cm4gc2NoZW1hO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwdWJsaWMgX2JpbmQoaG9zdDogY29yZS5JSW5mbGlnaHRIb3N0LCBvcHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgYmluZFNpbXVsYXRvclJlc291cmNlKFwiZnVuY3Rpb25cIiwgdGhpcywgaG9zdCk7XG4gICAgc3VwZXIuX2JpbmQoaG9zdCwgb3BzKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHVibGljIF90b0luZmxpZ2h0KCk6IGNvcmUuQ29kZSB7XG4gICAgcmV0dXJuIG1ha2VTaW11bGF0b3JKc0NsaWVudChcImZ1bmN0aW9uXCIsIHRoaXMpO1xuICB9XG59XG5cbkZ1bmN0aW9uLl9hbm5vdGF0ZUluZmxpZ2h0KFwiaW52b2tlXCIsIHt9KTtcbiJdfQ==

/***/ }),

/***/ 1237:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(4364), exports);
__exportStar(__nccwpck_require__(4653), exports);
__exportStar(__nccwpck_require__(5381), exports);
__exportStar(__nccwpck_require__(3633), exports);
__exportStar(__nccwpck_require__(9236), exports);
__exportStar(__nccwpck_require__(2849), exports);
__exportStar(__nccwpck_require__(7516), exports);
__exportStar(__nccwpck_require__(9508), exports);
__exportStar(__nccwpck_require__(5628), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGFyZ2V0LXNpbS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXNCO0FBQ3RCLDJDQUF5QjtBQUN6Qiw0Q0FBMEI7QUFDMUIsNkNBQTJCO0FBQzNCLDJDQUF5QjtBQUN6QiwwQ0FBd0I7QUFDeEIsNkNBQTJCO0FBQzNCLDJDQUF5QjtBQUN6QiwwQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9hcHBcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2J1Y2tldFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vY291bnRlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vZnVuY3Rpb25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xvZ2dlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcXVldWVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Jlc291cmNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zY2hlbWFcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RvcGljXCI7XG4iXX0=

/***/ }),

/***/ 2007:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logger = void 0;
const fs = __importStar(__nccwpck_require__(7147));
const os = __importStar(__nccwpck_require__(2037));
const path_1 = __nccwpck_require__(1017);
const function_1 = __nccwpck_require__(3633);
const testing_1 = __nccwpck_require__(2063);
class Logger {
    constructor(_props, context) {
        this.logsDir = fs.mkdtempSync((0, path_1.join)(os.tmpdir(), "wing-sim-"));
        this.context = context;
    }
    async init() {
        return;
    }
    async cleanup() {
        // TODO: clean up logs dir?
        return;
    }
    async print(message) {
        if (!fs.existsSync(this.logsDir)) {
            throw new Error(`Logs directory ${this.logsDir} does not exist.`);
        }
        // TODO: add some other compute context mechanism?
        const resourcePath = process.env[function_1.ENV_WING_SIM_INFLIGHT_RESOURCE_PATH];
        const resourceType = process.env[function_1.ENV_WING_SIM_INFLIGHT_RESOURCE_TYPE];
        return this.context.addTrace({
            data: { message },
            type: testing_1.TraceType.LOG,
            sourcePath: resourcePath,
            sourceType: resourceType,
            timestamp: new Date().toISOString(),
        });
    }
}
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmluZmxpZ2h0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RhcmdldC1zaW0vbG9nZ2VyLmluZmxpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXlCO0FBQ3pCLHVDQUF5QjtBQUN6QiwrQkFBNEI7QUFDNUIseUNBR29CO0FBSXBCLHdDQUEwRDtBQUUxRCxNQUFhLE1BQU07SUFHakIsWUFDRSxNQUE2QixFQUM3QixPQUEwQjtRQUUxQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBQSxXQUFJLEVBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJO1FBQ2YsT0FBTztJQUNULENBQUM7SUFFTSxLQUFLLENBQUMsT0FBTztRQUNsQiwyQkFBMkI7UUFDM0IsT0FBTztJQUNULENBQUM7SUFFTSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQWU7UUFDaEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLElBQUksQ0FBQyxPQUFPLGtCQUFrQixDQUFDLENBQUM7U0FDbkU7UUFFRCxrREFBa0Q7UUFDbEQsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBbUMsQ0FBRSxDQUFDO1FBQ3ZFLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsOENBQW1DLENBQUUsQ0FBQztRQUV2RSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQzNCLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRTtZQUNqQixJQUFJLEVBQUUsbUJBQVMsQ0FBQyxHQUFHO1lBQ25CLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRTtTQUNwQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFyQ0Qsd0JBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgKiBhcyBvcyBmcm9tIFwib3NcIjtcbmltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHtcbiAgRU5WX1dJTkdfU0lNX0lORkxJR0hUX1JFU09VUkNFX1BBVEgsXG4gIEVOVl9XSU5HX1NJTV9JTkZMSUdIVF9SRVNPVVJDRV9UWVBFLFxufSBmcm9tIFwiLi9mdW5jdGlvblwiO1xuaW1wb3J0IHsgSVNpbXVsYXRvclJlc291cmNlSW5zdGFuY2UgfSBmcm9tIFwiLi9yZXNvdXJjZVwiO1xuaW1wb3J0IHsgTG9nZ2VyU2NoZW1hIH0gZnJvbSBcIi4vc2NoZW1hLXJlc291cmNlc1wiO1xuaW1wb3J0IHsgSUxvZ2dlckNsaWVudCB9IGZyb20gXCIuLi9jbG91ZFwiO1xuaW1wb3J0IHsgSVNpbXVsYXRvckNvbnRleHQsIFRyYWNlVHlwZSB9IGZyb20gXCIuLi90ZXN0aW5nXCI7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyQ2xpZW50LCBJU2ltdWxhdG9yUmVzb3VyY2VJbnN0YW5jZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbG9nc0Rpcjogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IElTaW11bGF0b3JDb250ZXh0O1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgX3Byb3BzOiBMb2dnZXJTY2hlbWFbXCJwcm9wc1wiXSxcbiAgICBjb250ZXh0OiBJU2ltdWxhdG9yQ29udGV4dFxuICApIHtcbiAgICB0aGlzLmxvZ3NEaXIgPSBmcy5ta2R0ZW1wU3luYyhqb2luKG9zLnRtcGRpcigpLCBcIndpbmctc2ltLVwiKSk7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBjbGVhbnVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIFRPRE86IGNsZWFuIHVwIGxvZ3MgZGlyP1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBwcmludChtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmModGhpcy5sb2dzRGlyKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBMb2dzIGRpcmVjdG9yeSAke3RoaXMubG9nc0Rpcn0gZG9lcyBub3QgZXhpc3QuYCk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogYWRkIHNvbWUgb3RoZXIgY29tcHV0ZSBjb250ZXh0IG1lY2hhbmlzbT9cbiAgICBjb25zdCByZXNvdXJjZVBhdGggPSBwcm9jZXNzLmVudltFTlZfV0lOR19TSU1fSU5GTElHSFRfUkVTT1VSQ0VfUEFUSF0hO1xuICAgIGNvbnN0IHJlc291cmNlVHlwZSA9IHByb2Nlc3MuZW52W0VOVl9XSU5HX1NJTV9JTkZMSUdIVF9SRVNPVVJDRV9UWVBFXSE7XG5cbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LmFkZFRyYWNlKHtcbiAgICAgIGRhdGE6IHsgbWVzc2FnZSB9LFxuICAgICAgdHlwZTogVHJhY2VUeXBlLkxPRyxcbiAgICAgIHNvdXJjZVBhdGg6IHJlc291cmNlUGF0aCxcbiAgICAgIHNvdXJjZVR5cGU6IHJlc291cmNlVHlwZSxcbiAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIH0pO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ 9236:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logger = void 0;
const schema_resources_1 = __nccwpck_require__(3083);
const util_1 = __nccwpck_require__(7961);
const cloud = __importStar(__nccwpck_require__(832));
/**
 * Simulator implementation of `cloud.Logger`.
 *
 * @inflight `@winglang/sdk.cloud.ILoggerClient`
 */
class Logger extends cloud.Logger {
    constructor(scope, id) {
        super(scope, id);
    }
    toSimulator() {
        const schema = {
            type: schema_resources_1.LOGGER_TYPE,
            path: this.node.path,
            props: {},
            attrs: {},
        };
        return schema;
    }
    /** @internal */
    _bind(host, ops) {
        (0, util_1.bindSimulatorResource)("logger", this, host);
        super._bind(host, ops);
    }
    /** @internal */
    _toInflight() {
        return (0, util_1.makeSimulatorJsClient)("logger", this);
    }
}
exports.Logger = Logger;
Logger._annotateInflight("print", {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RhcmdldC1zaW0vbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EseURBQStEO0FBQy9ELGlDQUFzRTtBQUN0RSxnREFBa0M7QUFHbEM7Ozs7R0FJRztBQUNILE1BQWEsTUFBTyxTQUFRLEtBQUssQ0FBQyxNQUFNO0lBQ3RDLFlBQVksS0FBZ0IsRUFBRSxFQUFVO1FBQ3RDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxNQUFNLEdBQWlCO1lBQzNCLElBQUksRUFBRSw4QkFBVztZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ3BCLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQVM7U0FDakIsQ0FBQztRQUNGLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxnQkFBZ0I7SUFDVCxLQUFLLENBQUMsSUFBd0IsRUFBRSxHQUFhO1FBQ2xELElBQUEsNEJBQXFCLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsZ0JBQWdCO0lBQ1QsV0FBVztRQUNoQixPQUFPLElBQUEsNEJBQXFCLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRjtBQXpCRCx3QkF5QkM7QUFFRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCB7IElTaW11bGF0b3JSZXNvdXJjZSB9IGZyb20gXCIuL3Jlc291cmNlXCI7XG5pbXBvcnQgeyBCYXNlUmVzb3VyY2VTY2hlbWEgfSBmcm9tIFwiLi9zY2hlbWFcIjtcbmltcG9ydCB7IExvZ2dlclNjaGVtYSwgTE9HR0VSX1RZUEUgfSBmcm9tIFwiLi9zY2hlbWEtcmVzb3VyY2VzXCI7XG5pbXBvcnQgeyBiaW5kU2ltdWxhdG9yUmVzb3VyY2UsIG1ha2VTaW11bGF0b3JKc0NsaWVudCB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCAqIGFzIGNsb3VkIGZyb20gXCIuLi9jbG91ZFwiO1xuaW1wb3J0ICogYXMgY29yZSBmcm9tIFwiLi4vY29yZVwiO1xuXG4vKipcbiAqIFNpbXVsYXRvciBpbXBsZW1lbnRhdGlvbiBvZiBgY2xvdWQuTG9nZ2VyYC5cbiAqXG4gKiBAaW5mbGlnaHQgYEB3aW5nbGFuZy9zZGsuY2xvdWQuSUxvZ2dlckNsaWVudGBcbiAqL1xuZXhwb3J0IGNsYXNzIExvZ2dlciBleHRlbmRzIGNsb3VkLkxvZ2dlciBpbXBsZW1lbnRzIElTaW11bGF0b3JSZXNvdXJjZSB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQpO1xuICB9XG5cbiAgcHVibGljIHRvU2ltdWxhdG9yKCk6IEJhc2VSZXNvdXJjZVNjaGVtYSB7XG4gICAgY29uc3Qgc2NoZW1hOiBMb2dnZXJTY2hlbWEgPSB7XG4gICAgICB0eXBlOiBMT0dHRVJfVFlQRSxcbiAgICAgIHBhdGg6IHRoaXMubm9kZS5wYXRoLFxuICAgICAgcHJvcHM6IHt9LFxuICAgICAgYXR0cnM6IHt9IGFzIGFueSxcbiAgICB9O1xuICAgIHJldHVybiBzY2hlbWE7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHB1YmxpYyBfYmluZChob3N0OiBjb3JlLklJbmZsaWdodEhvc3QsIG9wczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBiaW5kU2ltdWxhdG9yUmVzb3VyY2UoXCJsb2dnZXJcIiwgdGhpcywgaG9zdCk7XG4gICAgc3VwZXIuX2JpbmQoaG9zdCwgb3BzKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHVibGljIF90b0luZmxpZ2h0KCk6IGNvcmUuQ29kZSB7XG4gICAgcmV0dXJuIG1ha2VTaW11bGF0b3JKc0NsaWVudChcImxvZ2dlclwiLCB0aGlzKTtcbiAgfVxufVxuXG5Mb2dnZXIuX2Fubm90YXRlSW5mbGlnaHQoXCJwcmludFwiLCB7fSk7XG4iXX0=

/***/ }),

/***/ 2609:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Queue = void 0;
const schema_resources_1 = __nccwpck_require__(3083);
const simulator_1 = __nccwpck_require__(9694);
class Queue {
    constructor(props, context) {
        this.messages = new Array();
        this.subscribers = new Array();
        for (const sub of props.subscribers ?? []) {
            this.subscribers.push({ ...sub });
        }
        if (props.initialMessages) {
            this.messages.push(...props.initialMessages);
        }
        this.intervalId = setInterval(() => this.processMessages(), 100); // every 0.1 seconds
        this.context = context;
    }
    async init() {
        return;
    }
    async cleanup() {
        clearInterval(this.intervalId);
    }
    async push(message) {
        // TODO: enforce maximum queue message size?
        return this.context.withTrace({
            message: `Push (message=${message}).`,
            activity: async () => {
                this.messages.push(message);
            },
        });
    }
    async purge() {
        return this.context.withTrace({
            message: `Purge ().`,
            activity: async () => {
                this.messages.length = 0;
            },
        });
    }
    async approxSize() {
        return this.context.withTrace({
            message: `ApproxSize ().`,
            activity: async () => {
                return this.messages.length;
            },
        });
    }
    processMessages() {
        let processedMessages = false;
        do {
            processedMessages = false;
            // Randomize the order of subscribers to avoid user code making
            // assumptions on the order that subscribers process messages.
            for (const subscriber of new RandomArrayIterator(this.subscribers)) {
                const messages = this.messages.splice(0, subscriber.batchSize);
                if (messages.length === 0) {
                    continue;
                }
                const fnClient = this.context.findInstance(subscriber.functionHandle);
                if (!fnClient) {
                    throw new Error("No function client found");
                }
                this.context.addTrace({
                    type: simulator_1.TraceType.RESOURCE,
                    data: {
                        message: `Sending messages (messages=${JSON.stringify(messages)}, subscriber=${subscriber.functionHandle}).`,
                    },
                    sourcePath: this.context.resourcePath,
                    sourceType: schema_resources_1.QUEUE_TYPE,
                    timestamp: new Date().toISOString(),
                });
                void fnClient.invoke(JSON.stringify({ messages })).catch((_err) => {
                    // If the function returns an error, put the message back on the queue
                    this.context.addTrace({
                        data: {
                            message: `Subscriber error - returning ${messages.length} messages to queue.`,
                        },
                        sourcePath: this.context.resourcePath,
                        sourceType: schema_resources_1.QUEUE_TYPE,
                        type: simulator_1.TraceType.RESOURCE,
                        timestamp: new Date().toISOString(),
                    });
                    this.messages.push(...messages);
                });
                processedMessages = true;
            }
        } while (processedMessages);
    }
}
exports.Queue = Queue;
class RandomArrayIterator {
    constructor(values) {
        this.values = values;
        this.length = this.values.length;
    }
    next() {
        if (this.length === 0) {
            return { done: true, value: undefined };
        }
        const i = Math.floor(Math.random() * this.length);
        const j = --this.length;
        const value = this.values[i];
        this.values[i] = this.values[j];
        this.values[j] = value;
        return { value };
    }
    [Symbol.iterator]() {
        return this;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVldWUuaW5mbGlnaHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGFyZ2V0LXNpbS9xdWV1ZS5pbmZsaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5REFBOEU7QUFFOUUsb0RBQW9FO0FBRXBFLE1BQWEsS0FBSztJQU1oQixZQUFZLEtBQTJCLEVBQUUsT0FBMEI7UUFMbEQsYUFBUSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDL0IsZ0JBQVcsR0FBRyxJQUFJLEtBQUssRUFBbUIsQ0FBQztRQUsxRCxLQUFLLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxXQUFXLElBQUksRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ25DO1FBRUQsSUFBSSxLQUFLLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsb0JBQW9CO1FBQ3RGLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSTtRQUNmLE9BQU87SUFDVCxDQUFDO0lBRU0sS0FBSyxDQUFDLE9BQU87UUFDbEIsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFlO1FBQy9CLDRDQUE0QztRQUM1QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQzVCLE9BQU8sRUFBRSxpQkFBaUIsT0FBTyxJQUFJO1lBQ3JDLFFBQVEsRUFB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QUM5QixDQUFDO0NBQ0Y7QUFwR0Qsc0JBb0dDO0FBRUQsTUFBTSxtQkFBbUI7SUFFdkIsWUFBNkIsTUFBVztRQUFYLFdBQU0sR0FBTixNQUFNLENBQUs7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDckIsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDO1NBQ3pDO1FBRUQsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNmLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNpbXVsYXRvclJlc291cmNlSW5zdGFuY2UgfSBmcm9tIFwiLi9yZXNvdXJjZVwiO1xuaW1wb3J0IHsgUXVldWVTY2hlbWEsIFF1ZXVlU3Vic2NyaWJlciwgUVVFVUVfVFlQRSB9IGZyb20gXCIuL3NjaGVtYS1yZXNvdXJjZXNcIjtcbmltcG9ydCB7IElGdW5jdGlvbkNsaWVudCwgSVF1ZXVlQ2xpZW50IH0gZnJvbSBcIi4uL2Nsb3VkXCI7XG5pbXBvcnQgeyBJU2ltdWxhdG9yQ29udGV4dCwgVHJhY2VUeXBlIH0gZnJvbSBcIi4uL3Rlc3Rpbmcvc2ltdWxhdG9yXCI7XG5cbmV4cG9ydCBjbGFzcyBRdWV1ZSBpbXBsZW1lbnRzIElRdWV1ZUNsaWVudCwgSVNpbXVsYXRvclJlc291cmNlSW5zdGFuY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IG1lc3NhZ2VzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBzdWJzY3JpYmVycyA9IG5ldyBBcnJheTxRdWV1ZVN1YnNjcmliZXI+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW50ZXJ2YWxJZDogTm9kZUpTLlRpbWVvdXQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogSVNpbXVsYXRvckNvbnRleHQ7XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IFF1ZXVlU2NoZW1hW1wicHJvcHNcIl0sIGNvbnRleHQ6IElTaW11bGF0b3JDb250ZXh0KSB7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgcHJvcHMuc3Vic2NyaWJlcnMgPz8gW10pIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlcnMucHVzaCh7IC4uLnN1YiB9KTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuaW5pdGlhbE1lc3NhZ2VzKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goLi4ucHJvcHMuaW5pdGlhbE1lc3NhZ2VzKTtcbiAgICB9XG5cbiAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnByb2Nlc3NNZXNzYWdlcygpLCAxMDApOyAvLyBldmVyeSAwLjEgc2Vjb25kc1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgY2xlYW51cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcHVzaChtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBUT0RPOiBlbmZvcmNlIG1heGltdW0gcXVldWUgbWVzc2FnZSBzaXplP1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQud2l0aFRyYWNlKHtcbiAgICAgIG1lc3NhZ2U6IGBQdXNoIChtZXNzYWdlPSR7bWVzc2FnZX0pLmAsXG4gICAgICBhY3Rpdml0eTogYXN5bmMgKCkgPT4ge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHB1cmdlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQud2l0aFRyYWNlKHtcbiAgICAgIG1lc3NhZ2U6IGBQdXJnZSAoKS5gLFxuICAgICAgYWN0aXZpdHk6IGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5sZW5ndGggPSAwO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBhcHByb3hTaXplKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC53aXRoVHJhY2Uoe1xuICAgICAgbWVzc2FnZTogYEFwcHJveFNpemUgKCkuYCxcbiAgICAgIGFjdGl2aXR5OiBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzLmxlbmd0aDtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NNZXNzYWdlcygpIHtcbiAgICBsZXQgcHJvY2Vzc2VkTWVzc2FnZXMgPSBmYWxzZTtcbiAgICBkbyB7XG4gICAgICBwcm9jZXNzZWRNZXNzYWdlcyA9IGZhbHNlO1xuICAgICAgLy8gUmFuZG9taXplIHRoZSBvcmRlciBvZiBzdWJzY3JpYmVycyB0byBhdm9pZCB1c2VyIGNvZGUgbWFraW5nXG4gICAgICAvLyBhc3N1bXB0aW9ucyBvbiB0aGUgb3JkZXIgdGhhdCBzdWJzY3JpYmVycyBwcm9jZXNzIG1lc3NhZ2VzLlxuICAgICAgZm9yIChjb25zdCBzdWJzY3JpYmVyIG9mIG5ldyBSYW5kb21BcnJheUl0ZXJhdG9yKHRoaXMuc3Vic2NyaWJlcnMpKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCwgc3Vic2NyaWJlci5iYXRjaFNpemUpO1xuICAgICAgICBpZiAobWVzc2FnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm5DbGllbnQgPSB0aGlzLmNvbnRleHQuZmluZEluc3RhbmNlKFxuICAgICAgICAgIHN1YnNjcmliZXIuZnVuY3Rpb25IYW5kbGUhXG4gICAgICAgICkgYXMgSUZ1bmN0aW9uQ2xpZW50ICYgSVNpbXVsYXRvclJlc291cmNlSW5zdGFuY2U7XG4gICAgICAgIGlmICghZm5DbGllbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBmdW5jdGlvbiBjbGllbnQgZm91bmRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250ZXh0LmFkZFRyYWNlKHtcbiAgICAgICAgICB0eXBlOiBUcmFjZVR5cGUuUkVTT1VSQ0UsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbWVzc2FnZTogYFNlbmRpbmcgbWVzc2FnZXMgKG1lc3NhZ2VzPSR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgIG1lc3NhZ2VzXG4gICAgICAgICAgICApfSwgc3Vic2NyaWJlcj0ke3N1YnNjcmliZXIuZnVuY3Rpb25IYW5kbGV9KS5gLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc291cmNlUGF0aDogdGhpcy5jb250ZXh0LnJlc291cmNlUGF0aCxcbiAgICAgICAgICBzb3VyY2VUeXBlOiBRVUVVRV9UWVBFLFxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICB9KTtcbiAgICAgICAgdm9pZCBmbkNsaWVudC5pbnZva2UoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlcyB9KSkuY2F0Y2goKF9lcnIpID0+IHtcbiAgICAgICAgICAvLyBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBhbiBlcnJvciwgcHV0IHRoZSBtZXNzYWdlIGJhY2sgb24gdGhlIHF1ZXVlXG4gICAgICAgICAgdGhpcy5jb250ZXh0LmFkZFRyYWNlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogYFN1YnNjcmliZXIgZXJyb3IgLSByZXR1cm5pbmcgJHttZXNzYWdlcy5sZW5ndGh9IG1lc3NhZ2VzIHRvIHF1ZXVlLmAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc291cmNlUGF0aDogdGhpcy5jb250ZXh0LnJlc291cmNlUGF0aCxcbiAgICAgICAgICAgIHNvdXJjZVR5cGU6IFFVRVVFX1RZUEUsXG4gICAgICAgICAgICB0eXBlOiBUcmFjZVR5cGUuUkVTT1VSQ0UsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goLi4ubWVzc2FnZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvY2Vzc2VkTWVzc2FnZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKHByb2Nlc3NlZE1lc3NhZ2VzKTtcbiAgfVxufVxuXG5jbGFzcyBSYW5kb21BcnJheUl0ZXJhdG9yPFQgPSBhbnk+IGltcGxlbWVudHMgSXRlcmFibGU8VD4ge1xuICBwcml2YXRlIGxlbmd0aDogbnVtYmVyO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHZhbHVlczogVFtdKSB7XG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLnZhbHVlcy5sZW5ndGg7XG4gIH1cblxuICBuZXh0KCk6IEl0ZXJhdG9yUmVzdWx0PFQ+IHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiB1bmRlZmluZWQgfTtcbiAgICB9XG5cbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5sZW5ndGgpO1xuICAgIGNvbnN0IGogPSAtLXRoaXMubGVuZ3RoO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNbaV07XG5cbiAgICB0aGlzLnZhbHVlc1tpXSA9IHRoaXMudmFsdWVzW2pdO1xuICAgIHRoaXMudmFsdWVzW2pdID0gdmFsdWU7XG5cbiAgICByZXR1cm4geyB2YWx1ZSB9O1xuICB9XG5cbiAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ 2849:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Queue = void 0;
const path_1 = __nccwpck_require__(1017);
const function_1 = __nccwpck_require__(3633);
const schema_resources_1 = __nccwpck_require__(3083);
const util_1 = __nccwpck_require__(7961);
const cloud = __importStar(__nccwpck_require__(832));
const convert_1 = __nccwpck_require__(8375);
const core = __importStar(__nccwpck_require__(6526));
const std = __importStar(__nccwpck_require__(15));
/**
 * Simulator implementation of `cloud.Queue`.
 *
 * @inflight `@winglang/sdk.cloud.IQueueClient`
 */
class Queue extends cloud.Queue {
    constructor(scope, id, props = {}) {
        super(scope, id, props);
        this.initialMessages = [];
        this.timeout = props.timeout ?? std.Duration.fromSeconds(30);
        this.subscribers = [];
        this.initialMessages.push(...(props.initialMessages ?? []));
    }
    onMessage(inflight, // cloud.IQueueOnMessageHandler
    props = {}) {
        const hash = inflight.node.addr.slice(-8);
        /**
         * The handle method the user provided (via the `inflight` parameter) needs
         * to be wrapped in some extra logic to handle batching.
         * `convertBetweenHandlers` creates a dummy resource that provides the
         * wrapper code. In Wing psuedocode, this looks like:
         *
         * resource Handler impl cloud.IFunctionHandler {
         *   init(handler: cloud.IQueueOnMessageHandler) {
         *     this.handler = handler;
         *   }
         *   inflight handle(event: string) {
         *     for (const message of JSON.parse(event).messages) {
         *       this.handler.handle(message);
         *     }
         *   }
         * }
         *
         * It's possible we could optimize this and create one less construct in the
         * user's tree by creating a single `Handler` resource that subclasses from
         * `cloud.Function` and overrides the `invoke` inflight method with the
         * wrapper code directly.
         */
        const functionHandler = (0, convert_1.convertBetweenHandlers)(this.node.scope, // ok since we're not a tree root
        `${this.node.id}-OnMessageHandler-${hash}`, inflight, (0, path_1.join)(__dirname, "queue.onmessage.inflight.js"), "QueueOnMessageHandlerClient");
        const fn = function_1.Function._newFunction(this.node.scope, // ok since we're not a tree root
        `${this.node.id}-OnMessage-${hash}`, functionHandler, props);
        // At the time the queue is created in the simulator, it needs to be able to
        // call subscribed functions.
        this.node.addDependency(fn);
        const functionHandle = `\${${fn.node.path}#attrs.handle}`; // TODO: proper token mechanism
        this.subscribers.push({
            functionHandle,
            batchSize: props.batchSize ?? 1,
        });
        core.Resource.addConnection({
            from: this,
            to: fn,
            relationship: "on_message",
        });
        return fn;
    }
    toSimulator() {
        const schema = {
            type: schema_resources_1.QUEUE_TYPE,
            path: this.node.path,
            props: {
                timeout: this.timeout.seconds,
                subscribers: this.subscribers,
                initialMessages: this.initialMessages,
            },
            attrs: {},
        };
        return schema;
    }
    /** @internal */
    _bind(host, ops) {
        (0, util_1.bindSimulatorResource)("queue", this, host);
        super._bind(host, ops);
    }
    /** @internal */
    _toInflight() {
        return (0, util_1.makeSimulatorJsClient)("queue", this);
    }
}
exports.Queue = Queue;
Queue._annotateInflight("push", {});
Queue._annotateInflight("purge", {});
Queue._annotateInflight("approx_size", {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVldWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGFyZ2V0LXNpbS9xdWV1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUU1Qix5Q0FBc0M7QUFHdEMseURBQThFO0FBQzlFLGlDQUFzRTtBQUN0RSxnREFBa0M7QUFDbEMsd0NBQW9EO0FBQ3BELDhDQUFnQztBQUNoQyw0Q0FBOEI7QUFFOUI7Ozs7R0FJRztBQUNILE1BQWEsS0FBTSxTQUFRLEtBQUssQ0FBQyxLQUFLO0lBSXBDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsUUFBMEIsRUFBRTtRQUNwRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUZULG9CQUFlLEdBQWEsRUFBRSxDQUFDO1FBSTlDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSxTQUFTLENBQ2QsUUFBdUIsRUFBRSwrQkFBK0I7SUFDeEQsUUFBbUMsRUFBRTtRQUVyQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBcUJHO1FBQ0gsTUFBTSxlQUFlLEdBQUcsSUFBQSxnQ0FBc0IsRUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFNLEVBQUUsaUNBQWlDO1FBQ25ELEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLHFCQUFxQixJQUFJLEVBQUUsRUFDMUMsUUFBUSxFQUNSLElBQUEsV0FBSSxFQUFDLFNBQVMsRUFBRSw2QkFBNkIsQ0FBQyxFQUM5Qyw2QkFBNkIsQ0FDOUIsQ0FBQztRQUVGLE1BQU0sRUFBRSxHQUFHLG1CQUFRLENBQUMsWUFBWSxDQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQU0sRUFBRSxpQ0FBaUM7UUFDbkQsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsY0FBYyxJQUFJLEVBQUUsRUFDbkMsZUFBZSxFQUNmLEtBQUssQ0FDTixDQUFDO1FBRUYsNEVBQTRFO1FBQzVFLDZCQUE2QjtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU1QixNQUFNLGNBQWMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLCtCQUErQjtRQUMxRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixjQUFjO1lBQ2QsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLElBQUksQ0FBQztTQUNoQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztZQUMxQixJQUFJLEVBQUUsSUFBSTtZQUNWLEVBQUUsRUFBRSxFQUFFO1lBQ04sWUFBWSxFQUFFLFlBQVk7U0FDM0IsQ0FBQyxDQUFDO1FBRUgsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRU0sV0FBVztRQUNoQixNQUFNLE1BQU0sR0FBZ0I7WUFDMUIsSUFBSSxFQUFFLDZCQUFVO1lBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDcEIsS0FBSyxFQUFFO2dCQUNMLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQzdCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDN0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO2FBQ3RDO1lBQ0QsS0FBSyxFQUFFLEVBQVM7U0FDakIsQ0FBQztRQUNGLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxnQkFBZ0I7SUFDVCxLQUFLLENBQUMsSUFBd0IsRUFBRSxHQUFhO1FBQ2xELElBQUEsNEJBQXFCLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsZ0JBQWdCO0lBQ1QsV0FBVztRQUNoQixPQUFPLElBQUEsNEJBQXFCLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRjtBQWxHRCxzQkFrR0M7QUFFRCxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3BDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDckMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSBcIi4vZnVuY3Rpb25cIjtcbmltcG9ydCB7IElTaW11bGF0b3JSZXNvdXJjZSB9IGZyb20gXCIuL3Jlc291cmNlXCI7XG5pbXBvcnQgeyBCYXNlUmVzb3VyY2VTY2hlbWEgfSBmcm9tIFwiLi9zY2hlbWFcIjtcbmltcG9ydCB7IFF1ZXVlU2NoZW1hLCBRdWV1ZVN1YnNjcmliZXIsIFFVRVVFX1RZUEUgfSBmcm9tIFwiLi9zY2hlbWEtcmVzb3VyY2VzXCI7XG5pbXBvcnQgeyBiaW5kU2ltdWxhdG9yUmVzb3VyY2UsIG1ha2VTaW11bGF0b3JKc0NsaWVudCB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCAqIGFzIGNsb3VkIGZyb20gXCIuLi9jbG91ZFwiO1xuaW1wb3J0IHsgY29udmVydEJldHdlZW5IYW5kbGVycyB9IGZyb20gXCIuLi9jb252ZXJ0XCI7XG5pbXBvcnQgKiBhcyBjb3JlIGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgKiBhcyBzdGQgZnJvbSBcIi4uL3N0ZFwiO1xuXG4vKipcbiAqIFNpbXVsYXRvciBpbXBsZW1lbnRhdGlvbiBvZiBgY2xvdWQuUXVldWVgLlxuICpcbiAqIEBpbmZsaWdodCBgQHdpbmdsYW5nL3Nkay5jbG91ZC5JUXVldWVDbGllbnRgXG4gKi9cbmV4cG9ydCBjbGFzcyBRdWV1ZSBleHRlbmRzIGNsb3VkLlF1ZXVlIGltcGxlbWVudHMgSVNpbXVsYXRvclJlc291cmNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSB0aW1lb3V0OiBzdGQuRHVyYXRpb247XG4gIHByaXZhdGUgcmVhZG9ubHkgc3Vic2NyaWJlcnM6IFF1ZXVlU3Vic2NyaWJlcltdO1xuICBwcml2YXRlIHJlYWRvbmx5IGluaXRpYWxNZXNzYWdlczogc3RyaW5nW10gPSBbXTtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IGNsb3VkLlF1ZXVlUHJvcHMgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgdGhpcy50aW1lb3V0ID0gcHJvcHMudGltZW91dCA/PyBzdGQuRHVyYXRpb24uZnJvbVNlY29uZHMoMzApO1xuICAgIHRoaXMuc3Vic2NyaWJlcnMgPSBbXTtcbiAgICB0aGlzLmluaXRpYWxNZXNzYWdlcy5wdXNoKC4uLihwcm9wcy5pbml0aWFsTWVzc2FnZXMgPz8gW10pKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1lc3NhZ2UoXG4gICAgaW5mbGlnaHQ6IGNvcmUuSW5mbGlnaHQsIC8vIGNsb3VkLklRdWV1ZU9uTWVzc2FnZUhhbmRsZXJcbiAgICBwcm9wczogY2xvdWQuUXVldWVPbk1lc3NhZ2VQcm9wcyA9IHt9XG4gICk6IGNsb3VkLkZ1bmN0aW9uIHtcbiAgICBjb25zdCBoYXNoID0gaW5mbGlnaHQubm9kZS5hZGRyLnNsaWNlKC04KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBoYW5kbGUgbWV0aG9kIHRoZSB1c2VyIHByb3ZpZGVkICh2aWEgdGhlIGBpbmZsaWdodGAgcGFyYW1ldGVyKSBuZWVkc1xuICAgICAqIHRvIGJlIHdyYXBwZWQgaW4gc29tZSBleHRyYSBsb2dpYyB0byBoYW5kbGUgYmF0Y2hpbmcuXG4gICAgICogYGNvbnZlcnRCZXR3ZWVuSGFuZGxlcnNgIGNyZWF0ZXMgYSBkdW1teSByZXNvdXJjZSB0aGF0IHByb3ZpZGVzIHRoZVxuICAgICAqIHdyYXBwZXIgY29kZS4gSW4gV2luZyBwc3VlZG9jb2RlLCB0aGlzIGxvb2tzIGxpa2U6XG4gICAgICpcbiAgICAgKiByZXNvdXJjZSBIYW5kbGVyIGltcGwgY2xvdWQuSUZ1bmN0aW9uSGFuZGxlciB7XG4gICAgICogICBpbml0KGhhbmRsZXI6IGNsb3VkLklRdWV1ZU9uTWVzc2FnZUhhbmRsZXIpIHtcbiAgICAgKiAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgKiAgIH1cbiAgICAgKiAgIGluZmxpZ2h0IGhhbmRsZShldmVudDogc3RyaW5nKSB7XG4gICAgICogICAgIGZvciAoY29uc3QgbWVzc2FnZSBvZiBKU09OLnBhcnNlKGV2ZW50KS5tZXNzYWdlcykge1xuICAgICAqICAgICAgIHRoaXMuaGFuZGxlci5oYW5kbGUobWVzc2FnZSk7XG4gICAgICogICAgIH1cbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICpcbiAgICAgKiBJdCdzIHBvc3NpYmxlIHdlIGNvdWxkIG9wdGltaXplIHRoaXMgYW5kIGNyZWF0ZSBvbmUgbGVzcyBjb25zdHJ1Y3QgaW4gdGhlXG4gICAgICogdXNlcidzIHRyZWUgYnkgY3JlYXRpbmcgYSBzaW5nbGUgYEhhbmRsZXJgIHJlc291cmNlIHRoYXQgc3ViY2xhc3NlcyBmcm9tXG4gICAgICogYGNsb3VkLkZ1bmN0aW9uYCBhbmQgb3ZlcnJpZGVzIHRoZSBgaW52b2tlYCBpbmZsaWdodCBtZXRob2Qgd2l0aCB0aGVcbiAgICAgKiB3cmFwcGVyIGNvZGUgZGlyZWN0bHkuXG4gICAgICovXG4gICAgY29uc3QgZnVuY3Rpb25IYW5kbGVyID0gY29udmVydEJldHdlZW5IYW5kbGVycyhcbiAgICAgIHRoaXMubm9kZS5zY29wZSEsIC8vIG9rIHNpbmNlIHdlJ3JlIG5vdCBhIHRyZWUgcm9vdFxuICAgICAgYCR7dGhpcy5ub2RlLmlkfS1Pbk1lc3NhZ2VIYW5kbGVyLSR7aGFzaH1gLFxuICAgICAgaW5mbGlnaHQsXG4gICAgICBqb2luKF9fZGlybmFtZSwgXCJxdWV1ZS5vbm1lc3NhZ2UuaW5mbGlnaHQuanNcIiksXG4gICAgICBcIlF1ZXVlT25NZXNzYWdlSGFuZGxlckNsaWVudFwiXG4gICAgKTtcblxuICAgIGNvbnN0IGZuID0gRnVuY3Rpb24uX25ld0Z1bmN0aW9uKFxuICAgICAgdGhpcy5ub2RlLnNjb3BlISwgLy8gb2sgc2luY2Ugd2UncmUgbm90IGEgdHJlZSByb290XG4gICAgICBgJHt0aGlzLm5vZGUuaWR9LU9uTWVzc2FnZS0ke2hhc2h9YCxcbiAgICAgIGZ1bmN0aW9uSGFuZGxlcixcbiAgICAgIHByb3BzXG4gICAgKTtcblxuICAgIC8vIEF0IHRoZSB0aW1lIHRoZSBxdWV1ZSBpcyBjcmVhdGVkIGluIHRoZSBzaW11bGF0b3IsIGl0IG5lZWRzIHRvIGJlIGFibGUgdG9cbiAgICAvLyBjYWxsIHN1YnNjcmliZWQgZnVuY3Rpb25zLlxuICAgIHRoaXMubm9kZS5hZGREZXBlbmRlbmN5KGZuKTtcblxuICAgIGNvbnN0IGZ1bmN0aW9uSGFuZGxlID0gYFxcJHske2ZuLm5vZGUucGF0aH0jYXR0cnMuaGFuZGxlfWA7IC8vIFRPRE86IHByb3BlciB0b2tlbiBtZWNoYW5pc21cbiAgICB0aGlzLnN1YnNjcmliZXJzLnB1c2goe1xuICAgICAgZnVuY3Rpb25IYW5kbGUsXG4gICAgICBiYXRjaFNpemU6IHByb3BzLmJhdGNoU2l6ZSA/PyAxLFxuICAgIH0pO1xuXG4gICAgY29yZS5SZXNvdXJjZS5hZGRDb25uZWN0aW9uKHtcbiAgICAgIGZyb206IHRoaXMsXG4gICAgICB0bzogZm4sXG4gICAgICByZWxhdGlvbnNoaXA6IFwib25fbWVzc2FnZVwiLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgcHVibGljIHRvU2ltdWxhdG9yKCk6IEJhc2VSZXNvdXJjZVNjaGVtYSB7XG4gICAgY29uc3Qgc2NoZW1hOiBRdWV1ZVNjaGVtYSA9IHtcbiAgICAgIHR5cGU6IFFVRVVFX1RZUEUsXG4gICAgICBwYXRoOiB0aGlzLm5vZGUucGF0aCxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHRpbWVvdXQ6IHRoaXMudGltZW91dC5zZWNvbmRzLFxuICAgICAgICBzdWJzY3JpYmVyczogdGhpcy5zdWJzY3JpYmVycyxcbiAgICAgICAgaW5pdGlhbE1lc3NhZ2VzOiB0aGlzLmluaXRpYWxNZXNzYWdlcyxcbiAgICAgIH0sXG4gICAgICBhdHRyczoge30gYXMgYW55LFxuICAgIH07XG4gICAgcmV0dXJuIHNjaGVtYTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHVibGljIF9iaW5kKGhvc3Q6IGNvcmUuSUluZmxpZ2h0SG9zdCwgb3BzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGJpbmRTaW11bGF0b3JSZXNvdXJjZShcInF1ZXVlXCIsIHRoaXMsIGhvc3QpO1xuICAgIHN1cGVyLl9iaW5kKGhvc3QsIG9wcyk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHB1YmxpYyBfdG9JbmZsaWdodCgpOiBjb3JlLkNvZGUge1xuICAgIHJldHVybiBtYWtlU2ltdWxhdG9ySnNDbGllbnQoXCJxdWV1ZVwiLCB0aGlzKTtcbiAgfVxufVxuXG5RdWV1ZS5fYW5ub3RhdGVJbmZsaWdodChcInB1c2hcIiwge30pO1xuUXVldWUuX2Fubm90YXRlSW5mbGlnaHQoXCJwdXJnZVwiLCB7fSk7XG5RdWV1ZS5fYW5ub3RhdGVJbmZsaWdodChcImFwcHJveF9zaXplXCIsIHt9KTtcbiJdfQ==

/***/ }),

/***/ 7516:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isSimulatorResource = void 0;
function isSimulatorResource(obj) {
    return (typeof obj == "object" &&
        typeof obj.toSimulator === "function");
}
exports.isSimulatorResource = isSimulatorResource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGFyZ2V0LXNpbS9yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFjQSxTQUFnQixtQkFBbUIsQ0FBQyxHQUFRO0lBQzFDLE9BQU8sQ0FDTCxPQUFPLEdBQUcsSUFBSSxRQUFRO1FBQ3RCLE9BQVEsR0FBMEIsQ0FBQyxXQUFXLEtBQUssVUFBVSxDQUM5RCxDQUFDO0FBQ0osQ0FBQztBQUxELGtEQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUNvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBCYXNlUmVzb3VyY2VTY2hlbWEgfSBmcm9tIFwiLi9zY2hlbWFcIjtcblxuLyoqXG4gKiBJbnRlcmZhY2VzIHNoYXJlZCBieSBhbGwgcG9seWNvbiBpbXBsZW1lbnRhdGlvbnMgKHByZWZsaWdodCBjbGFzc2VzKVxuICogdGFyZ2V0aW5nIHRoZSBzaW11bGF0b3IuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNpbXVsYXRvclJlc291cmNlIGV4dGVuZHMgSUNvbnN0cnVjdCB7XG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoaXMgcmVzb3VyY2UgdG8gYSByZXNvdXJjZSBzY2hlbWEgZm9yIHRoZSBzaW11bGF0b3IuXG4gICAqL1xuICB0b1NpbXVsYXRvcigpOiBCYXNlUmVzb3VyY2VTY2hlbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NpbXVsYXRvclJlc291cmNlKG9iajogYW55KTogb2JqIGlzIElTaW11bGF0b3JSZXNvdXJjZSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIG9iaiA9PSBcIm9iamVjdFwiICYmXG4gICAgdHlwZW9mIChvYmogYXMgSVNpbXVsYXRvclJlc291cmNlKS50b1NpbXVsYXRvciA9PT0gXCJmdW5jdGlvblwiXG4gICk7XG59XG5cbi8qKlxuICogU2hhcmVkIGludGVyZmFjZSBmb3IgcmVzb3VyY2Ugc2ltdWxhdGlvbnMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNpbXVsYXRvclJlc291cmNlSW5zdGFuY2Uge1xuICAvKipcbiAgICogUGVyZm9ybSBhbnkgYXN5bmMgaW5pdGlhbGl6YXRpb24gcmVxdWlyZWQgYnkgdGhlIHJlc291cmNlLlxuICAgKi9cbiAgaW5pdCgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBTdG9wIHRoZSByZXNvdXJjZSBhbmQgY2xlYW4gdXAgYW55IHBoeXNpY2FsIHJlc291cmNlcyBpdCBtYXkgaGF2ZSBjcmVhdGVkXG4gICAqIChmaWxlcywgcG9ydHMsIGV0YykuXG4gICAqL1xuICBjbGVhbnVwKCk6IFByb21pc2U8dm9pZD47XG59XG4iXX0=

/***/ }),

/***/ 3083:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LOGGER_TYPE = exports.SCHEDULE_TYPE = exports.COUNTER_TYPE = exports.TOPIC_TYPE = exports.BUCKET_TYPE = exports.FUNCTION_TYPE = exports.QUEUE_TYPE = void 0;
exports.QUEUE_TYPE = "wingsdk.cloud.Queue";
exports.FUNCTION_TYPE = "wingsdk.cloud.Function";
exports.BUCKET_TYPE = "wingsdk.cloud.Bucket";
exports.TOPIC_TYPE = "wingsdk.cloud.Topic";
exports.COUNTER_TYPE = "wingsdk.cloud.Counter";
exports.SCHEDULE_TYPE = "wingsdk.cloud.Schedule";
exports.LOGGER_TYPE = "wingsdk.cloud.Logger";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXJlc291cmNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXJnZXQtc2ltL3NjaGVtYS1yZXNvdXJjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRWEsUUFBQSxVQUFVLEdBQUcscUJBQXFCLENBQUM7QUFDbkMsUUFBQSxhQUFhLEdBQUcsd0JBQXdCLENBQUM7QUFDekMsUUFBQSxXQUFXLEdBQUcsc0JBQXNCLENBQUM7QUFDckMsUUFBQSxVQUFVLEdBQUcscUJBQXFCLENBQUM7QUFDbkMsUUFBQSxZQUFZLEdBQUcsdUJBQXVCLENBQUM7QUFDdkMsUUFBQSxhQUFhLEdBQUcsd0JBQXdCLENBQUM7QUFDekMsUUFBQSxXQUFXLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlUmVzb3VyY2VTY2hlbWEgfSBmcm9tIFwiLi9zY2hlbWFcIjtcblxuZXhwb3J0IGNvbnN0IFFVRVVFX1RZUEUgPSBcIndpbmdzZGsuY2xvdWQuUXVldWVcIjtcbmV4cG9ydCBjb25zdCBGVU5DVElPTl9UWVBFID0gXCJ3aW5nc2RrLmNsb3VkLkZ1bmN0aW9uXCI7XG5leHBvcnQgY29uc3QgQlVDS0VUX1RZUEUgPSBcIndpbmdzZGsuY2xvdWQuQnVja2V0XCI7XG5leHBvcnQgY29uc3QgVE9QSUNfVFlQRSA9IFwid2luZ3Nkay5jbG91ZC5Ub3BpY1wiO1xuZXhwb3J0IGNvbnN0IENPVU5URVJfVFlQRSA9IFwid2luZ3Nkay5jbG91ZC5Db3VudGVyXCI7XG5leHBvcnQgY29uc3QgU0NIRURVTEVfVFlQRSA9IFwid2luZ3Nkay5jbG91ZC5TY2hlZHVsZVwiO1xuZXhwb3J0IGNvbnN0IExPR0dFUl9UWVBFID0gXCJ3aW5nc2RrLmNsb3VkLkxvZ2dlclwiO1xuXG5leHBvcnQgdHlwZSBGdW5jdGlvbkhhbmRsZSA9IHN0cmluZztcblxuLyoqIFNjaGVtYSBmb3IgY2xvdWQuRnVuY3Rpb24gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRnVuY3Rpb25TY2hlbWEgZXh0ZW5kcyBCYXNlUmVzb3VyY2VTY2hlbWEge1xuICByZWFkb25seSB0eXBlOiB0eXBlb2YgRlVOQ1RJT05fVFlQRTtcbiAgcmVhZG9ubHkgcHJvcHM6IHtcbiAgICAvKiogVGhlIHBhdGggdG8gYSBmaWxlIGNvbnRhaW5pbmcgc291cmNlIGNvZGUgdG8gYmUgcnVuIHdoZW4gaW52b2tlZC4gKi9cbiAgICByZWFkb25seSBzb3VyY2VDb2RlRmlsZTogc3RyaW5nO1xuICAgIC8qKiBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIGZ1bmN0aW9uJ3Mgc291cmNlIGNvZGUuICovXG4gICAgcmVhZG9ubHkgc291cmNlQ29kZUxhbmd1YWdlOiBzdHJpbmc7XG4gICAgLyoqIEEgbWFwIG9mIGVudmlyb25tZW50IHZhcmlhYmxlcyB0byBydW4gdGhlIGZ1bmN0aW9uIHdpdGguICovXG4gICAgcmVhZG9ubHkgZW52aXJvbm1lbnRWYXJpYWJsZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gICAgLyoqIFRoZSBtYXhpbXVtIGFtb3VudCBvZiB0aW1lIHRoZSBmdW5jdGlvbiBjYW4gcnVuLCBpbiBtaWxsaXNlY29uZHMuICovXG4gICAgcmVhZG9ubHkgdGltZW91dDogbnVtYmVyO1xuICB9O1xufVxuXG4vKiogU2NoZW1hIGZvciBjbG91ZC5RdWV1ZSAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWV1ZVNjaGVtYSBleHRlbmRzIEJhc2VSZXNvdXJjZVNjaGVtYSB7XG4gIHJlYWRvbmx5IHR5cGU6IHR5cGVvZiBRVUVVRV9UWVBFO1xuICByZWFkb25seSBwcm9wczoge1xuICAgIC8qKiBIb3cgbG9uZyBhIHF1ZXVlJ3MgY29uc3VtZXJzIGhhdmUgdG8gcHJvY2VzcyBhIG1lc3NhZ2UsIGluIG1pbGxpc2Vjb25kcyAqL1xuICAgIHJlYWRvbmx5IHRpbWVvdXQ6IG51bWJlcjtcbiAgICAvKiogRnVuY3Rpb24gdGhhdCBzaG91bGQgcHJvY2VzcyBxdWV1ZSBtZXNzYWdlcy4gKi9cbiAgICByZWFkb25seSBzdWJzY3JpYmVyczogUXVldWVTdWJzY3JpYmVyW107XG4gICAgLyoqIEluaXRpYWwgbWVzc2FnZXMgdG8gYmUgcHVzaGVkIHRvIHRoZSBxdWV1ZS4gKi9cbiAgICByZWFkb25seSBpbml0aWFsTWVzc2FnZXM6IHN0cmluZ1tdO1xuICB9O1xufVxuXG4vKiogU2NoZW1hIGZvciBjbG91ZC5RdWV1ZS5wcm9wcy5zdWJzY3JpYmVycyAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWV1ZVN1YnNjcmliZXIge1xuICAvKiogRnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgY2FsbGVkLiAqL1xuICByZWFkb25seSBmdW5jdGlvbkhhbmRsZTogRnVuY3Rpb25IYW5kbGU7XG4gIC8qKiBNYXhpbXVtIG51bWJlciBvZiBtZXNzYWdlcyB0aGF0IHdpbGwgYmUgYmF0Y2hlZCB0b2dldGhlciB0byB0aGUgc3Vic2NyaWJlci4gKi9cbiAgcmVhZG9ubHkgYmF0Y2hTaXplOiBudW1iZXI7XG59XG5cbi8qKiBTY2hlbWEgZm9yIGNsb3VkLlRvcGljICovXG5leHBvcnQgaW50ZXJmYWNlIFRvcGljU2NoZW1hIGV4dGVuZHMgQmFzZVJlc291cmNlU2NoZW1hIHtcbiAgcmVhZG9ubHkgdHlwZTogdHlwZW9mIFRPUElDX1RZUEU7XG4gIHJlYWRvbmx5IHByb3BzOiB7XG4gICAgcmVhZG9ubHkgc3Vic2NyaWJlcnM6IFRvcGljU3Vic2NyaWJlcltdO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvcGljU3Vic2NyaWJlciB7XG4gIC8qKiBGdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBjYWxsZWQgKi9cbiAgcmVhZG9ubHkgZnVuY3Rpb25IYW5kbGU6IEZ1bmN0aW9uSGFuZGxlO1xufVxuXG4vKiogU2NoZW1hIGZvciBjbG91ZC5CdWNrZXQgKi9cbmV4cG9ydCBpbnRlcmZhY2UgQnVja2V0U2NoZW1hIGV4dGVuZHMgQmFzZVJlc291cmNlU2NoZW1hIHtcbiAgcmVhZG9ubHkgdHlwZTogdHlwZW9mIEJVQ0tFVF9UWVBFO1xuICByZWFkb25seSBwcm9wczoge1xuICAgIC8qKiBXaGV0aGVyIHRoZSBidWNrZXQgc2hvdWxkIGJlIHB1YmxpY2x5IGFjY2Vzc2libGUuICovXG4gICAgcmVhZG9ubHkgcHVibGljOiBib29sZWFuO1xuICAgIC8qKiBUaGUgaW5pdGlhbCBvYmplY3RzIHVwbG9hZGVkIHRvIHRoZSBidWNrZXQuICovXG4gICAgcmVhZG9ubHkgaW5pdGlhbE9iamVjdHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIH07XG59XG5cbi8qKiBTY2hlbWEgZm9yIGNsb3VkLkxvZ2dlciAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2dnZXJTY2hlbWEgZXh0ZW5kcyBCYXNlUmVzb3VyY2VTY2hlbWEge1xuICByZWFkb25seSB0eXBlOiB0eXBlb2YgTE9HR0VSX1RZUEU7XG4gIHJlYWRvbmx5IHByb3BzOiB7fTtcbn1cblxuLyoqIFNjaGVtYSBmb3IgY2xvdWQuQ291bnRlciAqL1xuZXhwb3J0IGludGVyZmFjZSBDb3VudGVyU2NoZW1hIGV4dGVuZHMgQmFzZVJlc291cmNlU2NoZW1hIHtcbiAgcmVhZG9ubHkgdHlwZTogdHlwZW9mIENPVU5URVJfVFlQRTtcbiAgcmVhZG9ubHkgcHJvcHM6IHtcbiAgICAvKiogVGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIGNvdW50ZXIuICovXG4gICAgcmVhZG9ubHkgaW5pdGlhbDogbnVtYmVyO1xuICB9O1xufVxuIl19

/***/ }),

/***/ 9508:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RhcmdldC1zaW0vc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogU2NoZW1hIGZvciBzaW11bGF0b3IuanNvbiAqL1xuZXhwb3J0IGludGVyZmFjZSBXaW5nU2ltdWxhdG9yU2NoZW1hIHtcbiAgLyoqIFRoZSBsaXN0IG9mIHJlc291cmNlcy4gKi9cbiAgcmVhZG9ubHkgcmVzb3VyY2VzOiBCYXNlUmVzb3VyY2VTY2hlbWFbXTtcbiAgLyoqIFRoZSB2ZXJzaW9uIG9mIHRoZSBXaW5nIFNESyB1c2VkIHRvIHN5bnRoZXNpemUgdGhlIC53c2ltIGZpbGUuICovXG4gIHJlYWRvbmx5IHNka1ZlcnNpb246IHN0cmluZztcbn1cblxuLyoqIFNjaGVtYSBmb3IgaW5kaXZpZHVhbCByZXNvdXJjZXMgKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZVJlc291cmNlU2NoZW1hIHtcbiAgLyoqIFRoZSByZXNvdXJjZSBwYXRoIGZyb20gdGhlIGFwcCdzIGNvbnN0cnVjdCB0cmVlLiAqL1xuICByZWFkb25seSBwYXRoOiBzdHJpbmc7XG4gIC8qKiBUaGUgdHlwZSBvZiB0aGUgcmVzb3VyY2UuICovXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgLyoqIFRoZSByZXNvdXJjZS1zcGVjaWZpYyBwcm9wZXJ0aWVzIG5lZWRlZCB0byBjcmVhdGUgdGhpcyByZXNvdXJjZS4gKi9cbiAgcmVhZG9ubHkgcHJvcHM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIC8qKiBUaGUgcmVzb3VyY2Utc3BlY2lmaWMgYXR0cmlidXRlcyB0aGF0IGFyZSBzZXQgYWZ0ZXIgdGhlIHJlc291cmNlIGlzIGNyZWF0ZWQuICovXG4gIHJlYWRvbmx5IGF0dHJzOiBCYXNlUmVzb3VyY2VBdHRyaWJ1dGVzO1xufVxuXG4vKiogU2NoZW1hIGZvciByZXNvdXJjZSBhdHRyaWJ1dGVzICovXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VSZXNvdXJjZUF0dHJpYnV0ZXMge1xuICAvKiogVGhlIHJlc291cmNlJ3Mgc2ltdWxhdG9yLXVuaXF1ZSBpZC4gKi9cbiAgcmVhZG9ubHkgaGFuZGxlOiBzdHJpbmc7XG5cbiAgLyoqIEFueSBvdGhlciBhdHRyaWJ1dGVzLiAqL1xuICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xufVxuIl19

/***/ }),

/***/ 5960:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Topic = void 0;
const schema_resources_1 = __nccwpck_require__(3083);
const simulator_1 = __nccwpck_require__(9694);
class Topic {
    constructor(props, context) {
        this.subscribers = new Array();
        for (const sub of props.subscribers ?? []) {
            this.subscribers.push({ ...sub });
        }
        this.context = context;
    }
    async publishMessage(message) {
        for (const subscriber of this.subscribers) {
            const fnClient = this.context.findInstance(subscriber.functionHandle);
            if (!fnClient) {
                throw new Error("No function client found!");
            }
            this.context.addTrace({
                type: simulator_1.TraceType.RESOURCE,
                data: {
                    message: `Sending message (message=${message}, subscriber=${subscriber.functionHandle}).`,
                },
                sourcePath: this.context.resourcePath,
                sourceType: schema_resources_1.TOPIC_TYPE,
                timestamp: new Date().toISOString(),
            });
            void (await fnClient.invoke(message).catch((err) => {
                this.context.addTrace({
                    data: {
                        message: `Subscriber error: ${err}`,
                    },
                    sourcePath: this.context.resourcePath,
                    sourceType: schema_resources_1.TOPIC_TYPE,
                    type: simulator_1.TraceType.RESOURCE,
                    timestamp: new Date().toISOString(),
                });
            }));
        }
    }
    async publish(message) {
        this.context.addTrace({
            data: {
                message: `Publish (message=${message}).`,
            },
            sourcePath: this.context.resourcePath,
            sourceType: schema_resources_1.TOPIC_TYPE,
            type: simulator_1.TraceType.RESOURCE,
            timestamp: new Date().toISOString(),
        });
        return this.publishMessage(message);
    }
    async init() {
        return;
    }
    async cleanup() {
        return;
    }
}
exports.Topic = Topic;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWMuaW5mbGlnaHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGFyZ2V0LXNpbS90b3BpYy5pbmZsaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5REFBOEU7QUFFOUUsb0RBQW9FO0FBRXBFLE1BQWEsS0FBSztJQUloQixZQUFZLEtBQTJCLEVBQUUsT0FBMEI7UUFIbEQsZ0JBQVcsR0FBRyxJQUFJLEtBQUssRUFBbUIsQ0FBQztRQUkxRCxLQUFLLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxXQUFXLElBQUksRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVPLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBZTtRQUMxQyxLQUFLLE1BQU0sVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDekMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQ3hDLFVBQVUsQ0FBQyxjQUFlLENBQ3FCLENBQUM7WUFFbEQsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDYixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7YUFDOUM7WUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsSUFBSSxFQUFFLHFCQUFTLENBQUMsUUFBUTtnQkFDeEIsSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSw0QkFBNEIsT0FBTyxnQkFBZ0IsVUFBVSxDQUFDLGNBQWMsSUFBSTtpQkFDMUY7Z0JBQ0QsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWTtnQkFDckMsVUFBVSxFQUFFLDZCQUFVO2dCQUN0QixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7YUFDcEMsQ0FBQyxDQUFDO1lBRUgsS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7b0JBQ3BCLElBQUksRUFBRTt3QkFDSixPQUFPLEVBQUUscUJBQXFCLEdBQUcsRUFBRTtxQkFDcEM7b0JBQ0QsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWTtvQkFDckMsVUFBVSxFQUFFLDZCQUFVO29CQUN0QixJQUFJLEVBQUUscUJBQVMsQ0FBQyxRQUFRO29CQUN4QixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7aUJBQ3BDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDTDtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQWU7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDcEIsSUFBSSxFQUFFO2dCQUNKLE9BQU8sRUFBRSxvQkFBb0IsT0FBTyxJQUFJO2FBQ3pDO1lBQ0QsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWTtZQUNyQyxVQUFVLEVBQUUsNkJBQVU7WUFDdEIsSUFBSSxFQUFFLHFCQUFTLENBQUMsUUFBUTtZQUN4QixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7U0FDcEMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSTtRQUNmLE9BQU87SUFDVCxDQUFDO0lBQ00sS0FBSyxDQUFDLE9BQU87UUFDbEIsT0FBTztJQUNULENBQUM7Q0FDRjtBQWpFRCxzQkFpRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU2ltdWxhdG9yUmVzb3VyY2VJbnN0YW5jZSB9IGZyb20gXCIuL3Jlc291cmNlXCI7XG5pbXBvcnQgeyBUb3BpY1NjaGVtYSwgVG9waWNTdWJzY3JpYmVyLCBUT1BJQ19UWVBFIH0gZnJvbSBcIi4vc2NoZW1hLXJlc291cmNlc1wiO1xuaW1wb3J0IHsgSUZ1bmN0aW9uQ2xpZW50LCBJVG9waWNDbGllbnQgfSBmcm9tIFwiLi4vY2xvdWRcIjtcbmltcG9ydCB7IElTaW11bGF0b3JDb250ZXh0LCBUcmFjZVR5cGUgfSBmcm9tIFwiLi4vdGVzdGluZy9zaW11bGF0b3JcIjtcblxuZXhwb3J0IGNsYXNzIFRvcGljIGltcGxlbWVudHMgSVRvcGljQ2xpZW50LCBJU2ltdWxhdG9yUmVzb3VyY2VJbnN0YW5jZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc3Vic2NyaWJlcnMgPSBuZXcgQXJyYXk8VG9waWNTdWJzY3JpYmVyPigpO1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IElTaW11bGF0b3JDb250ZXh0O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBUb3BpY1NjaGVtYVtcInByb3BzXCJdLCBjb250ZXh0OiBJU2ltdWxhdG9yQ29udGV4dCkge1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIHByb3BzLnN1YnNjcmliZXJzID8/IFtdKSB7XG4gICAgICB0aGlzLnN1YnNjcmliZXJzLnB1c2goeyAuLi5zdWIgfSk7XG4gICAgfVxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHB1Ymxpc2hNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGZvciAoY29uc3Qgc3Vic2NyaWJlciBvZiB0aGlzLnN1YnNjcmliZXJzKSB7XG4gICAgICBjb25zdCBmbkNsaWVudCA9IHRoaXMuY29udGV4dC5maW5kSW5zdGFuY2UoXG4gICAgICAgIHN1YnNjcmliZXIuZnVuY3Rpb25IYW5kbGUhXG4gICAgICApIGFzIElGdW5jdGlvbkNsaWVudCAmIElTaW11bGF0b3JSZXNvdXJjZUluc3RhbmNlO1xuXG4gICAgICBpZiAoIWZuQ2xpZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGZ1bmN0aW9uIGNsaWVudCBmb3VuZCFcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGV4dC5hZGRUcmFjZSh7XG4gICAgICAgIHR5cGU6IFRyYWNlVHlwZS5SRVNPVVJDRSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG1lc3NhZ2U6IGBTZW5kaW5nIG1lc3NhZ2UgKG1lc3NhZ2U9JHttZXNzYWdlfSwgc3Vic2NyaWJlcj0ke3N1YnNjcmliZXIuZnVuY3Rpb25IYW5kbGV9KS5gLFxuICAgICAgICB9LFxuICAgICAgICBzb3VyY2VQYXRoOiB0aGlzLmNvbnRleHQucmVzb3VyY2VQYXRoLFxuICAgICAgICBzb3VyY2VUeXBlOiBUT1BJQ19UWVBFLFxuICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH0pO1xuXG4gICAgICB2b2lkIChhd2FpdCBmbkNsaWVudC5pbnZva2UobWVzc2FnZSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0aGlzLmNvbnRleHQuYWRkVHJhY2Uoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBTdWJzY3JpYmVyIGVycm9yOiAke2Vycn1gLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc291cmNlUGF0aDogdGhpcy5jb250ZXh0LnJlc291cmNlUGF0aCxcbiAgICAgICAgICBzb3VyY2VUeXBlOiBUT1BJQ19UWVBFLFxuICAgICAgICAgIHR5cGU6IFRyYWNlVHlwZS5SRVNPVVJDRSxcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgfSk7XG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcHVibGlzaChtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmNvbnRleHQuYWRkVHJhY2Uoe1xuICAgICAgZGF0YToge1xuICAgICAgICBtZXNzYWdlOiBgUHVibGlzaCAobWVzc2FnZT0ke21lc3NhZ2V9KS5gLFxuICAgICAgfSxcbiAgICAgIHNvdXJjZVBhdGg6IHRoaXMuY29udGV4dC5yZXNvdXJjZVBhdGgsXG4gICAgICBzb3VyY2VUeXBlOiBUT1BJQ19UWVBFLFxuICAgICAgdHlwZTogVHJhY2VUeXBlLlJFU09VUkNFLFxuICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5wdWJsaXNoTWVzc2FnZShtZXNzYWdlKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuICBwdWJsaWMgYXN5bmMgY2xlYW51cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ 5628:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Topic = void 0;
const path_1 = __nccwpck_require__(1017);
const function_1 = __nccwpck_require__(3633);
const schema_resources_1 = __nccwpck_require__(3083);
const util_1 = __nccwpck_require__(7961);
const cloud = __importStar(__nccwpck_require__(832));
const convert_1 = __nccwpck_require__(8375);
const core = __importStar(__nccwpck_require__(6526));
/**
 * Simulator implementation of `cloud.Topic`
 *
 * @inflight `@winglang/sdk.cloud.ITopicClient`
 */
class Topic extends cloud.Topic {
    constructor(scope, id, props = {}) {
        super(scope, id, props);
        this.subscribers = [];
    }
    onMessage(inflight, // cloud.ITopicOnMessageHandler
    props = {}) {
        const hash = inflight.node.addr.slice(-8);
        const functionHandler = (0, convert_1.convertBetweenHandlers)(this.node.scope, // ok since we're not a tree root
        `${this.node.id}-OnMessageHandler-${hash}`, inflight, (0, path_1.join)(__dirname, "topic.onmessage.inflight.js"), "TopicOnMessageHandlerClient");
        const fn = function_1.Function._newFunction(this.node.scope, // ok since we're not a tree root
        `${this.node.id}-OnMessage-${hash}`, functionHandler, props);
        this.node.addDependency(fn);
        const functionHandle = `\${${fn.node.path}#attrs.handle}`;
        this.subscribers.push({
            functionHandle,
        });
        core.Resource.addConnection({
            from: this,
            to: fn,
            relationship: "on_message",
        });
        return fn;
    }
    /** @internal */
    _bind(host, ops) {
        (0, util_1.bindSimulatorResource)("topic", this, host);
        super._bind(host, ops);
    }
    /** @internal */
    _toInflight() {
        return (0, util_1.makeSimulatorJsClient)("topic", this);
    }
    toSimulator() {
        const schema = {
            type: schema_resources_1.TOPIC_TYPE,
            path: this.node.path,
            props: {
                subscribers: this.subscribers,
            },
            attrs: {},
        };
        return schema;
    }
}
exports.Topic = Topic;
Topic._annotateInflight("publish", {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGFyZ2V0LXNpbS90b3BpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUU1Qix5Q0FBc0M7QUFHdEMseURBQThFO0FBQzlFLGlDQUFzRTtBQUN0RSxnREFBa0M7QUFDbEMsd0NBQW9EO0FBQ3BELDhDQUFnQztBQUVoQzs7OztHQUlHO0FBQ0gsTUFBYSxLQUFNLFNBQVEsS0FBSyxDQUFDLEtBQUs7SUFFcEMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxRQUEwQixFQUFFO1FBQ3BFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxTQUFTLENBQ2QsUUFBdUIsRUFBRSwrQkFBK0I7SUFDeEQsUUFBbUMsRUFBRTtRQUVyQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLGVBQWUsR0FBRyxJQUFBLGdDQUFzQixFQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQU0sRUFBRSxpQ0FBaUM7UUFDbkQsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUscUJBQXFCLElBQUksRUFBRSxFQUMxQyxRQUFRLEVBQ1IsSUFBQSxXQUFJLEVBQUMsU0FBUyxFQUFFLDZCQUE2QixDQUFDLEVBQzlDLDZCQUE2QixDQUM5QixDQUFDO1FBRUYsTUFBTSxFQUFFLEdBQUcsbUJBQVEsQ0FBQyxZQUFZLENBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBTSxFQUFFLGlDQUFpQztRQUNuRCxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLElBQUksRUFBRSxFQUNuQyxlQUFlLEVBQ2YsS0FBSyxDQUNOLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU1QixNQUFNLGNBQWMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztRQUMxRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixjQUFjO1NBQ2YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7WUFDMUIsSUFBSSxFQUFFLElBQUk7WUFDVixFQUFFLEVBQUUsRUFBRTtZQUNOLFlBQVksRUFBRSxZQUFZO1NBQzNCLENBQUMsQ0FBQztRQUVILE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELGdCQUFnQjtJQUNULEtBQUssQ0FBQyxJQUF3QixFQUFFLEdBQWE7UUFDbEQsSUFBQSw0QkFBcUIsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxnQkFBZ0I7SUFDVCxXQUFXO1FBQ2hCLE9BQU8sSUFBQSw0QkFBcUIsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxNQUFNLEdBQWdCO1lBQzFCLElBQUksRUFBRSw2QkFBVTtZQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ3BCLEtBQUssRUFBRTtnQkFDTCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7YUFDOUI7WUFDRCxLQUFLLEVBQUUsRUFBUztTQUNqQixDQUFDO1FBQ0YsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGO0FBbEVELHNCQWtFQztBQUVELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqb2luIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBGdW5jdGlvbiB9IGZyb20gXCIuL2Z1bmN0aW9uXCI7XG5pbXBvcnQgeyBJU2ltdWxhdG9yUmVzb3VyY2UgfSBmcm9tIFwiLi9yZXNvdXJjZVwiO1xuaW1wb3J0IHsgQmFzZVJlc291cmNlU2NoZW1hIH0gZnJvbSBcIi4vc2NoZW1hXCI7XG5pbXBvcnQgeyBUb3BpY1NjaGVtYSwgVG9waWNTdWJzY3JpYmVyLCBUT1BJQ19UWVBFIH0gZnJvbSBcIi4vc2NoZW1hLXJlc291cmNlc1wiO1xuaW1wb3J0IHsgYmluZFNpbXVsYXRvclJlc291cmNlLCBtYWtlU2ltdWxhdG9ySnNDbGllbnQgfSBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgKiBhcyBjbG91ZCBmcm9tIFwiLi4vY2xvdWRcIjtcbmltcG9ydCB7IGNvbnZlcnRCZXR3ZWVuSGFuZGxlcnMgfSBmcm9tIFwiLi4vY29udmVydFwiO1xuaW1wb3J0ICogYXMgY29yZSBmcm9tIFwiLi4vY29yZVwiO1xuXG4vKipcbiAqIFNpbXVsYXRvciBpbXBsZW1lbnRhdGlvbiBvZiBgY2xvdWQuVG9waWNgXG4gKlxuICogQGluZmxpZ2h0IGBAd2luZ2xhbmcvc2RrLmNsb3VkLklUb3BpY0NsaWVudGBcbiAqL1xuZXhwb3J0IGNsYXNzIFRvcGljIGV4dGVuZHMgY2xvdWQuVG9waWMgaW1wbGVtZW50cyBJU2ltdWxhdG9yUmVzb3VyY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IHN1YnNjcmliZXJzOiBUb3BpY1N1YnNjcmliZXJbXTtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IGNsb3VkLlRvcGljUHJvcHMgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgdGhpcy5zdWJzY3JpYmVycyA9IFtdO1xuICB9XG5cbiAgcHVibGljIG9uTWVzc2FnZShcbiAgICBpbmZsaWdodDogY29yZS5JbmZsaWdodCwgLy8gY2xvdWQuSVRvcGljT25NZXNzYWdlSGFuZGxlclxuICAgIHByb3BzOiBjbG91ZC5Ub3BpY09uTWVzc2FnZVByb3BzID0ge31cbiAgKTogY2xvdWQuRnVuY3Rpb24ge1xuICAgIGNvbnN0IGhhc2ggPSBpbmZsaWdodC5ub2RlLmFkZHIuc2xpY2UoLTgpO1xuICAgIGNvbnN0IGZ1bmN0aW9uSGFuZGxlciA9IGNvbnZlcnRCZXR3ZWVuSGFuZGxlcnMoXG4gICAgICB0aGlzLm5vZGUuc2NvcGUhLCAvLyBvayBzaW5jZSB3ZSdyZSBub3QgYSB0cmVlIHJvb3RcbiAgICAgIGAke3RoaXMubm9kZS5pZH0tT25NZXNzYWdlSGFuZGxlci0ke2hhc2h9YCxcbiAgICAgIGluZmxpZ2h0LFxuICAgICAgam9pbihfX2Rpcm5hbWUsIFwidG9waWMub25tZXNzYWdlLmluZmxpZ2h0LmpzXCIpLFxuICAgICAgXCJUb3BpY09uTWVzc2FnZUhhbmRsZXJDbGllbnRcIlxuICAgICk7XG5cbiAgICBjb25zdCBmbiA9IEZ1bmN0aW9uLl9uZXdGdW5jdGlvbihcbiAgICAgIHRoaXMubm9kZS5zY29wZSEsIC8vIG9rIHNpbmNlIHdlJ3JlIG5vdCBhIHRyZWUgcm9vdFxuICAgICAgYCR7dGhpcy5ub2RlLmlkfS1Pbk1lc3NhZ2UtJHtoYXNofWAsXG4gICAgICBmdW5jdGlvbkhhbmRsZXIsXG4gICAgICBwcm9wc1xuICAgICk7XG5cbiAgICB0aGlzLm5vZGUuYWRkRGVwZW5kZW5jeShmbik7XG5cbiAgICBjb25zdCBmdW5jdGlvbkhhbmRsZSA9IGBcXCR7JHtmbi5ub2RlLnBhdGh9I2F0dHJzLmhhbmRsZX1gO1xuICAgIHRoaXMuc3Vic2NyaWJlcnMucHVzaCh7XG4gICAgICBmdW5jdGlvbkhhbmRsZSxcbiAgICB9KTtcblxuICAgIGNvcmUuUmVzb3VyY2UuYWRkQ29ubmVjdGlvbih7XG4gICAgICBmcm9tOiB0aGlzLFxuICAgICAgdG86IGZuLFxuICAgICAgcmVsYXRpb25zaGlwOiBcIm9uX21lc3NhZ2VcIixcbiAgICB9KTtcblxuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHVibGljIF9iaW5kKGhvc3Q6IGNvcmUuSUluZmxpZ2h0SG9zdCwgb3BzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGJpbmRTaW11bGF0b3JSZXNvdXJjZShcInRvcGljXCIsIHRoaXMsIGhvc3QpO1xuICAgIHN1cGVyLl9iaW5kKGhvc3QsIG9wcyk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHB1YmxpYyBfdG9JbmZsaWdodCgpOiBjb3JlLkNvZGUge1xuICAgIHJldHVybiBtYWtlU2ltdWxhdG9ySnNDbGllbnQoXCJ0b3BpY1wiLCB0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyB0b1NpbXVsYXRvcigpOiBCYXNlUmVzb3VyY2VTY2hlbWEge1xuICAgIGNvbnN0IHNjaGVtYTogVG9waWNTY2hlbWEgPSB7XG4gICAgICB0eXBlOiBUT1BJQ19UWVBFLFxuICAgICAgcGF0aDogdGhpcy5ub2RlLnBhdGgsXG4gICAgICBwcm9wczoge1xuICAgICAgICBzdWJzY3JpYmVyczogdGhpcy5zdWJzY3JpYmVycyxcbiAgICAgIH0sXG4gICAgICBhdHRyczoge30gYXMgYW55LFxuICAgIH07XG4gICAgcmV0dXJuIHNjaGVtYTtcbiAgfVxufVxuXG5Ub3BpYy5fYW5ub3RhdGVJbmZsaWdodChcInB1Ymxpc2hcIiwge30pO1xuIl19

/***/ }),

/***/ 7961:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeSimulatorJsClient = exports.bindSimulatorResource = exports.exists = void 0;
const fs_1 = __nccwpck_require__(7147);
const util_1 = __nccwpck_require__(3837);
const function_1 = __nccwpck_require__(3633);
const core_1 = __nccwpck_require__(6526);
/**
 * Check if a file exists for an specific path
 * @param filePath
 * @Returns Return `true` if the file exists, `false` otherwise.
 */
async function exists(filePath) {
    try {
        await (0, util_1.promisify)(fs_1.access)(filePath, fs_1.constants.F_OK | fs_1.constants.R_OK | fs_1.constants.W_OK //eslint-disable-line no-bitwise
        );
        return true;
    }
    catch (er) {
        return false;
    }
}
exports.exists = exists;
function makeEnvVarName(type, resource) {
    return `${type
        .toUpperCase()
        .replace(/\./g, "_")}_HANDLE_${resource.node.addr.slice(-8)}`;
}
function bindSimulatorResource(type, resource, host) {
    if (!(host instanceof function_1.Function)) {
        throw new Error(`Resources of ${type} can only be bound by a sim.Function for now`);
    }
    const env = makeEnvVarName(type, resource);
    const handle = `\${${resource.node.path}#attrs.handle}`; // TODO: proper token mechanism
    host.addEnvironment(env, handle);
    host.node.addDependency(resource);
}
exports.bindSimulatorResource = bindSimulatorResource;
function makeSimulatorJsClient(type, resource) {
    const env = makeEnvVarName(type, resource);
    return core_1.NodeJsCode.fromInline(`(function(env) {
        let handle = process.env[env];
        if (!handle) {
          throw new Error("Missing environment variable: " + env);
        }
        return $simulator.findInstance(handle);
      })("${env}")`);
}
exports.makeSimulatorJsClient = makeSimulatorJsClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXJnZXQtc2ltL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkJBQXVDO0FBQ3ZDLCtCQUFpQztBQUVqQyx5Q0FBc0M7QUFDdEMsa0NBQThEO0FBRTlEOzs7O0dBSUc7QUFDSSxLQUFLLFVBQVUsTUFBTSxDQUFDLFFBQWdCO0lBQzNDLElBQUk7UUFDRixNQUFNLElBQUEsZ0JBQVMsRUFBQyxXQUFNLENBQUMsQ0FDckIsUUFBUSxFQUNSLGNBQVMsQ0FBQyxJQUFJLEdBQUcsY0FBUyxDQUFDLElBQUksR0FBRyxjQUFTLENBQUMsSUFBSSxDQUFDLGdDQUFnQztTQUNsRixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ1gsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUM7QUFWRCx3QkFVQztBQUVELFNBQVMsY0FBYyxDQUFDLElBQVksRUFBRSxRQUFvQjtJQUN4RCxPQUFPLEdBQUcsSUFBSTtTQUNYLFdBQVcsRUFBRTtTQUNiLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFdBQVcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNsRSxDQUFDO0FBRUQsU0FBZ0IscUJBQXFCLENBQ25DLElBQVksRUFDWixRQUFrQixFQUNsQixJQUFtQjtJQUVuQixJQUFJLENBQUMsQ0FBQyxJQUFJLFlBQVksbUJBQVEsQ0FBQyxFQUFFO1FBQy9CLE1BQU0sSUFBSSxLQUFLLENBQ2IsZ0JBQWdCLElBQUksOENBQThDLENBQ25FLENBQUM7S0FDSDtJQUVELE1BQU0sR0FBRyxHQUFHLGNBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0MsTUFBTSxNQUFNLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUMsQ0FBQywrQkFBK0I7SUFDeEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQWZELHNEQWVDO0FBRUQsU0FBZ0IscUJBQXFCLENBQUMsSUFBWSxFQUFFLFFBQWtCO0lBQ3BFLE1BQU0sR0FBRyxHQUFHLGNBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0MsT0FBTyxpQkFBVSxDQUFDLFVBQVUsQ0FDMUI7Ozs7OztZQU1RLEdBQUcsSUFBSSxDQUNoQixDQUFDO0FBQ0osQ0FBQztBQVhELHNEQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWNjZXNzLCBjb25zdGFudHMgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IHByb21pc2lmeSB9IGZyb20gXCJ1dGlsXCI7XG5pbXBvcnQgeyBJQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSBcIi4vZnVuY3Rpb25cIjtcbmltcG9ydCB7IElJbmZsaWdodEhvc3QsIE5vZGVKc0NvZGUsIFJlc291cmNlIH0gZnJvbSBcIi4uL2NvcmVcIjtcblxuLyoqXG4gKiBDaGVjayBpZiBhIGZpbGUgZXhpc3RzIGZvciBhbiBzcGVjaWZpYyBwYXRoXG4gKiBAcGFyYW0gZmlsZVBhdGhcbiAqIEBSZXR1cm5zIFJldHVybiBgdHJ1ZWAgaWYgdGhlIGZpbGUgZXhpc3RzLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4aXN0cyhmaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcHJvbWlzaWZ5KGFjY2VzcykoXG4gICAgICBmaWxlUGF0aCxcbiAgICAgIGNvbnN0YW50cy5GX09LIHwgY29uc3RhbnRzLlJfT0sgfCBjb25zdGFudHMuV19PSyAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tYml0d2lzZVxuICAgICk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VFbnZWYXJOYW1lKHR5cGU6IHN0cmluZywgcmVzb3VyY2U6IElDb25zdHJ1Y3QpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7dHlwZVxuICAgIC50b1VwcGVyQ2FzZSgpXG4gICAgLnJlcGxhY2UoL1xcLi9nLCBcIl9cIil9X0hBTkRMRV8ke3Jlc291cmNlLm5vZGUuYWRkci5zbGljZSgtOCl9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRTaW11bGF0b3JSZXNvdXJjZShcbiAgdHlwZTogc3RyaW5nLFxuICByZXNvdXJjZTogUmVzb3VyY2UsXG4gIGhvc3Q6IElJbmZsaWdodEhvc3Rcbikge1xuICBpZiAoIShob3N0IGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFJlc291cmNlcyBvZiAke3R5cGV9IGNhbiBvbmx5IGJlIGJvdW5kIGJ5IGEgc2ltLkZ1bmN0aW9uIGZvciBub3dgXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGVudiA9IG1ha2VFbnZWYXJOYW1lKHR5cGUsIHJlc291cmNlKTtcbiAgY29uc3QgaGFuZGxlID0gYFxcJHske3Jlc291cmNlLm5vZGUucGF0aH0jYXR0cnMuaGFuZGxlfWA7IC8vIFRPRE86IHByb3BlciB0b2tlbiBtZWNoYW5pc21cbiAgaG9zdC5hZGRFbnZpcm9ubWVudChlbnYsIGhhbmRsZSk7XG4gIGhvc3Qubm9kZS5hZGREZXBlbmRlbmN5KHJlc291cmNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTaW11bGF0b3JKc0NsaWVudCh0eXBlOiBzdHJpbmcsIHJlc291cmNlOiBSZXNvdXJjZSkge1xuICBjb25zdCBlbnYgPSBtYWtlRW52VmFyTmFtZSh0eXBlLCByZXNvdXJjZSk7XG4gIHJldHVybiBOb2RlSnNDb2RlLmZyb21JbmxpbmUoXG4gICAgYChmdW5jdGlvbihlbnYpIHtcbiAgICAgICAgbGV0IGhhbmRsZSA9IHByb2Nlc3MuZW52W2Vudl07XG4gICAgICAgIGlmICghaGFuZGxlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCIgKyBlbnYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkc2ltdWxhdG9yLmZpbmRJbnN0YW5jZShoYW5kbGUpO1xuICAgICAgfSkoXCIke2Vudn1cIilgXG4gICk7XG59XG4iXX0=

/***/ }),

/***/ 2063:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(8907), exports);
__exportStar(__nccwpck_require__(9694), exports);
__exportStar(__nccwpck_require__(95), exports);
__exportStar(__nccwpck_require__(384), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVzdGluZy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQTBCO0FBQzFCLDhDQUE0QjtBQUM1Qiw0Q0FBMEI7QUFDMUIseUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vc2ltLWFwcFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2ltdWxhdG9yXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90ZXN0aW5nXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90cmVlXCI7XG4iXX0=

/***/ }),

/***/ 8907:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SimApp = void 0;
const _1 = __nccwpck_require__(2063);
const sim = __importStar(__nccwpck_require__(1237));
const util_1 = __nccwpck_require__(5353);
/**
 * A simulated app.
 *
 * A great way to write unit tests for the cloud. Just use this as your base app
 * and then call `app.startSimulator()` to start an instance of this app inside
 * a cloud simulator.
 */
class SimApp extends sim.App {
    constructor() {
        super({ outdir: (0, util_1.mkdtemp)() });
        this._synthesized = false;
    }
    /**
     * Creates a simulator and starts it.
     *
     * @returns A started `Simulator` instance. No need to call `start()` again.
     */
    async startSimulator() {
        this.synthIfNeeded();
        const simfile = this.synth();
        const s = new _1.Simulator({ simfile });
        await s.start();
        return s;
    }
    /**
     * Takes a snapshot of the output directory, returning a map of filenames to
     * their contents.
     */
    snapshot() {
        this.synthIfNeeded();
        return (0, util_1.directorySnapshot)(this.outdir);
    }
    synthIfNeeded() {
        if (!this._synthesized) {
            this.synth();
            this._synthesized = true;
        }
    }
}
exports.SimApp = SimApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltLWFwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0aW5nL3NpbS1hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBOEI7QUFDOUIsbURBQXFDO0FBQ3JDLGtDQUFxRDtBQUVyRDs7Ozs7O0dBTUc7QUFDSCxNQUFhLE1BQU8sU0FBUSxHQUFHLENBQUMsR0FBRztJQUVqQztRQUNFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFBLGNBQU8sR0FBRSxFQUFFLENBQUMsQ0FBQztRQUZ2QixpQkFBWSxHQUFZLEtBQUssQ0FBQztJQUd0QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEtBQUssQ0FBQyxjQUFjO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0IsTUFBTSxDQUFDLEdBQUcsSUFBSSxZQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDYixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsT0FBTyxJQUFBLHdCQUFpQixFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU8sYUFBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMxQjtJQUNILENBQUM7Q0FDRjtBQWxDRCx3QkFrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaW11bGF0b3IgfSBmcm9tIFwiLlwiO1xuaW1wb3J0ICogYXMgc2ltIGZyb20gXCIuLi90YXJnZXQtc2ltXCI7XG5pbXBvcnQgeyBkaXJlY3RvcnlTbmFwc2hvdCwgbWtkdGVtcCB9IGZyb20gXCIuLi91dGlsXCI7XG5cbi8qKlxuICogQSBzaW11bGF0ZWQgYXBwLlxuICpcbiAqIEEgZ3JlYXQgd2F5IHRvIHdyaXRlIHVuaXQgdGVzdHMgZm9yIHRoZSBjbG91ZC4gSnVzdCB1c2UgdGhpcyBhcyB5b3VyIGJhc2UgYXBwXG4gKiBhbmQgdGhlbiBjYWxsIGBhcHAuc3RhcnRTaW11bGF0b3IoKWAgdG8gc3RhcnQgYW4gaW5zdGFuY2Ugb2YgdGhpcyBhcHAgaW5zaWRlXG4gKiBhIGNsb3VkIHNpbXVsYXRvci5cbiAqL1xuZXhwb3J0IGNsYXNzIFNpbUFwcCBleHRlbmRzIHNpbS5BcHAge1xuICBwcml2YXRlIF9zeW50aGVzaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7IG91dGRpcjogbWtkdGVtcCgpIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBzaW11bGF0b3IgYW5kIHN0YXJ0cyBpdC5cbiAgICpcbiAgICogQHJldHVybnMgQSBzdGFydGVkIGBTaW11bGF0b3JgIGluc3RhbmNlLiBObyBuZWVkIHRvIGNhbGwgYHN0YXJ0KClgIGFnYWluLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIHN0YXJ0U2ltdWxhdG9yKCk6IFByb21pc2U8U2ltdWxhdG9yPiB7XG4gICAgdGhpcy5zeW50aElmTmVlZGVkKCk7XG4gICAgY29uc3Qgc2ltZmlsZSA9IHRoaXMuc3ludGgoKTtcbiAgICBjb25zdCBzID0gbmV3IFNpbXVsYXRvcih7IHNpbWZpbGUgfSk7XG4gICAgYXdhaXQgcy5zdGFydCgpO1xuICAgIHJldHVybiBzO1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIGEgc25hcHNob3Qgb2YgdGhlIG91dHB1dCBkaXJlY3RvcnksIHJldHVybmluZyBhIG1hcCBvZiBmaWxlbmFtZXMgdG9cbiAgICogdGhlaXIgY29udGVudHMuXG4gICAqL1xuICBwdWJsaWMgc25hcHNob3QoKTogUmVjb3JkPHN0cmluZywgYW55PiB7XG4gICAgdGhpcy5zeW50aElmTmVlZGVkKCk7XG4gICAgcmV0dXJuIGRpcmVjdG9yeVNuYXBzaG90KHRoaXMub3V0ZGlyKTtcbiAgfVxuXG4gIHByaXZhdGUgc3ludGhJZk5lZWRlZCgpIHtcbiAgICBpZiAoIXRoaXMuX3N5bnRoZXNpemVkKSB7XG4gICAgICB0aGlzLnN5bnRoKCk7XG4gICAgICB0aGlzLl9zeW50aGVzaXplZCA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=

/***/ }),

/***/ 9694:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Simulator = exports.TraceType = void 0;
const fs_1 = __nccwpck_require__(7147);
const path_1 = __nccwpck_require__(1017);
const tar = __importStar(__nccwpck_require__(3002));
const tree_1 = __nccwpck_require__(384);
const constants_1 = __nccwpck_require__(5484);
// eslint-disable-next-line import/no-restricted-paths
const factory_inflight_1 = __nccwpck_require__(5242);
const util_1 = __nccwpck_require__(5353);
/**
 * The type of a trace.
 */
var TraceType;
(function (TraceType) {
    /**
     * A trace representing a resource activity.
     */
    TraceType["RESOURCE"] = "resource";
    /**
     * A trace representing information emitted by the logger.
     */
    TraceType["LOG"] = "log";
})(TraceType = exports.TraceType || (exports.TraceType = {}));
/**
 * A simulator that can be used to test your application locally.
 */
class Simulator {
    constructor(props) {
        this._simfile = props.simfile;
        const { assetsDir, config, treeData } = this._loadApp(props.simfile);
        this._config = config;
        this._assetsDir = assetsDir;
        this._tree = new tree_1.Tree(treeData);
        this._running = false;
        this._factory = props.factory ?? new factory_inflight_1.DefaultSimulatorFactory();
        this._handles = new HandleManager();
        this._traces = new Array();
        this._traceSubscribers = new Array();
    }
    _loadApp(simfile) {
        // create a temporary directory to store extracted files
        const workdir = (0, util_1.mkdtemp)();
        tar.extract({
            cwd: workdir,
            sync: true,
            file: simfile,
        });
        const simJson = (0, path_1.join)(workdir, "simulator.json");
        if (!(0, fs_1.existsSync)(simJson)) {
            throw new Error(`Invalid Wing app (${simfile}) - simulator.json not found.`);
        }
        const config = (0, util_1.readJsonSync)(simJson);
        const foundVersion = config.sdkVersion ?? "unknown";
        const expectedVersion = constants_1.SDK_VERSION;
        if (foundVersion !== expectedVersion) {
            console.error(`WARNING: The simulator file (${simfile}) was generated with Wing SDK v${foundVersion} but it is being simulated with Wing SDK v${expectedVersion}.`);
        }
        if (config.resources === undefined) {
            throw new Error(`Incompatible .wsim file. The simulator file (${simfile}) was generated with Wing SDK v${foundVersion} but it is being simulated with Wing SDK v${expectedVersion}.`);
        }
        const treeJson = (0, path_1.join)(workdir, "tree.json");
        if (!(0, fs_1.existsSync)(treeJson)) {
            throw new Error(`Invalid Wing app (${simfile}) - tree.json not found.`);
        }
        const treeData = (0, util_1.readJsonSync)(treeJson);
        return { assetsDir: workdir, config, treeData };
    }
    /**
     * Start the simulator.
     */
    async start() {
        if (this._running) {
            throw new Error("A simulation is already running. Did you mean to call `await simulator.stop()` first?");
        }
        this._traces = [];
        for (const resourceConfig of this._config.resources) {
            const context = {
                assetsDir: this._assetsDir,
                resourcePath: resourceConfig.path,
                findInstance: (handle) => {
                    return this._handles.find(handle);
                },
                addTrace: (trace) => {
                    this._addTrace(trace);
                },
                withTrace: async (props) => {
                    // TODO: log start time and end time of activity?
                    try {
                        let result = await props.activity();
                        this._addTrace({
                            data: {
                                message: props.message,
                                status: "success",
                                result: JSON.stringify(result),
                            },
                            type: TraceType.RESOURCE,
                            sourcePath: resourceConfig.path,
                            sourceType: resourceConfig.type,
                            timestamp: new Date().toISOString(),
                        });
                        return result;
                    }
                    catch (err) {
                        this._addTrace({
                            data: { message: props.message, status: "failure", error: err },
                            type: TraceType.RESOURCE,
                            sourcePath: resourceConfig.path,
                            sourceType: resourceConfig.type,
                            timestamp: new Date().toISOString(),
                        });
                        throw err;
                    }
                },
            };
            const resolvedProps = this.resolveTokens(resourceConfig.props, resourceConfig.path);
            const resource = this._factory.resolve(resourceConfig.type, resolvedProps, context);
            await resource.init();
            const handle = this._handles.allocate(resource);
            resourceConfig.attrs = { handle };
            let event = {
                type: TraceType.RESOURCE,
                data: { message: `${resourceConfig.type} created.` },
                sourcePath: resourceConfig.path,
                sourceType: resourceConfig.type,
                timestamp: new Date().toISOString(),
            };
            this._addTrace(event);
        }
        this._running = true;
    }
    /**
     * Stop the simulation and clean up all resources.
     */
    async stop() {
        if (!this._running) {
            throw new Error("There is no running simulation to stop. Did you mean to call `await simulator.start()` first?");
        }
        for (const resourceConfig of this._config.resources.slice().reverse()) {
            const handle = resourceConfig.attrs?.handle;
            if (!handle) {
                throw new Error(`Resource ${resourceConfig.path} could not be cleaned up, no handle for it was found.`);
            }
            const resource = this._handles.deallocate(resourceConfig.attrs.handle);
            await resource.cleanup();
            let event = {
                type: TraceType.RESOURCE,
                data: { message: `${resourceConfig.type} deleted.` },
                sourcePath: resourceConfig.path,
                sourceType: resourceConfig.type,
                timestamp: new Date().toISOString(),
            };
            this._addTrace(event);
        }
        this._handles.reset();
        this._running = false;
        // TODO: remove "attrs" data from tree
    }
    /**
     * Stop the simulation, reload the simulation tree from the latest version of
     * the app file, and restart the simulation.
     */
    async reload() {
        await this.stop();
        const { assetsDir, config, treeData } = this._loadApp(this._simfile);
        this._config = config;
        this._assetsDir = assetsDir;
        this._tree = new tree_1.Tree(treeData);
        await this.start();
    }
    /**
     * Get a list of all resource paths.
     */
    listResources() {
        return this._config.resources.map((config) => config.path).sort();
    }
    /**
     * Get a list of all traces from the most recent simulation run.
     */
    listTraces() {
        return [...this._traces];
    }
    /**
     * Get a simulated resource instance.
     * @returns the resource
     */
    getResource(path) {
        const handle = this.tryGetResource(path);
        if (!handle) {
            throw new Error(`Resource "${path}" not found.`);
        }
        return handle;
    }
    /**
     * Get a simulated resource instance.
     * @returns The resource of undefined if not found
     */
    tryGetResource(path) {
        const handle = this.tryGetResourceConfig(path)?.attrs.handle;
        if (!handle) {
            return undefined;
        }
        return this._handles.find(handle);
    }
    /**
     * Obtain a resource's configuration, including its type, props, and attrs.
     * @returns The resource configuration or undefined if not found
     */
    tryGetResourceConfig(path) {
        // shorthand - assume tree root is named "root" by default
        if (path.startsWith("/")) {
            path = `root${path}`;
        }
        return this._config.resources.find((r) => r.path === path);
    }
    /**
     * Obtain a resource's configuration, including its type, props, and attrs.
     * @param path The resource path
     * @returns The resource configuration
     */
    getResourceConfig(path) {
        const config = this.tryGetResourceConfig(path);
        if (!config) {
            throw new Error(`Resource "${path}" not found.`);
        }
        return config;
    }
    /**
     * Register a subscriber that will be notified when a trace is emitted by
     * the simulator.
     */
    onTrace(subscriber) {
        this._traceSubscribers.push(subscriber);
    }
    /**
     * Lists all resource with identifier "test" or that start with "test:*".
     * @returns A list of resource paths
     */
    listTests() {
        const isTest = /(\/test$|\/test:([^\\/])+$)/;
        const all = this.listResources();
        return all.filter((f) => isTest.test(f));
    }
    /**
     * Run all tests in the simulation tree.
     *
     * A test is a `cloud.Function` resource with an identifier that starts with "test." or is "test".
     * @returns A list of test results.
     */
    async runAllTests() {
        const results = new Array();
        const tests = this.listTests();
        for (const path of tests) {
            results.push(await this.runTest(path));
        }
        return results;
    }
    /**
     * Runs a single test.
     * @param path The path to a cloud.Function resource that repersents the test
     * @returns The result of the test
     */
    async runTest(path) {
        // create a new simulator instance to run this test in isolation
        const isolated = new Simulator({ simfile: this._simfile });
        await isolated.start();
        // find the test function and verify it exists and indeed is a function
        const fn = isolated.tryGetResource(path);
        if (!fn) {
            const all = this.listResources();
            throw new Error(`Resource "${path}" not found. Resources: ${all}`);
        }
        if (!("invoke" in fn)) {
            throw new Error(`Resource "${path}" is not a cloud.Function (expecting "invoke()").`);
        }
        // run the test and capture any errors
        let error = undefined;
        try {
            await fn.invoke("");
        }
        catch (err) {
            error = err.stack;
        }
        // stop the simulator
        await isolated.stop();
        return {
            path: path,
            traces: isolated.listTraces(),
            pass: !error,
            error: error,
        };
    }
    /**
     * Obtain information about the application's resource tree.
     */
    tree() {
        return this._tree;
    }
    _addTrace(event) {
        event = Object.freeze(event);
        for (const sub of this._traceSubscribers) {
            sub.callback(event);
        }
        this._traces.push(event);
    }
    /**
     * Return an object with all tokens in it resolved to their appropriate
     * values.
     *
     * A token can be a string like "${app/my_bucket#attrs.handle}". This token
     * would be resolved to the "handle" attribute of the resource at path
     * "app/my_bucket". If that attribute does not exist at the time of resolution
     * (for example, if my_bucket is not being simulated yet), an error will be
     * thrown.
     *
     * Tokens can also be nested, like "${app/my_bucket#attrs.handle}/foo/bar".
     *
     * @param obj The object to resolve tokens in.
     * @param source The path of the resource that requested the token to be resolved.
     */
    resolveTokens(obj, source) {
        if (typeof obj === "string") {
            if (isToken(obj)) {
                const ref = obj.slice(2, -1);
                const [path, rest] = ref.split("#");
                const config = this.getResourceConfig(path);
                if (rest.startsWith("attrs.")) {
                    if (!config.attrs) {
                        throw new Error(`Tried to resolve token "${obj}" but resource ${path} has no attributes defined yet. Is it possible ${source} needs to take a dependency on ${path}?`);
                    }
                    return config.attrs[rest.slice(6)];
                }
                else if (rest.startsWith("props.")) {
                    if (!config.props) {
                        throw new Error(`Tried to resolve token "${obj}" but resource ${path} has no props defined.`);
                    }
                    return config.props;
                }
                else {
                    throw new Error(`Invalid token reference: "${ref}"`);
                }
            }
            return obj;
        }
        if (Array.isArray(obj)) {
            return obj.map((x) => this.resolveTokens(x, source));
        }
        if (typeof obj === "object") {
            const ret = {};
            for (const [key, value] of Object.entries(obj)) {
                ret[key] = this.resolveTokens(value, source);
            }
            return ret;
        }
        return obj;
    }
}
exports.Simulator = Simulator;
function isToken(value) {
    return value.startsWith("${") && value.endsWith("}");
}
class HandleManager {
    constructor() {
        this.handles = new Map();
        this.nextHandle = 0;
    }
    allocate(resource) {
        const handle = `sim-${this.nextHandle++}`;
        this.handles.set(handle, resource);
        return handle;
    }
    find(handle) {
        const instance = this.handles.get(handle);
        if (!instance) {
            throw new Error(`No resource found with handle "${handle}".`);
        }
        return instance;
    }
    deallocate(handle) {
        const instance = this.handles.get(handle);
        if (!instance) {
            throw new Error(`No resource found with handle "${handle}".`);
        }
        this.handles.delete(handle);
        return instance;
    }
    reset() {
        this.handles.clear();
        this.nextHandle = 0;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltdWxhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Rlc3Rpbmcvc2ltdWxhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkJBQWdDO0FBQ2hDLCtCQUE0QjtBQUM1Qix5Q0FBMkI7QUFDM0IsaUNBQThCO0FBQzlCLDRDQUEyQztBQUczQyxzREFBc0Q7QUFDdEQscUVBQXlFO0FBSXpFLGtDQUFnRDtBQXFGaEQ7O0dBRUc7QUFDSCxJQUFZLFNBU1g7QUFURCxXQUFZLFNBQVM7SUFDbkI7O09BRUc7SUFDSCxrQ0FBcUIsQ0FBQTtJQUNyQjs7T0FFRztJQUNILHdCQUFXLENBQUE7QUFDYixDQUFDLEVBVFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFTcEI7QUE4Q0Q7O0dBRUc7QUFDSCxNQUFhLFNBQVM7SUFjcEIsWUFBWSxLQUFxQjtRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDOUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFdBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksSUFBSSwwQ0FBdUIsRUFBRSxDQUFDO1FBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxFQUFF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SUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLE1BQU0sSUFBSSxDQUFDLENBQUM7U0FDL0Q7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhpc3RzU3luYyB9IGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgKiBhcyB0YXIgZnJvbSBcInRhclwiO1xuaW1wb3J0IHsgVHJlZSB9IGZyb20gXCIuL3RyZWVcIjtcbmltcG9ydCB7IFNES19WRVJTSU9OIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ29uc3RydWN0VHJlZSB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBJU2ltdWxhdG9yUmVzb3VyY2VJbnN0YW5jZSB9IGZyb20gXCIuLi90YXJnZXQtc2ltXCI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXJlc3RyaWN0ZWQtcGF0aHNcbmltcG9ydCB7IERlZmF1bHRTaW11bGF0b3JGYWN0b3J5IH0gZnJvbSBcIi4uL3RhcmdldC1zaW0vZmFjdG9yeS5pbmZsaWdodFwiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1yZXN0cmljdGVkLXBhdGhzXG5pbXBvcnQgeyBGdW5jdGlvbiB9IGZyb20gXCIuLi90YXJnZXQtc2ltL2Z1bmN0aW9uLmluZmxpZ2h0XCI7XG5pbXBvcnQgeyBCYXNlUmVzb3VyY2VTY2hlbWEsIFdpbmdTaW11bGF0b3JTY2hlbWEgfSBmcm9tIFwiLi4vdGFyZ2V0LXNpbS9zY2hlbWFcIjtcbmltcG9ydCB7IG1rZHRlbXAsIHJlYWRKc29uU3luYyB9IGZyb20gXCIuLi91dGlsXCI7XG5cbi8qKlxuICogUHJvcHMgZm9yIGBTaW11bGF0b3JgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNpbXVsYXRvclByb3BzIHtcbiAgLyoqXG4gICAqIFBhdGggdG8gYSBXaW5nIHNpbXVsYXRvciBmaWxlICgud3NpbSkuXG4gICAqL1xuICByZWFkb25seSBzaW1maWxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBmYWN0b3J5IHRoYXQgcHJvZHVjZXMgcmVzb3VyY2Ugc2ltdWxhdGlvbnMuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gYSBmYWN0b3J5IHRoYXQgcHJvZHVjZXMgc2ltdWxhdGlvbnMgZm9yIGJ1aWx0LWluIFdpbmcgU0RLXG4gICAqIHJlc291cmNlc1xuICAgKi9cbiAgcmVhZG9ubHkgZmFjdG9yeT86IElTaW11bGF0b3JGYWN0b3J5O1xufVxuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBjYWxsYmFja3MgdGhhdCBhcmUgaW52b2tlZCBhdCBrZXkgbGlmZWN5Y2xlIGV2ZW50cyBvZiB0aGVcbiAqIHNpbXVsYXRvci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU2ltdWxhdG9yTGlmZWN5Y2xlSG9va3Mge1xuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBydW4gd2hlbmV2ZXIgYSB0cmFjZSBpcyBlbWl0dGVkLlxuICAgKi9cbiAgb25UcmFjZT8oZXZlbnQ6IFRyYWNlKTogdm9pZDtcbn1cblxuLy8gU2luY2Ugd2UgYXJlIHVzaW5nIEpTSUkgd2UgY2Fubm90IHVzZSBnZW5lcmljcyB0byB0eXBlIHRoaXMgcmlnaHQgbm93OlxuLy9cbi8vIGV4cG9ydCBpbnRlcmZhY2UgV2l0aFRyYWNlUHJvcHM8VD4ge1xuLy8gICByZWFkb25seSBhY3Rpdml0eTogKCkgPT4gUHJvbWlzZTxUPjtcbi8vIH1cbi8vIC4uLlxuLy8gd2l0aFRyYWNlKGV2ZW50OiBXaXRoVHJhY2VQcm9wczxUPik6IFByb21pc2U8VD47XG5cbi8qKlxuICogUHJvcHMgZm9yIGBJU2ltdWxhdG9yQ29udGV4dC53aXRoVHJhY2VgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElXaXRoVHJhY2VQcm9wcyB7XG4gIC8qKlxuICAgKiBUaGUgdHJhY2UgbWVzc2FnZS5cbiAgICovXG4gIHJlYWRvbmx5IG1lc3NhZ2U6IGFueTtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBydW4gYXMgcGFydCBvZiB0aGUgdHJhY2UuXG4gICAqL1xuICBhY3Rpdml0eSgpOiBQcm9taXNlPGFueT47XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiB0cmFjZSBlbWl0dGVkIGR1cmluZyBzaW11bGF0aW9uLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNlIHtcbiAgLyoqXG4gICAqIEEgSlNPTiBibG9iIHdpdGggc3RydWN0dXJlZCBkYXRhLlxuICAgKi9cbiAgcmVhZG9ubHkgZGF0YTogYW55O1xuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB0aGUgc291cmNlIHRoYXQgZW1pdHRlZCB0aGUgdHJhY2UuXG4gICAqL1xuICByZWFkb25seSBzb3VyY2VUeXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwYXRoIG9mIHRoZSByZXNvdXJjZSB0aGF0IGVtaXR0ZWQgdGhlIHRyYWNlLlxuICAgKi9cbiAgcmVhZG9ubHkgc291cmNlUGF0aDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiBhIHRyYWNlLlxuICAgKi9cbiAgcmVhZG9ubHkgdHlwZTogVHJhY2VUeXBlO1xuXG4gIC8qKlxuICAgKiBUaGUgdGltZXN0YW1wIG9mIHRoZSBldmVudCwgaW4gSVNPIDg2MDEgZm9ybWF0LlxuICAgKiBAZXhhbXBsZSAyMDIwLTAxLTAxVDAwOjAwOjAwLjAwMFpcbiAgICovXG4gIHJlYWRvbmx5IHRpbWVzdGFtcDogc3RyaW5nO1xufVxuXG4vKipcbiAqIFRoZSB0eXBlIG9mIGEgdHJhY2UuXG4gKi9cbmV4cG9ydCBlbnVtIFRyYWNlVHlwZSB7XG4gIC8qKlxuICAgKiBBIHRyYWNlIHJlcHJlc2VudGluZyBhIHJlc291cmNlIGFjdGl2aXR5LlxuICAgKi9cbiAgUkVTT1VSQ0UgPSBcInJlc291cmNlXCIsXG4gIC8qKlxuICAgKiBBIHRyYWNlIHJlcHJlc2VudGluZyBpbmZvcm1hdGlvbiBlbWl0dGVkIGJ5IHRoZSBsb2dnZXIuXG4gICAqL1xuICBMT0cgPSBcImxvZ1wiLFxufVxuXG4vKipcbiAqIENvbnRleHQgdGhhdCBpcyBwYXNzZWQgdG8gaW5kaXZpZHVhbCByZXNvdXJjZSBzaW11bGF0aW9ucy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU2ltdWxhdG9yQ29udGV4dCB7XG4gIC8qKlxuICAgKiBUaGUgZGlyZWN0b3J5IHdoZXJlIGFsbCBhc3NldHMgZXh0cmFjdGVkIGZyb20gYC53c2ltYCBmaWxlIGFyZSBzdG9yZWRcbiAgICogZHVyaW5nIHRoZSBzaW11bGF0aW9uIHJ1bi5cbiAgICovXG4gIHJlYWRvbmx5IGFzc2V0c0Rpcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcGF0aCBvZiB0aGUgcmVzb3VyY2UgdGhhdCBpcyBiZWluZyBzaW11bGF0ZWQuXG4gICAqL1xuICByZWFkb25seSByZXNvdXJjZVBhdGg6IHN0cmluZztcblxuICAvKipcbiAgICogRmluZCBhIHJlc291cmNlIHNpbXVsYXRpb24gYnkgaXRzIGhhbmRsZS4gVGhyb3dzIGlmIHRoZSBoYW5kbGUgaXNuJ3QgdmFsaWQuXG4gICAqL1xuICBmaW5kSW5zdGFuY2UoaGFuZGxlOiBzdHJpbmcpOiBJU2ltdWxhdG9yUmVzb3VyY2VJbnN0YW5jZTtcblxuICAvKipcbiAgICogQWRkIGEgdHJhY2UuIFRyYWNlcyBhcmUgYnJlYWRjcnVtYnMgb2YgaW5mb3JtYXRpb24gYWJvdXQgcmVzb3VyY2VcbiAgICogb3BlcmF0aW9ucyB0aGF0IG9jY3VycmVkIGR1cmluZyBzaW11bGF0aW9uLCB1c2VmdWwgZm9yIHVuZGVyc3RhbmRpbmcgaG93XG4gICAqIHJlc291cmNlcyBpbnRlcmFjdCBvciBkZWJ1Z2dpbmcgYW4gYXBwbGljYXRpb24uXG4gICAqL1xuICBhZGRUcmFjZSh0cmFjZTogVHJhY2UpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIHRyYWNlIGFzc29jaWF0ZWQgd2l0aCBhIHJlc291cmNlIGFjdGl2aXR5LiBUaGUgYWN0aXZpdHkgd2lsbCBiZVxuICAgKiBydW4sIGFuZCB0aGUgdHJhY2Ugd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCB0aGUgcmVzdWx0J3Mgc3VjY2VzcyBvciBmYWlsdXJlLlxuICAgKi9cbiAgd2l0aFRyYWNlKHRyYWNlOiBJV2l0aFRyYWNlUHJvcHMpOiBQcm9taXNlPGFueT47XG59XG5cbi8qKlxuICogQSBzdWJzY3JpYmVyIHRoYXQgY2FuIGxpc3RlbiBmb3IgdHJhY2VzIGVtaXR0ZWQgYnkgdGhlIHNpbXVsYXRvci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVHJhY2VTdWJzY3JpYmVyIHtcbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgdHJhY2UgaXMgZW1pdHRlZC5cbiAgICovXG4gIGNhbGxiYWNrKGV2ZW50OiBUcmFjZSk6IHZvaWQ7XG59XG5cbi8qKlxuICogQSBzaW11bGF0b3IgdGhhdCBjYW4gYmUgdXNlZCB0byB0ZXN0IHlvdXIgYXBwbGljYXRpb24gbG9jYWxseS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNpbXVsYXRvciB7XG4gIC8vIGZpZWxkcyB0aGF0IGFyZSBzYW1lIGJldHdlZW4gc2ltdWxhdGlvbiBydW5zIC8gcmVsb2Fkc1xuICBwcml2YXRlIHJlYWRvbmx5IF9mYWN0b3J5OiBJU2ltdWxhdG9yRmFjdG9yeTtcbiAgcHJpdmF0ZSBfY29uZmlnOiBXaW5nU2ltdWxhdG9yU2NoZW1hO1xuICBwcml2YXRlIHJlYWRvbmx5IF9zaW1maWxlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Fzc2V0c0Rpcjogc3RyaW5nO1xuXG4gIC8vIGZpZWxkcyB0aGF0IGNoYW5nZSBiZXR3ZWVuIHNpbXVsYXRpb24gcnVucyAvIHJlbG9hZHNcbiAgcHJpdmF0ZSBfcnVubmluZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSByZWFkb25seSBfaGFuZGxlczogSGFuZGxlTWFuYWdlcjtcbiAgcHJpdmF0ZSBfdHJhY2VzOiBBcnJheTxUcmFjZT47XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RyYWNlU3Vic2NyaWJlcnM6IEFycmF5PElUcmFjZVN1YnNjcmliZXI+O1xuICBwcml2YXRlIF90cmVlOiBUcmVlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTaW11bGF0b3JQcm9wcykge1xuICAgIHRoaXMuX3NpbWZpbGUgPSBwcm9wcy5zaW1maWxlO1xuICAgIGNvbnN0IHsgYXNzZXRzRGlyLCBjb25maWcsIHRyZWVEYXRhIH0gPSB0aGlzLl9sb2FkQXBwKHByb3BzLnNpbWZpbGUpO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLl9hc3NldHNEaXIgPSBhc3NldHNEaXI7XG4gICAgdGhpcy5fdHJlZSA9IG5ldyBUcmVlKHRyZWVEYXRhKTtcblxuICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9mYWN0b3J5ID0gcHJvcHMuZmFjdG9yeSA/PyBuZXcgRGVmYXVsdFNpbXVsYXRvckZhY3RvcnkoKTtcbiAgICB0aGlzLl9oYW5kbGVzID0gbmV3IEhhbmRsZU1hbmFnZXIoKTtcbiAgICB0aGlzLl90cmFjZXMgPSBuZXcgQXJyYXkoKTtcbiAgICB0aGlzLl90cmFjZVN1YnNjcmliZXJzID0gbmV3IEFycmF5KCk7XG4gIH1cblxuICBwcml2YXRlIF9sb2FkQXBwKHNpbWZpbGU6IHN0cmluZyk6IHtcbiAgICBhc3NldHNEaXI6IHN0cmluZztcbiAgICBjb25maWc6IGFueTtcbiAgICB0cmVlRGF0YTogQ29uc3RydWN0VHJlZTtcbiAgfSB7XG4gICAgLy8gY3JlYXRlIGEgdGVtcG9yYXJ5IGRpcmVjdG9yeSB0byBzdG9yZSBleHRyYWN0ZWQgZmlsZXNcbiAgICBjb25zdCB3b3JrZGlyID0gbWtkdGVtcCgpO1xuICAgIHRhci5leHRyYWN0KHtcbiAgICAgIGN3ZDogd29ya2RpcixcbiAgICAgIHN5bmM6IHRydWUsXG4gICAgICBmaWxlOiBzaW1maWxlLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2ltSnNvbiA9IGpvaW4od29ya2RpciwgXCJzaW11bGF0b3IuanNvblwiKTtcbiAgICBpZiAoIWV4aXN0c1N5bmMoc2ltSnNvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludmFsaWQgV2luZyBhcHAgKCR7c2ltZmlsZX0pIC0gc2ltdWxhdG9yLmpzb24gbm90IGZvdW5kLmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnOiBXaW5nU2ltdWxhdG9yU2NoZW1hID0gcmVhZEpzb25TeW5jKHNpbUpzb24pO1xuXG4gICAgY29uc3QgZm91bmRWZXJzaW9uID0gY29uZmlnLnNka1ZlcnNpb24gPz8gXCJ1bmtub3duXCI7XG4gICAgY29uc3QgZXhwZWN0ZWRWZXJzaW9uID0gU0RLX1ZFUlNJT047XG4gICAgaWYgKGZvdW5kVmVyc2lvbiAhPT0gZXhwZWN0ZWRWZXJzaW9uKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgV0FSTklORzogVGhlIHNpbXVsYXRvciBmaWxlICgke3NpbWZpbGV9KSB3YXMgZ2VuZXJhdGVkIHdpdGggV2luZyBTREsgdiR7Zm91bmRWZXJzaW9ufSBidXQgaXQgaXMgYmVpbmcgc2ltdWxhdGVkIHdpdGggV2luZyBTREsgdiR7ZXhwZWN0ZWRWZXJzaW9ufS5gXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLnJlc291cmNlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbmNvbXBhdGlibGUgLndzaW0gZmlsZS4gVGhlIHNpbXVsYXRvciBmaWxlICgke3NpbWZpbGV9KSB3YXMgZ2VuZXJhdGVkIHdpdGggV2luZyBTREsgdiR7Zm91bmRWZXJzaW9ufSBidXQgaXQgaXMgYmVpbmcgc2ltdWxhdGVkIHdpdGggV2luZyBTREsgdiR7ZXhwZWN0ZWRWZXJzaW9ufS5gXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHRyZWVKc29uID0gam9pbih3b3JrZGlyLCBcInRyZWUuanNvblwiKTtcbiAgICBpZiAoIWV4aXN0c1N5bmModHJlZUpzb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgV2luZyBhcHAgKCR7c2ltZmlsZX0pIC0gdHJlZS5qc29uIG5vdCBmb3VuZC5gKTtcbiAgICB9XG4gICAgY29uc3QgdHJlZURhdGEgPSByZWFkSnNvblN5bmModHJlZUpzb24pO1xuXG4gICAgcmV0dXJuIHsgYXNzZXRzRGlyOiB3b3JrZGlyLCBjb25maWcsIHRyZWVEYXRhIH07XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdGhlIHNpbXVsYXRvci5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBzdGFydCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5fcnVubmluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkEgc2ltdWxhdGlvbiBpcyBhbHJlYWR5IHJ1bm5pbmcuIERpZCB5b3UgbWVhbiB0byBjYWxsIGBhd2FpdCBzaW11bGF0b3Iuc3RvcCgpYCBmaXJzdD9cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLl90cmFjZXMgPSBbXTtcblxuICAgIGZvciAoY29uc3QgcmVzb3VyY2VDb25maWcgb2YgdGhpcy5fY29uZmlnLnJlc291cmNlcykge1xuICAgICAgY29uc3QgY29udGV4dDogSVNpbXVsYXRvckNvbnRleHQgPSB7XG4gICAgICAgIGFzc2V0c0RpcjogdGhpcy5fYXNzZXRzRGlyLFxuICAgICAgICByZXNvdXJjZVBhdGg6IHJlc291cmNlQ29uZmlnLnBhdGgsXG4gICAgICAgIGZpbmRJbnN0YW5jZTogKGhhbmRsZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZXMuZmluZChoYW5kbGUpO1xuICAgICAgICB9LFxuICAgICAgICBhZGRUcmFjZTogKHRyYWNlOiBUcmFjZSkgPT4ge1xuICAgICAgICAgIHRoaXMuX2FkZFRyYWNlKHRyYWNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2l0aFRyYWNlOiBhc3luYyAocHJvcHM6IElXaXRoVHJhY2VQcm9wcykgPT4ge1xuICAgICAgICAgIC8vIFRPRE86IGxvZyBzdGFydCB0aW1lIGFuZCBlbmQgdGltZSBvZiBhY3Rpdml0eT9cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHByb3BzLmFjdGl2aXR5KCk7XG4gICAgICAgICAgICB0aGlzLl9hZGRUcmFjZSh7XG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBwcm9wcy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgcmVzdWx0OiBKU09OLnN0cmluZ2lmeShyZXN1bHQpLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0eXBlOiBUcmFjZVR5cGUuUkVTT1VSQ0UsXG4gICAgICAgICAgICAgIHNvdXJjZVBhdGg6IHJlc291cmNlQ29uZmlnLnBhdGgsXG4gICAgICAgICAgICAgIHNvdXJjZVR5cGU6IHJlc291cmNlQ29uZmlnLnR5cGUsXG4gICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5fYWRkVHJhY2Uoe1xuICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6IHByb3BzLm1lc3NhZ2UsIHN0YXR1czogXCJmYWlsdXJlXCIsIGVycm9yOiBlcnIgfSxcbiAgICAgICAgICAgICAgdHlwZTogVHJhY2VUeXBlLlJFU09VUkNFLFxuICAgICAgICAgICAgICBzb3VyY2VQYXRoOiByZXNvdXJjZUNvbmZpZy5wYXRoLFxuICAgICAgICAgICAgICBzb3VyY2VUeXBlOiByZXNvdXJjZUNvbmZpZy50eXBlLFxuICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlc29sdmVkUHJvcHMgPSB0aGlzLnJlc29sdmVUb2tlbnMoXG4gICAgICAgIHJlc291cmNlQ29uZmlnLnByb3BzLFxuICAgICAgICByZXNvdXJjZUNvbmZpZy5wYXRoXG4gICAgICApO1xuICAgICAgY29uc3QgcmVzb3VyY2UgPSB0aGlzLl9mYWN0b3J5LnJlc29sdmUoXG4gICAgICAgIHJlc291cmNlQ29uZmlnLnR5cGUsXG4gICAgICAgIHJlc29sdmVkUHJvcHMsXG4gICAgICAgIGNvbnRleHRcbiAgICAgICk7XG4gICAgICBhd2FpdCByZXNvdXJjZS5pbml0KCk7XG4gICAgICBjb25zdCBoYW5kbGUgPSB0aGlzLl9oYW5kbGVzLmFsbG9jYXRlKHJlc291cmNlKTtcbiAgICAgIChyZXNvdXJjZUNvbmZpZyBhcyBhbnkpLmF0dHJzID0geyBoYW5kbGUgfTtcbiAgICAgIGxldCBldmVudDogVHJhY2UgPSB7XG4gICAgICAgIHR5cGU6IFRyYWNlVHlwZS5SRVNPVVJDRSxcbiAgICAgICAgZGF0YTogeyBtZXNzYWdlOiBgJHtyZXNvdXJjZUNvbmZpZy50eXBlfSBjcmVhdGVkLmAgfSxcbiAgICAgICAgc291cmNlUGF0aDogcmVzb3VyY2VDb25maWcucGF0aCxcbiAgICAgICAgc291cmNlVHlwZTogcmVzb3VyY2VDb25maWcudHlwZSxcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9O1xuICAgICAgdGhpcy5fYWRkVHJhY2UoZXZlbnQpO1xuICAgIH1cblxuICAgIHRoaXMuX3J1bm5pbmcgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgdGhlIHNpbXVsYXRpb24gYW5kIGNsZWFuIHVwIGFsbCByZXNvdXJjZXMuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgc3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuX3J1bm5pbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJUaGVyZSBpcyBubyBydW5uaW5nIHNpbXVsYXRpb24gdG8gc3RvcC4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgYGF3YWl0IHNpbXVsYXRvci5zdGFydCgpYCBmaXJzdD9cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHJlc291cmNlQ29uZmlnIG9mIHRoaXMuX2NvbmZpZy5yZXNvdXJjZXMuc2xpY2UoKS5yZXZlcnNlKCkpIHtcbiAgICAgIGNvbnN0IGhhbmRsZSA9IHJlc291cmNlQ29uZmlnLmF0dHJzPy5oYW5kbGU7XG4gICAgICBpZiAoIWhhbmRsZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFJlc291cmNlICR7cmVzb3VyY2VDb25maWcucGF0aH0gY291bGQgbm90IGJlIGNsZWFuZWQgdXAsIG5vIGhhbmRsZSBmb3IgaXQgd2FzIGZvdW5kLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc291cmNlID0gdGhpcy5faGFuZGxlcy5kZWFsbG9jYXRlKHJlc291cmNlQ29uZmlnLmF0dHJzIS5oYW5kbGUpO1xuICAgICAgYXdhaXQgcmVzb3VyY2UuY2xlYW51cCgpO1xuXG4gICAgICBsZXQgZXZlbnQ6IFRyYWNlID0ge1xuICAgICAgICB0eXBlOiBUcmFjZVR5cGUuUkVTT1VSQ0UsXG4gICAgICAgIGRhdGE6IHsgbWVzc2FnZTogYCR7cmVzb3VyY2VDb25maWcudHlwZX0gZGVsZXRlZC5gIH0sXG4gICAgICAgIHNvdXJjZVBhdGg6IHJlc291cmNlQ29uZmlnLnBhdGgsXG4gICAgICAgIHNvdXJjZVR5cGU6IHJlc291cmNlQ29uZmlnLnR5cGUsXG4gICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgfTtcbiAgICAgIHRoaXMuX2FkZFRyYWNlKGV2ZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLl9oYW5kbGVzLnJlc2V0KCk7XG4gICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xuXG4gICAgLy8gVE9ETzogcmVtb3ZlIFwiYXR0cnNcIiBkYXRhIGZyb20gdHJlZVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgdGhlIHNpbXVsYXRpb24sIHJlbG9hZCB0aGUgc2ltdWxhdGlvbiB0cmVlIGZyb20gdGhlIGxhdGVzdCB2ZXJzaW9uIG9mXG4gICAqIHRoZSBhcHAgZmlsZSwgYW5kIHJlc3RhcnQgdGhlIHNpbXVsYXRpb24uXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgcmVsb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuc3RvcCgpO1xuXG4gICAgY29uc3QgeyBhc3NldHNEaXIsIGNvbmZpZywgdHJlZURhdGEgfSA9IHRoaXMuX2xvYWRBcHAodGhpcy5fc2ltZmlsZSk7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX2Fzc2V0c0RpciA9IGFzc2V0c0RpcjtcbiAgICB0aGlzLl90cmVlID0gbmV3IFRyZWUodHJlZURhdGEpO1xuXG4gICAgYXdhaXQgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGxpc3Qgb2YgYWxsIHJlc291cmNlIHBhdGhzLlxuICAgKi9cbiAgcHVibGljIGxpc3RSZXNvdXJjZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9jb25maWcucmVzb3VyY2VzLm1hcCgoY29uZmlnKSA9PiBjb25maWcucGF0aCkuc29ydCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGxpc3Qgb2YgYWxsIHRyYWNlcyBmcm9tIHRoZSBtb3N0IHJlY2VudCBzaW11bGF0aW9uIHJ1bi5cbiAgICovXG4gIHB1YmxpYyBsaXN0VHJhY2VzKCk6IFRyYWNlW10ge1xuICAgIHJldHVybiBbLi4udGhpcy5fdHJhY2VzXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBzaW11bGF0ZWQgcmVzb3VyY2UgaW5zdGFuY2UuXG4gICAqIEByZXR1cm5zIHRoZSByZXNvdXJjZVxuICAgKi9cbiAgcHVibGljIGdldFJlc291cmNlKHBhdGg6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3QgaGFuZGxlID0gdGhpcy50cnlHZXRSZXNvdXJjZShwYXRoKTtcbiAgICBpZiAoIWhhbmRsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXNvdXJjZSBcIiR7cGF0aH1cIiBub3QgZm91bmQuYCk7XG4gICAgfVxuICAgIHJldHVybiBoYW5kbGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgc2ltdWxhdGVkIHJlc291cmNlIGluc3RhbmNlLlxuICAgKiBAcmV0dXJucyBUaGUgcmVzb3VyY2Ugb2YgdW5kZWZpbmVkIGlmIG5vdCBmb3VuZFxuICAgKi9cbiAgcHVibGljIHRyeUdldFJlc291cmNlKHBhdGg6IHN0cmluZyk6IGFueSB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgaGFuZGxlID0gdGhpcy50cnlHZXRSZXNvdXJjZUNvbmZpZyhwYXRoKT8uYXR0cnMuaGFuZGxlO1xuICAgIGlmICghaGFuZGxlKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlcy5maW5kKGhhbmRsZSk7XG4gIH1cblxuICAvKipcbiAgICogT2J0YWluIGEgcmVzb3VyY2UncyBjb25maWd1cmF0aW9uLCBpbmNsdWRpbmcgaXRzIHR5cGUsIHByb3BzLCBhbmQgYXR0cnMuXG4gICAqIEByZXR1cm5zIFRoZSByZXNvdXJjZSBjb25maWd1cmF0aW9uIG9yIHVuZGVmaW5lZCBpZiBub3QgZm91bmRcbiAgICovXG4gIHB1YmxpYyB0cnlHZXRSZXNvdXJjZUNvbmZpZyhwYXRoOiBzdHJpbmcpOiBCYXNlUmVzb3VyY2VTY2hlbWEgfCB1bmRlZmluZWQge1xuICAgIC8vIHNob3J0aGFuZCAtIGFzc3VtZSB0cmVlIHJvb3QgaXMgbmFtZWQgXCJyb290XCIgYnkgZGVmYXVsdFxuICAgIGlmIChwYXRoLnN0YXJ0c1dpdGgoXCIvXCIpKSB7XG4gICAgICBwYXRoID0gYHJvb3Qke3BhdGh9YDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5yZXNvdXJjZXMuZmluZCgocikgPT4gci5wYXRoID09PSBwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPYnRhaW4gYSByZXNvdXJjZSdzIGNvbmZpZ3VyYXRpb24sIGluY2x1ZGluZyBpdHMgdHlwZSwgcHJvcHMsIGFuZCBhdHRycy5cbiAgICogQHBhcmFtIHBhdGggVGhlIHJlc291cmNlIHBhdGhcbiAgICogQHJldHVybnMgVGhlIHJlc291cmNlIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIHB1YmxpYyBnZXRSZXNvdXJjZUNvbmZpZyhwYXRoOiBzdHJpbmcpOiBCYXNlUmVzb3VyY2VTY2hlbWEge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMudHJ5R2V0UmVzb3VyY2VDb25maWcocGF0aCk7XG4gICAgaWYgKCFjb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUmVzb3VyY2UgXCIke3BhdGh9XCIgbm90IGZvdW5kLmApO1xuICAgIH1cbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgc3Vic2NyaWJlciB0aGF0IHdpbGwgYmUgbm90aWZpZWQgd2hlbiBhIHRyYWNlIGlzIGVtaXR0ZWQgYnlcbiAgICogdGhlIHNpbXVsYXRvci5cbiAgICovXG4gIHB1YmxpYyBvblRyYWNlKHN1YnNjcmliZXI6IElUcmFjZVN1YnNjcmliZXIpIHtcbiAgICB0aGlzLl90cmFjZVN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gIH1cblxuICAvKipcbiAgICogTGlzdHMgYWxsIHJlc291cmNlIHdpdGggaWRlbnRpZmllciBcInRlc3RcIiBvciB0aGF0IHN0YXJ0IHdpdGggXCJ0ZXN0OipcIi5cbiAgICogQHJldHVybnMgQSBsaXN0IG9mIHJlc291cmNlIHBhdGhzXG4gICAqL1xuICBwdWJsaWMgbGlzdFRlc3RzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBpc1Rlc3QgPSAvKFxcL3Rlc3QkfFxcL3Rlc3Q6KFteXFxcXC9dKSskKS87XG4gICAgY29uc3QgYWxsID0gdGhpcy5saXN0UmVzb3VyY2VzKCk7XG4gICAgcmV0dXJuIGFsbC5maWx0ZXIoKGYpID0+IGlzVGVzdC50ZXN0KGYpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW4gYWxsIHRlc3RzIGluIHRoZSBzaW11bGF0aW9uIHRyZWUuXG4gICAqXG4gICAqIEEgdGVzdCBpcyBhIGBjbG91ZC5GdW5jdGlvbmAgcmVzb3VyY2Ugd2l0aCBhbiBpZGVudGlmaWVyIHRoYXQgc3RhcnRzIHdpdGggXCJ0ZXN0LlwiIG9yIGlzIFwidGVzdFwiLlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgdGVzdCByZXN1bHRzLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIHJ1bkFsbFRlc3RzKCk6IFByb21pc2U8VGVzdFJlc3VsdFtdPiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBBcnJheTxUZXN0UmVzdWx0PigpO1xuICAgIGNvbnN0IHRlc3RzID0gdGhpcy5saXN0VGVzdHMoKTtcblxuICAgIGZvciAoY29uc3QgcGF0aCBvZiB0ZXN0cykge1xuICAgICAgcmVzdWx0cy5wdXNoKGF3YWl0IHRoaXMucnVuVGVzdChwYXRoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICAvKipcbiAgICogUnVucyBhIHNpbmdsZSB0ZXN0LlxuICAgKiBAcGFyYW0gcGF0aCBUaGUgcGF0aCB0byBhIGNsb3VkLkZ1bmN0aW9uIHJlc291cmNlIHRoYXQgcmVwZXJzZW50cyB0aGUgdGVzdFxuICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0IG9mIHRoZSB0ZXN0XG4gICAqL1xuICBwdWJsaWMgYXN5bmMgcnVuVGVzdChwYXRoOiBzdHJpbmcpOiBQcm9taXNlPFRlc3RSZXN1bHQ+IHtcbiAgICAvLyBjcmVhdGUgYSBuZXcgc2ltdWxhdG9yIGluc3RhbmNlIHRvIHJ1biB0aGlzIHRlc3QgaW4gaXNvbGF0aW9uXG4gICAgY29uc3QgaXNvbGF0ZWQgPSBuZXcgU2ltdWxhdG9yKHsgc2ltZmlsZTogdGhpcy5fc2ltZmlsZSB9KTtcbiAgICBhd2FpdCBpc29sYXRlZC5zdGFydCgpO1xuXG4gICAgLy8gZmluZCB0aGUgdGVzdCBmdW5jdGlvbiBhbmQgdmVyaWZ5IGl0IGV4aXN0cyBhbmQgaW5kZWVkIGlzIGEgZnVuY3Rpb25cbiAgICBjb25zdCBmbjogRnVuY3Rpb24gPSBpc29sYXRlZC50cnlHZXRSZXNvdXJjZShwYXRoKTtcbiAgICBpZiAoIWZuKSB7XG4gICAgICBjb25zdCBhbGwgPSB0aGlzLmxpc3RSZXNvdXJjZXMoKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUmVzb3VyY2UgXCIke3BhdGh9XCIgbm90IGZvdW5kLiBSZXNvdXJjZXM6ICR7YWxsfWApO1xuICAgIH1cbiAgICBpZiAoIShcImludm9rZVwiIGluIGZuKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgUmVzb3VyY2UgXCIke3BhdGh9XCIgaXMgbm90IGEgY2xvdWQuRnVuY3Rpb24gKGV4cGVjdGluZyBcImludm9rZSgpXCIpLmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gcnVuIHRoZSB0ZXN0IGFuZCBjYXB0dXJlIGFueSBlcnJvcnNcbiAgICBsZXQgZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGZuLmludm9rZShcIlwiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGVycm9yID0gKGVyciBhcyBhbnkpLnN0YWNrO1xuICAgIH1cblxuICAgIC8vIHN0b3AgdGhlIHNpbXVsYXRvclxuICAgIGF3YWl0IGlzb2xhdGVkLnN0b3AoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwYXRoOiBwYXRoLFxuICAgICAgdHJhY2VzOiBpc29sYXRlZC5saXN0VHJhY2VzKCksXG4gICAgICBwYXNzOiAhZXJyb3IsXG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPYnRhaW4gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFwcGxpY2F0aW9uJ3MgcmVzb3VyY2UgdHJlZS5cbiAgICovXG4gIHB1YmxpYyB0cmVlKCk6IFRyZWUge1xuICAgIHJldHVybiB0aGlzLl90cmVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkVHJhY2UoZXZlbnQ6IFRyYWNlKSB7XG4gICAgZXZlbnQgPSBPYmplY3QuZnJlZXplKGV2ZW50KTtcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl90cmFjZVN1YnNjcmliZXJzKSB7XG4gICAgICBzdWIuY2FsbGJhY2soZXZlbnQpO1xuICAgIH1cbiAgICB0aGlzLl90cmFjZXMucHVzaChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIG9iamVjdCB3aXRoIGFsbCB0b2tlbnMgaW4gaXQgcmVzb2x2ZWQgdG8gdGhlaXIgYXBwcm9wcmlhdGVcbiAgICogdmFsdWVzLlxuICAgKlxuICAgKiBBIHRva2VuIGNhbiBiZSBhIHN0cmluZyBsaWtlIFwiJHthcHAvbXlfYnVja2V0I2F0dHJzLmhhbmRsZX1cIi4gVGhpcyB0b2tlblxuICAgKiB3b3VsZCBiZSByZXNvbHZlZCB0byB0aGUgXCJoYW5kbGVcIiBhdHRyaWJ1dGUgb2YgdGhlIHJlc291cmNlIGF0IHBhdGhcbiAgICogXCJhcHAvbXlfYnVja2V0XCIuIElmIHRoYXQgYXR0cmlidXRlIGRvZXMgbm90IGV4aXN0IGF0IHRoZSB0aW1lIG9mIHJlc29sdXRpb25cbiAgICogKGZvciBleGFtcGxlLCBpZiBteV9idWNrZXQgaXMgbm90IGJlaW5nIHNpbXVsYXRlZCB5ZXQpLCBhbiBlcnJvciB3aWxsIGJlXG4gICAqIHRocm93bi5cbiAgICpcbiAgICogVG9rZW5zIGNhbiBhbHNvIGJlIG5lc3RlZCwgbGlrZSBcIiR7YXBwL215X2J1Y2tldCNhdHRycy5oYW5kbGV9L2Zvby9iYXJcIi5cbiAgICpcbiAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIHJlc29sdmUgdG9rZW5zIGluLlxuICAgKiBAcGFyYW0gc291cmNlIFRoZSBwYXRoIG9mIHRoZSByZXNvdXJjZSB0aGF0IHJlcXVlc3RlZCB0aGUgdG9rZW4gdG8gYmUgcmVzb2x2ZWQuXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVUb2tlbnMob2JqOiBhbnksIHNvdXJjZTogc3RyaW5nKTogYW55IHtcbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKGlzVG9rZW4ob2JqKSkge1xuICAgICAgICBjb25zdCByZWYgPSBvYmouc2xpY2UoMiwgLTEpO1xuICAgICAgICBjb25zdCBbcGF0aCwgcmVzdF0gPSByZWYuc3BsaXQoXCIjXCIpO1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldFJlc291cmNlQ29uZmlnKHBhdGgpO1xuICAgICAgICBpZiAocmVzdC5zdGFydHNXaXRoKFwiYXR0cnMuXCIpKSB7XG4gICAgICAgICAgaWYgKCFjb25maWcuYXR0cnMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRyaWVkIHRvIHJlc29sdmUgdG9rZW4gXCIke29ian1cIiBidXQgcmVzb3VyY2UgJHtwYXRofSBoYXMgbm8gYXR0cmlidXRlcyBkZWZpbmVkIHlldC4gSXMgaXQgcG9zc2libGUgJHtzb3VyY2V9IG5lZWRzIHRvIHRha2UgYSBkZXBlbmRlbmN5IG9uICR7cGF0aH0/YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvbmZpZy5hdHRyc1tyZXN0LnNsaWNlKDYpXTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN0LnN0YXJ0c1dpdGgoXCJwcm9wcy5cIikpIHtcbiAgICAgICAgICBpZiAoIWNvbmZpZy5wcm9wcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVHJpZWQgdG8gcmVzb2x2ZSB0b2tlbiBcIiR7b2JqfVwiIGJ1dCByZXNvdXJjZSAke3BhdGh9IGhhcyBubyBwcm9wcyBkZWZpbmVkLmBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjb25maWcucHJvcHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHRva2VuIHJlZmVyZW5jZTogXCIke3JlZn1cImApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHJldHVybiBvYmoubWFwKCh4KSA9PiB0aGlzLnJlc29sdmVUb2tlbnMoeCwgc291cmNlKSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNvbnN0IHJldDogYW55ID0ge307XG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmopKSB7XG4gICAgICAgIHJldFtrZXldID0gdGhpcy5yZXNvbHZlVG9rZW5zKHZhbHVlLCBzb3VyY2UpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVG9rZW4odmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gdmFsdWUuc3RhcnRzV2l0aChcIiR7XCIpICYmIHZhbHVlLmVuZHNXaXRoKFwifVwiKTtcbn1cblxuLyoqXG4gKiBBIGZhY3RvcnkgdGhhdCBjYW4gdHVybiByZXNvdXJjZSBkZXNjcmlwdGlvbnMgaW50byAoaW5mbGlnaHQpIHJlc291cmNlIHNpbXVsYXRpb25zLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTaW11bGF0b3JGYWN0b3J5IHtcbiAgLyoqXG4gICAqIFJlc29sdmUgdGhlIHBhcmFtZXRlcnMgbmVlZGVkIGZvciBjcmVhdGluZyBhIHNwZWNpZmljIHJlc291cmNlIHNpbXVsYXRpb24uXG4gICAqL1xuICByZXNvbHZlKFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBwcm9wczogYW55LFxuICAgIGNvbnRleHQ6IElTaW11bGF0b3JDb250ZXh0XG4gICk6IElTaW11bGF0b3JSZXNvdXJjZUluc3RhbmNlO1xufVxuXG5jbGFzcyBIYW5kbGVNYW5hZ2VyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBoYW5kbGVzOiBNYXA8c3RyaW5nLCBJU2ltdWxhdG9yUmVzb3VyY2VJbnN0YW5jZT47XG4gIHByaXZhdGUgbmV4dEhhbmRsZTogbnVtYmVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhhbmRsZXMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5uZXh0SGFuZGxlID0gMDtcbiAgfVxuXG4gIHB1YmxpYyBhbGxvY2F0ZShyZXNvdXJjZTogSVNpbXVsYXRvclJlc291cmNlSW5zdGFuY2UpOiBzdHJpbmcge1xuICAgIGNvbnN0IGhhbmRsZSA9IGBzaW0tJHt0aGlzLm5leHRIYW5kbGUrK31gO1xuICAgIHRoaXMuaGFuZGxlcy5zZXQoaGFuZGxlLCByZXNvdXJjZSk7XG4gICAgcmV0dXJuIGhhbmRsZTtcbiAgfVxuXG4gIHB1YmxpYyBmaW5kKGhhbmRsZTogc3RyaW5nKTogSVNpbXVsYXRvclJlc291cmNlSW5zdGFuY2Uge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5oYW5kbGVzLmdldChoYW5kbGUpO1xuICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gcmVzb3VyY2UgZm91bmQgd2l0aCBoYW5kbGUgXCIke2hhbmRsZX1cIi5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgcHVibGljIGRlYWxsb2NhdGUoaGFuZGxlOiBzdHJpbmcpOiBJU2ltdWxhdG9yUmVzb3VyY2VJbnN0YW5jZSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmhhbmRsZXMuZ2V0KGhhbmRsZSk7XG4gICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyByZXNvdXJjZSBmb3VuZCB3aXRoIGhhbmRsZSBcIiR7aGFuZGxlfVwiLmApO1xuICAgIH1cbiAgICB0aGlzLmhhbmRsZXMuZGVsZXRlKGhhbmRsZSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlcy5jbGVhcigpO1xuICAgIHRoaXMubmV4dEhhbmRsZSA9IDA7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHJlc3VsdCBvZiBhIHNpbmdsZSB0ZXN0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xuICAvKipcbiAgICogVGhlIHBhdGggdG8gdGhlIHRlc3QgZnVuY3Rpb24uXG4gICAqL1xuICByZWFkb25seSBwYXRoOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHRlc3QgcGFzc2VkLlxuICAgKi9cbiAgcmVhZG9ubHkgcGFzczogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIGVycm9yIG1lc3NhZ2UgaWYgdGhlIHRlc3QgZmFpbGVkLlxuICAgKi9cbiAgcmVhZG9ubHkgZXJyb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgdHJhY2VzIGVtaXR0ZWQgZHVyaW5nIHRoZSB0ZXN0LlxuICAgKi9cbiAgcmVhZG9ubHkgdHJhY2VzOiBUcmFjZVtdO1xufVxuIl19

/***/ }),

/***/ 95:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Testing = void 0;
const core_1 = __nccwpck_require__(6526);
/**
 * Test utilities.
 */
class Testing {
    /**
     * Make an `IFunctionHandler`, `IQueueOnMessageHandler` or any other handler
     * on the fly. The resource will have a single method named "handle".
     *
     * The JavaScript code passed to the handler must be in the form of
     * `async handle(event) { ... }`, and all references to resources must be
     * made through `this.<resource>`.
     *
     * @param scope The scope to create the handler in.
     * @param id The ID of the handler.
     * @param code The code of the handler.
     * @param bindings The bindings of the handler.
     */
    static makeHandler(scope, id, code, bindings = {}) {
        return new core_1.Inflight(scope, id, {
            code: core_1.NodeJsCode.fromInline(code),
            bindings,
        });
    }
}
exports.Testing = Testing;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0aW5nL3Rlc3RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esa0NBQTRFO0FBRTVFOztHQUVHO0FBQ0gsTUFBYSxPQUFPO0lBQ2xCOzs7Ozs7Ozs7Ozs7T0FZRztJQUNJLE1BQU0sQ0FBQyxXQUFXLENBQ3ZCLEtBQWlCLEVBQ2pCLEVBQVUsRUFDVixJQUFZLEVBQ1osV0FBNkIsRUFBRTtRQUUvQixPQUFPLElBQUksZUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDN0IsSUFBSSxFQUFFLGlCQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNqQyxRQUFRO1NBQ1QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBekJELDBCQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgSW5mbGlnaHQsIEluZmxpZ2h0QmluZGluZ3MsIElSZXNvdXJjZSwgTm9kZUpzQ29kZSB9IGZyb20gXCIuLi9jb3JlXCI7XG5cbi8qKlxuICogVGVzdCB1dGlsaXRpZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXN0aW5nIHtcbiAgLyoqXG4gICAqIE1ha2UgYW4gYElGdW5jdGlvbkhhbmRsZXJgLCBgSVF1ZXVlT25NZXNzYWdlSGFuZGxlcmAgb3IgYW55IG90aGVyIGhhbmRsZXJcbiAgICogb24gdGhlIGZseS4gVGhlIHJlc291cmNlIHdpbGwgaGF2ZSBhIHNpbmdsZSBtZXRob2QgbmFtZWQgXCJoYW5kbGVcIi5cbiAgICpcbiAgICogVGhlIEphdmFTY3JpcHQgY29kZSBwYXNzZWQgdG8gdGhlIGhhbmRsZXIgbXVzdCBiZSBpbiB0aGUgZm9ybSBvZlxuICAgKiBgYXN5bmMgaGFuZGxlKGV2ZW50KSB7IC4uLiB9YCwgYW5kIGFsbCByZWZlcmVuY2VzIHRvIHJlc291cmNlcyBtdXN0IGJlXG4gICAqIG1hZGUgdGhyb3VnaCBgdGhpcy48cmVzb3VyY2U+YC5cbiAgICpcbiAgICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSB0byBjcmVhdGUgdGhlIGhhbmRsZXIgaW4uXG4gICAqIEBwYXJhbSBpZCBUaGUgSUQgb2YgdGhlIGhhbmRsZXIuXG4gICAqIEBwYXJhbSBjb2RlIFRoZSBjb2RlIG9mIHRoZSBoYW5kbGVyLlxuICAgKiBAcGFyYW0gYmluZGluZ3MgVGhlIGJpbmRpbmdzIG9mIHRoZSBoYW5kbGVyLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBtYWtlSGFuZGxlcihcbiAgICBzY29wZTogSUNvbnN0cnVjdCxcbiAgICBpZDogc3RyaW5nLFxuICAgIGNvZGU6IHN0cmluZyxcbiAgICBiaW5kaW5nczogSW5mbGlnaHRCaW5kaW5ncyA9IHt9XG4gICk6IElSZXNvdXJjZSB7XG4gICAgcmV0dXJuIG5ldyBJbmZsaWdodChzY29wZSwgaWQsIHtcbiAgICAgIGNvZGU6IE5vZGVKc0NvZGUuZnJvbUlubGluZShjb2RlKSxcbiAgICAgIGJpbmRpbmdzLFxuICAgIH0pO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ 384:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tree = void 0;
/**
 * Tree metadata associated with a Wing application. Provides information
 * about resources and their relationships.
 */
class Tree {
    constructor(data) {
        this.data = data;
    }
    /**
     * Returns the raw tree data.
     */
    rawData() {
        return this.data;
    }
}
exports.Tree = Tree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0aW5nL3RyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7OztHQUdHO0FBQ0gsTUFBYSxJQUFJO0lBQ2YsWUFBMkIsSUFBbUI7UUFBbkIsU0FBSSxHQUFKLElBQUksQ0FBZTtJQUFHLENBQUM7SUFFbEQ7O09BRUc7SUFDSSxPQUFPO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQVRELG9CQVNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0VHJlZSB9IGZyb20gXCIuLi9jb3JlXCI7XG5cbi8qKlxuICogVHJlZSBtZXRhZGF0YSBhc3NvY2lhdGVkIHdpdGggYSBXaW5nIGFwcGxpY2F0aW9uLiBQcm92aWRlcyBpbmZvcm1hdGlvblxuICogYWJvdXQgcmVzb3VyY2VzIGFuZCB0aGVpciByZWxhdGlvbnNoaXBzLlxuICovXG5leHBvcnQgY2xhc3MgVHJlZSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IENvbnN0cnVjdFRyZWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJhdyB0cmVlIGRhdGEuXG4gICAqL1xuICBwdWJsaWMgcmF3RGF0YSgpOiBDb25zdHJ1Y3RUcmVlIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ 5353:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sanitizeCode = exports.sanitizeCodeText = exports.normalPath = exports.directorySnapshot = exports.sanitizeValue = exports.readJsonSync = exports.mkdtemp = exports.log = exports.SIMULATOR_FILE_PATH = void 0;
const fs_1 = __nccwpck_require__(7147);
const os_1 = __nccwpck_require__(2037);
const path_1 = __nccwpck_require__(1017);
const debug_1 = __nccwpck_require__(4713);
const tar = __importStar(__nccwpck_require__(3002));
/**
 * Path of the simulator configuration file in every .wsim tarball.
 */
exports.SIMULATOR_FILE_PATH = "simulator.json";
exports.log = (0, debug_1.debug)("wing:sdk");
function mkdtemp() {
    return (0, fs_1.mkdtempSync)((0, path_1.join)((0, os_1.tmpdir)(), "wingsdk."));
}
exports.mkdtemp = mkdtemp;
function readJsonSync(file) {
    return JSON.parse((0, fs_1.readFileSync)(file, "utf-8"));
}
exports.readJsonSync = readJsonSync;
function sanitizeValue(obj, options = {}) {
    if (obj == null) {
        return undefined;
    }
    if (typeof obj !== "object") {
        return obj;
    }
    if (Array.isArray(obj)) {
        if (options.filterEmptyArrays && obj.length === 0) {
            return undefined;
        }
        return obj.map((x) => sanitizeValue(x, options));
    }
    if (obj.constructor.name !== "Object") {
        throw new Error(`can't render non-simple object of type '${obj.constructor.name}'`);
    }
    const newObj = {};
    const sortKeys = options.sortKeys ?? true;
    const keys = sortKeys ? Object.keys(obj).sort() : Object.keys(obj);
    for (const key of keys) {
        const value = obj[key];
        const newValue = sanitizeValue(value, options);
        if (newValue != null) {
            newObj[key] = newValue;
        }
    }
    if (options.filterEmptyObjects && Object.keys(newObj).length === 0) {
        return undefined;
    }
    return newObj;
}
exports.sanitizeValue = sanitizeValue;
function directorySnapshot(initialRoot) {
    const snapshot = {};
    const visit = (root, subdir, prefix = "") => {
        const files = (0, fs_1.readdirSync)((0, path_1.join)(root, subdir));
        for (const f of files) {
            const relpath = (0, path_1.join)(subdir, f);
            const abspath = (0, path_1.join)(root, relpath);
            const key = prefix + relpath;
            if ((0, fs_1.statSync)(abspath).isDirectory()) {
                visit(root, relpath);
            }
            else {
                switch ((0, path_1.extname)(f)) {
                    case ".json":
                        const data = (0, fs_1.readFileSync)(abspath, "utf-8");
                        snapshot[key] = JSON.parse(data);
                        break;
                    case ".js":
                        const code = (0, fs_1.readFileSync)(abspath, "utf-8");
                        snapshot[key] = sanitizeCodeText(code);
                        break;
                    case ".wsim":
                        const workdir = mkdtemp();
                        tar.extract({
                            cwd: workdir,
                            sync: true,
                            file: abspath,
                        });
                        visit(workdir, ".", key + "/");
                        break;
                    default:
                        snapshot[key] = (0, fs_1.readFileSync)(abspath, "utf-8");
                }
            }
        }
    };
    visit(initialRoot, ".");
    return snapshot;
}
exports.directorySnapshot = directorySnapshot;
/**
 * Normalize windows paths to be posix-like.
 */
function normalPath(path) {
    if (process.platform === "win32") {
        return (path
            // force posix path separator
            .replace(/\\+/g, "/"));
    }
    else {
        return path;
    }
}
exports.normalPath = normalPath;
/**
 * Sanitize the text of a code bundle to remove path references that are system-specific.
 */
function sanitizeCodeText(code) {
    function removeAbsolutePaths(text) {
        const regex = /".+\/libs\/wingsdk\/(.+)"/g;
        // replace first group with static text
        return text.replace(regex, '"[REDACTED]/wingsdk/$1"');
    }
    return removeAbsolutePaths(code);
}
exports.sanitizeCodeText = sanitizeCodeText;
function sanitizeCode(code) {
    return sanitizeCodeText(code.text);
}
exports.sanitizeCode = sanitizeCode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkJBQXNFO0FBQ3RFLDJCQUE0QjtBQUM1QiwrQkFBcUM7QUFDckMsaUNBQThCO0FBQzlCLHlDQUEyQjtBQUczQjs7R0FFRztBQUNVLFFBQUEsbUJBQW1CLEdBQUcsZ0JBQWdCLENBQUM7QUFFdkMsUUFBQSxHQUFHLEdBQUcsSUFBQSxhQUFLLEVBQUMsVUFBVSxDQUFDLENBQUM7QUFFckMsU0FBZ0IsT0FBTztJQUNyQixPQUFPLElBQUEsZ0JBQVcsRUFBQyxJQUFBLFdBQUksRUFBQyxJQUFBLFdBQU0sR0FBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUZELDBCQUVDO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLElBQVk7SUFDdkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUEsaUJBQVksRUFBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRkQsb0NBRUM7QUFzQkQsU0FBZ0IsYUFBYSxDQUFDLEdBQVEsRUFBRSxVQUEyQixFQUFFO0lBQ25FLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtRQUNmLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBRUQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFDM0IsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN0QixJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNqRCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUVELE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsRUFB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QUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQzt3QkFDL0IsTUFBTTtvQkFFUjt3QkFDRSxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBQSxpQkFBWSxFQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDbEQ7YUFDRjtTQUNGO0lBQ0gsQ0FBQyxDQUFDO0lBRUYsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUV4QixPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBN0NELDhDQTZDQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFDLElBQVk7SUFDckMsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtRQUNoQyxPQUFPLENBQ0wsSUFBSTtZQUNGLDZCQUE2QjthQUM1QixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUN4QixDQUFDO0tBQ0g7U0FBTTtRQUNMLE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDO0FBVkQsZ0NBVUM7QUFFRDs7R0FFRztBQUNILFNBQWdCLGdCQUFnQixDQUFDLElBQVk7SUFDM0MsU0FBUyxtQkFBbUIsQ0FBQyxJQUFZO1FBQ3ZDLE1BQU0sS0FBSyxHQUFHLDRCQUE0QixDQUFDO1FBRTNDLHVDQUF1QztRQUN2QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLHlCQUF5QixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELE9BQU8sbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQVRELDRDQVNDO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLElBQVU7SUFDckMsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUZELG9DQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWtkdGVtcFN5bmMsIHJlYWRkaXJTeW5jLCByZWFkRmlsZVN5bmMsIHN0YXRTeW5jIH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgeyB0bXBkaXIgfSBmcm9tIFwib3NcIjtcbmltcG9ydCB7IGV4dG5hbWUsIGpvaW4gfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tIFwiZGVidWdcIjtcbmltcG9ydCAqIGFzIHRhciBmcm9tIFwidGFyXCI7XG5pbXBvcnQgeyBDb2RlIH0gZnJvbSBcIi4vY29yZVwiO1xuXG4vKipcbiAqIFBhdGggb2YgdGhlIHNpbXVsYXRvciBjb25maWd1cmF0aW9uIGZpbGUgaW4gZXZlcnkgLndzaW0gdGFyYmFsbC5cbiAqL1xuZXhwb3J0IGNvbnN0IFNJTVVMQVRPUl9GSUxFX1BBVEggPSBcInNpbXVsYXRvci5qc29uXCI7XG5cbmV4cG9ydCBjb25zdCBsb2cgPSBkZWJ1ZyhcIndpbmc6c2RrXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gbWtkdGVtcCgpIHtcbiAgcmV0dXJuIG1rZHRlbXBTeW5jKGpvaW4odG1wZGlyKCksIFwid2luZ3Nkay5cIikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEpzb25TeW5jKGZpbGU6IHN0cmluZykge1xuICByZXR1cm4gSlNPTi5wYXJzZShyZWFkRmlsZVN5bmMoZmlsZSwgXCJ1dGYtOFwiKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2FuaXRpemVPcHRpb25zIHtcbiAgLyoqXG4gICAqIERvIG5vdCBpbmNsdWRlIGVtcHR5IG9iamVjdHMgKG5vIGtleXMpLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgcmVhZG9ubHkgZmlsdGVyRW1wdHlPYmplY3RzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRG8gbm90IGluY2x1ZGUgYXJyYXlzIHdpdGggbm8gaXRlbXMuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICByZWFkb25seSBmaWx0ZXJFbXB0eUFycmF5cz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNvcnQgZGljdGlvbmFyeSBrZXlzLlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICByZWFkb25seSBzb3J0S2V5cz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZVZhbHVlKG9iajogYW55LCBvcHRpb25zOiBTYW5pdGl6ZU9wdGlvbnMgPSB7fSk6IGFueSB7XG4gIGlmIChvYmogPT0gbnVsbCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgaWYgKG9wdGlvbnMuZmlsdGVyRW1wdHlBcnJheXMgJiYgb2JqLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqLm1hcCgoeCkgPT4gc2FuaXRpemVWYWx1ZSh4LCBvcHRpb25zKSk7XG4gIH1cblxuICBpZiAob2JqLmNvbnN0cnVjdG9yLm5hbWUgIT09IFwiT2JqZWN0XCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgY2FuJ3QgcmVuZGVyIG5vbi1zaW1wbGUgb2JqZWN0IG9mIHR5cGUgJyR7b2JqLmNvbnN0cnVjdG9yLm5hbWV9J2BcbiAgICApO1xuICB9XG5cbiAgY29uc3QgbmV3T2JqOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgY29uc3Qgc29ydEtleXMgPSBvcHRpb25zLnNvcnRLZXlzID8/IHRydWU7XG4gIGNvbnN0IGtleXMgPSBzb3J0S2V5cyA/IE9iamVjdC5rZXlzKG9iaikuc29ydCgpIDogT2JqZWN0LmtleXMob2JqKTtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gICAgY29uc3QgbmV3VmFsdWUgPSBzYW5pdGl6ZVZhbHVlKHZhbHVlLCBvcHRpb25zKTtcbiAgICBpZiAobmV3VmFsdWUgIT0gbnVsbCkge1xuICAgICAgbmV3T2JqW2tleV0gPSBuZXdWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAob3B0aW9ucy5maWx0ZXJFbXB0eU9iamVjdHMgJiYgT2JqZWN0LmtleXMobmV3T2JqKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdG9yeVNuYXBzaG90KGluaXRpYWxSb290OiBzdHJpbmcpIHtcbiAgY29uc3Qgc25hcHNob3Q6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblxuICBjb25zdCB2aXNpdCA9IChyb290OiBzdHJpbmcsIHN1YmRpcjogc3RyaW5nLCBwcmVmaXggPSBcIlwiKSA9PiB7XG4gICAgY29uc3QgZmlsZXMgPSByZWFkZGlyU3luYyhqb2luKHJvb3QsIHN1YmRpcikpO1xuICAgIGZvciAoY29uc3QgZiBvZiBmaWxlcykge1xuICAgICAgY29uc3QgcmVscGF0aCA9IGpvaW4oc3ViZGlyLCBmKTtcbiAgICAgIGNvbnN0IGFic3BhdGggPSBqb2luKHJvb3QsIHJlbHBhdGgpO1xuICAgICAgY29uc3Qga2V5ID0gcHJlZml4ICsgcmVscGF0aDtcbiAgICAgIGlmIChzdGF0U3luYyhhYnNwYXRoKS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgIHZpc2l0KHJvb3QsIHJlbHBhdGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpdGNoIChleHRuYW1lKGYpKSB7XG4gICAgICAgICAgY2FzZSBcIi5qc29uXCI6XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVhZEZpbGVTeW5jKGFic3BhdGgsIFwidXRmLThcIik7XG4gICAgICAgICAgICBzbmFwc2hvdFtrZXldID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIi5qc1wiOlxuICAgICAgICAgICAgY29uc3QgY29kZSA9IHJlYWRGaWxlU3luYyhhYnNwYXRoLCBcInV0Zi04XCIpO1xuICAgICAgICAgICAgc25hcHNob3Rba2V5XSA9IHNhbml0aXplQ29kZVRleHQoY29kZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCIud3NpbVwiOlxuICAgICAgICAgICAgY29uc3Qgd29ya2RpciA9IG1rZHRlbXAoKTtcblxuICAgICAgICAgICAgdGFyLmV4dHJhY3Qoe1xuICAgICAgICAgICAgICBjd2Q6IHdvcmtkaXIsXG4gICAgICAgICAgICAgIHN5bmM6IHRydWUsXG4gICAgICAgICAgICAgIGZpbGU6IGFic3BhdGgsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmlzaXQod29ya2RpciwgXCIuXCIsIGtleSArIFwiL1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNuYXBzaG90W2tleV0gPSByZWFkRmlsZVN5bmMoYWJzcGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2aXNpdChpbml0aWFsUm9vdCwgXCIuXCIpO1xuXG4gIHJldHVybiBzbmFwc2hvdDtcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgd2luZG93cyBwYXRocyB0byBiZSBwb3NpeC1saWtlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsUGF0aChwYXRoOiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09IFwid2luMzJcIikge1xuICAgIHJldHVybiAoXG4gICAgICBwYXRoXG4gICAgICAgIC8vIGZvcmNlIHBvc2l4IHBhdGggc2VwYXJhdG9yXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcKy9nLCBcIi9cIilcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwYXRoO1xuICB9XG59XG5cbi8qKlxuICogU2FuaXRpemUgdGhlIHRleHQgb2YgYSBjb2RlIGJ1bmRsZSB0byByZW1vdmUgcGF0aCByZWZlcmVuY2VzIHRoYXQgYXJlIHN5c3RlbS1zcGVjaWZpYy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplQ29kZVRleHQoY29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgZnVuY3Rpb24gcmVtb3ZlQWJzb2x1dGVQYXRocyh0ZXh0OiBzdHJpbmcpIHtcbiAgICBjb25zdCByZWdleCA9IC9cIi4rXFwvbGlic1xcL3dpbmdzZGtcXC8oLispXCIvZztcblxuICAgIC8vIHJlcGxhY2UgZmlyc3QgZ3JvdXAgd2l0aCBzdGF0aWMgdGV4dFxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UocmVnZXgsICdcIltSRURBQ1RFRF0vd2luZ3Nkay8kMVwiJyk7XG4gIH1cblxuICByZXR1cm4gcmVtb3ZlQWJzb2x1dGVQYXRocyhjb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplQ29kZShjb2RlOiBDb2RlKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNhbml0aXplQ29kZVRleHQoY29kZS50ZXh0KTtcbn1cbiJdfQ==

/***/ }),

/***/ 5505:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceNames = exports.CaseConventions = void 0;
var CaseConventions;
(function (CaseConventions) {
    CaseConventions["LOWERCASE"] = "lowercase";
    CaseConventions["UPPERCASE"] = "uppercase";
})(CaseConventions = exports.CaseConventions || (exports.CaseConventions = {}));
class ResourceNames {
    static generateName(resource, props) {
        const sep = props.sep ?? "-";
        const maxLen = props.maxLen;
        if (maxLen && maxLen < 8) {
            throw new Error("maxLen must be at least 8");
        }
        let name = resource.node.id;
        name = applyCaseConversion(name, props.case);
        if (props.prefix) {
            name = `${props.prefix}${name}`;
        }
        let includeHash = props.includeHash ?? true;
        let hash = includeHash ? sep + resource.node.addr.substring(0, 8) : "";
        let suffix = props.suffix ?? "";
        name = name.replace(props.disallowedRegex, sep);
        // TODO: allow customizing where we "trim" the name, e.g.
        // 1. trim from the end
        // 2. trim from the beginning
        // 3. trim from the middle
        if (maxLen) {
            name = name.substring(0, maxLen - hash.length - suffix.length);
        }
        name = `${name}${hash}${suffix}`;
        // apply case conversion again in case the prefix, suffix, or hash is not
        // case-conformant
        name = applyCaseConversion(name, props.case);
        return name;
    }
}
exports.ResourceNames = ResourceNames;
function applyCaseConversion(name, caseConventions) {
    if (caseConventions === CaseConventions.LOWERCASE) {
        return name.toLocaleLowerCase();
    }
    if (caseConventions === CaseConventions.UPPERCASE) {
        return name.toLocaleUpperCase();
    }
    return name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbmFtZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvcmVzb3VyY2UtbmFtZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsSUFBWSxlQUdYO0FBSEQsV0FBWSxlQUFlO0lBQ3pCLDBDQUF1QixDQUFBO0lBQ3ZCLDBDQUF1QixDQUFBO0FBQ3pCLENBQUMsRUFIVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUcxQjtBQXVERCxNQUFhLGFBQWE7SUFDakIsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFtQixFQUFFLEtBQWtCO1FBQ2hFLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDO1FBQzdCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFNUIsSUFBSSxNQUFNLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDOUM7UUFFRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUU1QixJQUFJLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQztTQUNqQztRQUVELElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDO1FBQzVDLElBQUksSUFBSSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN2RSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUVoQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWhELHlEQUF5RDtRQUN6RCx1QkFBdUI7UUFDdkIsNkJBQTZCO1FBQzdCLDBCQUEwQjtRQUMxQixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEU7UUFFRCxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO1FBRWpDLHlFQUF5RTtRQUN6RSxrQkFBa0I7UUFDbEIsSUFBSSxHQUFHLG1CQUFtQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0MsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7QUF2Q0Qsc0NBdUNDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxJQUFZLEVBQUUsZUFBaUM7SUFDMUUsSUFBSSxlQUFlLEtBQUssZUFBZSxDQUFDLFNBQVMsRUFBRTtRQUNqRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQ2pDO0lBQ0QsSUFBSSxlQUFlLEtBQUssZUFBZSxDQUFDLFNBQVMsRUFBRTtRQUNqRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQ2pDO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcblxuZXhwb3J0IGVudW0gQ2FzZUNvbnZlbnRpb25zIHtcbiAgTE9XRVJDQVNFID0gXCJsb3dlcmNhc2VcIixcbiAgVVBQRVJDQVNFID0gXCJ1cHBlcmNhc2VcIixcbn1cblxuLyoqXG4gKiBPcHRpb25zIGZvciBgUmVzb3VyY2VOYW1lcy5nZW5lcmF0ZU5hbWVgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmFtZU9wdGlvbnMge1xuICAvKipcbiAgICogTWF4aW11bSBsZW5ndGggZm9yIHRoZSBnZW5lcmF0ZWQgbmFtZS4gVGhlIGxlbmd0aCBtdXN0IGF0IGxlYXN0IHRoZSBsZW5ndGhcbiAgICogb2YgdGhlIGhhc2ggKDggY2hhcmFjdGVycykuXG4gICAqIEBkZWZhdWx0IC0gbm8gbWF4aW11bSBsZW5ndGhcbiAgICovXG4gIHJlYWRvbmx5IG1heExlbj86IG51bWJlcjtcblxuICAvKipcbiAgICogUmVndWxhciBleHByZXNzaW9uIHRoYXQgaW5kaWNhdGVzIHdoaWNoIGNoYXJhY3RlcnMgYXJlIGludmFsaWQuIEVhY2ggZ3JvdXBcbiAgICogb2YgY2hhcmFjdGVycyB3aWxsIGJlIHJlcGxhY2VkIHdpdGggYHNlcGAuXG4gICAqL1xuICByZWFkb25seSBkaXNhbGxvd2VkUmVnZXg6IFJlZ0V4cDtcblxuICAvKipcbiAgICogV29yZCBicmVha2VyXG4gICAqIEBkZWZhdWx0IFwiLVwiXG4gICAqL1xuICByZWFkb25seSBzZXA/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhlIGdlbmVyYXRlZCBuYW1lIHRvIGFsbCB1cHBlcmNhc2Ugb3IgYWxsIGxvd2VyY2FzZS5cbiAgICogQGRlZmF1bHQgLSBhcHBseSBubyBjYXNlIGNvbnZlcnNpb25cbiAgICovXG4gIHJlYWRvbmx5IGNhc2U/OiBDYXNlQ29udmVudGlvbnM7XG5cbiAgLyoqXG4gICAqIEFwcGx5IGEgcHJlZGVmaW5lZCBwcmVmaXggdG8gdGhlIGdlbmVyYXRlZCBuYW1lXG4gICAqIEBkZWZhdWx0IC0gbm8gcHJlZml4XG4gICAqL1xuICByZWFkb25seSBwcmVmaXg/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFwcGx5IGEgcHJlZGVmaW5lZCBzdWZmaXggdG8gdGhlIGdlbmVyYXRlZCBuYW1lXG4gICAqIEBkZWZhdWx0IC0gbm8gc3VmZml4XG4gICAqL1xuICByZWFkb25seSBzdWZmaXg/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEluY2x1ZGUgYSBoYXNoIG9mIHRoZSByZXNvdXJjZSdzIGFkZHJlc3MgaW4gdGhlIGdlbmVyYXRlZCBuYW1lLlxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBvbmx5IGJlIGRpc2FibGVkIGlmIHRoZSByZXNvdXJjZSdzIG5hbWUgaXMgZ3VhcmFudGVlZCB0byBiZVxuICAgKiBhcHAtdW5pcXVlLCBvciBpZiBzb21lIG90aGVyIHNvdXJjZSBvZiByYW5kb21uZXNzIHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlXG4gICAqIG5hbWUuXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIHJlYWRvbmx5IGluY2x1ZGVIYXNoPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFJlc291cmNlTmFtZXMge1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlTmFtZShyZXNvdXJjZTogQ29uc3RydWN0LCBwcm9wczogTmFtZU9wdGlvbnMpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNlcCA9IHByb3BzLnNlcCA/PyBcIi1cIjtcbiAgICBjb25zdCBtYXhMZW4gPSBwcm9wcy5tYXhMZW47XG5cbiAgICBpZiAobWF4TGVuICYmIG1heExlbiA8IDgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIm1heExlbiBtdXN0IGJlIGF0IGxlYXN0IDhcIik7XG4gICAgfVxuXG4gICAgbGV0IG5hbWUgPSByZXNvdXJjZS5ub2RlLmlkO1xuXG4gICAgbmFtZSA9IGFwcGx5Q2FzZUNvbnZlcnNpb24obmFtZSwgcHJvcHMuY2FzZSk7XG5cbiAgICBpZiAocHJvcHMucHJlZml4KSB7XG4gICAgICBuYW1lID0gYCR7cHJvcHMucHJlZml4fSR7bmFtZX1gO1xuICAgIH1cblxuICAgIGxldCBpbmNsdWRlSGFzaCA9IHByb3BzLmluY2x1ZGVIYXNoID8/IHRydWU7XG4gICAgbGV0IGhhc2ggPSBpbmNsdWRlSGFzaCA/IHNlcCArIHJlc291cmNlLm5vZGUuYWRkci5zdWJzdHJpbmcoMCwgOCkgOiBcIlwiO1xuICAgIGxldCBzdWZmaXggPSBwcm9wcy5zdWZmaXggPz8gXCJcIjtcblxuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UocHJvcHMuZGlzYWxsb3dlZFJlZ2V4LCBzZXApO1xuXG4gICAgLy8gVE9ETzogYWxsb3cgY3VzdG9taXppbmcgd2hlcmUgd2UgXCJ0cmltXCIgdGhlIG5hbWUsIGUuZy5cbiAgICAvLyAxLiB0cmltIGZyb20gdGhlIGVuZFxuICAgIC8vIDIuIHRyaW0gZnJvbSB0aGUgYmVnaW5uaW5nXG4gICAgLy8gMy4gdHJpbSBmcm9tIHRoZSBtaWRkbGVcbiAgICBpZiAobWF4TGVuKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHJpbmcoMCwgbWF4TGVuIC0gaGFzaC5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBuYW1lID0gYCR7bmFtZX0ke2hhc2h9JHtzdWZmaXh9YDtcblxuICAgIC8vIGFwcGx5IGNhc2UgY29udmVyc2lvbiBhZ2FpbiBpbiBjYXNlIHRoZSBwcmVmaXgsIHN1ZmZpeCwgb3IgaGFzaCBpcyBub3RcbiAgICAvLyBjYXNlLWNvbmZvcm1hbnRcbiAgICBuYW1lID0gYXBwbHlDYXNlQ29udmVyc2lvbihuYW1lLCBwcm9wcy5jYXNlKTtcblxuICAgIHJldHVybiBuYW1lO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5Q2FzZUNvbnZlcnNpb24obmFtZTogc3RyaW5nLCBjYXNlQ29udmVudGlvbnM/OiBDYXNlQ29udmVudGlvbnMpIHtcbiAgaWYgKGNhc2VDb252ZW50aW9ucyA9PT0gQ2FzZUNvbnZlbnRpb25zLkxPV0VSQ0FTRSkge1xuICAgIHJldHVybiBuYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gIH1cbiAgaWYgKGNhc2VDb252ZW50aW9ucyA9PT0gQ2FzZUNvbnZlbnRpb25zLlVQUEVSQ0FTRSkge1xuICAgIHJldHVybiBuYW1lLnRvTG9jYWxlVXBwZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIG5hbWU7XG59XG4iXX0=

/***/ }),

/***/ 4048:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const fs = __nccwpck_require__(7147)
const path = __nccwpck_require__(1017)

/* istanbul ignore next */
const LCHOWN = fs.lchown ? 'lchown' : 'chown'
/* istanbul ignore next */
const LCHOWNSYNC = fs.lchownSync ? 'lchownSync' : 'chownSync'

/* istanbul ignore next */
const needEISDIRHandled = fs.lchown &&
  !process.version.match(/v1[1-9]+\./) &&
  !process.version.match(/v10\.[6-9]/)

const lchownSync = (path, uid, gid) => {
  try {
    return fs[LCHOWNSYNC](path, uid, gid)
  } catch (er) {
    if (er.code !== 'ENOENT')
      throw er
  }
}

/* istanbul ignore next */
const chownSync = (path, uid, gid) => {
  try {
    return fs.chownSync(path, uid, gid)
  } catch (er) {
    if (er.code !== 'ENOENT')
      throw er
  }
}

/* istanbul ignore next */
const handleEISDIR =
  needEISDIRHandled ? (path, uid, gid, cb) => er => {
    // Node prior to v10 had a very questionable implementation of
    // fs.lchown, which would always try to call fs.open on a directory
    // Fall back to fs.chown in those cases.
    if (!er || er.code !== 'EISDIR')
      cb(er)
    else
      fs.chown(path, uid, gid, cb)
  }
  : (_, __, ___, cb) => cb

/* istanbul ignore next */
const handleEISDirSync =
  needEISDIRHandled ? (path, uid, gid) => {
    try {
      return lchownSync(path, uid, gid)
    } catch (er) {
      if (er.code !== 'EISDIR')
        throw er
      chownSync(path, uid, gid)
    }
  }
  : (path, uid, gid) => lchownSync(path, uid, gid)

// fs.readdir could only accept an options object as of node v6
const nodeVersion = process.version
let readdir = (path, options, cb) => fs.readdir(path, options, cb)
let readdirSync = (path, options) => fs.readdirSync(path, options)
/* istanbul ignore next */
if (/^v4\./.test(nodeVersion))
  readdir = (path, options, cb) => fs.readdir(path, cb)

const chown = (cpath, uid, gid, cb) => {
  fs[LCHOWN](cpath, uid, gid, handleEISDIR(cpath, uid, gid, er => {
    // Skip ENOENT error
    cb(er && er.code !== 'ENOENT' ? er : null)
  }))
}

const chownrKid = (p, child, uid, gid, cb) => {
  if (typeof child === 'string')
    return fs.lstat(path.resolve(p, child), (er, stats) => {
      // Skip ENOENT error
      if (er)
        return cb(er.code !== 'ENOENT' ? er : null)
      stats.name = child
      chownrKid(p, stats, uid, gid, cb)
    })

  if (child.isDirectory()) {
    chownr(path.resolve(p, child.name), uid, gid, er => {
      if (er)
        return cb(er)
      const cpath = path.resolve(p, child.name)
      chown(cpath, uid, gid, cb)
    })
  } else {
    const cpath = path.resolve(p, child.name)
    chown(cpath, uid, gid, cb)
  }
}


const chownr = (p, uid, gid, cb) => {
  readdir(p, { withFileTypes: true }, (er, children) => {
    // any error other than ENOTDIR or ENOTSUP means it's not readable,
    // or doesn't exist.  give up.
    if (er) {
      if (er.code === 'ENOENT')
        return cb()
      else if (er.code !== 'ENOTDIR' && er.code !== 'ENOTSUP')
        return cb(er)
    }
    if (er || !children.length)
      return chown(p, uid, gid, cb)

    let len = children.length
    let errState = null
    const then = er => {
      if (errState)
        return
      if (er)
        return cb(errState = er)
      if (-- len === 0)
        return chown(p, uid, gid, cb)
    }

    children.forEach(child => chownrKid(p, child, uid, gid, then))
  })
}

const chownrKidSync = (p, child, uid, gid) => {
  if (typeof child === 'string') {
    try {
      const stats = fs.lstatSync(path.resolve(p, child))
      stats.name = child
      child = stats
    } catch (er) {
      if (er.code === 'ENOENT')
        return
      else
        throw er
    }
  }

  if (child.isDirectory())
    chownrSync(path.resolve(p, child.name), uid, gid)

  handleEISDirSync(path.resolve(p, child.name), uid, gid)
}

const chownrSync = (p, uid, gid) => {
  let children
  try {
    children = readdirSync(p, { withFileTypes: true })
  } catch (er) {
    if (er.code === 'ENOENT')
      return
    else if (er.code === 'ENOTDIR' || er.code === 'ENOTSUP')
      return handleEISDirSync(p, uid, gid)
    else
      throw er
  }

  if (children && children.length)
    children.forEach(child => chownrKidSync(p, child, uid, gid))

  return handleEISDirSync(p, uid, gid)
}

module.exports = chownr
chownr.sync = chownrSync


/***/ }),

/***/ 7651:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConstructOrder = exports.Construct = exports.Node = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const dependency_1 = __nccwpck_require__(4338);
const stack_trace_1 = __nccwpck_require__(7697);
const uniqueid_1 = __nccwpck_require__(7009);
const CONSTRUCT_SYM = Symbol.for('constructs.Construct');
/**
 * Represents the construct node in the scope tree.
 */
class Node {
    constructor(host, scope, id) {
        this.host = host;
        this._locked = false; // if this is "true", addChild will fail
        this._children = {};
        this._context = {};
        this._metadata = new Array();
        this._dependencies = new Set();
        this._validations = new Array();
        id = id ?? ''; // if undefined, convert to empty string
        this.id = sanitizeId(id);
        this.scope = scope;
        if (scope && !this.id) {
            throw new Error('Only root constructs may have an empty ID');
        }
        // add to parent scope
        scope?.node.addChild(host, this.id);
    }
    /**
     * Returns the node associated with a construct.
     * @param construct the construct
     *
     * @deprecated use `construct.node` instead
     */
    static of(construct) {
        return construct.node;
    }
    /**
     * The full, absolute path of this construct in the tree.
     *
     * Components are separated by '/'.
     */
    get path() {
        const components = this.scopes.filter(c => c.node.id).map(c => c.node.id);
        return components.join(Node.PATH_SEP);
    }
    /**
     * Returns an opaque tree-unique address for this construct.
     *
     * Addresses are 42 characters hexadecimal strings. They begin with "c8"
     * followed by 40 lowercase hexadecimal characters (0-9a-f).
     *
     * Addresses are calculated using a SHA-1 of the components of the construct
     * path.
     *
     * To enable refactorings of construct trees, constructs with the ID `Default`
     * will be excluded from the calculation. In those cases constructs in the
     * same tree may have the same addreess.
     *
     * @example c83a2846e506bcc5f10682b564084bca2d275709ee
     */
    get addr() {
        if (!this._addr) {
            this._addr = uniqueid_1.addressOf(this.scopes.map(c => c.node.id));
        }
        return this._addr;
    }
    /**
     * Return a direct child by id, or undefined
     *
     * @param id Identifier of direct child
     * @returns the child if found, or undefined
     */
    tryFindChild(id) {
        return this._children[sanitizeId(id)];
    }
    /**
     * Return a direct child by id
     *
     * Throws an error if the child is not found.
     *
     * @param id Identifier of direct child
     * @returns Child with the given id.
     */
    findChild(id) {
        const ret = this.tryFindChild(id);
        if (!ret) {
            throw new Error(`No child with id: '${id}'`);
        }
        return ret;
    }
    /**
     * Returns the child construct that has the id `Default` or `Resource"`.
     * This is usually the construct that provides the bulk of the underlying functionality.
     * Useful for modifications of the underlying construct that are not available at the higher levels.
     *
     * @throws if there is more than one child
     * @returns a construct or undefined if there is no default child
     */
    get defaultChild() {
        if (this._defaultChild !== undefined) {
            return this._defaultChild;
        }
        const resourceChild = this.tryFindChild('Resource');
        const defaultChild = this.tryFindChild('Default');
        if (resourceChild && defaultChild) {
            throw new Error(`Cannot determine default child for ${this.path}. There is both a child with id "Resource" and id "Default"`);
        }
        return defaultChild || resourceChild;
    }
    /**
     * Override the defaultChild property.
     *
     * This should only be used in the cases where the correct
     * default child is not named 'Resource' or 'Default' as it
     * should be.
     *
     * If you set this to undefined, the default behavior of finding
     * the child named 'Resource' or 'Default' will be used.
     */
    set defaultChild(value) {
        this._defaultChild = value;
    }
    /**
     * All direct children of this construct.
     */
    get children() {
        return Object.values(this._children);
    }
    /**
     * Return this construct and all of its children in the given order
     */
    findAll(order = ConstructOrder.PREORDER) {
        const ret = new Array();
        visit(this.host);
        return ret;
        function visit(c) {
            if (order === ConstructOrder.PREORDER) {
                ret.push(c);
            }
            for (const child of c.node.children) {
                visit(child);
            }
            if (order === ConstructOrder.POSTORDER) {
                ret.push(c);
            }
        }
    }
    /**
     * This can be used to set contextual values.
     * Context must be set before any children are added, since children may consult context info during construction.
     * If the key already exists, it will be overridden.
     * @param key The context key
     * @param value The context value
     */
    setContext(key, value) {
        if (this.children.length > 0) {
            const names = this.children.map(c => c.node.id);
            throw new Error('Cannot set context after children have been added: ' + names.join(','));
        }
        this._context[key] = value;
    }
    /**
     * Retrieves a value from tree context.
     *
     * Context is usually initialized at the root, but can be overridden at any point in the tree.
     *
     * @param key The context key
     * @returns The context value or `undefined` if there is no context value for thie key.
     */
    tryGetContext(key) {
        const value = this._context[key];
        if (value !== undefined) {
            return value;
        }
        return this.scope && this.scope.node.tryGetContext(key);
    }
    /**
     * An immutable array of metadata objects associated with this construct.
     * This can be used, for example, to implement support for deprecation notices, source mapping, etc.
     */
    get metadata() {
        return [...this._metadata];
    }
    /**
     * Adds a metadata entry to this construct.
     * Entries are arbitrary values and will also include a stack trace to allow tracing back to
     * the code location for when the entry was added. It can be used, for example, to include source
     * mapping in CloudFormation templates to improve diagnostics.
     *
     * @param type a string denoting the type of metadata
     * @param data the value of the metadata (can be a Token). If null/undefined, metadata will not be added.
     * @param options options
     */
    addMetadata(type, data, options = {}) {
        if (data == null) {
            return;
        }
        const shouldTrace = options.stackTrace ?? false;
        const trace = shouldTrace ? stack_trace_1.captureStackTrace(options.traceFromFunction ?? this.addMetadata) : undefined;
        this._metadata.push({ type, data, trace });
    }
    /**
     * All parent scopes of this construct.
     *
     * @returns a list of parent scopes. The last element in the list will always
     * be the current construct and the first element will be the root of the
     * tree.
     */
    get scopes() {
        const ret = new Array();
        let curr = this.host;
        while (curr) {
            ret.unshift(curr);
            curr = curr.node.scope;
        }
        return ret;
    }
    /**
     * Returns the root of the construct tree.
     * @returns The root of the construct tree.
     */
    get root() {
        return this.scopes[0];
    }
    /**
     * Returns true if this construct or the scopes in which it is defined are
     * locked.
     */
    get locked() {
        if (this._locked) {
            return true;
        }
        if (this.scope && this.scope.node.locked) {
            return true;
        }
        return false;
    }
    /**
     * Add an ordering dependency on another construct.
     *
     * An `IDependable`
     */
    addDependency(...deps) {
        for (const d of deps) {
            this._dependencies.add(d);
        }
    }
    /**
     * Return all dependencies registered on this node (non-recursive).
     */
    get dependencies() {
        const result = new Array();
        for (const dep of this._dependencies) {
            for (const root of dependency_1.Dependable.of(dep).dependencyRoots) {
                result.push(root);
            }
        }
        return result;
    }
    /**
     * Remove the child with the given name, if present.
     *
     * @returns Whether a child with the given name was deleted.
     * @experimental
     */
    tryRemoveChild(childName) {
        if (!(childName in this._children)) {
            return false;
        }
        delete this._children[childName];
        return true;
    }
    /**
     * Adds a validation to this construct.
     *
     * When `node.validate()` is called, the `validate()` method will be called on
     * all validations and all errors will be returned.
     *
     * @param validation The validation object
     */
    addValidation(validation) {
        this._validations.push(validation);
    }
    /**
     * Validates this construct.
     *
     * Invokes the `validate()` method on all validations added through
     * `addValidation()`.
     *
     * @returns an array of validation error messages associated with this
     * construct.
     */
    validate() {
        const deprecated = ['validate', 'onValidate', 'synthesize', 'onSynthesize', 'prepare', 'onPrepare'];
        for (const method of deprecated) {
            if (typeof (this.host[method]) === 'function') {
                throw new Error(`the construct "${this.path}" has a "${method}()" method which is no longer supported. Use "construct.node.addValidation()" to add validations to a construct`);
            }
        }
        const errors = new Array();
        for (const v of this._validations) {
            errors.push(...v.validate());
        }
        return errors;
    }
    /**
     * Locks this construct from allowing more children to be added. After this
     * call, no more children can be added to this construct or to any children.
     */
    lock() {
        this._locked = true;
    }
    /**
     * Adds a child construct to this node.
     *
     * @param child The child construct
     * @param childName The type name of the child construct.
     * @returns The resolved path part name of the child
     */
    addChild(child, childName) {
        if (this.locked) {
            // special error if root is locked
            if (!this.path) {
                throw new Error('Cannot add children during synthesis');
            }
            throw new Error(`Cannot add children to "${this.path}" during synthesis`);
        }
        if (childName in this._children) {
            const name = this.id ?? '';
            const typeName = this.host.constructor.name;
            throw new Error(`There is already a Construct with name '${childName}' in ${typeName}${name.length > 0 ? ' [' + name + ']' : ''}`);
        }
        if (!childName && this.id) {
            throw new Error(`cannot add a nameless construct to the named scope: ${this.path}`);
        }
        this._children[childName] = child;
        if (Object.keys(this._children).length > 1 && Object.keys(this._children).filter(x => !x).length > 0) {
            throw new Error('only a single construct is allowed in a scope if it has an empty name');
        }
    }
}
exports.Node = Node;
_a = JSII_RTTI_SYMBOL_1;
Node[_a] = { fqn: "constructs.Node", version: "10.1.245" };
/**
 * Separator used to delimit construct path components.
 */
Node.PATH_SEP = '/';
/**
 * Represents the building block of the construct graph.
 *
 * All constructs besides the root construct must be created within the scope of
 * another construct.
 */
class Construct {
    /**
     * Creates a new construct node.
     *
     * @param scope The scope in which to define this construct
     * @param id The scoped construct ID. Must be unique amongst siblings. If
     * the ID includes a path separator (`/`), then it will be replaced by double
     * dash `--`.
     */
    constructor(scope, id) {
        this.node = new Node(this, scope, id);
        // implement IDependable privately
        dependency_1.Dependable.implement(this, {
            dependencyRoots: [this],
        });
    }
    /**
     * Checks if `x` is a construct.
     *
     * Use this method instead of `instanceof` to properly detect `Construct`
     * instances, even when the construct library is symlinked.
     *
     * Explanation: in JavaScript, multiple copies of the `constructs` library on
     * disk are seen as independent, completely different libraries. As a
     * consequence, the class `Construct` in each copy of the `constructs` library
     * is seen as a different class, and an instance of one class will not test as
     * `instanceof` the other class. `npm install` will not create installations
     * like this, but users may manually symlink construct libraries together or
     * use a monorepo tool: in those cases, multiple copies of the `constructs`
     * library can be accidentally installed, and `instanceof` will behave
     * unpredictably. It is safest to avoid using `instanceof`, and using
     * this type-testing method instead.
     *
     * @returns true if `x` is an object created from a class which extends `Construct`.
     * @param x Any object
     */
    static isConstruct(x) {
        return x && typeof x === 'object' && x[CONSTRUCT_SYM];
    }
    /**
     * Returns a string representation of this construct.
     */
    toString() {
        return this.node.path || '<root>';
    }
}
exports.Construct = Construct;
_b = JSII_RTTI_SYMBOL_1;
Construct[_b] = { fqn: "constructs.Construct", version: "10.1.245" };
/**
 * In what order to return constructs
 */
var ConstructOrder;
(function (ConstructOrder) {
    /**
     * Depth-first, pre-order
     */
    ConstructOrder[ConstructOrder["PREORDER"] = 0] = "PREORDER";
    /**
     * Depth-first, post-order (leaf nodes first)
     */
    ConstructOrder[ConstructOrder["POSTORDER"] = 1] = "POSTORDER";
})(ConstructOrder = exports.ConstructOrder || (exports.ConstructOrder = {}));
const PATH_SEP_REGEX = new RegExp(`${Node.PATH_SEP}`, 'g');
/**
 * Return a sanitized version of an arbitrary string, so it can be used as an ID
 */
function sanitizeId(id) {
    // Escape path seps as double dashes
    return id.replace(PATH_SEP_REGEX, '--');
}
// Mark all instances of 'Construct'
Object.defineProperty(Construct.prototype, CONSTRUCT_SYM, {
    value: true,
    enumerable: false,
    writable: false,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RydWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnN0cnVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZDQUF1RDtBQUV2RCx1REFBMEQ7QUFDMUQsaURBQStDO0FBRS9DLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQVl6RDs7R0FFRztBQUNILE1BQWEsSUFBSTtJQXVDZixZQUFvQyxJQUFlLEVBQUUsS0FBaUIsRUFBRSxFQUFVO1FBQTlDLFNBQUksR0FBSixJQUFJLENBQVc7UUFUM0MsWUFBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLHdDQUF3QztRQUNoRCxjQUFTLEdBQWlDLEVBQUcsQ0FBQztRQUM5QyxhQUFRLEdBQTJCLEVBQUcsQ0FBQztRQUN2QyxjQUFTLEdBQUcsSUFBSSxLQUFLLEVBQWlCLENBQUM7UUFDdkMsa0JBQWEsR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFDO1FBRXZDLGlCQUFZLEdBQUcsSUFBSSxLQUFLLEVBQWUsQ0FBQztRQUl2RCxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdDQUF3QztRQUV2RCxJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsc0JBQXNCO1FBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQTdDRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBcUI7UUFDcEMsT0FBTyxTQUFTLENBQUMsSUFBSSxD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QUE7SUFFUjs7T0FFRztJQUNILDZEQUFTLENBQUE7QUFDWCxDQUFDLEVBVlcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFVekI7QUFFRCxNQUFNLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUUzRDs7R0FFRztBQUNILFNBQVMsVUFBVSxDQUFDLEVBQVU7SUFDNUIsb0NBQW9DO0lBQ3BDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQXNCRCxvQ0FBb0M7QUFDcEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRTtJQUN4RCxLQUFLLEVBQUUsSUFBSTtJQUNYLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0NBQ2hCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlcGVuZGFibGUsIElEZXBlbmRhYmxlIH0gZnJvbSAnLi9kZXBlbmRlbmN5JztcbmltcG9ydCB7IE1ldGFkYXRhRW50cnkgfSBmcm9tICcuL21ldGFkYXRhJztcbmltcG9ydCB7IGNhcHR1cmVTdGFja1RyYWNlIH0gZnJvbSAnLi9wcml2YXRlL3N0YWNrLXRyYWNlJztcbmltcG9ydCB7IGFkZHJlc3NPZiB9IGZyb20gJy4vcHJpdmF0ZS91bmlxdWVpZCc7XG5cbmNvbnN0IENPTlNUUlVDVF9TWU0gPSBTeW1ib2wuZm9yKCdjb25zdHJ1Y3RzLkNvbnN0cnVjdCcpO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBjb25zdHJ1Y3QuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnN0cnVjdCBleHRlbmRzIElEZXBlbmRhYmxlIHtcbiAgLyoqXG4gICAqIFRoZSB0cmVlIG5vZGUuXG4gICAqL1xuICByZWFkb25seSBub2RlOiBOb2RlO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGNvbnN0cnVjdCBub2RlIGluIHRoZSBzY29wZSB0cmVlLlxuICovXG5leHBvcnQgY2xhc3MgTm9kZSB7XG4gIC8qKlxuICAgKiBTZXBhcmF0b3IgdXNlZCB0byBkZWxpbWl0IGNvbnN0cnVjdCBwYXRoIGNvbXBvbmVudHMuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBBVEhfU0VQID0gJy8nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBub2RlIGFzc29jaWF0ZWQgd2l0aCBhIGNvbnN0cnVjdC5cbiAgICogQHBhcmFtIGNvbnN0cnVjdCB0aGUgY29uc3RydWN0XG4gICAqXG4gICAqIEBkZXByZWNhdGVkIHVzZSBgY29uc3RydWN0Lm5vZGVgIGluc3RlYWRcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgb2YoY29uc3RydWN0OiBJQ29uc3RydWN0KTogTm9kZSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdC5ub2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNjb3BlIGluIHdoaWNoIHRoaXMgY29uc3RydWN0IGlzIGRlZmluZWQuXG4gICAqXG4gICAqIFRoZSB2YWx1ZSBpcyBgdW5kZWZpbmVkYCBhdCB0aGUgcm9vdCBvZiB0aGUgY29uc3RydWN0IHNjb3BlIHRyZWUuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgc2NvcGU/OiBJQ29uc3RydWN0O1xuXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhpcyBjb25zdHJ1Y3Qgd2l0aGluIHRoZSBjdXJyZW50IHNjb3BlLlxuICAgKlxuICAgKiBUaGlzIGlzIGEgYSBzY29wZS11bmlxdWUgaWQuIFRvIG9idGFpbiBhbiBhcHAtdW5pcXVlIGlkIGZvciB0aGlzIGNvbnN0cnVjdCwgdXNlIGBhZGRyYC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2xvY2tlZCA9IGZhbHNlOyAvLyBpZiB0aGlzIGlzIFwidHJ1ZVwiLCBhZGRDaGlsZCB3aWxsIGZhaWxcbiAgcHJpdmF0ZSByZWFkb25seSBfY2hpbGRyZW46IHsgW2lkOiBzdHJpbmddOiBJQ29uc3RydWN0IH0gPSB7IH07XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NvbnRleHQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7IH07XG4gIHByaXZhdGUgcmVhZG9ubHkgX21ldGFkYXRhID0gbmV3IEFycmF5PE1ldGFkYXRhRW50cnk+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2RlcGVuZGVuY2llcyA9IG5ldyBTZXQ8SURlcGVuZGFibGU+KCk7XG4gIHByaXZhdGUgX2RlZmF1bHRDaGlsZDogSUNvbnN0cnVjdCB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSByZWFkb25seSBfdmFsaWRhdGlvbnMgPSBuZXcgQXJyYXk8SVZhbGlkYXRpb24+KCk7XG4gIHByaXZhdGUgX2FkZHI/OiBzdHJpbmc7IC8vIGNhY2hlXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaG9zdDogQ29uc3RydWN0LCBzY29wZTogSUNvbnN0cnVjdCwgaWQ6IHN0cmluZykge1xuICAgIGlkID0gaWQgPz8gJyc7IC8vIGlmIHVuZGVmaW5lZCwgY29udmVydCB0byBlbXB0eSBzdHJpbmdcblxuICAgIHRoaXMuaWQgPSBzYW5pdGl6ZUlkKGlkKTtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG5cbiAgICBpZiAoc2NvcGUgJiYgIXRoaXMuaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignT25seSByb290IGNvbnN0cnVjdHMgbWF5IGhhdmUgYW4gZW1wdHkgSUQnKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgdG8gcGFyZW50IHNjb3BlXG4gICAgc2NvcGU/Lm5vZGUuYWRkQ2hpbGQoaG9zdCwgdGhpcy5pZCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGZ1bGwsIGFic29sdXRlIHBhdGggb2YgdGhpcyBjb25zdHJ1Y3QgaW4gdGhlIHRyZWUuXG4gICAqXG4gICAqIENvbXBvbmVudHMgYXJlIHNlcGFyYXRlZCBieSAnLycuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gdGhpcy5zY29wZXMuZmlsdGVyKGMgPT4gYy5ub2RlLmlkKS5tYXAoYyA9PiBjLm5vZGUuaWQpO1xuICAgIHJldHVybiBjb21wb25lbnRzLmpvaW4oTm9kZS5QQVRIX1NFUCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvcGFxdWUgdHJlZS11bmlxdWUgYWRkcmVzcyBmb3IgdGhpcyBjb25zdHJ1Y3QuXG4gICAqXG4gICAqIEFkZHJlc3NlcyBhcmUgNDIgY2hhcmFjdGVycyBoZXhhZGVjaW1hbCBzdHJpbmdzLiBUaGV5IGJlZ2luIHdpdGggXCJjOFwiXG4gICAqIGZvbGxvd2VkIGJ5IDQwIGxvd2VyY2FzZSBoZXhhZGVjaW1hbCBjaGFyYWN0ZXJzICgwLTlhLWYpLlxuICAgKlxuICAgKiBBZGRyZXNzZXMgYXJlIGNhbGN1bGF0ZWQgdXNpbmcgYSBTSEEtMSBvZiB0aGUgY29tcG9uZW50cyBvZiB0aGUgY29uc3RydWN0XG4gICAqIHBhdGguXG4gICAqXG4gICAqIFRvIGVuYWJsZSByZWZhY3RvcmluZ3Mgb2YgY29uc3RydWN0IHRyZWVzLCBjb25zdHJ1Y3RzIHdpdGggdGhlIElEIGBEZWZhdWx0YFxuICAgKiB3aWxsIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIGNhbGN1bGF0aW9uLiBJbiB0aG9zZSBjYXNlcyBjb25zdHJ1Y3RzIGluIHRoZVxuICAgKiBzYW1lIHRyZWUgbWF5IGhhdmUgdGhlIHNhbWUgYWRkcmVlc3MuXG4gICAqXG4gICAqIEBleGFtcGxlIGM4M2EyODQ2ZTUwNmJjYzVmMTA2ODJiNTY0MDg0YmNhMmQyNzU3MDllZVxuICAgKi9cbiAgcHVibGljIGdldCBhZGRyKCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLl9hZGRyKSB7XG4gICAgICB0aGlzLl9hZGRyID0gYWRkcmVzc09mKHRoaXMuc2NvcGVzLm1hcChjID0+IGMubm9kZS5pZCkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9hZGRyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIGRpcmVjdCBjaGlsZCBieSBpZCwgb3IgdW5kZWZpbmVkXG4gICAqXG4gICAqIEBwYXJhbSBpZCBJZGVudGlmaWVyIG9mIGRpcmVjdCBjaGlsZFxuICAgKiBAcmV0dXJucyB0aGUgY2hpbGQgaWYgZm91bmQsIG9yIHVuZGVmaW5lZFxuICAgKi9cbiAgcHVibGljIHRyeUZpbmRDaGlsZChpZDogc3RyaW5nKTogSUNvbnN0cnVjdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuW3Nhbml0aXplSWQoaWQpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBkaXJlY3QgY2hpbGQgYnkgaWRcbiAgICpcbiAgICogVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBjaGlsZCBpcyBub3QgZm91bmQuXG4gICAqXG4gICAqIEBwYXJhbSBpZCBJZGVudGlmaWVyIG9mIGRpcmVjdCBjaGlsZFxuICAgKiBAcmV0dXJucyBDaGlsZCB3aXRoIHRoZSBnaXZlbiBpZC5cbiAgICovXG4gIHB1YmxpYyBmaW5kQ2hpbGQoaWQ6IHN0cmluZyk6IElDb25zdHJ1Y3Qge1xuICAgIGNvbnN0IHJldCA9IHRoaXMudHJ5RmluZENoaWxkKGlkKTtcbiAgICBpZiAoIXJldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBjaGlsZCB3aXRoIGlkOiAnJHtpZH0nYCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2hpbGQgY29uc3RydWN0IHRoYXQgaGFzIHRoZSBpZCBgRGVmYXVsdGAgb3IgYFJlc291cmNlXCJgLlxuICAgKiBUaGlzIGlzIHVzdWFsbHkgdGhlIGNvbnN0cnVjdCB0aGF0IHByb3ZpZGVzIHRoZSBidWxrIG9mIHRoZSB1bmRlcmx5aW5nIGZ1bmN0aW9uYWxpdHkuXG4gICAqIFVzZWZ1bCBmb3IgbW9kaWZpY2F0aW9ucyBvZiB0aGUgdW5kZXJseWluZyBjb25zdHJ1Y3QgdGhhdCBhcmUgbm90IGF2YWlsYWJsZSBhdCB0aGUgaGlnaGVyIGxldmVscy5cbiAgICpcbiAgICogQHRocm93cyBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIGNoaWxkXG4gICAqIEByZXR1cm5zIGEgY29uc3RydWN0IG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBpcyBubyBkZWZhdWx0IGNoaWxkXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRlZmF1bHRDaGlsZCgpOiBJQ29uc3RydWN0IHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5fZGVmYXVsdENoaWxkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Q2hpbGQ7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzb3VyY2VDaGlsZCA9IHRoaXMudHJ5RmluZENoaWxkKCdSZXNvdXJjZScpO1xuICAgIGNvbnN0IGRlZmF1bHRDaGlsZCA9IHRoaXMudHJ5RmluZENoaWxkKCdEZWZhdWx0Jyk7XG4gICAgaWYgKHJlc291cmNlQ2hpbGQgJiYgZGVmYXVsdENoaWxkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBkZXRlcm1pbmUgZGVmYXVsdCBjaGlsZCBmb3IgJHt0aGlzLnBhdGh9LiBUaGVyZSBpcyBib3RoIGEgY2hpbGQgd2l0aCBpZCBcIlJlc291cmNlXCIgYW5kIGlkIFwiRGVmYXVsdFwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRDaGlsZCB8fCByZXNvdXJjZUNoaWxkO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0Q2hpbGQgcHJvcGVydHkuXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbiB0aGUgY2FzZXMgd2hlcmUgdGhlIGNvcnJlY3RcbiAgICogZGVmYXVsdCBjaGlsZCBpcyBub3QgbmFtZWQgJ1Jlc291cmNlJyBvciAnRGVmYXVsdCcgYXMgaXRcbiAgICogc2hvdWxkIGJlLlxuICAgKlxuICAgKiBJZiB5b3Ugc2V0IHRoaXMgdG8gdW5kZWZpbmVkLCB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiBmaW5kaW5nXG4gICAqIHRoZSBjaGlsZCBuYW1lZCAnUmVzb3VyY2UnIG9yICdEZWZhdWx0JyB3aWxsIGJlIHVzZWQuXG4gICAqL1xuICBwdWJsaWMgc2V0IGRlZmF1bHRDaGlsZCh2YWx1ZTogSUNvbnN0cnVjdCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RlZmF1bHRDaGlsZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbCBkaXJlY3QgY2hpbGRyZW4gb2YgdGhpcyBjb25zdHJ1Y3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNoaWxkcmVuKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2NoaWxkcmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhpcyBjb25zdHJ1Y3QgYW5kIGFsbCBvZiBpdHMgY2hpbGRyZW4gaW4gdGhlIGdpdmVuIG9yZGVyXG4gICAqL1xuICBwdWJsaWMgZmluZEFsbChvcmRlcjogQ29uc3RydWN0T3JkZXIgPSBDb25zdHJ1Y3RPcmRlci5QUkVPUkRFUik6IElDb25zdHJ1Y3RbXSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IEFycmF5PElDb25zdHJ1Y3Q+KCk7XG4gICAgdmlzaXQodGhpcy5ob3N0KTtcbiAgICByZXR1cm4gcmV0O1xuXG4gICAgZnVuY3Rpb24gdmlzaXQoYzogSUNvbnN0cnVjdCkge1xuICAgICAgaWYgKG9yZGVyID09PSBDb25zdHJ1Y3RPcmRlci5QUkVPUkRFUikge1xuICAgICAgICByZXQucHVzaChjKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjLm5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgdmlzaXQoY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3JkZXIgPT09IENvbnN0cnVjdE9yZGVyLlBPU1RPUkRFUikge1xuICAgICAgICByZXQucHVzaChjKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBjYW4gYmUgdXNlZCB0byBzZXQgY29udGV4dHVhbCB2YWx1ZXMuXG4gICAqIENvbnRleHQgbXVzdCBiZSBzZXQgYmVmb3JlIGFueSBjaGlsZHJlbiBhcmUgYWRkZWQsIHNpbmNlIGNoaWxkcmVuIG1heSBjb25zdWx0IGNvbnRleHQgaW5mbyBkdXJpbmcgY29uc3RydWN0aW9uLlxuICAgKiBJZiB0aGUga2V5IGFscmVhZHkgZXhpc3RzLCBpdCB3aWxsIGJlIG92ZXJyaWRkZW4uXG4gICAqIEBwYXJhbSBrZXkgVGhlIGNvbnRleHQga2V5XG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgY29udGV4dCB2YWx1ZVxuICAgKi9cbiAgcHVibGljIHNldENvbnRleHQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBuYW1lcyA9IHRoaXMuY2hpbGRyZW4ubWFwKGMgPT4gYy5ub2RlLmlkKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHNldCBjb250ZXh0IGFmdGVyIGNoaWxkcmVuIGhhdmUgYmVlbiBhZGRlZDogJyArIG5hbWVzLmpvaW4oJywnKSk7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRleHRba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhIHZhbHVlIGZyb20gdHJlZSBjb250ZXh0LlxuICAgKlxuICAgKiBDb250ZXh0IGlzIHVzdWFsbHkgaW5pdGlhbGl6ZWQgYXQgdGhlIHJvb3QsIGJ1dCBjYW4gYmUgb3ZlcnJpZGRlbiBhdCBhbnkgcG9pbnQgaW4gdGhlIHRyZWUuXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgVGhlIGNvbnRleHQga2V5XG4gICAqIEByZXR1cm5zIFRoZSBjb250ZXh0IHZhbHVlIG9yIGB1bmRlZmluZWRgIGlmIHRoZXJlIGlzIG5vIGNvbnRleHQgdmFsdWUgZm9yIHRoaWUga2V5LlxuICAgKi9cbiAgcHVibGljIHRyeUdldENvbnRleHQoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fY29udGV4dFtrZXldO1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7IHJldHVybiB2YWx1ZTsgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2NvcGUgJiYgdGhpcy5zY29wZS5ub2RlLnRyeUdldENvbnRleHQoa2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBpbW11dGFibGUgYXJyYXkgb2YgbWV0YWRhdGEgb2JqZWN0cyBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb25zdHJ1Y3QuXG4gICAqIFRoaXMgY2FuIGJlIHVzZWQsIGZvciBleGFtcGxlLCB0byBpbXBsZW1lbnQgc3VwcG9ydCBmb3IgZGVwcmVjYXRpb24gbm90aWNlcywgc291cmNlIG1hcHBpbmcsIGV0Yy5cbiAgICovXG4gIHB1YmxpYyBnZXQgbWV0YWRhdGEoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLl9tZXRhZGF0YV07XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG1ldGFkYXRhIGVudHJ5IHRvIHRoaXMgY29uc3RydWN0LlxuICAgKiBFbnRyaWVzIGFyZSBhcmJpdHJhcnkgdmFsdWVzIGFuZCB3aWxsIGFsc28gaW5jbHVkZSBhIHN0YWNrIHRyYWNlIHRvIGFsbG93IHRyYWNpbmcgYmFjayB0b1xuICAgKiB0aGUgY29kZSBsb2NhdGlvbiBmb3Igd2hlbiB0aGUgZW50cnkgd2FzIGFkZGVkLiBJdCBjYW4gYmUgdXNlZCwgZm9yIGV4YW1wbGUsIHRvIGluY2x1ZGUgc291cmNlXG4gICAqIG1hcHBpbmcgaW4gQ2xvdWRGb3JtYXRpb24gdGVtcGxhdGVzIHRvIGltcHJvdmUgZGlhZ25vc3RpY3MuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIGEgc3RyaW5nIGRlbm90aW5nIHRoZSB0eXBlIG9mIG1ldGFkYXRhXG4gICAqIEBwYXJhbSBkYXRhIHRoZSB2YWx1ZSBvZiB0aGUgbWV0YWRhdGEgKGNhbiBiZSBhIFRva2VuKS4gSWYgbnVsbC91bmRlZmluZWQsIG1ldGFkYXRhIHdpbGwgbm90IGJlIGFkZGVkLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBvcHRpb25zXG4gICAqL1xuICBwdWJsaWMgYWRkTWV0YWRhdGEodHlwZTogc3RyaW5nLCBkYXRhOiBhbnksIG9wdGlvbnM6IE1ldGFkYXRhT3B0aW9ucyA9IHsgfSk6IHZvaWQge1xuICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzaG91bGRUcmFjZSA9IG9wdGlvbnMuc3RhY2tUcmFjZSA/PyBmYWxzZTtcbiAgICBjb25zdCB0cmFjZSA9IHNob3VsZFRyYWNlID8gY2FwdHVyZVN0YWNrVHJhY2Uob3B0aW9ucy50cmFjZUZyb21GdW5jdGlvbiA/PyB0aGlzLmFkZE1ldGFkYXRhKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9tZXRhZGF0YS5wdXNoKHsgdHlwZSwgZGF0YSwgdHJhY2UgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWxsIHBhcmVudCBzY29wZXMgb2YgdGhpcyBjb25zdHJ1Y3QuXG4gICAqXG4gICAqIEByZXR1cm5zIGEgbGlzdCBvZiBwYXJlbnQgc2NvcGVzLiBUaGUgbGFzdCBlbGVtZW50IGluIHRoZSBsaXN0IHdpbGwgYWx3YXlzXG4gICAqIGJlIHRoZSBjdXJyZW50IGNvbnN0cnVjdCBhbmQgdGhlIGZpcnN0IGVsZW1lbnQgd2lsbCBiZSB0aGUgcm9vdCBvZiB0aGVcbiAgICogdHJlZS5cbiAgICovXG4gIHB1YmxpYyBnZXQgc2NvcGVzKCk6IElDb25zdHJ1Y3RbXSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IEFycmF5PElDb25zdHJ1Y3Q+KCk7XG5cbiAgICBsZXQgY3VycjogSUNvbnN0cnVjdCB8IHVuZGVmaW5lZCA9IHRoaXMuaG9zdDtcbiAgICB3aGlsZSAoY3Vycikge1xuICAgICAgcmV0LnVuc2hpZnQoY3Vycik7XG4gICAgICBjdXJyID0gY3Vyci5ub2RlLnNjb3BlO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcm9vdCBvZiB0aGUgY29uc3RydWN0IHRyZWUuXG4gICAqIEByZXR1cm5zIFRoZSByb290IG9mIHRoZSBjb25zdHJ1Y3QgdHJlZS5cbiAgICovXG4gIHB1YmxpYyBnZXQgcm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zY29wZXNbMF07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgY29uc3RydWN0IG9yIHRoZSBzY29wZXMgaW4gd2hpY2ggaXQgaXMgZGVmaW5lZCBhcmVcbiAgICogbG9ja2VkLlxuICAgKi9cbiAgcHVibGljIGdldCBsb2NrZWQoKSB7XG4gICAgaWYgKHRoaXMuX2xvY2tlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2NvcGUgJiYgdGhpcy5zY29wZS5ub2RlLmxvY2tlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBvcmRlcmluZyBkZXBlbmRlbmN5IG9uIGFub3RoZXIgY29uc3RydWN0LlxuICAgKlxuICAgKiBBbiBgSURlcGVuZGFibGVgXG4gICAqL1xuICBwdWJsaWMgYWRkRGVwZW5kZW5jeSguLi5kZXBzOiBJRGVwZW5kYWJsZVtdKSB7XG4gICAgZm9yIChjb25zdCBkIG9mIGRlcHMpIHtcbiAgICAgIHRoaXMuX2RlcGVuZGVuY2llcy5hZGQoZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbGwgZGVwZW5kZW5jaWVzIHJlZ2lzdGVyZWQgb24gdGhpcyBub2RlIChub24tcmVjdXJzaXZlKS5cbiAgICovXG4gIHB1YmxpYyBnZXQgZGVwZW5kZW5jaWVzKCk6IElDb25zdHJ1Y3RbXSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PElDb25zdHJ1Y3Q+KCk7XG4gICAgZm9yIChjb25zdCBkZXAgb2YgdGhpcy5fZGVwZW5kZW5jaWVzKSB7XG4gICAgICBmb3IgKGNvbnN0IHJvb3Qgb2YgRGVwZW5kYWJsZS5vZihkZXApLmRlcGVuZGVuY3lSb290cykge1xuICAgICAgICByZXN1bHQucHVzaChyb290KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY2hpbGQgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgaWYgcHJlc2VudC5cbiAgICpcbiAgICogQHJldHVybnMgV2hldGhlciBhIGNoaWxkIHdpdGggdGhlIGdpdmVuIG5hbWUgd2FzIGRlbGV0ZWQuXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIHB1YmxpYyB0cnlSZW1vdmVDaGlsZChjaGlsZE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghKGNoaWxkTmFtZSBpbiB0aGlzLl9jaGlsZHJlbikpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgZGVsZXRlIHRoaXMuX2NoaWxkcmVuW2NoaWxkTmFtZV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHZhbGlkYXRpb24gdG8gdGhpcyBjb25zdHJ1Y3QuXG4gICAqXG4gICAqIFdoZW4gYG5vZGUudmFsaWRhdGUoKWAgaXMgY2FsbGVkLCB0aGUgYHZhbGlkYXRlKClgIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBvblxuICAgKiBhbGwgdmFsaWRhdGlvbnMgYW5kIGFsbCBlcnJvcnMgd2lsbCBiZSByZXR1cm5lZC5cbiAgICpcbiAgICogQHBhcmFtIHZhbGlkYXRpb24gVGhlIHZhbGlkYXRpb24gb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgYWRkVmFsaWRhdGlvbih2YWxpZGF0aW9uOiBJVmFsaWRhdGlvbikge1xuICAgIHRoaXMuX3ZhbGlkYXRpb25zLnB1c2godmFsaWRhdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIHRoaXMgY29uc3RydWN0LlxuICAgKlxuICAgKiBJbnZva2VzIHRoZSBgdmFsaWRhdGUoKWAgbWV0aG9kIG9uIGFsbCB2YWxpZGF0aW9ucyBhZGRlZCB0aHJvdWdoXG4gICAqIGBhZGRWYWxpZGF0aW9uKClgLlxuICAgKlxuICAgKiBAcmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzIGFzc29jaWF0ZWQgd2l0aCB0aGlzXG4gICAqIGNvbnN0cnVjdC5cbiAgICovXG4gIHB1YmxpYyB2YWxpZGF0ZSgpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZGVwcmVjYXRlZCA9IFsndmFsaWRhdGUnLCAnb25WYWxpZGF0ZScsICdzeW50aGVzaXplJywgJ29uU3ludGhlc2l6ZScsICdwcmVwYXJlJywgJ29uUHJlcGFyZSddO1xuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIGRlcHJlY2F0ZWQpIHtcbiAgICAgIGlmICh0eXBlb2YoKHRoaXMuaG9zdCBhcyBhbnkpW21ldGhvZF0pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgdGhlIGNvbnN0cnVjdCBcIiR7dGhpcy5wYXRofVwiIGhhcyBhIFwiJHttZXRob2R9KClcIiBtZXRob2Qgd2hpY2ggaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZC4gVXNlIFwiY29uc3RydWN0Lm5vZGUuYWRkVmFsaWRhdGlvbigpXCIgdG8gYWRkIHZhbGlkYXRpb25zIHRvIGEgY29uc3RydWN0YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZXJyb3JzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IHYgb2YgdGhpcy5fdmFsaWRhdGlvbnMpIHtcbiAgICAgIGVycm9ycy5wdXNoKC4uLnYudmFsaWRhdGUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2NrcyB0aGlzIGNvbnN0cnVjdCBmcm9tIGFsbG93aW5nIG1vcmUgY2hpbGRyZW4gdG8gYmUgYWRkZWQuIEFmdGVyIHRoaXNcbiAgICogY2FsbCwgbm8gbW9yZSBjaGlsZHJlbiBjYW4gYmUgYWRkZWQgdG8gdGhpcyBjb25zdHJ1Y3Qgb3IgdG8gYW55IGNoaWxkcmVuLlxuICAgKi9cbiAgcHVibGljIGxvY2soKSB7XG4gICAgdGhpcy5fbG9ja2VkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgY29uc3RydWN0IHRvIHRoaXMgbm9kZS5cbiAgICpcbiAgICogQHBhcmFtIGNoaWxkIFRoZSBjaGlsZCBjb25zdHJ1Y3RcbiAgICogQHBhcmFtIGNoaWxkTmFtZSBUaGUgdHlwZSBuYW1lIG9mIHRoZSBjaGlsZCBjb25zdHJ1Y3QuXG4gICAqIEByZXR1cm5zIFRoZSByZXNvbHZlZCBwYXRoIHBhcnQgbmFtZSBvZiB0aGUgY2hpbGRcbiAgICovXG4gIHByaXZhdGUgYWRkQ2hpbGQoY2hpbGQ6IENvbnN0cnVjdCwgY2hpbGROYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5sb2NrZWQpIHtcblxuICAgICAgLy8gc3BlY2lhbCBlcnJvciBpZiByb290IGlzIGxvY2tlZFxuICAgICAgaWYgKCF0aGlzLnBhdGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYWRkIGNoaWxkcmVuIGR1cmluZyBzeW50aGVzaXMnKTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgYWRkIGNoaWxkcmVuIHRvIFwiJHt0aGlzLnBhdGh9XCIgZHVyaW5nIHN5bnRoZXNpc2ApO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5hbWUgaW4gdGhpcy5fY2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmlkID8/ICcnO1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLmhvc3QuY29uc3RydWN0b3IubmFtZTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgYWxyZWFkeSBhIENvbnN0cnVjdCB3aXRoIG5hbWUgJyR7Y2hpbGROYW1lfScgaW4gJHt0eXBlTmFtZX0ke25hbWUubGVuZ3RoID4gMCA/ICcgWycgKyBuYW1lICsgJ10nIDogJyd9YCk7XG4gICAgfVxuXG4gICAgaWYgKCFjaGlsZE5hbWUgJiYgdGhpcy5pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBjYW5ub3QgYWRkIGEgbmFtZWxlc3MgY29uc3RydWN0IHRvIHRoZSBuYW1lZCBzY29wZTogJHt0aGlzLnBhdGh9YCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY2hpbGRyZW5bY2hpbGROYW1lXSA9IGNoaWxkO1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuX2NoaWxkcmVuKS5sZW5ndGggPiAxICYmIE9iamVjdC5rZXlzKHRoaXMuX2NoaWxkcmVuKS5maWx0ZXIoeCA9PiAheCkubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdvbmx5IGEgc2luZ2xlIGNvbnN0cnVjdCBpcyBhbGxvd2VkIGluIGEgc2NvcGUgaWYgaXQgaGFzIGFuIGVtcHR5IG5hbWUnKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBidWlsZGluZyBibG9jayBvZiB0aGUgY29uc3RydWN0IGdyYXBoLlxuICpcbiAqIEFsbCBjb25zdHJ1Y3RzIGJlc2lkZXMgdGhlIHJvb3QgY29uc3RydWN0IG11c3QgYmUgY3JlYXRlZCB3aXRoaW4gdGhlIHNjb3BlIG9mXG4gKiBhbm90aGVyIGNvbnN0cnVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnN0cnVjdCBpbXBsZW1lbnRzIElDb25zdHJ1Y3Qge1xuICAvKipcbiAgICogQ2hlY2tzIGlmIGB4YCBpcyBhIGNvbnN0cnVjdC5cbiAgICpcbiAgICogVXNlIHRoaXMgbWV0aG9kIGluc3RlYWQgb2YgYGluc3RhbmNlb2ZgIHRvIHByb3Blcmx5IGRldGVjdCBgQ29uc3RydWN0YFxuICAgKiBpbnN0YW5jZXMsIGV2ZW4gd2hlbiB0aGUgY29uc3RydWN0IGxpYnJhcnkgaXMgc3ltbGlua2VkLlxuICAgKlxuICAgKiBFeHBsYW5hdGlvbjogaW4gSmF2YVNjcmlwdCwgbXVsdGlwbGUgY29waWVzIG9mIHRoZSBgY29uc3RydWN0c2AgbGlicmFyeSBvblxuICAgKiBkaXNrIGFyZSBzZWVuIGFzIGluZGVwZW5kZW50LCBjb21wbGV0ZWx5IGRpZmZlcmVudCBsaWJyYXJpZXMuIEFzIGFcbiAgICogY29uc2VxdWVuY2UsIHRoZSBjbGFzcyBgQ29uc3RydWN0YCBpbiBlYWNoIGNvcHkgb2YgdGhlIGBjb25zdHJ1Y3RzYCBsaWJyYXJ5XG4gICAqIGlzIHNlZW4gYXMgYSBkaWZmZXJlbnQgY2xhc3MsIGFuZCBhbiBpbnN0YW5jZSBvZiBvbmUgY2xhc3Mgd2lsbCBub3QgdGVzdCBhc1xuICAgKiBgaW5zdGFuY2VvZmAgdGhlIG90aGVyIGNsYXNzLiBgbnBtIGluc3RhbGxgIHdpbGwgbm90IGNyZWF0ZSBpbnN0YWxsYXRpb25zXG4gICAqIGxpa2UgdGhpcywgYnV0IHVzZXJzIG1heSBtYW51YWxseSBzeW1saW5rIGNvbnN0cnVjdCBsaWJyYXJpZXMgdG9nZXRoZXIgb3JcbiAgICogdXNlIGEgbW9ub3JlcG8gdG9vbDogaW4gdGhvc2UgY2FzZXMsIG11bHRpcGxlIGNvcGllcyBvZiB0aGUgYGNvbnN0cnVjdHNgXG4gICAqIGxpYnJhcnkgY2FuIGJlIGFjY2lkZW50YWxseSBpbnN0YWxsZWQsIGFuZCBgaW5zdGFuY2VvZmAgd2lsbCBiZWhhdmVcbiAgICogdW5wcmVkaWN0YWJseS4gSXQgaXMgc2FmZXN0IHRvIGF2b2lkIHVzaW5nIGBpbnN0YW5jZW9mYCwgYW5kIHVzaW5nXG4gICAqIHRoaXMgdHlwZS10ZXN0aW5nIG1ldGhvZCBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGB4YCBpcyBhbiBvYmplY3QgY3JlYXRlZCBmcm9tIGEgY2xhc3Mgd2hpY2ggZXh0ZW5kcyBgQ29uc3RydWN0YC5cbiAgICogQHBhcmFtIHggQW55IG9iamVjdFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc0NvbnN0cnVjdCh4OiBhbnkpOiB4IGlzIENvbnN0cnVjdCB7XG4gICAgcmV0dXJuIHggJiYgdHlwZW9mIHggPT09ICdvYmplY3QnICYmIHhbQ09OU1RSVUNUX1NZTV07XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRyZWUgbm9kZS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBub2RlOiBOb2RlO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGNvbnN0cnVjdCBub2RlLlxuICAgKlxuICAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MuIElmXG4gICAqIHRoZSBJRCBpbmNsdWRlcyBhIHBhdGggc2VwYXJhdG9yIChgL2ApLCB0aGVuIGl0IHdpbGwgYmUgcmVwbGFjZWQgYnkgZG91YmxlXG4gICAqIGRhc2ggYC0tYC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5vZGUgPSBuZXcgTm9kZSh0aGlzLCBzY29wZSwgaWQpO1xuXG4gICAgLy8gaW1wbGVtZW50IElEZXBlbmRhYmxlIHByaXZhdGVseVxuICAgIERlcGVuZGFibGUuaW1wbGVtZW50KHRoaXMsIHtcbiAgICAgIGRlcGVuZGVuY3lSb290czogW3RoaXNdLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBjb25zdHJ1Y3QuXG4gICAqL1xuICBwdWJsaWMgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZS5wYXRoIHx8ICc8cm9vdD4nO1xuICB9XG59XG5cbi8qKlxuICogSW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlIGluIG9yZGVyIGZvciB0aGUgY29uc3RydWN0IHRvIGJlIGFibGUgdG8gdmFsaWRhdGUgaXRzZWxmLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElWYWxpZGF0aW9uIHtcbiAgLyoqXG4gICAqIFZhbGlkYXRlIHRoZSBjdXJyZW50IGNvbnN0cnVjdC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgY2FuIGJlIGltcGxlbWVudGVkIGJ5IGRlcml2ZWQgY29uc3RydWN0cyBpbiBvcmRlciB0byBwZXJmb3JtXG4gICAqIHZhbGlkYXRpb24gbG9naWMuIEl0IGlzIGNhbGxlZCBvbiBhbGwgY29uc3RydWN0cyBiZWZvcmUgc3ludGhlc2lzLlxuICAgKlxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzLCBvciBhbiBlbXB0eSBhcnJheSBpZiB0aGVyZSB0aGUgY29uc3RydWN0IGlzIHZhbGlkLlxuICAgKi9cbiAgdmFsaWRhdGUoKTogc3RyaW5nW107XG59XG5cbi8qKlxuICogSW4gd2hhdCBvcmRlciB0byByZXR1cm4gY29uc3RydWN0c1xuICovXG5leHBvcnQgZW51bSBDb25zdHJ1Y3RPcmRlciB7XG4gIC8qKlxuICAgKiBEZXB0aC1maXJzdCwgcHJlLW9yZGVyXG4gICAqL1xuICBQUkVPUkRFUixcblxuICAvKipcbiAgICogRGVwdGgtZmlyc3QsIHBvc3Qtb3JkZXIgKGxlYWYgbm9kZXMgZmlyc3QpXG4gICAqL1xuICBQT1NUT1JERVJcbn1cblxuY29uc3QgUEFUSF9TRVBfUkVHRVggPSBuZXcgUmVnRXhwKGAke05vZGUuUEFUSF9TRVB9YCwgJ2cnKTtcblxuLyoqXG4gKiBSZXR1cm4gYSBzYW5pdGl6ZWQgdmVyc2lvbiBvZiBhbiBhcmJpdHJhcnkgc3RyaW5nLCBzbyBpdCBjYW4gYmUgdXNlZCBhcyBhbiBJRFxuICovXG5mdW5jdGlvbiBzYW5pdGl6ZUlkKGlkOiBzdHJpbmcpIHtcbiAgLy8gRXNjYXBlIHBhdGggc2VwcyBhcyBkb3VibGUgZGFzaGVzXG4gIHJldHVybiBpZC5yZXBsYWNlKFBBVEhfU0VQX1JFR0VYLCAnLS0nKTtcbn1cblxuLyoqXG4gKiBPcHRpb25zIGZvciBgY29uc3RydWN0LmFkZE1ldGFkYXRhKClgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBJbmNsdWRlIHN0YWNrIHRyYWNlIHdpdGggbWV0YWRhdGEgZW50cnkuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICByZWFkb25seSBzdGFja1RyYWNlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQSBKYXZhU2NyaXB0IGZ1bmN0aW9uIHRvIGJlZ2luIHRyYWNpbmcgZnJvbS5cbiAgICpcbiAgICogVGhpcyBvcHRpb24gaXMgaWdub3JlZCB1bmxlc3MgYHN0YWNrVHJhY2VgIGlzIGB0cnVlYC5cbiAgICpcbiAgICogQGRlZmF1bHQgYWRkTWV0YWRhdGEoKVxuICAgKi9cbiAgcmVhZG9ubHkgdHJhY2VGcm9tRnVuY3Rpb24/OiBhbnk7XG59XG5cbi8vIE1hcmsgYWxsIGluc3RhbmNlcyBvZiAnQ29uc3RydWN0J1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdC5wcm90b3R5cGUsIENPTlNUUlVDVF9TWU0sIHtcbiAgdmFsdWU6IHRydWUsXG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG59KTtcbiJdfQ==

/***/ }),

/***/ 4338:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dependable = exports.DependencyGroup = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
/**
 * A set of constructs to be used as a dependable
 *
 * This class can be used when a set of constructs which are disjoint in the
 * construct tree needs to be combined to be used as a single dependable.
 *
 * @experimental
 */
class DependencyGroup {
    constructor(...deps) {
        this._deps = new Array();
        const self = this;
        Dependable.implement(this, {
            get dependencyRoots() {
                const result = new Array();
                for (const d of self._deps) {
                    result.push(...Dependable.of(d).dependencyRoots);
                }
                return result;
            },
        });
        this.add(...deps);
    }
    /**
     * Add a construct to the dependency roots
     */
    add(...scopes) {
        this._deps.push(...scopes);
    }
}
exports.DependencyGroup = DependencyGroup;
_a = JSII_RTTI_SYMBOL_1;
DependencyGroup[_a] = { fqn: "constructs.DependencyGroup", version: "10.1.245" };
const DEPENDABLE_SYMBOL = Symbol.for('@aws-cdk/core.DependableTrait');
/**
 * Trait for IDependable
 *
 * Traits are interfaces that are privately implemented by objects. Instead of
 * showing up in the public interface of a class, they need to be queried
 * explicitly. This is used to implement certain framework features that are
 * not intended to be used by Construct consumers, and so should be hidden
 * from accidental use.
 *
 * @example
 *
 * // Usage
 * const roots = Dependable.of(construct).dependencyRoots;
 *
 * // Definition
 * Dependable.implement(construct, {
 *       dependencyRoots: [construct],
 * });
 *
 * @experimental
 */
class Dependable {
    /**
     * Turn any object into an IDependable.
     */
    static implement(instance, trait) {
        // I would also like to reference classes (to cut down on the list of objects
        // we need to manage), but we can't do that either since jsii doesn't have the
        // concept of a class reference.
        instance[DEPENDABLE_SYMBOL] = trait;
    }
    /**
     * Return the matching Dependable for the given class instance.
     */
    static of(instance) {
        const ret = instance[DEPENDABLE_SYMBOL];
        if (!ret) {
            throw new Error(`${instance} does not implement IDependable. Use "Dependable.implement()" to implement`);
        }
        return ret;
    }
    /**
     * Return the matching Dependable for the given class instance.
     * @deprecated use `of`
     */
    static get(instance) {
        return this.of(instance);
    }
}
exports.Dependable = Dependable;
_b = JSII_RTTI_SYMBOL_1;
Dependable[_b] = { fqn: "constructs.Dependable", version: "10.1.245" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBaUJBOzs7Ozs7O0dBT0c7QUFDSCxNQUFhLGVBQWU7SUFHMUIsWUFBWSxHQUFHLElBQW1CO1FBRmpCLFVBQUssR0FBRyxJQUFJLEtBQUssRUFBZSxDQUFDO1FBR2hELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtZQUN6QixJQUFJLGVBQWU7Z0JBQ2pCLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFjLENBQUM7Z0JBQ3ZDLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7aUJBQ2xEO2dCQUNELE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksR0FBRyxDQUFDLEdBQUcsTUFBcUI7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDOztBQXhCSCwwQ0F5QkM7OztBQUVELE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBRXRFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUNILE1BQXNCLFVBQVU7SUFDOUI7O09BRUc7SUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQXFCLEVBQUUsS0FBaUI7UUFDOUQsNkVBQTZFO1FBQzdFLDhFQUE4RTtRQUM5RSxnQ0FBZ0M7UUFDL0IsUUFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUMvQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQXFCO1FBQ3BDLE1BQU0sR0FBRyxHQUFJLFFBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLFFBQVEsNEVBQTRFLENBQUMsQ0FBQztTQUMxRztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBcUI7UUFDckMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNCLENBQUM7O0FBNUJILGdDQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDb25zdHJ1Y3QgfSBmcm9tICcuL2NvbnN0cnVjdCc7XG5cbi8qKlxuICogVHJhaXQgbWFya2VyIGZvciBjbGFzc2VzIHRoYXQgY2FuIGJlIGRlcGVuZGVkIHVwb25cbiAqXG4gKiBUaGUgcHJlc2VuY2Ugb2YgdGhpcyBpbnRlcmZhY2UgaW5kaWNhdGVzIHRoYXQgYW4gb2JqZWN0IGhhc1xuICogYW4gYElEZXBlbmRhYmxlYCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBUaGlzIGludGVyZmFjZSBjYW4gYmUgdXNlZCB0byB0YWtlIGFuIChvcmRlcmluZykgZGVwZW5kZW5jeSBvbiBhIHNldCBvZlxuICogY29uc3RydWN0cy4gQW4gb3JkZXJpbmcgZGVwZW5kZW5jeSBpbXBsaWVzIHRoYXQgdGhlIHJlc291cmNlcyByZXByZXNlbnRlZCBieVxuICogdGhvc2UgY29uc3RydWN0cyBhcmUgZGVwbG95ZWQgYmVmb3JlIHRoZSByZXNvdXJjZXMgZGVwZW5kaW5nIE9OIHRoZW0gYXJlXG4gKiBkZXBsb3llZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRGVwZW5kYWJsZSB7XG4gIC8vIEVtcHR5LCB0aGlzIGludGVyZmFjZSBpcyBhIHRyYWl0IG1hcmtlclxufVxuXG4vKipcbiAqIEEgc2V0IG9mIGNvbnN0cnVjdHMgdG8gYmUgdXNlZCBhcyBhIGRlcGVuZGFibGVcbiAqXG4gKiBUaGlzIGNsYXNzIGNhbiBiZSB1c2VkIHdoZW4gYSBzZXQgb2YgY29uc3RydWN0cyB3aGljaCBhcmUgZGlzam9pbnQgaW4gdGhlXG4gKiBjb25zdHJ1Y3QgdHJlZSBuZWVkcyB0byBiZSBjb21iaW5lZCB0byBiZSB1c2VkIGFzIGEgc2luZ2xlIGRlcGVuZGFibGUuXG4gKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeUdyb3VwIGltcGxlbWVudHMgSURlcGVuZGFibGUge1xuICBwcml2YXRlIHJlYWRvbmx5IF9kZXBzID0gbmV3IEFycmF5PElEZXBlbmRhYmxlPigpO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmRlcHM6IElEZXBlbmRhYmxlW10pIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIERlcGVuZGFibGUuaW1wbGVtZW50KHRoaXMsIHtcbiAgICAgIGdldCBkZXBlbmRlbmN5Um9vdHMoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxJQ29uc3RydWN0PigpO1xuICAgICAgICBmb3IgKGNvbnN0IGQgb2Ygc2VsZi5fZGVwcykge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKC4uLkRlcGVuZGFibGUub2YoZCkuZGVwZW5kZW5jeVJvb3RzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkKC4uLmRlcHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGNvbnN0cnVjdCB0byB0aGUgZGVwZW5kZW5jeSByb290c1xuICAgKi9cbiAgcHVibGljIGFkZCguLi5zY29wZXM6IElEZXBlbmRhYmxlW10pIHtcbiAgICB0aGlzLl9kZXBzLnB1c2goLi4uc2NvcGVzKTtcbiAgfVxufVxuXG5jb25zdCBERVBFTkRBQkxFX1NZTUJPTCA9IFN5bWJvbC5mb3IoJ0Bhd3MtY2RrL2NvcmUuRGVwZW5kYWJsZVRyYWl0Jyk7XG5cbi8qKlxuICogVHJhaXQgZm9yIElEZXBlbmRhYmxlXG4gKlxuICogVHJhaXRzIGFyZSBpbnRlcmZhY2VzIHRoYXQgYXJlIHByaXZhdGVseSBpbXBsZW1lbnRlZCBieSBvYmplY3RzLiBJbnN0ZWFkIG9mXG4gKiBzaG93aW5nIHVwIGluIHRoZSBwdWJsaWMgaW50ZXJmYWNlIG9mIGEgY2xhc3MsIHRoZXkgbmVlZCB0byBiZSBxdWVyaWVkXG4gKiBleHBsaWNpdGx5LiBUaGlzIGlzIHVzZWQgdG8gaW1wbGVtZW50IGNlcnRhaW4gZnJhbWV3b3JrIGZlYXR1cmVzIHRoYXQgYXJlXG4gKiBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBieSBDb25zdHJ1Y3QgY29uc3VtZXJzLCBhbmQgc28gc2hvdWxkIGJlIGhpZGRlblxuICogZnJvbSBhY2NpZGVudGFsIHVzZS5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIFVzYWdlXG4gKiBjb25zdCByb290cyA9IERlcGVuZGFibGUub2YoY29uc3RydWN0KS5kZXBlbmRlbmN5Um9vdHM7XG4gKlxuICogLy8gRGVmaW5pdGlvblxuICogRGVwZW5kYWJsZS5pbXBsZW1lbnQoY29uc3RydWN0LCB7XG4gKiAgICAgICBkZXBlbmRlbmN5Um9vdHM6IFtjb25zdHJ1Y3RdLFxuICogfSk7XG4gKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGVwZW5kYWJsZSB7XG4gIC8qKlxuICAgKiBUdXJuIGFueSBvYmplY3QgaW50byBhbiBJRGVwZW5kYWJsZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaW1wbGVtZW50KGluc3RhbmNlOiBJRGVwZW5kYWJsZSwgdHJhaXQ6IERlcGVuZGFibGUpIHtcbiAgICAvLyBJIHdvdWxkIGFsc28gbGlrZSB0byByZWZlcmVuY2UgY2xhc3NlcyAodG8gY3V0IGRvd24gb24gdGhlIGxpc3Qgb2Ygb2JqZWN0c1xuICAgIC8vIHdlIG5lZWQgdG8gbWFuYWdlKSwgYnV0IHdlIGNhbid0IGRvIHRoYXQgZWl0aGVyIHNpbmNlIGpzaWkgZG9lc24ndCBoYXZlIHRoZVxuICAgIC8vIGNvbmNlcHQgb2YgYSBjbGFzcyByZWZlcmVuY2UuXG4gICAgKGluc3RhbmNlIGFzIGFueSlbREVQRU5EQUJMRV9TWU1CT0xdID0gdHJhaXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBtYXRjaGluZyBEZXBlbmRhYmxlIGZvciB0aGUgZ2l2ZW4gY2xhc3MgaW5zdGFuY2UuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG9mKGluc3RhbmNlOiBJRGVwZW5kYWJsZSk6IERlcGVuZGFibGUge1xuICAgIGNvbnN0IHJldCA9IChpbnN0YW5jZSBhcyBhbnkpW0RFUEVOREFCTEVfU1lNQk9MXTtcbiAgICBpZiAoIXJldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2luc3RhbmNlfSBkb2VzIG5vdCBpbXBsZW1lbnQgSURlcGVuZGFibGUuIFVzZSBcIkRlcGVuZGFibGUuaW1wbGVtZW50KClcIiB0byBpbXBsZW1lbnRgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG1hdGNoaW5nIERlcGVuZGFibGUgZm9yIHRoZSBnaXZlbiBjbGFzcyBpbnN0YW5jZS5cbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBvZmBcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0KGluc3RhbmNlOiBJRGVwZW5kYWJsZSk6IERlcGVuZGFibGUge1xuICAgIHJldHVybiB0aGlzLm9mKGluc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgc2V0IG9mIGNvbnN0cnVjdHMgdGhhdCBmb3JtIHRoZSByb290IG9mIHRoaXMgZGVwZW5kYWJsZVxuICAgKlxuICAgKiBBbGwgcmVzb3VyY2VzIHVuZGVyIGFsbCByZXR1cm5lZCBjb25zdHJ1Y3RzIGFyZSBpbmNsdWRlZCBpbiB0aGUgb3JkZXJpbmdcbiAgICogZGVwZW5kZW5jeS5cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCByZWFkb25seSBkZXBlbmRlbmN5Um9vdHM6IElDb25zdHJ1Y3RbXTtcbn1cbiJdfQ==

/***/ }),

/***/ 6366:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(7651), exports);
__exportStar(__nccwpck_require__(1664), exports);
__exportStar(__nccwpck_require__(4338), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTRCO0FBQzVCLDZDQUEyQjtBQUMzQiwrQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2NvbnN0cnVjdCc7XG5leHBvcnQgKiBmcm9tICcuL21ldGFkYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vZGVwZW5kZW5jeSc7Il19

/***/ }),

/***/ 1664:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbWV0YWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQW4gZW50cnkgaW4gdGhlIGNvbnN0cnVjdCBtZXRhZGF0YSB0YWJsZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YUVudHJ5IHtcbiAgLyoqXG4gICAqIFRoZSBtZXRhZGF0YSBlbnRyeSB0eXBlLlxuICAgKi9cbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0YS5cbiAgICovXG4gIHJlYWRvbmx5IGRhdGE6IGFueTtcblxuICAvKipcbiAgICogU3RhY2sgdHJhY2UgYXQgdGhlIHBvaW50IG9mIGFkZGluZyB0aGUgbWV0YWRhdGEuXG4gICAqXG4gICAqIE9ubHkgYXZhaWxhYmxlIGlmIGBhZGRNZXRhZGF0YSgpYCBpcyBjYWxsZWQgd2l0aCBgc3RhY2tUcmFjZTogdHJ1ZWAuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gbm8gdHJhY2UgaW5mb3JtYXRpb25cbiAgICovXG4gIHJlYWRvbmx5IHRyYWNlPzogc3RyaW5nW107XG59XG4iXX0=

/***/ }),

/***/ 7697:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.captureStackTrace = void 0;
// tslint:disable-next-line:ban-types
function captureStackTrace(below) {
    below = below || captureStackTrace; // hide myself if nothing else
    const object = { stack: '' };
    const previousLimit = Error.stackTraceLimit;
    try {
        Error.stackTraceLimit = Number.MAX_SAFE_INTEGER;
        Error.captureStackTrace(object, below);
    }
    finally {
        Error.stackTraceLimit = previousLimit;
    }
    if (!object.stack) {
        return [];
    }
    return object.stack.split('\n').slice(1).map(s => s.replace(/^\s*at\s+/, ''));
}
exports.captureStackTrace = captureStackTrace;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2stdHJhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcHJpdmF0ZS9zdGFjay10cmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsU0FBZ0IsaUJBQWlCLENBQUMsS0FBZ0I7SUFDaEQsS0FBSyxHQUFHLEtBQUssSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLDhCQUE4QjtJQUNsRSxNQUFNLE1BQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUM3QixNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO0lBQzVDLElBQUk7UUFDRixLQUFLLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3hDO1lBQVM7UUFDUixLQUFLLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQztLQUN2QztJQUNELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1FBQ2pCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hGLENBQUM7QUFkRCw4Q0FjQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiYW4tdHlwZXNcbmV4cG9ydCBmdW5jdGlvbiBjYXB0dXJlU3RhY2tUcmFjZShiZWxvdz86IEZ1bmN0aW9uKTogc3RyaW5nW10ge1xuICBiZWxvdyA9IGJlbG93IHx8IGNhcHR1cmVTdGFja1RyYWNlOyAvLyBoaWRlIG15c2VsZiBpZiBub3RoaW5nIGVsc2VcbiAgY29uc3Qgb2JqZWN0ID0geyBzdGFjazogJycgfTtcbiAgY29uc3QgcHJldmlvdXNMaW1pdCA9IEVycm9yLnN0YWNrVHJhY2VMaW1pdDtcbiAgdHJ5IHtcbiAgICBFcnJvci5zdGFja1RyYWNlTGltaXQgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShvYmplY3QsIGJlbG93KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBFcnJvci5zdGFja1RyYWNlTGltaXQgPSBwcmV2aW91c0xpbWl0O1xuICB9XG4gIGlmICghb2JqZWN0LnN0YWNrKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBvYmplY3Quc3RhY2suc3BsaXQoJ1xcbicpLnNsaWNlKDEpLm1hcChzID0+IHMucmVwbGFjZSgvXlxccyphdFxccysvLCAnJykpO1xufVxuIl19

/***/ }),

/***/ 7009:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addressOf = void 0;
const crypto = __nccwpck_require__(6113);
/**
 * Resources with this ID are complete hidden from the logical ID calculation.
 */
const HIDDEN_ID = 'Default';
/**
 * Calculates the construct uid based on path components.
 *
 * Components named `Default` (case sensitive) are excluded from uid calculation
 * to allow tree refactorings.
 *
 * @param components path components
 */
function addressOf(components) {
    const hash = crypto.createHash('sha1');
    for (const c of components) {
        // skip components called "Default" to enable refactorings
        if (c === HIDDEN_ID) {
            continue;
        }
        hash.update(c);
        hash.update('\n');
    }
    // prefix with "c8" so to ensure it starts with non-digit.
    return 'c8' + hash.digest('hex');
}
exports.addressOf = addressOf;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcHJpdmF0ZS91bmlxdWVpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQ0FBaUM7QUFFakM7O0dBRUc7QUFDSCxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFFNUI7Ozs7Ozs7R0FPRztBQUNILFNBQWdCLFNBQVMsQ0FBQyxVQUFvQjtJQUM1QyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLEtBQUssTUFBTSxDQUFDLElBQUksVUFBVSxFQUFFO1FBQzFCLDBEQUEwRDtRQUMxRCxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFBRSxTQUFTO1NBQUU7UUFFbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkI7SUFFRCwwREFBMEQ7SUFDMUQsT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBWkQsOEJBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnY3J5cHRvJztcblxuLyoqXG4gKiBSZXNvdXJjZXMgd2l0aCB0aGlzIElEIGFyZSBjb21wbGV0ZSBoaWRkZW4gZnJvbSB0aGUgbG9naWNhbCBJRCBjYWxjdWxhdGlvbi5cbiAqL1xuY29uc3QgSElEREVOX0lEID0gJ0RlZmF1bHQnO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNvbnN0cnVjdCB1aWQgYmFzZWQgb24gcGF0aCBjb21wb25lbnRzLlxuICpcbiAqIENvbXBvbmVudHMgbmFtZWQgYERlZmF1bHRgIChjYXNlIHNlbnNpdGl2ZSkgYXJlIGV4Y2x1ZGVkIGZyb20gdWlkIGNhbGN1bGF0aW9uXG4gKiB0byBhbGxvdyB0cmVlIHJlZmFjdG9yaW5ncy5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50cyBwYXRoIGNvbXBvbmVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZHJlc3NPZihjb21wb25lbnRzOiBzdHJpbmdbXSkge1xuICBjb25zdCBoYXNoID0gY3J5cHRvLmNyZWF0ZUhhc2goJ3NoYTEnKTtcbiAgZm9yIChjb25zdCBjIG9mIGNvbXBvbmVudHMpIHtcbiAgICAvLyBza2lwIGNvbXBvbmVudHMgY2FsbGVkIFwiRGVmYXVsdFwiIHRvIGVuYWJsZSByZWZhY3RvcmluZ3NcbiAgICBpZiAoYyA9PT0gSElEREVOX0lEKSB7IGNvbnRpbnVlOyB9XG5cbiAgICBoYXNoLnVwZGF0ZShjKTtcbiAgICBoYXNoLnVwZGF0ZSgnXFxuJyk7XG4gIH1cblxuICAvLyBwcmVmaXggd2l0aCBcImM4XCIgc28gdG8gZW5zdXJlIGl0IHN0YXJ0cyB3aXRoIG5vbi1kaWdpdC5cbiAgcmV0dXJuICdjOCcgKyBoYXNoLmRpZ2VzdCgnaGV4Jyk7XG59XG4iXX0=

/***/ }),

/***/ 6717:
/***/ ((module, exports, __nccwpck_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __nccwpck_require__(2215)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ 2215:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __nccwpck_require__(9580);
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ 4713:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = __nccwpck_require__(6717);
} else {
	module.exports = __nccwpck_require__(6757);
}


/***/ }),

/***/ 6757:
/***/ ((module, exports, __nccwpck_require__) => {

/**
 * Module dependencies.
 */

const tty = __nccwpck_require__(6224);
const util = __nccwpck_require__(3837);

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __nccwpck_require__(1174);

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __nccwpck_require__(2215)(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ 9251:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/npm/node.ts
var node_exports = {};
__export(node_exports, {
  analyzeMetafile: () => analyzeMetafile,
  analyzeMetafileSync: () => analyzeMetafileSync,
  build: () => build,
  buildSync: () => buildSync,
  context: () => context,
  default: () => node_default,
  formatMessages: () => formatMessages,
  formatMessagesSync: () => formatMessagesSync,
  initialize: () => initialize,
  transform: () => transform,
  transformSync: () => transformSync,
  version: () => version
});
module.exports = __toCommonJS(node_exports);

// lib/shared/stdio_protocol.ts
function encodePacket(packet) {
  let visit = (value) => {
    if (value === null) {
      bb.write8(0);
    } else if (typeof value === "boolean") {
      bb.write8(1);
      bb.write8(+value);
    } else if (typeof value === "number") {
      bb.write8(2);
      bb.write32(value | 0);
    } else if (typeof value === "string") {
      bb.write8(3);
      bb.write(encodeUTF8(value));
    } else if (value instanceof Uint8Array) {
      bb.write8(4);
      bb.write(value);
    } else if (value instanceof Array) {
      bb.write8(5);
      bb.write32(value.length);
      for (let item of value) {
        visit(item);
      }
    } else {
      let keys = Object.keys(value);
      bb.write8(6);
      bb.write32(keys.length);
      for (let key of keys) {
        bb.write(encodeUTF8(key));
        visit(value[key]);
      }
    }
  };
  let bb = new ByteBuffer();
  bb.write32(0);
  bb.write32(packet.id << 1 | +!packet.isRequest);
  visit(packet.value);
  writeUInt32LE(bb.buf, bb.len - 4, 0);
  return bb.buf.subarray(0, bb.len);
}
function decodePacket(bytes) {
  let visit = () => {
    switch (bb.read8()) {
      case 0:
        return null;
      case 1:
        return !!bb.read8();
      case 2:
        return bb.read32();
      case 3:
        return decodeUTF8(bb.read());
      case 4:
        return bb.read();
      case 5: {
        let count = bb.read32();
        let value2 = [];
        for (let i = 0; i < count; i++) {
          value2.push(visit());
        }
        return value2;
      }
      case 6: {
        let count = bb.read32();
        let value2 = {};
        for (let i = 0; i < count; i++) {
          value2[decodeUTF8(bb.read())] = visit();
        }
        return value2;
      }
      default:
        throw new Error("Invalid packet");
    }
  };
  let bb = new ByteBuffer(bytes);
  let id = bb.read32();
  let isRequest = (id & 1) === 0;
  id >>>= 1;
  let value = visit();
  if (bb.ptr !== bytes.length) {
    throw new Error("Invalid packet");
  }
  return { id, isRequest, value };
}
var ByteBuffer = class {
  constructor(buf = new Uint8Array(1024)) {
    this.buf = buf;
    this.len = 0;
    this.ptr = 0;
  }
  _write(delta) {
    if (this.len + delta > this.buf.length) {
      let clone = new Uint8Array((this.len + delta) * 2);
      clone.set(this.buf);
      this.buf = clone;
    }
    this.len += delta;
    return this.len - delta;
  }
  write8(value) {
    let offset = this._write(1);
    this.buf[offset] = value;
  }
  write32(value) {
    let offset = this._write(4);
    writeUInt32LE(this.buf, value, offset);
  }
  write(bytes) {
    let offset = this._write(4 + bytes.length);
    writeUInt32LE(this.buf, bytes.length, offset);
    this.buf.set(bytes, offset + 4);
  }
  _read(delta) {
    if (this.ptr + delta > this.buf.length) {
      throw new Error("Invalid packet");
    }
    this.ptr += delta;
    return this.ptr - delta;
  }
  read8() {
    return this.buf[this._read(1)];
  }
  read32() {
    return readUInt32LE(this.buf, this._read(4));
  }
  read() {
    let length = this.read32();
    let bytes = new Uint8Array(length);
    let ptr = this._read(bytes.length);
    bytes.set(this.buf.subarray(ptr, ptr + length));
    return bytes;
  }
};
var encodeUTF8;
var decodeUTF8;
var encodeInvariant;
if (typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined") {
  let encoder = new TextEncoder();
  let decoder = new TextDecoder();
  encodeUTF8 = (text) => encoder.encode(text);
  decodeUTF8 = (bytes) => decoder.decode(bytes);
  encodeInvariant = 'new TextEncoder().encode("")';
} else if (typeof Buffer !== "undefined") {
  encodeUTF8 = (text) => Buffer.from(text);
  decodeUTF8 = (bytes) => {
    let { buffer, byteOffset, byteLength } = bytes;
    return Buffer.from(buffer, byteOffset, byteLength).toString();
  };
  encodeInvariant = 'Buffer.from("")';
} else {
  throw new Error("No UTF-8 codec found");
}
if (!(encodeUTF8("") instanceof Uint8Array))
  throw new Error(`Invariant violation: "${encodeInvariant} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);
function readUInt32LE(buffer, offset) {
  return buffer[offset++] | buffer[offset++] << 8 | buffer[offset++] << 16 | buffer[offset++] << 24;
}
function writeUInt32LE(buffer, value, offset) {
  buffer[offset++] = value;
  buffer[offset++] = value >> 8;
  buffer[offset++] = value >> 16;
  buffer[offset++] = value >> 24;
}

// lib/shared/common.ts
var quote = JSON.stringify;
var buildLogLevelDefault = "warning";
var transformLogLevelDefault = "silent";
function validateTarget(target) {
  validateStringValue(target, "target");
  if (target.indexOf(",") >= 0)
    throw new Error(`Invalid target: ${target}`);
  return target;
}
var canBeAnything = () => null;
var mustBeBoolean = (value) => typeof value === "boolean" ? null : "a boolean";
var mustBeString = (value) => typeof value === "string" ? null : "a string";
var mustBeRegExp = (value) => value instanceof RegExp ? null : "a RegExp object";
var mustBeInteger = (value) => typeof value === "number" && value === (value | 0) ? null : "an integer";
var mustBeFunction = (value) => typeof value === "function" ? null : "a function";
var mustBeArray = (value) => Array.isArray(value) ? null : "an array";
var mustBeObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value) ? null : "an object";
var mustBeEntryPoints = (value) => typeof value === "object" && value !== null ? null : "an array or an object";
var mustBeWebAssemblyModule = (value) => value instanceof WebAssembly.Module ? null : "a WebAssembly.Module";
var mustBeObjectOrNull = (value) => typeof value === "object" && !Array.isArray(value) ? null : "an object or null";
var mustBeStringOrBoolean = (value) => typeof value === "string" || typeof value === "boolean" ? null : "a string or a boolean";
var mustBeStringOrObject = (value) => typeof value === "string" || typeof value === "object" && value !== null && !Array.isArray(value) ? null : "a string or an object";
var mustBeStringOrArray = (value) => typeof value === "string" || Array.isArray(value) ? null : "a string or an array";
var mustBeStringOrUint8Array = (value) => typeof value === "string" || value instanceof Uint8Array ? null : "a string or a Uint8Array";
var mustBeStringOrURL = (value) => typeof value === "string" || value instanceof URL ? null : "a string or a URL";
function getFlag(object, keys, key, mustBeFn) {
  let value = object[key];
  keys[key + ""] = true;
  if (value === void 0)
    return void 0;
  let mustBe = mustBeFn(value);
  if (mustBe !== null)
    throw new Error(`${quote(key)} must be ${mustBe}`);
  return value;
}
function checkForInvalidFlags(object, keys, where) {
  for (let key in object) {
    if (!(key in keys)) {
      throw new Error(`Invalid option ${where}: ${quote(key)}`);
    }
  }
}
function validateInitializeOptions(options) {
  let keys = /* @__PURE__ */ Object.create(null);
  let wasmURL = getFlag(options, keys, "wasmURL", mustBeStringOrURL);
  let wasmModule = getFlag(options, keys, "wasmModule", mustBeWebAssemblyModule);
  let worker = getFlag(options, keys, "worker", mustBeBoolean);
  checkForInvalidFlags(options, keys, "in initialize() call");
  return {
    wasmURL,
    wasmModule,
    worker
  };
}
function validateMangleCache(mangleCache) {
  let validated;
  if (mangleCache !== void 0) {
    validated = /* @__PURE__ */ Object.create(null);
    for (let key in mangleCache) {
      let value = mangleCache[key];
      if (typeof value === "string" || value === false) {
        validated[key] = value;
      } else {
        throw new Error(`Expected ${quote(key)} in mangle cache to map to either a string or false`);
      }
    }
  }
  return validated;
}
function pushLogFlags(flags, options, keys, isTTY2, logLevelDefault) {
  let color = getFlag(options, keys, "color", mustBeBoolean);
  let logLevel = getFlag(options, keys, "logLevel", mustBeString);
  let logLimit = getFlag(options, keys, "logLimit", mustBeInteger);
  if (color !== void 0)
    flags.push(`--color=${color}`);
  else if (isTTY2)
    flags.push(`--color=true`);
  flags.push(`--log-level=${logLevel || logLevelDefault}`);
  flags.push(`--log-limit=${logLimit || 0}`);
}
function validateStringValue(value, what, key) {
  if (typeof value !== "string") {
    throw new Error(`Expected value for ${what}${key !== void 0 ? " " + quote(key) : ""} to be a string, got ${typeof value} instead`);
  }
  return value;
}
function pushCommonFlags(flags, options, keys) {
  let legalComments = getFlag(options, keys, "legalComments", mustBeString);
  let sourceRoot = getFlag(options, keys, "sourceRoot", mustBeString);
  let sourcesContent = getFlag(options, keys, "sourcesContent", mustBeBoolean);
  let target = getFlag(options, keys, "target", mustBeStringOrArray);
  let format = getFlag(options, keys, "format", mustBeString);
  let globalName = getFlag(options, keys, "globalName", mustBeString);
  let mangleProps = getFlag(options, keys, "mangleProps", mustBeRegExp);
  let reserveProps = getFlag(options, keys, "reserveProps", mustBeRegExp);
  let mangleQuoted = getFlag(options, keys, "mangleQuoted", mustBeBoolean);
  let minify = getFlag(options, keys, "minify", mustBeBoolean);
  let minifySyntax = getFlag(options, keys, "minifySyntax", mustBeBoolean);
  let minifyWhitespace = getFlag(options, keys, "minifyWhitespace", mustBeBoolean);
  let minifyIdentifiers = getFlag(options, keys, "minifyIdentifiers", mustBeBoolean);
  let drop = getFlag(options, keys, "drop", mustBeArray);
  let charset = getFlag(options, keys, "charset", mustBeString);
  let treeShaking = getFlag(options, keys, "treeShaking", mustBeBoolean);
  let ignoreAnnotations = getFlag(options, keys, "ignoreAnnotations", mustBeBoolean);
  let jsx = getFlag(options, keys, "jsx", mustBeString);
  let jsxFactory = getFlag(options, keys, "jsxFactory", mustBeString);
  let jsxFragment = getFlag(options, keys, "jsxFragment", mustBeString);
  let jsxImportSource = getFlag(options, keys, "jsxImportSource", mustBeString);
  let jsxDev = getFlag(options, keys, "jsxDev", mustBeBoolean);
  let jsxSideEffects = getFlag(options, keys, "jsxSideEffects", mustBeBoolean);
  let define = getFlag(options, keys, "define", mustBeObject);
  let logOverride = getFlag(options, keys, "logOverride", mustBeObject);
  let supported = getFlag(options, keys, "supported", mustBeObject);
  let pure = getFlag(options, keys, "pure", mustBeArray);
  let keepNames = getFlag(options, keys, "keepNames", mustBeBoolean);
  let platform = getFlag(options, keys, "platform", mustBeString);
  if (legalComments)
    flags.push(`--legal-comments=${legalComments}`);
  if (sourceRoot !== void 0)
    flags.push(`--source-root=${sourceRoot}`);
  if (sourcesContent !== void 0)
    flags.push(`--sources-content=${sourcesContent}`);
  if (target) {
    if (Array.isArray(target))
      flags.push(`--target=${Array.from(target).map(validateTarget).join(",")}`);
    else
      flags.push(`--target=${validateTarget(target)}`);
  }
  if (format)
    flags.push(`--format=${format}`);
  if (globalName)
    flags.push(`--global-name=${globalName}`);
  if (platform)
    flags.push(`--platform=${platform}`);
  if (minify)
    flags.push("--minify");
  if (minifySyntax)
    flags.push("--minify-syntax");
  if (minifyWhitespace)
    flags.push("--minify-whitespace");
  if (minifyIdentifiers)
    flags.push("--minify-identifiers");
  if (charset)
    flags.push(`--charset=${charset}`);
  if (treeShaking !== void 0)
    flags.push(`--tree-shaking=${treeShaking}`);
  if (ignoreAnnotations)
    flags.push(`--ignore-annotations`);
  if (drop)
    for (let what of drop)
      flags.push(`--drop:${validateStringValue(what, "drop")}`);
  if (mangleProps)
    flags.push(`--mangle-props=${mangleProps.source}`);
  if (reserveProps)
    flags.push(`--reserve-props=${reserveProps.source}`);
  if (mangleQuoted !== void 0)
    flags.push(`--mangle-quoted=${mangleQuoted}`);
  if (jsx)
    flags.push(`--jsx=${jsx}`);
  if (jsxFactory)
    flags.push(`--jsx-factory=${jsxFactory}`);
  if (jsxFragment)
    flags.push(`--jsx-fragment=${jsxFragment}`);
  if (jsxImportSource)
    flags.push(`--jsx-import-source=${jsxImportSource}`);
  if (jsxDev)
    flags.push(`--jsx-dev`);
  if (jsxSideEffects)
    flags.push(`--jsx-side-effects`);
  if (define) {
    for (let key in define) {
      if (key.indexOf("=") >= 0)
        throw new Error(`Invalid define: ${key}`);
      flags.push(`--define:${key}=${validateStringValue(define[key], "define", key)}`);
    }
  }
  if (logOverride) {
    for (let key in logOverride) {
      if (key.indexOf("=") >= 0)
        throw new Error(`Invalid log override: ${key}`);
      flags.push(`--log-override:${key}=${validateStringValue(logOverride[key], "log override", key)}`);
    }
  }
  if (supported) {
    for (let key in supported) {
      if (key.indexOf("=") >= 0)
        throw new Error(`Invalid supported: ${key}`);
      const value = supported[key];
      if (typeof value !== "boolean")
        throw new Error(`Expected value for supported ${quote(key)} to be a boolean, got ${typeof value} instead`);
      flags.push(`--supported:${key}=${value}`);
    }
  }
  if (pure)
    for (let fn of pure)
      flags.push(`--pure:${validateStringValue(fn, "pure")}`);
  if (keepNames)
    flags.push(`--keep-names`);
}
function flagsForBuildOptions(callName, options, isTTY2, logLevelDefault, writeDefault) {
  var _a2;
  let flags = [];
  let entries = [];
  let keys = /* @__PURE__ */ Object.create(null);
  let stdinContents = null;
  let stdinResolveDir = null;
  pushLogFlags(flags, options, keys, isTTY2, logLevelDefault);
  pushCommonFlags(flags, options, keys);
  let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
  let bundle = getFlag(options, keys, "bundle", mustBeBoolean);
  let splitting = getFlag(options, keys, "splitting", mustBeBoolean);
  let preserveSymlinks = getFlag(options, keys, "preserveSymlinks", mustBeBoolean);
  let metafile = getFlag(options, keys, "metafile", mustBeBoolean);
  let outfile = getFlag(options, keys, "outfile", mustBeString);
  let outdir = getFlag(options, keys, "outdir", mustBeString);
  let outbase = getFlag(options, keys, "outbase", mustBeString);
  let tsconfig = getFlag(options, keys, "tsconfig", mustBeString);
  let resolveExtensions = getFlag(options, keys, "resolveExtensions", mustBeArray);
  let nodePathsInput = getFlag(options, keys, "nodePaths", mustBeArray);
  let mainFields = getFlag(options, keys, "mainFields", mustBeArray);
  let conditions = getFlag(options, keys, "conditions", mustBeArray);
  let external = getFlag(options, keys, "external", mustBeArray);
  let packages = getFlag(options, keys, "packages", mustBeString);
  let alias = getFlag(options, keys, "alias", mustBeObject);
  let loader = getFlag(options, keys, "loader", mustBeObject);
  let outExtension = getFlag(options, keys, "outExtension", mustBeObject);
  let publicPath = getFlag(options, keys, "publicPath", mustBeString);
  let entryNames = getFlag(options, keys, "entryNames", mustBeString);
  let chunkNames = getFlag(options, keys, "chunkNames", mustBeString);
  let assetNames = getFlag(options, keys, "assetNames", mustBeString);
  let inject = getFlag(options, keys, "inject", mustBeArray);
  let banner = getFlag(options, keys, "banner", mustBeObject);
  let footer = getFlag(options, keys, "footer", mustBeObject);
  let entryPoints = getFlag(options, keys, "entryPoints", mustBeEntryPoints);
  let absWorkingDir = getFlag(options, keys, "absWorkingDir", mustBeString);
  let stdin = getFlag(options, keys, "stdin", mustBeObject);
  let write = (_a2 = getFlag(options, keys, "write", mustBeBoolean)) != null ? _a2 : writeDefault;
  let allowOverwrite = getFlag(options, keys, "allowOverwrite", mustBeBoolean);
  let mangleCache = getFlag(options, keys, "mangleCache", mustBeObject);
  keys.plugins = true;
  checkForInvalidFlags(options, keys, `in ${callName}() call`);
  if (sourcemap)
    flags.push(`--sourcemap${sourcemap === true ? "" : `=${sourcemap}`}`);
  if (bundle)
    flags.push("--bundle");
  if (allowOverwrite)
    flags.push("--allow-overwrite");
  if (splitting)
    flags.push("--splitting");
  if (preserveSymlinks)
    flags.push("--preserve-symlinks");
  if (metafile)
    flags.push(`--metafile`);
  if (outfile)
    flags.push(`--outfile=${outfile}`);
  if (outdir)
    flags.push(`--outdir=${outdir}`);
  if (outbase)
    flags.push(`--outbase=${outbase}`);
  if (tsconfig)
    flags.push(`--tsconfig=${tsconfig}`);
  if (packages)
    flags.push(`--packages=${packages}`);
  if (resolveExtensions) {
    let values = [];
    for (let value of resolveExtensions) {
      validateStringValue(value, "resolve extension");
      if (value.indexOf(",") >= 0)
        throw new Error(`Invalid resolve extension: ${value}`);
      values.push(value);
    }
    flags.push(`--resolve-extensions=${values.join(",")}`);
  }
  if (publicPath)
    flags.push(`--public-path=${publicPath}`);
  if (entryNames)
    flags.push(`--entry-names=${entryNames}`);
  if (chunkNames)
    flags.push(`--chunk-names=${chunkNames}`);
  if (assetNames)
    flags.push(`--asset-names=${assetNames}`);
  if (mainFields) {
    let values = [];
    for (let value of mainFields) {
      validateStringValue(value, "main field");
      if (value.indexOf(",") >= 0)
        throw new Error(`Invalid main field: ${value}`);
      values.push(value);
    }
    flags.push(`--main-fields=${values.join(",")}`);
  }
  if (conditions) {
    let values = [];
    for (let value of conditions) {
      validateStringValue(value, "condition");
      if (value.indexOf(",") >= 0)
        throw new Error(`Invalid condition: ${value}`);
      values.push(value);
    }
    flags.push(`--conditions=${values.join(",")}`);
  }
  if (external)
    for (let name of external)
      flags.push(`--external:${validateStringValue(name, "external")}`);
  if (alias) {
    for (let old in alias) {
      if (old.indexOf("=") >= 0)
        throw new Error(`Invalid package name in alias: ${old}`);
      flags.push(`--alias:${old}=${validateStringValue(alias[old], "alias", old)}`);
    }
  }
  if (banner) {
    for (let type in banner) {
      if (type.indexOf("=") >= 0)
        throw new Error(`Invalid banner file type: ${type}`);
      flags.push(`--banner:${type}=${validateStringValue(banner[type], "banner", type)}`);
    }
  }
  if (footer) {
    for (let type in footer) {
      if (type.indexOf("=") >= 0)
        throw new Error(`Invalid footer file type: ${type}`);
      flags.push(`--footer:${type}=${validateStringValue(footer[type], "footer", type)}`);
    }
  }
  if (inject)
    for (let path3 of inject)
      flags.push(`--inject:${validateStringValue(path3, "inject")}`);
  if (loader) {
    for (let ext in loader) {
      if (ext.indexOf("=") >= 0)
        throw new Error(`Invalid loader extension: ${ext}`);
      flags.push(`--loader:${ext}=${validateStringValue(loader[ext], "loader", ext)}`);
    }
  }
  if (outExtension) {
    for (let ext in outExtension) {
      if (ext.indexOf("=") >= 0)
        throw new Error(`Invalid out extension: ${ext}`);
      flags.push(`--out-extension:${ext}=${validateStringValue(outExtension[ext], "out extension", ext)}`);
    }
  }
  if (entryPoints) {
    if (Array.isArray(entryPoints)) {
      for (let i = 0, n = entryPoints.length; i < n; i++) {
        let entryPoint = entryPoints[i];
        if (typeof entryPoint === "object" && entryPoint !== null) {
          let entryPointKeys = /* @__PURE__ */ Object.create(null);
          let input = getFlag(entryPoint, entryPointKeys, "in", mustBeString);
          let output = getFlag(entryPoint, entryPointKeys, "out", mustBeString);
          checkForInvalidFlags(entryPoint, entryPointKeys, "in entry point at index " + i);
          if (input === void 0)
            throw new Error('Missing property "in" for entry point at index ' + i);
          if (output === void 0)
            throw new Error('Missing property "out" for entry point at index ' + i);
          entries.push([output, input]);
        } else {
          entries.push(["", validateStringValue(entryPoint, "entry point at index " + i)]);
        }
      }
    } else {
      for (let key in entryPoints) {
        entries.push([key, validateStringValue(entryPoints[key], "entry point", key)]);
      }
    }
  }
  if (stdin) {
    let stdinKeys = /* @__PURE__ */ Object.create(null);
    let contents = getFlag(stdin, stdinKeys, "contents", mustBeStringOrUint8Array);
    let resolveDir = getFlag(stdin, stdinKeys, "resolveDir", mustBeString);
    let sourcefile = getFlag(stdin, stdinKeys, "sourcefile", mustBeString);
    let loader2 = getFlag(stdin, stdinKeys, "loader", mustBeString);
    checkForInvalidFlags(stdin, stdinKeys, 'in "stdin" object');
    if (sourcefile)
      flags.push(`--sourcefile=${sourcefile}`);
    if (loader2)
      flags.push(`--loader=${loader2}`);
    if (resolveDir)
      stdinResolveDir = resolveDir;
    if (typeof contents === "string")
      stdinContents = encodeUTF8(contents);
    else if (contents instanceof Uint8Array)
      stdinContents = contents;
  }
  let nodePaths = [];
  if (nodePathsInput) {
    for (let value of nodePathsInput) {
      value += "";
      nodePaths.push(value);
    }
  }
  return {
    entries,
    flags,
    write,
    stdinContents,
    stdinResolveDir,
    absWorkingDir,
    nodePaths,
    mangleCache: validateMangleCache(mangleCache)
  };
}
function flagsForTransformOptions(callName, options, isTTY2, logLevelDefault) {
  let flags = [];
  let keys = /* @__PURE__ */ Object.create(null);
  pushLogFlags(flags, options, keys, isTTY2, logLevelDefault);
  pushCommonFlags(flags, options, keys);
  let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
  let tsconfigRaw = getFlag(options, keys, "tsconfigRaw", mustBeStringOrObject);
  let sourcefile = getFlag(options, keys, "sourcefile", mustBeString);
  let loader = getFlag(options, keys, "loader", mustBeString);
  let banner = getFlag(options, keys, "banner", mustBeString);
  let footer = getFlag(options, keys, "footer", mustBeString);
  let mangleCache = getFlag(options, keys, "mangleCache", mustBeObject);
  checkForInvalidFlags(options, keys, `in ${callName}() call`);
  if (sourcemap)
    flags.push(`--sourcemap=${sourcemap === true ? "external" : sourcemap}`);
  if (tsconfigRaw)
    flags.push(`--tsconfig-raw=${typeof tsconfigRaw === "string" ? tsconfigRaw : JSON.stringify(tsconfigRaw)}`);
  if (sourcefile)
    flags.push(`--sourcefile=${sourcefile}`);
  if (loader)
    flags.push(`--loader=${loader}`);
  if (banner)
    flags.push(`--banner=${banner}`);
  if (footer)
    flags.push(`--footer=${footer}`);
  return {
    flags,
    mangleCache: validateMangleCache(mangleCache)
  };
}
function createChannel(streamIn) {
  const requestCallbacksByKey = {};
  const closeData = { didClose: false, reason: "" };
  let responseCallbacks = {};
  let nextRequestID = 0;
  let nextBuildKey = 0;
  let stdout = new Uint8Array(16 * 1024);
  let stdoutUsed = 0;
  let readFromStdout = (chunk) => {
    let limit = stdoutUsed + chunk.length;
    if (limit > stdout.length) {
      let swap = new Uint8Array(limit * 2);
      swap.set(stdout);
      stdout = swap;
    }
    stdout.set(chunk, stdoutUsed);
    stdoutUsed += chunk.length;
    let offset = 0;
    while (offset + 4 <= stdoutUsed) {
      let length = readUInt32LE(stdout, offset);
      if (offset + 4 + length > stdoutUsed) {
        break;
      }
      offset += 4;
      handleIncomingPacket(stdout.subarray(offset, offset + length));
      offset += length;
    }
    if (offset > 0) {
      stdout.copyWithin(0, offset, stdoutUsed);
      stdoutUsed -= offset;
    }
  };
  let afterClose = (error) => {
    closeData.didClose = true;
    if (error)
      closeData.reason = ": " + (error.message || error);
    const text = "The service was stopped" + closeData.reason;
    for (let id in responseCallbacks) {
      responseCallbacks[id](text, null);
    }
    responseCallbacks = {};
  };
  let sendRequest = (refs, value, callback) => {
    if (closeData.didClose)
      return callback("The service is no longer running" + closeData.reason, null);
    let id = nextRequestID++;
    responseCallbacks[id] = (error, response) => {
      try {
        callback(error, response);
      } finally {
        if (refs)
          refs.unref();
      }
    };
    if (refs)
      refs.ref();
    streamIn.writeToStdin(encodePacket({ id, isRequest: true, value }));
  };
  let sendResponse = (id, value) => {
    if (closeData.didClose)
      throw new Error("The service is no longer running" + closeData.reason);
    streamIn.writeToStdin(encodePacket({ id, isRequest: false, value }));
  };
  let handleRequest = async (id, request) => {
    try {
      if (request.command === "ping") {
        sendResponse(id, {});
        return;
      }
      if (typeof request.key === "number") {
        const requestCallbacks = requestCallbacksByKey[request.key];
        if (requestCallbacks) {
          const callback = requestCallbacks[request.command];
          if (callback) {
            await callback(id, request);
            return;
          }
        }
      }
      throw new Error(`Invalid command: ` + request.command);
    } catch (e) {
      sendResponse(id, { errors: [extractErrorMessageV8(e, streamIn, null, void 0, "")] });
    }
  };
  let isFirstPacket = true;
  let handleIncomingPacket = (bytes) => {
    if (isFirstPacket) {
      isFirstPacket = false;
      let binaryVersion = String.fromCharCode(...bytes);
      if (binaryVersion !== "0.17.6") {
        throw new Error(`Cannot start service: Host version "${"0.17.6"}" does not match binary version ${quote(binaryVersion)}`);
      }
      return;
    }
    let packet = decodePacket(bytes);
    if (packet.isRequest) {
      handleRequest(packet.id, packet.value);
    } else {
      let callback = responseCallbacks[packet.id];
      delete responseCallbacks[packet.id];
      if (packet.value.error)
        callback(packet.value.error, {});
      else
        callback(null, packet.value);
    }
  };
  let buildOrContext = ({ callName, refs, options, isTTY: isTTY2, defaultWD: defaultWD2, callback }) => {
    let refCount = 0;
    const buildKey = nextBuildKey++;
    const requestCallbacks = {};
    const buildRefs = {
      ref() {
        if (++refCount === 1) {
          if (refs)
            refs.ref();
        }
      },
      unref() {
        if (--refCount === 0) {
          delete requestCallbacksByKey[buildKey];
          if (refs)
            refs.unref();
        }
      }
    };
    requestCallbacksByKey[buildKey] = requestCallbacks;
    buildRefs.ref();
    buildOrContextImpl(
      callName,
      buildKey,
      sendRequest,
      sendResponse,
      buildRefs,
      streamIn,
      requestCallbacks,
      options,
      isTTY2,
      defaultWD2,
      (err, res) => {
        try {
          callback(err, res);
        } finally {
          buildRefs.unref();
        }
      }
    );
  };
  let transform2 = ({ callName, refs, input, options, isTTY: isTTY2, fs: fs3, callback }) => {
    const details = createObjectStash();
    let start = (inputPath) => {
      try {
        if (typeof input !== "string" && !(input instanceof Uint8Array))
          throw new Error('The input to "transform" must be a string or a Uint8Array');
        let {
          flags,
          mangleCache
        } = flagsForTransformOptions(callName, options, isTTY2, transformLogLevelDefault);
        let request = {
          command: "transform",
          flags,
          inputFS: inputPath !== null,
          input: inputPath !== null ? encodeUTF8(inputPath) : typeof input === "string" ? encodeUTF8(input) : input
        };
        if (mangleCache)
          request.mangleCache = mangleCache;
        sendRequest(refs, request, (error, response) => {
          if (error)
            return callback(new Error(error), null);
          let errors = replaceDetailsInMessages(response.errors, details);
          let warnings = replaceDetailsInMessages(response.warnings, details);
          let outstanding = 1;
          let next = () => {
            if (--outstanding === 0) {
              let result = {
                warnings,
                code: response.code,
                map: response.map,
                mangleCache: void 0,
                legalComments: void 0
              };
              if ("legalComments" in response)
                result.legalComments = response == null ? void 0 : response.legalComments;
              if (response.mangleCache)
                result.mangleCache = response == null ? void 0 : response.mangleCache;
              callback(null, result);
            }
          };
          if (errors.length > 0)
            return callback(failureErrorWithLog("Transform failed", errors, warnings), null);
          if (response.codeFS) {
            outstanding++;
            fs3.readFile(response.code, (err, contents) => {
              if (err !== null) {
                callback(err, null);
              } else {
                response.code = contents;
                next();
              }
            });
          }
          if (response.mapFS) {
            outstanding++;
            fs3.readFile(response.map, (err, contents) => {
              if (err !== null) {
                callback(err, null);
              } else {
                response.map = contents;
                next();
              }
            });
          }
          next();
        });
      } catch (e) {
        let flags = [];
        try {
          pushLogFlags(flags, options, {}, isTTY2, transformLogLevelDefault);
        } catch {
        }
        const error = extractErrorMessageV8(e, streamIn, details, void 0, "");
        sendRequest(refs, { command: "error", flags, error }, () => {
          error.detail = details.load(error.detail);
          callback(failureErrorWithLog("Transform failed", [error], []), null);
        });
      }
    };
    if ((typeof input === "string" || input instanceof Uint8Array) && input.length > 1024 * 1024) {
      let next = start;
      start = () => fs3.writeFile(input, next);
    }
    start(null);
  };
  let formatMessages2 = ({ callName, refs, messages, options, callback }) => {
    let result = sanitizeMessages(messages, "messages", null, "");
    if (!options)
      throw new Error(`Missing second argument in ${callName}() call`);
    let keys = {};
    let kind = getFlag(options, keys, "kind", mustBeString);
    let color = getFlag(options, keys, "color", mustBeBoolean);
    let terminalWidth = getFlag(options, keys, "terminalWidth", mustBeInteger);
    checkForInvalidFlags(options, keys, `in ${callName}() call`);
    if (kind === void 0)
      throw new Error(`Missing "kind" in ${callName}() call`);
    if (kind !== "error" && kind !== "warning")
      throw new Error(`Expected "kind" to be "error" or "warning" in ${callName}() call`);
    let request = {
      command: "format-msgs",
      messages: result,
      isWarning: kind === "warning"
    };
    if (color !== void 0)
      request.color = color;
    if (terminalWidth !== void 0)
      request.terminalWidth = terminalWidth;
    sendRequest(refs, request, (error, response) => {
      if (error)
        return callback(new Error(error), null);
      callback(null, response.messages);
    });
  };
  let analyzeMetafile2 = ({ callName, refs, metafile, options, callback }) => {
    if (options === void 0)
      options = {};
    let keys = {};
    let color = getFlag(options, keys, "color", mustBeBoolean);
    let verbose = getFlag(options, keys, "verbose", mustBeBoolean);
    checkForInvalidFlags(options, keys, `in ${callName}() call`);
    let request = {
      command: "analyze-metafile",
      metafile
    };
    if (color !== void 0)
      request.color = color;
    if (verbose !== void 0)
      request.verbose = verbose;
    sendRequest(refs, request, (error, response) => {
      if (error)
        return callback(new Error(error), null);
      callback(null, response.result);
    });
  };
  return {
    readFromStdout,
    afterClose,
    service: {
      buildOrContext,
      transform: transform2,
      formatMessages: formatMessages2,
      analyzeMetafile: analyzeMetafile2
    }
  };
}
function buildOrContextImpl(callName, buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, options, isTTY2, defaultWD2, callback) {
  const details = createObjectStash();
  const isContext = callName === "context";
  const handleError = (e, pluginName) => {
    const flags = [];
    try {
      pushLogFlags(flags, options, {}, isTTY2, buildLogLevelDefault);
    } catch {
    }
    const message = extractErrorMessageV8(e, streamIn, details, void 0, pluginName);
    sendRequest(refs, { command: "error", flags, error: message }, () => {
      message.detail = details.load(message.detail);
      callback(failureErrorWithLog(isContext ? "Context failed" : "Build failed", [message], []), null);
    });
  };
  let plugins;
  if (typeof options === "object") {
    const value = options.plugins;
    if (value !== void 0) {
      if (!Array.isArray(value))
        return handleError(new Error(`"plugins" must be an array`), "");
      plugins = value;
    }
  }
  if (plugins && plugins.length > 0) {
    if (streamIn.isSync)
      return handleError(new Error("Cannot use plugins in synchronous API calls"), "");
    handlePlugins(
      buildKey,
      sendRequest,
      sendResponse,
      refs,
      streamIn,
      requestCallbacks,
      options,
      plugins,
      details
    ).then(
      (result) => {
        if (!result.ok)
          return handleError(result.error, result.pluginName);
        try {
          buildOrContextContinue(result.requestPlugins, result.runOnEndCallbacks, result.scheduleOnDisposeCallbacks);
        } catch (e) {
          handleError(e, "");
        }
      },
      (e) => handleError(e, "")
    );
    return;
  }
  try {
    buildOrContextContinue(null, (result, done) => done([], []), () => {
    });
  } catch (e) {
    handleError(e, "");
  }
  function buildOrContextContinue(requestPlugins, runOnEndCallbacks, scheduleOnDisposeCallbacks) {
    const writeDefault = streamIn.hasFS;
    const {
      entries,
      flags,
      write,
      stdinContents,
      stdinResolveDir,
      absWorkingDir,
      nodePaths,
      mangleCache
    } = flagsForBuildOptions(callName, options, isTTY2, buildLogLevelDefault, writeDefault);
    if (write && !streamIn.hasFS)
      throw new Error(`The "write" option is unavailable in this environment`);
    const request = {
      command: "build",
      key: buildKey,
      entries,
      flags,
      write,
      stdinContents,
      stdinResolveDir,
      absWorkingDir: absWorkingDir || defaultWD2,
      nodePaths,
      context: isContext
    };
    if (requestPlugins)
      request.plugins = requestPlugins;
    if (mangleCache)
      request.mangleCache = mangleCache;
    const buildResponseToResult = (response, callback2) => {
      const result = {
        errors: replaceDetailsInMessages(response.errors, details),
        warnings: replaceDetailsInMessages(response.warnings, details),
        outputFiles: void 0,
        metafile: void 0,
        mangleCache: void 0
      };
      const originalErrors = result.errors.slice();
      const originalWarnings = result.warnings.slice();
      if (response.outputFiles)
        result.outputFiles = response.outputFiles.map(convertOutputFiles);
      if (response.metafile)
        result.metafile = JSON.parse(response.metafile);
      if (response.mangleCache)
        result.mangleCache = response.mangleCache;
      if (response.writeToStdout !== void 0)
        console.log(decodeUTF8(response.writeToStdout).replace(/\n$/, ""));
      runOnEndCallbacks(result, (onEndErrors, onEndWarnings) => {
        if (originalErrors.length > 0 || onEndErrors.length > 0) {
          const error = failureErrorWithLog("Build failed", originalErrors.concat(onEndErrors), originalWarnings.concat(onEndWarnings));
          return callback2(error, null, onEndErrors, onEndWarnings);
        }
        callback2(null, result, onEndErrors, onEndWarnings);
      });
    };
    let latestResultPromise;
    let provideLatestResult;
    if (isContext)
      requestCallbacks["on-end"] = (id, request2) => new Promise((resolve) => {
        buildResponseToResult(request2, (err, result, onEndErrors, onEndWarnings) => {
          const response = {
            errors: onEndErrors,
            warnings: onEndWarnings
          };
          if (provideLatestResult)
            provideLatestResult(err, result);
          latestResultPromise = void 0;
          provideLatestResult = void 0;
          sendResponse(id, response);
          resolve();
        });
      });
    sendRequest(refs, request, (error, response) => {
      if (error)
        return callback(new Error(error), null);
      if (!isContext) {
        return buildResponseToResult(response, (err, res) => {
          scheduleOnDisposeCallbacks();
          return callback(err, res);
        });
      }
      if (response.errors.length > 0) {
        return callback(failureErrorWithLog("Context failed", response.errors, response.warnings), null);
      }
      let didDispose = false;
      const result = {
        rebuild: () => {
          if (!latestResultPromise)
            latestResultPromise = new Promise((resolve, reject) => {
              let settlePromise;
              provideLatestResult = (err, result2) => {
                if (!settlePromise)
                  settlePromise = () => err ? reject(err) : resolve(result2);
              };
              const triggerAnotherBuild = () => {
                const request2 = {
                  command: "rebuild",
                  key: buildKey
                };
                sendRequest(refs, request2, (error2, response2) => {
                  if (error2) {
                    reject(new Error(error2));
                  } else if (settlePromise) {
                    settlePromise();
                  } else {
                    triggerAnotherBuild();
                  }
                });
              };
              triggerAnotherBuild();
            });
          return latestResultPromise;
        },
        watch: (options2 = {}) => new Promise((resolve, reject) => {
          if (!streamIn.hasFS)
            throw new Error(`Cannot use the "watch" API in this environment`);
          const keys = {};
          checkForInvalidFlags(options2, keys, `in watch() call`);
          const request2 = {
            command: "watch",
            key: buildKey
          };
          sendRequest(refs, request2, (error2) => {
            if (error2)
              reject(new Error(error2));
            else
              resolve(void 0);
          });
        }),
        serve: (options2 = {}) => new Promise((resolve, reject) => {
          if (!streamIn.hasFS)
            throw new Error(`Cannot use the "serve" API in this environment`);
          const keys = {};
          const port = getFlag(options2, keys, "port", mustBeInteger);
          const host = getFlag(options2, keys, "host", mustBeString);
          const servedir = getFlag(options2, keys, "servedir", mustBeString);
          const keyfile = getFlag(options2, keys, "keyfile", mustBeString);
          const certfile = getFlag(options2, keys, "certfile", mustBeString);
          const onRequest = getFlag(options2, keys, "onRequest", mustBeFunction);
          checkForInvalidFlags(options2, keys, `in serve() call`);
          const request2 = {
            command: "serve",
            key: buildKey,
            onRequest: !!onRequest
          };
          if (port !== void 0)
            request2.port = port;
          if (host !== void 0)
            request2.host = host;
          if (servedir !== void 0)
            request2.servedir = servedir;
          if (keyfile !== void 0)
            request2.keyfile = keyfile;
          if (certfile !== void 0)
            request2.certfile = certfile;
          sendRequest(refs, request2, (error2, response2) => {
            if (error2)
              return reject(new Error(error2));
            if (onRequest) {
              requestCallbacks["serve-request"] = (id, request3) => {
                onRequest(request3.args);
                sendResponse(id, {});
              };
            }
            resolve(response2);
          });
        }),
        cancel: () => new Promise((resolve) => {
          if (didDispose)
            return resolve();
          const request2 = {
            command: "cancel",
            key: buildKey
          };
          sendRequest(refs, request2, () => {
            resolve();
          });
        }),
        dispose: () => new Promise((resolve) => {
          if (didDispose)
            return resolve();
          didDispose = true;
          const request2 = {
            command: "dispose",
            key: buildKey
          };
          sendRequest(refs, request2, () => {
            resolve();
            scheduleOnDisposeCallbacks();
            refs.unref();
          });
        })
      };
      refs.ref();
      callback(null, result);
    });
  }
}
var handlePlugins = async (buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, initialOptions, plugins, details) => {
  let onStartCallbacks = [];
  let onEndCallbacks = [];
  let onResolveCallbacks = {};
  let onLoadCallbacks = {};
  let onDisposeCallbacks = [];
  let nextCallbackID = 0;
  let i = 0;
  let requestPlugins = [];
  let isSetupDone = false;
  plugins = [...plugins];
  for (let item of plugins) {
    let keys = {};
    if (typeof item !== "object")
      throw new Error(`Plugin at index ${i} must be an object`);
    const name = getFlag(item, keys, "name", mustBeString);
    if (typeof name !== "string" || name === "")
      throw new Error(`Plugin at index ${i} is missing a name`);
    try {
      let setup = getFlag(item, keys, "setup", mustBeFunction);
      if (typeof setup !== "function")
        throw new Error(`Plugin is missing a setup function`);
      checkForInvalidFlags(item, keys, `on plugin ${quote(name)}`);
      let plugin = {
        name,
        onStart: false,
        onEnd: false,
        onResolve: [],
        onLoad: []
      };
      i++;
      let resolve = (path3, options = {}) => {
        if (!isSetupDone)
          throw new Error('Cannot call "resolve" before plugin setup has completed');
        if (typeof path3 !== "string")
          throw new Error(`The path to resolve must be a string`);
        let keys2 = /* @__PURE__ */ Object.create(null);
        let pluginName = getFlag(options, keys2, "pluginName", mustBeString);
        let importer = getFlag(options, keys2, "importer", mustBeString);
        let namespace = getFlag(options, keys2, "namespace", mustBeString);
        let resolveDir = getFlag(options, keys2, "resolveDir", mustBeString);
        let kind = getFlag(options, keys2, "kind", mustBeString);
        let pluginData = getFlag(options, keys2, "pluginData", canBeAnything);
        checkForInvalidFlags(options, keys2, "in resolve() call");
        return new Promise((resolve2, reject) => {
          const request = {
            command: "resolve",
            path: path3,
            key: buildKey,
            pluginName: name
          };
          if (pluginName != null)
            request.pluginName = pluginName;
          if (importer != null)
            request.importer = importer;
          if (namespace != null)
            request.namespace = namespace;
          if (resolveDir != null)
            request.resolveDir = resolveDir;
          if (kind != null)
            request.kind = kind;
          else
            throw new Error(`Must specify "kind" when calling "resolve"`);
          if (pluginData != null)
            request.pluginData = details.store(pluginData);
          sendRequest(refs, request, (error, response) => {
            if (error !== null)
              reject(new Error(error));
            else
              resolve2({
                errors: replaceDetailsInMessages(response.errors, details),
                warnings: replaceDetailsInMessages(response.warnings, details),
                path: response.path,
                external: response.external,
                sideEffects: response.sideEffects,
                namespace: response.namespace,
                suffix: response.suffix,
                pluginData: details.load(response.pluginData)
              });
          });
        });
      };
      let promise = setup({
        initialOptions,
        resolve,
        onStart(callback) {
          let registeredText = `This error came from the "onStart" callback registered here:`;
          let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onStart");
          onStartCallbacks.push({ name, callback, note: registeredNote });
          plugin.onStart = true;
        },
        onEnd(callback) {
          let registeredText = `This error came from the "onEnd" callback registered here:`;
          let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onEnd");
          onEndCallbacks.push({ name, callback, note: registeredNote });
          plugin.onEnd = true;
        },
        onResolve(options, callback) {
          let registeredText = `This error came from the "onResolve" callback registered here:`;
          let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onResolve");
          let keys2 = {};
          let filter = getFlag(options, keys2, "filter", mustBeRegExp);
          let namespace = getFlag(options, keys2, "namespace", mustBeString);
          checkForInvalidFlags(options, keys2, `in onResolve() call for plugin ${quote(name)}`);
          if (filter == null)
            throw new Error(`onResolve() call is missing a filter`);
          let id = nextCallbackID++;
          onResolveCallbacks[id] = { name, callback, note: registeredNote };
          plugin.onResolve.push({ id, filter: filter.source, namespace: namespace || "" });
        },
        onLoad(options, callback) {
          let registeredText = `This error came from the "onLoad" callback registered here:`;
          let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onLoad");
          let keys2 = {};
          let filter = getFlag(options, keys2, "filter", mustBeRegExp);
          let namespace = getFlag(options, keys2, "namespace", mustBeString);
          checkForInvalidFlags(options, keys2, `in onLoad() call for plugin ${quote(name)}`);
          if (filter == null)
            throw new Error(`onLoad() call is missing a filter`);
          let id = nextCallbackID++;
          onLoadCallbacks[id] = { name, callback, note: registeredNote };
          plugin.onLoad.push({ id, filter: filter.source, namespace: namespace || "" });
        },
        onDispose(callback) {
          onDisposeCallbacks.push(callback);
        },
        esbuild: streamIn.esbuild
      });
      if (promise)
        await promise;
      requestPlugins.push(plugin);
    } catch (e) {
      return { ok: false, error: e, pluginName: name };
    }
  }
  requestCallbacks["on-start"] = async (id, request) => {
    let response = { errors: [], warnings: [] };
    await Promise.all(onStartCallbacks.map(async ({ name, callback, note }) => {
      try {
        let result = await callback();
        if (result != null) {
          if (typeof result !== "object")
            throw new Error(`Expected onStart() callback in plugin ${quote(name)} to return an object`);
          let keys = {};
          let errors = getFlag(result, keys, "errors", mustBeArray);
          let warnings = getFlag(result, keys, "warnings", mustBeArray);
          checkForInvalidFlags(result, keys, `from onStart() callback in plugin ${quote(name)}`);
          if (errors != null)
            response.errors.push(...sanitizeMessages(errors, "errors", details, name));
          if (warnings != null)
            response.warnings.push(...sanitizeMessages(warnings, "warnings", details, name));
        }
      } catch (e) {
        response.errors.push(extractErrorMessageV8(e, streamIn, details, note && note(), name));
      }
    }));
    sendResponse(id, response);
  };
  requestCallbacks["on-resolve"] = async (id, request) => {
    let response = {}, name = "", callback, note;
    for (let id2 of request.ids) {
      try {
        ({ name, callback, note } = onResolveCallbacks[id2]);
        let result = await callback({
          path: request.path,
          importer: request.importer,
          namespace: request.namespace,
          resolveDir: request.resolveDir,
          kind: request.kind,
          pluginData: details.load(request.pluginData)
        });
        if (result != null) {
          if (typeof result !== "object")
            throw new Error(`Expected onResolve() callback in plugin ${quote(name)} to return an object`);
          let keys = {};
          let pluginName = getFlag(result, keys, "pluginName", mustBeString);
          let path3 = getFlag(result, keys, "path", mustBeString);
          let namespace = getFlag(result, keys, "namespace", mustBeString);
          let suffix = getFlag(result, keys, "suffix", mustBeString);
          let external = getFlag(result, keys, "external", mustBeBoolean);
          let sideEffects = getFlag(result, keys, "sideEffects", mustBeBoolean);
          let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
          let errors = getFlag(result, keys, "errors", mustBeArray);
          let warnings = getFlag(result, keys, "warnings", mustBeArray);
          let watchFiles = getFlag(result, keys, "watchFiles", mustBeArray);
          let watchDirs = getFlag(result, keys, "watchDirs", mustBeArray);
          checkForInvalidFlags(result, keys, `from onResolve() callback in plugin ${quote(name)}`);
          response.id = id2;
          if (pluginName != null)
            response.pluginName = pluginName;
          if (path3 != null)
            response.path = path3;
          if (namespace != null)
            response.namespace = namespace;
          if (suffix != null)
            response.suffix = suffix;
          if (external != null)
            response.external = external;
          if (sideEffects != null)
            response.sideEffects = sideEffects;
          if (pluginData != null)
            response.pluginData = details.store(pluginData);
          if (errors != null)
            response.errors = sanitizeMessages(errors, "errors", details, name);
          if (warnings != null)
            response.warnings = sanitizeMessages(warnings, "warnings", details, name);
          if (watchFiles != null)
            response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
          if (watchDirs != null)
            response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
          break;
        }
      } catch (e) {
        response = { id: id2, errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)] };
        break;
      }
    }
    sendResponse(id, response);
  };
  requestCallbacks["on-load"] = async (id, request) => {
    let response = {}, name = "", callback, note;
    for (let id2 of request.ids) {
      try {
        ({ name, callback, note } = onLoadCallbacks[id2]);
        let result = await callback({
          path: request.path,
          namespace: request.namespace,
          suffix: request.suffix,
          pluginData: details.load(request.pluginData)
        });
        if (result != null) {
          if (typeof result !== "object")
            throw new Error(`Expected onLoad() callback in plugin ${quote(name)} to return an object`);
          let keys = {};
          let pluginName = getFlag(result, keys, "pluginName", mustBeString);
          let contents = getFlag(result, keys, "contents", mustBeStringOrUint8Array);
          let resolveDir = getFlag(result, keys, "resolveDir", mustBeString);
          let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
          let loader = getFlag(result, keys, "loader", mustBeString);
          let errors = getFlag(result, keys, "errors", mustBeArray);
          let warnings = getFlag(result, keys, "warnings", mustBeArray);
          let watchFiles = getFlag(result, keys, "watchFiles", mustBeArray);
          let watchDirs = getFlag(result, keys, "watchDirs", mustBeArray);
          checkForInvalidFlags(result, keys, `from onLoad() callback in plugin ${quote(name)}`);
          response.id = id2;
          if (pluginName != null)
            response.pluginName = pluginName;
          if (contents instanceof Uint8Array)
            response.contents = contents;
          else if (contents != null)
            response.contents = encodeUTF8(contents);
          if (resolveDir != null)
            response.resolveDir = resolveDir;
          if (pluginData != null)
            response.pluginData = details.store(pluginData);
          if (loader != null)
            response.loader = loader;
          if (errors != null)
            response.errors = sanitizeMessages(errors, "errors", details, name);
          if (warnings != null)
            response.warnings = sanitizeMessages(warnings, "warnings", details, name);
          if (watchFiles != null)
            response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
          if (watchDirs != null)
            response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
          break;
        }
      } catch (e) {
        response = { id: id2, errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)] };
        break;
      }
    }
    sendResponse(id, response);
  };
  let runOnEndCallbacks = (result, done) => done([], []);
  if (onEndCallbacks.length > 0) {
    runOnEndCallbacks = (result, done) => {
      (async () => {
        const onEndErrors = [];
        const onEndWarnings = [];
        for (const { name, callback, note } of onEndCallbacks) {
          let newErrors;
          let newWarnings;
          try {
            const value = await callback(result);
            if (value != null) {
              if (typeof value !== "object")
                throw new Error(`Expected onEnd() callback in plugin ${quote(name)} to return an object`);
              let keys = {};
              let errors = getFlag(value, keys, "errors", mustBeArray);
              let warnings = getFlag(value, keys, "warnings", mustBeArray);
              checkForInvalidFlags(value, keys, `from onEnd() callback in plugin ${quote(name)}`);
              if (errors != null)
                newErrors = sanitizeMessages(errors, "errors", details, name);
              if (warnings != null)
                newWarnings = sanitizeMessages(warnings, "warnings", details, name);
            }
          } catch (e) {
            newErrors = [extractErrorMessageV8(e, streamIn, details, note && note(), name)];
          }
          if (newErrors) {
            onEndErrors.push(...newErrors);
            try {
              result.errors.push(...newErrors);
            } catch {
            }
          }
          if (newWarnings) {
            onEndWarnings.push(...newWarnings);
            try {
              result.warnings.push(...newWarnings);
            } catch {
            }
          }
        }
        done(onEndErrors, onEndWarnings);
      })();
    };
  }
  let scheduleOnDisposeCallbacks = () => {
    for (const cb of onDisposeCallbacks) {
      setTimeout(() => cb(), 0);
    }
  };
  isSetupDone = true;
  return {
    ok: true,
    requestPlugins,
    runOnEndCallbacks,
    scheduleOnDisposeCallbacks
  };
};
function createObjectStash() {
  const map = /* @__PURE__ */ new Map();
  let nextID = 0;
  return {
    load(id) {
      return map.get(id);
    },
    store(value) {
      if (value === void 0)
        return -1;
      const id = nextID++;
      map.set(id, value);
      return id;
    }
  };
}
function extractCallerV8(e, streamIn, ident) {
  let note;
  let tried = false;
  return () => {
    if (tried)
      return note;
    tried = true;
    try {
      let lines = (e.stack + "").split("\n");
      lines.splice(1, 1);
      let location = parseStackLinesV8(streamIn, lines, ident);
      if (location) {
        note = { text: e.message, location };
        return note;
      }
    } catch {
    }
  };
}
function extractErrorMessageV8(e, streamIn, stash, note, pluginName) {
  let text = "Internal error";
  let location = null;
  try {
    text = (e && e.message || e) + "";
  } catch {
  }
  try {
    location = parseStackLinesV8(streamIn, (e.stack + "").split("\n"), "");
  } catch {
  }
  return { id: "", pluginName, text, location, notes: note ? [note] : [], detail: stash ? stash.store(e) : -1 };
}
function parseStackLinesV8(streamIn, lines, ident) {
  let at = "    at ";
  if (streamIn.readFileSync && !lines[0].startsWith(at) && lines[1].startsWith(at)) {
    for (let i = 1; i < lines.length; i++) {
      let line = lines[i];
      if (!line.startsWith(at))
        continue;
      line = line.slice(at.length);
      while (true) {
        let match = /^(?:new |async )?\S+ \((.*)\)$/.exec(line);
        if (match) {
          line = match[1];
          continue;
        }
        match = /^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(line);
        if (match) {
          line = match[1];
          continue;
        }
        match = /^(\S+):(\d+):(\d+)$/.exec(line);
        if (match) {
          let contents;
          try {
            contents = streamIn.readFileSync(match[1], "utf8");
          } catch {
            break;
          }
          let lineText = contents.split(/\r\n|\r|\n|\u2028|\u2029/)[+match[2] - 1] || "";
          let column = +match[3] - 1;
          let length = lineText.slice(column, column + ident.length) === ident ? ident.length : 0;
          return {
            file: match[1],
            namespace: "file",
            line: +match[2],
            column: encodeUTF8(lineText.slice(0, column)).length,
            length: encodeUTF8(lineText.slice(column, column + length)).length,
            lineText: lineText + "\n" + lines.slice(1).join("\n"),
            suggestion: ""
          };
        }
        break;
      }
    }
  }
  return null;
}
function failureErrorWithLog(text, errors, warnings) {
  let limit = 5;
  let summary = errors.length < 1 ? "" : ` with ${errors.length} error${errors.length < 2 ? "" : "s"}:` + errors.slice(0, limit + 1).map((e, i) => {
    if (i === limit)
      return "\n...";
    if (!e.location)
      return `
error: ${e.text}`;
    let { file, line, column } = e.location;
    let pluginText = e.pluginName ? `[plugin: ${e.pluginName}] ` : "";
    return `
${file}:${line}:${column}: ERROR: ${pluginText}${e.text}`;
  }).join("");
  let error = new Error(`${text}${summary}`);
  error.errors = errors;
  error.warnings = warnings;
  return error;
}
function replaceDetailsInMessages(messages, stash) {
  for (const message of messages) {
    message.detail = stash.load(message.detail);
  }
  return messages;
}
function sanitizeLocation(location, where) {
  if (location == null)
    return null;
  let keys = {};
  let file = getFlag(location, keys, "file", mustBeString);
  let namespace = getFlag(location, keys, "namespace", mustBeString);
  let line = getFlag(location, keys, "line", mustBeInteger);
  let column = getFlag(location, keys, "column", mustBeInteger);
  let length = getFlag(location, keys, "length", mustBeInteger);
  let lineText = getFlag(location, keys, "lineText", mustBeString);
  let suggestion = getFlag(location, keys, "suggestion", mustBeString);
  checkForInvalidFlags(location, keys, where);
  return {
    file: file || "",
    namespace: namespace || "",
    line: line || 0,
    column: column || 0,
    length: length || 0,
    lineText: lineText || "",
    suggestion: suggestion || ""
  };
}
function sanitizeMessages(messages, property, stash, fallbackPluginName) {
  let messagesClone = [];
  let index = 0;
  for (const message of messages) {
    let keys = {};
    let id = getFlag(message, keys, "id", mustBeString);
    let pluginName = getFlag(message, keys, "pluginName", mustBeString);
    let text = getFlag(message, keys, "text", mustBeString);
    let location = getFlag(message, keys, "location", mustBeObjectOrNull);
    let notes = getFlag(message, keys, "notes", mustBeArray);
    let detail = getFlag(message, keys, "detail", canBeAnything);
    let where = `in element ${index} of "${property}"`;
    checkForInvalidFlags(message, keys, where);
    let notesClone = [];
    if (notes) {
      for (const note of notes) {
        let noteKeys = {};
        let noteText = getFlag(note, noteKeys, "text", mustBeString);
        let noteLocation = getFlag(note, noteKeys, "location", mustBeObjectOrNull);
        checkForInvalidFlags(note, noteKeys, where);
        notesClone.push({
          text: noteText || "",
          location: sanitizeLocation(noteLocation, where)
        });
      }
    }
    messagesClone.push({
      id: id || "",
      pluginName: pluginName || fallbackPluginName,
      text: text || "",
      location: sanitizeLocation(location, where),
      notes: notesClone,
      detail: stash ? stash.store(detail) : -1
    });
    index++;
  }
  return messagesClone;
}
function sanitizeStringArray(values, property) {
  const result = [];
  for (const value of values) {
    if (typeof value !== "string")
      throw new Error(`${quote(property)} must be an array of strings`);
    result.push(value);
  }
  return result;
}
function convertOutputFiles({ path: path3, contents }) {
  let text = null;
  return {
    path: path3,
    contents,
    get text() {
      const binary = this.contents;
      if (text === null || binary !== contents) {
        contents = binary;
        text = decodeUTF8(binary);
      }
      return text;
    }
  };
}

// lib/npm/node-platform.ts
var fs = __nccwpck_require__(7147);
var os = __nccwpck_require__(2037);
var path = __nccwpck_require__(1017);
var ESBUILD_BINARY_PATH = process.env.ESBUILD_BINARY_PATH || ESBUILD_BINARY_PATH;

// lib/npm/node.ts
var child_process = __nccwpck_require__(2081);
var crypto = __nccwpck_require__(6113);
var path2 = __nccwpck_require__(1017);
var fs2 = __nccwpck_require__(7147);
var os2 = __nccwpck_require__(2037);
var tty = __nccwpck_require__(6224);
var worker_threads;
if (process.env.ESBUILD_WORKER_THREADS !== "0") {
  try {
    worker_threads = __nccwpck_require__(1267);
  } catch {
  }
  let [major, minor] = process.versions.node.split(".");
  if (
    // <v12.17.0 does not work
    +major < 12 || +major === 12 && +minor < 17 || +major === 13 && +minor < 13
  ) {
    worker_threads = void 0;
  }
}
var _a;
var isInternalWorkerThread = ((_a = worker_threads == null ? void 0 : worker_threads.workerData) == null ? void 0 : _a.esbuildVersion) === "0.17.6";
var esbuildCommandAndArgs = () => {
  if ((!ESBUILD_BINARY_PATH || true) && (path2.basename(__filename) !== "main.js" || path2.basename(__dirname) !== "lib")) {
    throw new Error(
      `The esbuild JavaScript API cannot be bundled. Please mark the "esbuild" package as external so it's not included in the bundle.

More information: The file containing the code for esbuild's JavaScript API (${__filename}) does not appear to be inside the esbuild package on the file system, which usually means that the esbuild package was bundled into another file. This is problematic because the API needs to run a binary executable inside the esbuild package which is located using a relative path from the API code to the executable. If the esbuild package is bundled, the relative path will be incorrect and the executable won't be found.`
    );
  }
  if (true) {
    return ["node", [path2.join(__dirname, "..", "bin", "esbuild")]];
  } else {}
};
var isTTY = () => tty.isatty(2);
var fsSync = {
  readFile(tempFile, callback) {
    try {
      let contents = fs2.readFileSync(tempFile, "utf8");
      try {
        fs2.unlinkSync(tempFile);
      } catch {
      }
      callback(null, contents);
    } catch (err) {
      callback(err, null);
    }
  },
  writeFile(contents, callback) {
    try {
      let tempFile = randomFileName();
      fs2.writeFileSync(tempFile, contents);
      callback(tempFile);
    } catch {
      callback(null);
    }
  }
};
var fsAsync = {
  readFile(tempFile, callback) {
    try {
      fs2.readFile(tempFile, "utf8", (err, contents) => {
        try {
          fs2.unlink(tempFile, () => callback(err, contents));
        } catch {
          callback(err, contents);
        }
      });
    } catch (err) {
      callback(err, null);
    }
  },
  writeFile(contents, callback) {
    try {
      let tempFile = randomFileName();
      fs2.writeFile(tempFile, contents, (err) => err !== null ? callback(null) : callback(tempFile));
    } catch {
      callback(null);
    }
  }
};
var version = "0.17.6";
var build = (options) => ensureServiceIsRunning().build(options);
var context = (buildOptions) => ensureServiceIsRunning().context(buildOptions);
var transform = (input, options) => ensureServiceIsRunning().transform(input, options);
var formatMessages = (messages, options) => ensureServiceIsRunning().formatMessages(messages, options);
var analyzeMetafile = (messages, options) => ensureServiceIsRunning().analyzeMetafile(messages, options);
var buildSync = (options) => {
  if (worker_threads && !isInternalWorkerThread) {
    if (!workerThreadService)
      workerThreadService = startWorkerThreadService(worker_threads);
    return workerThreadService.buildSync(options);
  }
  let result;
  runServiceSync((service) => service.buildOrContext({
    callName: "buildSync",
    refs: null,
    options,
    isTTY: isTTY(),
    defaultWD,
    callback: (err, res) => {
      if (err)
        throw err;
      result = res;
    }
  }));
  return result;
};
var transformSync = (input, options) => {
  if (worker_threads && !isInternalWorkerThread) {
    if (!workerThreadService)
      workerThreadService = startWorkerThreadService(worker_threads);
    return workerThreadService.transformSync(input, options);
  }
  let result;
  runServiceSync((service) => service.transform({
    callName: "transformSync",
    refs: null,
    input,
    options: options || {},
    isTTY: isTTY(),
    fs: fsSync,
    callback: (err, res) => {
      if (err)
        throw err;
      result = res;
    }
  }));
  return result;
};
var formatMessagesSync = (messages, options) => {
  if (worker_threads && !isInternalWorkerThread) {
    if (!workerThreadService)
      workerThreadService = startWorkerThreadService(worker_threads);
    return workerThreadService.formatMessagesSync(messages, options);
  }
  let result;
  runServiceSync((service) => service.formatMessages({
    callName: "formatMessagesSync",
    refs: null,
    messages,
    options,
    callback: (err, res) => {
      if (err)
        throw err;
      result = res;
    }
  }));
  return result;
};
var analyzeMetafileSync = (metafile, options) => {
  if (worker_threads && !isInternalWorkerThread) {
    if (!workerThreadService)
      workerThreadService = startWorkerThreadService(worker_threads);
    return workerThreadService.analyzeMetafileSync(metafile, options);
  }
  let result;
  runServiceSync((service) => service.analyzeMetafile({
    callName: "analyzeMetafileSync",
    refs: null,
    metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
    options,
    callback: (err, res) => {
      if (err)
        throw err;
      result = res;
    }
  }));
  return result;
};
var initializeWasCalled = false;
var initialize = (options) => {
  options = validateInitializeOptions(options || {});
  if (options.wasmURL)
    throw new Error(`The "wasmURL" option only works in the browser`);
  if (options.wasmModule)
    throw new Error(`The "wasmModule" option only works in the browser`);
  if (options.worker)
    throw new Error(`The "worker" option only works in the browser`);
  if (initializeWasCalled)
    throw new Error('Cannot call "initialize" more than once');
  ensureServiceIsRunning();
  initializeWasCalled = true;
  return Promise.resolve();
};
var defaultWD = process.cwd();
var longLivedService;
var ensureServiceIsRunning = () => {
  if (longLivedService)
    return longLivedService;
  let [command, args] = esbuildCommandAndArgs();
  let child = child_process.spawn(command, args.concat(`--service=${"0.17.6"}`, "--ping"), {
    windowsHide: true,
    stdio: ["pipe", "pipe", "inherit"],
    cwd: defaultWD
  });
  let { readFromStdout, afterClose, service } = createChannel({
    writeToStdin(bytes) {
      child.stdin.write(bytes, (err) => {
        if (err)
          afterClose(err);
      });
    },
    readFileSync: fs2.readFileSync,
    isSync: false,
    hasFS: true,
    esbuild: node_exports
  });
  child.stdin.on("error", afterClose);
  child.on("error", afterClose);
  const stdin = child.stdin;
  const stdout = child.stdout;
  stdout.on("data", readFromStdout);
  stdout.on("end", afterClose);
  let refCount = 0;
  child.unref();
  if (stdin.unref) {
    stdin.unref();
  }
  if (stdout.unref) {
    stdout.unref();
  }
  const refs = {
    ref() {
      if (++refCount === 1)
        child.ref();
    },
    unref() {
      if (--refCount === 0)
        child.unref();
    }
  };
  longLivedService = {
    build: (options) => new Promise((resolve, reject) => {
      service.buildOrContext({
        callName: "build",
        refs,
        options,
        isTTY: isTTY(),
        defaultWD,
        callback: (err, res) => err ? reject(err) : resolve(res)
      });
    }),
    context: (options) => new Promise((resolve, reject) => service.buildOrContext({
      callName: "context",
      refs,
      options,
      isTTY: isTTY(),
      defaultWD,
      callback: (err, res) => err ? reject(err) : resolve(res)
    })),
    transform: (input, options) => new Promise((resolve, reject) => service.transform({
      callName: "transform",
      refs,
      input,
      options: options || {},
      isTTY: isTTY(),
      fs: fsAsync,
      callback: (err, res) => err ? reject(err) : resolve(res)
    })),
    formatMessages: (messages, options) => new Promise((resolve, reject) => service.formatMessages({
      callName: "formatMessages",
      refs,
      messages,
      options,
      callback: (err, res) => err ? reject(err) : resolve(res)
    })),
    analyzeMetafile: (metafile, options) => new Promise((resolve, reject) => service.analyzeMetafile({
      callName: "analyzeMetafile",
      refs,
      metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
      options,
      callback: (err, res) => err ? reject(err) : resolve(res)
    }))
  };
  return longLivedService;
};
var runServiceSync = (callback) => {
  let [command, args] = esbuildCommandAndArgs();
  let stdin = new Uint8Array();
  let { readFromStdout, afterClose, service } = createChannel({
    writeToStdin(bytes) {
      if (stdin.length !== 0)
        throw new Error("Must run at most one command");
      stdin = bytes;
    },
    isSync: true,
    hasFS: true,
    esbuild: node_exports
  });
  callback(service);
  let stdout = child_process.execFileSync(command, args.concat(`--service=${"0.17.6"}`), {
    cwd: defaultWD,
    windowsHide: true,
    input: stdin,
    // We don't know how large the output could be. If it's too large, the
    // command will fail with ENOBUFS. Reserve 16mb for now since that feels
    // like it should be enough. Also allow overriding this with an environment
    // variable.
    maxBuffer: +process.env.ESBUILD_MAX_BUFFER || 16 * 1024 * 1024
  });
  readFromStdout(stdout);
  afterClose(null);
};
var randomFileName = () => {
  return path2.join(os2.tmpdir(), `esbuild-${crypto.randomBytes(32).toString("hex")}`);
};
var workerThreadService = null;
var startWorkerThreadService = (worker_threads2) => {
  let { port1: mainPort, port2: workerPort } = new worker_threads2.MessageChannel();
  let worker = new worker_threads2.Worker(__filename, {
    workerData: { workerPort, defaultWD, esbuildVersion: "0.17.6" },
    transferList: [workerPort],
    // From node's documentation: https://nodejs.org/api/worker_threads.html
    //
    //   Take care when launching worker threads from preload scripts (scripts loaded
    //   and run using the `-r` command line flag). Unless the `execArgv` option is
    //   explicitly set, new Worker threads automatically inherit the command line flags
    //   from the running process and will preload the same preload scripts as the main
    //   thread. If the preload script unconditionally launches a worker thread, every
    //   thread spawned will spawn another until the application crashes.
    //
    execArgv: []
  });
  let nextID = 0;
  let fakeBuildError = (text) => {
    let error = new Error(`Build failed with 1 error:
error: ${text}`);
    let errors = [{ id: "", pluginName: "", text, location: null, notes: [], detail: void 0 }];
    error.errors = errors;
    error.warnings = [];
    return error;
  };
  let validateBuildSyncOptions = (options) => {
    if (!options)
      return;
    let plugins = options.plugins;
    if (plugins && plugins.length > 0)
      throw fakeBuildError(`Cannot use plugins in synchronous API calls`);
  };
  let applyProperties = (object, properties) => {
    for (let key in properties) {
      object[key] = properties[key];
    }
  };
  let runCallSync = (command, args) => {
    let id = nextID++;
    let sharedBuffer = new SharedArrayBuffer(8);
    let sharedBufferView = new Int32Array(sharedBuffer);
    let msg = { sharedBuffer, id, command, args };
    worker.postMessage(msg);
    let status = Atomics.wait(sharedBufferView, 0, 0);
    if (status !== "ok" && status !== "not-equal")
      throw new Error("Internal error: Atomics.wait() failed: " + status);
    let { message: { id: id2, resolve, reject, properties } } = worker_threads2.receiveMessageOnPort(mainPort);
    if (id !== id2)
      throw new Error(`Internal error: Expected id ${id} but got id ${id2}`);
    if (reject) {
      applyProperties(reject, properties);
      throw reject;
    }
    return resolve;
  };
  worker.unref();
  return {
    buildSync(options) {
      validateBuildSyncOptions(options);
      return runCallSync("build", [options]);
    },
    transformSync(input, options) {
      return runCallSync("transform", [input, options]);
    },
    formatMessagesSync(messages, options) {
      return runCallSync("formatMessages", [messages, options]);
    },
    analyzeMetafileSync(metafile, options) {
      return runCallSync("analyzeMetafile", [metafile, options]);
    }
  };
};
var startSyncServiceWorker = () => {
  let workerPort = worker_threads.workerData.workerPort;
  let parentPort = worker_threads.parentPort;
  let extractProperties = (object) => {
    let properties = {};
    if (object && typeof object === "object") {
      for (let key in object) {
        properties[key] = object[key];
      }
    }
    return properties;
  };
  try {
    let service = ensureServiceIsRunning();
    defaultWD = worker_threads.workerData.defaultWD;
    parentPort.on("message", (msg) => {
      (async () => {
        let { sharedBuffer, id, command, args } = msg;
        let sharedBufferView = new Int32Array(sharedBuffer);
        try {
          switch (command) {
            case "build":
              workerPort.postMessage({ id, resolve: await service.build(args[0]) });
              break;
            case "transform":
              workerPort.postMessage({ id, resolve: await service.transform(args[0], args[1]) });
              break;
            case "formatMessages":
              workerPort.postMessage({ id, resolve: await service.formatMessages(args[0], args[1]) });
              break;
            case "analyzeMetafile":
              workerPort.postMessage({ id, resolve: await service.analyzeMetafile(args[0], args[1]) });
              break;
            default:
              throw new Error(`Invalid command: ${command}`);
          }
        } catch (reject) {
          workerPort.postMessage({ id, reject, properties: extractProperties(reject) });
        }
        Atomics.add(sharedBufferView, 0, 1);
        Atomics.notify(sharedBufferView, 0, Infinity);
      })();
    });
  } catch (reject) {
    parentPort.on("message", (msg) => {
      let { sharedBuffer, id } = msg;
      let sharedBufferView = new Int32Array(sharedBuffer);
      workerPort.postMessage({ id, reject, properties: extractProperties(reject) });
      Atomics.add(sharedBufferView, 0, 1);
      Atomics.notify(sharedBufferView, 0, Infinity);
    });
  }
};
if (isInternalWorkerThread) {
  startSyncServiceWorker();
}
var node_default = node_exports;
// Annotate the CommonJS export names for ESM import in node:
0 && (0);


/***/ }),

/***/ 2410:
/***/ ((module) => {

"use strict";


module.exports = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};


/***/ }),

/***/ 7047:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const proc = typeof process === 'object' && process ? process : {
  stdout: null,
  stderr: null,
}
const EE = __nccwpck_require__(2361)
const Stream = __nccwpck_require__(2781)
const SD = (__nccwpck_require__(1576).StringDecoder)

const EOF = Symbol('EOF')
const MAYBE_EMIT_END = Symbol('maybeEmitEnd')
const EMITTED_END = Symbol('emittedEnd')
const EMITTING_END = Symbol('emittingEnd')
const EMITTED_ERROR = Symbol('emittedError')
const CLOSED = Symbol('closed')
const READ = Symbol('read')
const FLUSH = Symbol('flush')
const FLUSHCHUNK = Symbol('flushChunk')
const ENCODING = Symbol('encoding')
const DECODER = Symbol('decoder')
const FLOWING = Symbol('flowing')
const PAUSED = Symbol('paused')
const RESUME = Symbol('resume')
const BUFFERLENGTH = Symbol('bufferLength')
const BUFFERPUSH = Symbol('bufferPush')
const BUFFERSHIFT = Symbol('bufferShift')
const OBJECTMODE = Symbol('objectMode')
const DESTROYED = Symbol('destroyed')
const EMITDATA = Symbol('emitData')
const EMITEND = Symbol('emitEnd')
const EMITEND2 = Symbol('emitEnd2')
const ASYNC = Symbol('async')

const defer = fn => Promise.resolve().then(fn)

// TODO remove when Node v8 support drops
const doIter = global._MP_NO_ITERATOR_SYMBOLS_  !== '1'
const ASYNCITERATOR = doIter && Symbol.asyncIterator
  || Symbol('asyncIterator not implemented')
const ITERATOR = doIter && Symbol.iterator
  || Symbol('iterator not implemented')

// events that mean 'the stream is over'
// these are treated specially, and re-emitted
// if they are listened for after emitting.
const isEndish = ev =>
  ev === 'end' ||
  ev === 'finish' ||
  ev === 'prefinish'

const isArrayBuffer = b => b instanceof ArrayBuffer ||
  typeof b === 'object' &&
  b.constructor &&
  b.constructor.name === 'ArrayBuffer' &&
  b.byteLength >= 0

const isArrayBufferView = b => !Buffer.isBuffer(b) && ArrayBuffer.isView(b)

class Pipe {
  constructor (src, dest, opts) {
    this.src = src
    this.dest = dest
    this.opts = opts
    this.ondrain = () => src[RESUME]()
    dest.on('drain', this.ondrain)
  }
  unpipe () {
    this.dest.removeListener('drain', this.ondrain)
  }
  // istanbul ignore next - only here for the prototype
  proxyErrors () {}
  end () {
    this.unpipe()
    if (this.opts.end)
      this.dest.end()
  }
}

class PipeProxyErrors extends Pipe {
  unpipe () {
    this.src.removeListener('error', this.proxyErrors)
    super.unpipe()
  }
  constructor (src, dest, opts) {
    super(src, dest, opts)
    this.proxyErrors = er => dest.emit('error', er)
    src.on('error', this.proxyErrors)
  }
}

module.exports = class Minipass extends Stream {
  constructor (options) {
    super()
    this[FLOWING] = false
    // whether we're explicitly paused
    this[PAUSED] = false
    this.pipes = []
    this.buffer = []
    this[OBJECTMODE] = options && options.objectMode || false
    if (this[OBJECTMODE])
      this[ENCODING] = null
    else
      this[ENCODING] = options && options.encoding || null
    if (this[ENCODING] === 'buffer')
      this[ENCODING] = null
    this[ASYNC] = options && !!options.async || false
    this[DECODER] = this[ENCODING] ? new SD(this[ENCODING]) : null
    this[EOF] = false
    this[EMITTED_END] = false
    this[EMITTING_END] = false
    this[CLOSED] = false
    this[EMITTED_ERROR] = null
    this.writable = true
    this.readable = true
    this[BUFFERLENGTH] = 0
    this[DESTROYED] = false
  }

  get bufferLength () { return this[BUFFERLENGTH] }

  get encoding () { return this[ENCODING] }
  set encoding (enc) {
    if (this[OBJECTMODE])
      throw new Error('cannot set encoding in objectMode')

    if (this[ENCODING] && enc !== this[ENCODING] &&
        (this[DECODER] && this[DECODER].lastNeed || this[BUFFERLENGTH]))
      throw new Error('cannot change encoding')

    if (this[ENCODING] !== enc) {
      this[DECODER] = enc ? new SD(enc) : null
      if (this.buffer.length)
        this.buffer = this.buffer.map(chunk => this[DECODER].write(chunk))
    }

    this[ENCODING] = enc
  }

  setEncoding (enc) {
    this.encoding = enc
  }

  get objectMode () { return this[OBJECTMODE] }
  set objectMode (om) { this[OBJECTMODE] = this[OBJECTMODE] || !!om }

  get ['async'] () { return this[ASYNC] }
  set ['async'] (a) { this[ASYNC] = this[ASYNC] || !!a }

  write (chunk, encoding, cb) {
    if (this[EOF])
      throw new Error('write after end')

    if (this[DESTROYED]) {
      this.emit('error', Object.assign(
        new Error('Cannot call write after a stream was destroyed'),
        { code: 'ERR_STREAM_DESTROYED' }
      ))
      return true
    }

    if (typeof encoding === 'function')
      cb = encoding, encoding = 'utf8'

    if (!encoding)
      encoding = 'utf8'

    const fn = this[ASYNC] ? defer : f => f()

    // convert array buffers and typed array views into buffers
    // at some point in the future, we may want to do the opposite!
    // leave strings and buffers as-is
    // anything else switches us into object mode
    if (!this[OBJECTMODE] && !Buffer.isBuffer(chunk)) {
      if (isArrayBufferView(chunk))
        chunk = Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength)
      else if (isArrayBuffer(chunk))
        chunk = Buffer.from(chunk)
      else if (typeof chunk !== 'string')
        // use the setter so we throw if we have encoding set
        this.objectMode = true
    }

    // handle object mode up front, since it's simpler
    // this yields better performance, fewer checks later.
    if (this[OBJECTMODE]) {
      /* istanbul ignore if - maybe impossible? */
      if (this.flowing && this[BUFFERLENGTH] !== 0)
        this[FLUSH](true)

      if (this.flowing)
        this.emit('data', chunk)
      else
        this[BUFFERPUSH](chunk)

      if (this[BUFFERLENGTH] !== 0)
        this.emit('readable')

      if (cb)
        fn(cb)

      return this.flowing
    }

    // at this point the chunk is a buffer or string
    // don't buffer it up or send it to the decoder
    if (!chunk.length) {
      if (this[BUFFERLENGTH] !== 0)
        this.emit('readable')
      if (cb)
        fn(cb)
      return this.flowing
    }

    // fast-path writing strings of same encoding to a stream with
    // an empty buffer, skipping the buffer/decoder dance
    if (typeof chunk === 'string' &&
        // unless it is a string already ready for us to use
        !(encoding === this[ENCODING] && !this[DECODER].lastNeed)) {
      chunk = Buffer.from(chunk, encoding)
    }

    if (Buffer.isBuffer(chunk) && this[ENCODING])
      chunk = this[DECODER].write(chunk)

    // Note: flushing CAN potentially switch us into not-flowing mode
    if (this.flowing && this[BUFFERLENGTH] !== 0)
      this[FLUSH](true)

    if (this.flowing)
      this.emit('data', chunk)
    else
      this[BUFFERPUSH](chunk)

    if (this[BUFFERLENGTH] !== 0)
      this.emit('readable')

    if (cb)
      fn(cb)

    return this.flowing
  }

  read (n) {
    if (this[DESTROYED])
      return null

    if (this[BUFFERLENGTH] === 0 || n === 0 || n > this[BUFFERLENGTH]) {
      this[MAYBE_EMIT_END]()
      return null
    }

    if (this[OBJECTMODE])
      n = null

    if (this.buffer.length > 1 && !this[OBJECTMODE]) {
      if (this.encoding)
        this.buffer = [this.buffer.join('')]
      else
        this.buffer = [Buffer.concat(this.buffer, this[BUFFERLENGTH])]
    }

    const ret = this[READ](n || null, this.buffer[0])
    this[MAYBE_EMIT_END]()
    return ret
  }

  [READ] (n, chunk) {
    if (n === chunk.length || n === null)
      this[BUFFERSHIFT]()
    else {
      this.buffer[0] = chunk.slice(n)
      chunk = chunk.slice(0, n)
      this[BUFFERLENGTH] -= n
    }

    this.emit('data', chunk)

    if (!this.buffer.length && !this[EOF])
      this.emit('drain')

    return chunk
  }

  end (chunk, encoding, cb) {
    if (typeof chunk === 'function')
      cb = chunk, chunk = null
    if (typeof encoding === 'function')
      cb = encoding, encoding = 'utf8'
    if (chunk)
      this.write(chunk, encoding)
    if (cb)
      this.once('end', cb)
    this[EOF] = true
    this.writable = false

    // if we haven't written anything, then go ahead and emit,
    // even if we're not reading.
    // we'll re-emit if a new 'end' listener is added anyway.
    // This makes MP more suitable to write-only use cases.
    if (this.flowing || !this[PAUSED])
      this[MAYBE_EMIT_END]()
    return this
  }

  // don't let the internal resume be overwritten
  [RESUME] () {
    if (this[DESTROYED])
      return

    this[PAUSED] = false
    this[FLOWING] = true
    this.emit('resume')
    if (this.buffer.length)
      this[FLUSH]()
    else if (this[EOF])
      this[MAYBE_EMIT_END]()
    else
      this.emit('drain')
  }

  resume () {
    return this[RESUME]()
  }

  pause () {
    this[FLOWING] = false
    this[PAUSED] = true
  }

  get destroyed () {
    return this[DESTROYED]
  }

  get flowing () {
    return this[FLOWING]
  }

  get paused () {
    return this[PAUSED]
  }

  [BUFFERPUSH] (chunk) {
    if (this[OBJECTMODE])
      this[BUFFERLENGTH] += 1
    else
      this[BUFFERLENGTH] += chunk.length
    this.buffer.push(chunk)
  }

  [BUFFERSHIFT] () {
    if (this.buffer.length) {
      if (this[OBJECTMODE])
        this[BUFFERLENGTH] -= 1
      else
        this[BUFFERLENGTH] -= this.buffer[0].length
    }
    return this.buffer.shift()
  }

  [FLUSH] (noDrain) {
    do {} while (this[FLUSHCHUNK](this[BUFFERSHIFT]()))

    if (!noDrain && !this.buffer.length && !this[EOF])
      this.emit('drain')
  }

  [FLUSHCHUNK] (chunk) {
    return chunk ? (this.emit('data', chunk), this.flowing) : false
  }

  pipe (dest, opts) {
    if (this[DESTROYED])
      return

    const ended = this[EMITTED_END]
    opts = opts || {}
    if (dest === proc.stdout || dest === proc.stderr)
      opts.end = false
    else
      opts.end = opts.end !== false
    opts.proxyErrors = !!opts.proxyErrors

    // piping an ended stream ends immediately
    if (ended) {
      if (opts.end)
        dest.end()
    } else {
      this.pipes.push(!opts.proxyErrors ? new Pipe(this, dest, opts)
        : new PipeProxyErrors(this, dest, opts))
      if (this[ASYNC])
        defer(() => this[RESUME]())
      else
        this[RESUME]()
    }

    return dest
  }

  unpipe (dest) {
    const p = this.pipes.find(p => p.dest === dest)
    if (p) {
      this.pipes.splice(this.pipes.indexOf(p), 1)
      p.unpipe()
    }
  }

  addListener (ev, fn) {
    return this.on(ev, fn)
  }

  on (ev, fn) {
    const ret = super.on(ev, fn)
    if (ev === 'data' && !this.pipes.length && !this.flowing)
      this[RESUME]()
    else if (ev === 'readable' && this[BUFFERLENGTH] !== 0)
      super.emit('readable')
    else if (isEndish(ev) && this[EMITTED_END]) {
      super.emit(ev)
      this.removeAllListeners(ev)
    } else if (ev === 'error' && this[EMITTED_ERROR]) {
      if (this[ASYNC])
        defer(() => fn.call(this, this[EMITTED_ERROR]))
      else
        fn.call(this, this[EMITTED_ERROR])
    }
    return ret
  }

  get emittedEnd () {
    return this[EMITTED_END]
  }

  [MAYBE_EMIT_END] () {
    if (!this[EMITTING_END] &&
        !this[EMITTED_END] &&
        !this[DESTROYED] &&
        this.buffer.length === 0 &&
        this[EOF]) {
      this[EMITTING_END] = true
      this.emit('end')
      this.emit('prefinish')
      this.emit('finish')
      if (this[CLOSED])
        this.emit('close')
      this[EMITTING_END] = false
    }
  }

  emit (ev, data, ...extra) {
    // error and close are only events allowed after calling destroy()
    if (ev !== 'error' && ev !== 'close' && ev !== DESTROYED && this[DESTROYED])
      return
    else if (ev === 'data') {
      return !data ? false
        : this[ASYNC] ? defer(() => this[EMITDATA](data))
        : this[EMITDATA](data)
    } else if (ev === 'end') {
      return this[EMITEND]()
    } else if (ev === 'close') {
      this[CLOSED] = true
      // don't emit close before 'end' and 'finish'
      if (!this[EMITTED_END] && !this[DESTROYED])
        return
      const ret = super.emit('close')
      this.removeAllListeners('close')
      return ret
    } else if (ev === 'error') {
      this[EMITTED_ERROR] = data
      const ret = super.emit('error', data)
      this[MAYBE_EMIT_END]()
      return ret
    } else if (ev === 'resume') {
      const ret = super.emit('resume')
      this[MAYBE_EMIT_END]()
      return ret
    } else if (ev === 'finish' || ev === 'prefinish') {
      const ret = super.emit(ev)
      this.removeAllListeners(ev)
      return ret
    }

    // Some other unknown event
    const ret = super.emit(ev, data, ...extra)
    this[MAYBE_EMIT_END]()
    return ret
  }

  [EMITDATA] (data) {
    for (const p of this.pipes) {
      if (p.dest.write(data) === false)
        this.pause()
    }
    const ret = super.emit('data', data)
    this[MAYBE_EMIT_END]()
    return ret
  }

  [EMITEND] () {
    if (this[EMITTED_END])
      return

    this[EMITTED_END] = true
    this.readable = false
    if (this[ASYNC])
      defer(() => this[EMITEND2]())
    else
      this[EMITEND2]()
  }

  [EMITEND2] () {
    if (this[DECODER]) {
      const data = this[DECODER].end()
      if (data) {
        for (const p of this.pipes) {
          p.dest.write(data)
        }
        super.emit('data', data)
      }
    }

    for (const p of this.pipes) {
      p.end()
    }
    const ret = super.emit('end')
    this.removeAllListeners('end')
    return ret
  }

  // const all = await stream.collect()
  collect () {
    const buf = []
    if (!this[OBJECTMODE])
      buf.dataLength = 0
    // set the promise first, in case an error is raised
    // by triggering the flow here.
    const p = this.promise()
    this.on('data', c => {
      buf.push(c)
      if (!this[OBJECTMODE])
        buf.dataLength += c.length
    })
    return p.then(() => buf)
  }

  // const data = await stream.concat()
  concat () {
    return this[OBJECTMODE]
      ? Promise.reject(new Error('cannot concat in objectMode'))
      : this.collect().then(buf =>
          this[OBJECTMODE]
            ? Promise.reject(new Error('cannot concat in objectMode'))
            : this[ENCODING] ? buf.join('') : Buffer.concat(buf, buf.dataLength))
  }

  // stream.promise().then(() => done, er => emitted error)
  promise () {
    return new Promise((resolve, reject) => {
      this.on(DESTROYED, () => reject(new Error('stream destroyed')))
      this.on('error', er => reject(er))
      this.on('end', () => resolve())
    })
  }

  // for await (let chunk of stream)
  [ASYNCITERATOR] () {
    const next = () => {
      const res = this.read()
      if (res !== null)
        return Promise.resolve({ done: false, value: res })

      if (this[EOF])
        return Promise.resolve({ done: true })

      let resolve = null
      let reject = null
      const onerr = er => {
        this.removeListener('data', ondata)
        this.removeListener('end', onend)
        reject(er)
      }
      const ondata = value => {
        this.removeListener('error', onerr)
        this.removeListener('end', onend)
        this.pause()
        resolve({ value: value, done: !!this[EOF] })
      }
      const onend = () => {
        this.removeListener('error', onerr)
        this.removeListener('data', ondata)
        resolve({ done: true })
      }
      const ondestroy = () => onerr(new Error('stream destroyed'))
      return new Promise((res, rej) => {
        reject = rej
        resolve = res
        this.once(DESTROYED, ondestroy)
        this.once('error', onerr)
        this.once('end', onend)
        this.once('data', ondata)
      })
    }

    return { next }
  }

  // for (let chunk of stream)
  [ITERATOR] () {
    const next = () => {
      const value = this.read()
      const done = value === null
      return { value, done }
    }
    return { next }
  }

  destroy (er) {
    if (this[DESTROYED]) {
      if (er)
        this.emit('error', er)
      else
        this.emit(DESTROYED)
      return this
    }

    this[DESTROYED] = true

    // throw away all buffered data, it's never coming out
    this.buffer.length = 0
    this[BUFFERLENGTH] = 0

    if (typeof this.close === 'function' && !this[CLOSED])
      this.close()

    if (er)
      this.emit('error', er)
    else // if no error to emit, still reject pending promises
      this.emit(DESTROYED)

    return this
  }

  static isStream (s) {
    return !!s && (s instanceof Minipass || s instanceof Stream ||
      s instanceof EE && (
        typeof s.pipe === 'function' || // readable
        (typeof s.write === 'function' && typeof s.end === 'function') // writable
      ))
  }
}


/***/ }),

/***/ 2583:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Update with any zlib constants that are added or changed in the future.
// Node v6 didn't export this, so we just hard code the version and rely
// on all the other hard-coded values from zlib v4736.  When node v6
// support drops, we can just export the realZlibConstants object.
const realZlibConstants = (__nccwpck_require__(9796).constants) ||
  /* istanbul ignore next */ { ZLIB_VERNUM: 4736 }

module.exports = Object.freeze(Object.assign(Object.create(null), {
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  Z_VERSION_ERROR: -6,
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  DEFLATE: 1,
  INFLATE: 2,
  GZIP: 3,
  GUNZIP: 4,
  DEFLATERAW: 5,
  INFLATERAW: 6,
  UNZIP: 7,
  BROTLI_DECODE: 8,
  BROTLI_ENCODE: 9,
  Z_MIN_WINDOWBITS: 8,
  Z_MAX_WINDOWBITS: 15,
  Z_DEFAULT_WINDOWBITS: 15,
  Z_MIN_CHUNK: 64,
  Z_MAX_CHUNK: Infinity,
  Z_DEFAULT_CHUNK: 16384,
  Z_MIN_MEMLEVEL: 1,
  Z_MAX_MEMLEVEL: 9,
  Z_DEFAULT_MEMLEVEL: 8,
  Z_MIN_LEVEL: -1,
  Z_MAX_LEVEL: 9,
  Z_DEFAULT_LEVEL: -1,
  BROTLI_OPERATION_PROCESS: 0,
  BROTLI_OPERATION_FLUSH: 1,
  BROTLI_OPERATION_FINISH: 2,
  BROTLI_OPERATION_EMIT_METADATA: 3,
  BROTLI_MODE_GENERIC: 0,
  BROTLI_MODE_TEXT: 1,
  BROTLI_MODE_FONT: 2,
  BROTLI_DEFAULT_MODE: 0,
  BROTLI_MIN_QUALITY: 0,
  BROTLI_MAX_QUALITY: 11,
  BROTLI_DEFAULT_QUALITY: 11,
  BROTLI_MIN_WINDOW_BITS: 10,
  BROTLI_MAX_WINDOW_BITS: 24,
  BROTLI_LARGE_MAX_WINDOW_BITS: 30,
  BROTLI_DEFAULT_WINDOW: 22,
  BROTLI_MIN_INPUT_BLOCK_BITS: 16,
  BROTLI_MAX_INPUT_BLOCK_BITS: 24,
  BROTLI_PARAM_MODE: 0,
  BROTLI_PARAM_QUALITY: 1,
  BROTLI_PARAM_LGWIN: 2,
  BROTLI_PARAM_LGBLOCK: 3,
  BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4,
  BROTLI_PARAM_SIZE_HINT: 5,
  BROTLI_PARAM_LARGE_WINDOW: 6,
  BROTLI_PARAM_NPOSTFIX: 7,
  BROTLI_PARAM_NDIRECT: 8,
  BROTLI_DECODER_RESULT_ERROR: 0,
  BROTLI_DECODER_RESULT_SUCCESS: 1,
  BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2,
  BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3,
  BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0,
  BROTLI_DECODER_PARAM_LARGE_WINDOW: 1,
  BROTLI_DECODER_NO_ERROR: 0,
  BROTLI_DECODER_SUCCESS: 1,
  BROTLI_DECODER_NEEDS_MORE_INPUT: 2,
  BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3,
  BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1,
  BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2,
  BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3,
  BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4,
  BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5,
  BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6,
  BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7,
  BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8,
  BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9,
  BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10,
  BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11,
  BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12,
  BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13,
  BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14,
  BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15,
  BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16,
  BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19,
  BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20,
  BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21,
  BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22,
  BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25,
  BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26,
  BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27,
  BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30,
  BROTLI_DECODER_ERROR_UNREACHABLE: -31,
}, realZlibConstants))


/***/ }),

/***/ 5351:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


const assert = __nccwpck_require__(9491)
const Buffer = (__nccwpck_require__(4300).Buffer)
const realZlib = __nccwpck_require__(9796)

const constants = exports.constants = __nccwpck_require__(2583)
const Minipass = __nccwpck_require__(7047)

const OriginalBufferConcat = Buffer.concat

const _superWrite = Symbol('_superWrite')
class ZlibError extends Error {
  constructor (err) {
    super('zlib: ' + err.message)
    this.code = err.code
    this.errno = err.errno
    /* istanbul ignore if */
    if (!this.code)
      this.code = 'ZLIB_ERROR'

    this.message = 'zlib: ' + err.message
    Error.captureStackTrace(this, this.constructor)
  }

  get name () {
    return 'ZlibError'
  }
}

// the Zlib class they all inherit from
// This thing manages the queue of requests, and returns
// true or false if there is anything in the queue when
// you call the .write() method.
const _opts = Symbol('opts')
const _flushFlag = Symbol('flushFlag')
const _finishFlushFlag = Symbol('finishFlushFlag')
const _fullFlushFlag = Symbol('fullFlushFlag')
const _handle = Symbol('handle')
const _onError = Symbol('onError')
const _sawError = Symbol('sawError')
const _level = Symbol('level')
const _strategy = Symbol('strategy')
const _ended = Symbol('ended')
const _defaultFullFlush = Symbol('_defaultFullFlush')

class ZlibBase extends Minipass {
  constructor (opts, mode) {
    if (!opts || typeof opts !== 'object')
      throw new TypeError('invalid options for ZlibBase constructor')

    super(opts)
    this[_sawError] = false
    this[_ended] = false
    this[_opts] = opts

    this[_flushFlag] = opts.flush
    this[_finishFlushFlag] = opts.finishFlush
    // this will throw if any options are invalid for the class selected
    try {
      this[_handle] = new realZlib[mode](opts)
    } catch (er) {
      // make sure that all errors get decorated properly
      throw new ZlibError(er)
    }

    this[_onError] = (err) => {
      // no sense raising multiple errors, since we abort on the first one.
      if (this[_sawError])
        return

      this[_sawError] = true

      // there is no way to cleanly recover.
      // continuing only obscures problems.
      this.close()
      this.emit('error', err)
    }

    this[_handle].on('error', er => this[_onError](new ZlibError(er)))
    this.once('end', () => this.close)
  }

  close () {
    if (this[_handle]) {
      this[_handle].close()
      this[_handle] = null
      this.emit('close')
    }
  }

  reset () {
    if (!this[_sawError]) {
      assert(this[_handle], 'zlib binding closed')
      return this[_handle].reset()
    }
  }

  flush (flushFlag) {
    if (this.ended)
      return

    if (typeof flushFlag !== 'number')
      flushFlag = this[_fullFlushFlag]
    this.write(Object.assign(Buffer.alloc(0), { [_flushFlag]: flushFlag }))
  }

  end (chunk, encoding, cb) {
    if (chunk)
      this.write(chunk, encoding)
    this.flush(this[_finishFlushFlag])
    this[_ended] = true
    return super.end(null, null, cb)
  }

  get ended () {
    return this[_ended]
  }

  write (chunk, encoding, cb) {
    // process the chunk using the sync process
    // then super.write() all the outputted chunks
    if (typeof encoding === 'function')
      cb = encoding, encoding = 'utf8'

    if (typeof chunk === 'string')
      chunk = Buffer.from(chunk, encoding)

    if (this[_sawError])
      return
    assert(this[_handle], 'zlib binding closed')

    // _processChunk tries to .close() the native handle after it's done, so we
    // intercept that by temporarily making it a no-op.
    const nativeHandle = this[_handle]._handle
    const originalNativeClose = nativeHandle.close
    nativeHandle.close = () => {}
    const originalClose = this[_handle].close
    this[_handle].close = () => {}
    // It also calls `Buffer.concat()` at the end, which may be convenient
    // for some, but which we are not interested in as it slows us down.
    Buffer.concat = (args) => args
    let result
    try {
      const flushFlag = typeof chunk[_flushFlag] === 'number'
        ? chunk[_flushFlag] : this[_flushFlag]
      result = this[_handle]._processChunk(chunk, flushFlag)
      // if we don't throw, reset it back how it was
      Buffer.concat = OriginalBufferConcat
    } catch (err) {
      // or if we do, put Buffer.concat() back before we emit error
      // Error events call into user code, which may call Buffer.concat()
      Buffer.concat = OriginalBufferConcat
      this[_onError](new ZlibError(err))
    } finally {
      if (this[_handle]) {
        // Core zlib resets `_handle` to null after attempting to close the
        // native handle. Our no-op handler prevented actual closure, but we
        // need to restore the `._handle` property.
        this[_handle]._handle = nativeHandle
        nativeHandle.close = originalNativeClose
        this[_handle].close = originalClose
        // `_processChunk()` adds an 'error' listener. If we don't remove it
        // after each call, these handlers start piling up.
        this[_handle].removeAllListeners('error')
        // make sure OUR error listener is still attached tho
      }
    }

    if (this[_handle])
      this[_handle].on('error', er => this[_onError](new ZlibError(er)))

    let writeReturn
    if (result) {
      if (Array.isArray(result) && result.length > 0) {
        // The first buffer is always `handle._outBuffer`, which would be
        // re-used for later invocations; so, we always have to copy that one.
        writeReturn = this[_superWrite](Buffer.from(result[0]))
        for (let i = 1; i < result.length; i++) {
          writeReturn = this[_superWrite](result[i])
        }
      } else {
        writeReturn = this[_superWrite](Buffer.from(result))
      }
    }

    if (cb)
      cb()
    return writeReturn
  }

  [_superWrite] (data) {
    return super.write(data)
  }
}

class Zlib extends ZlibBase {
  constructor (opts, mode) {
    opts = opts || {}

    opts.flush = opts.flush || constants.Z_NO_FLUSH
    opts.finishFlush = opts.finishFlush || constants.Z_FINISH
    super(opts, mode)

    this[_fullFlushFlag] = constants.Z_FULL_FLUSH
    this[_level] = opts.level
    this[_strategy] = opts.strategy
  }

  params (level, strategy) {
    if (this[_sawError])
      return

    if (!this[_handle])
      throw new Error('cannot switch params when binding is closed')

    // no way to test this without also not supporting params at all
    /* istanbul ignore if */
    if (!this[_handle].params)
      throw new Error('not supported in this implementation')

    if (this[_level] !== level || this[_strategy] !== strategy) {
      this.flush(constants.Z_SYNC_FLUSH)
      assert(this[_handle], 'zlib binding closed')
      // .params() calls .flush(), but the latter is always async in the
      // core zlib. We override .flush() temporarily to intercept that and
      // flush synchronously.
      const origFlush = this[_handle].flush
      this[_handle].flush = (flushFlag, cb) => {
        this.flush(flushFlag)
        cb()
      }
      try {
        this[_handle].params(level, strategy)
      } finally {
        this[_handle].flush = origFlush
      }
      /* istanbul ignore else */
      if (this[_handle]) {
        this[_level] = level
        this[_strategy] = strategy
      }
    }
  }
}

// minimal 2-byte header
class Deflate extends Zlib {
  constructor (opts) {
    super(opts, 'Deflate')
  }
}

class Inflate extends Zlib {
  constructor (opts) {
    super(opts, 'Inflate')
  }
}

// gzip - bigger header, same deflate compression
const _portable = Symbol('_portable')
class Gzip extends Zlib {
  constructor (opts) {
    super(opts, 'Gzip')
    this[_portable] = opts && !!opts.portable
  }

  [_superWrite] (data) {
    if (!this[_portable])
      return super[_superWrite](data)

    // we'll always get the header emitted in one first chunk
    // overwrite the OS indicator byte with 0xFF
    this[_portable] = false
    data[9] = 255
    return super[_superWrite](data)
  }
}

class Gunzip extends Zlib {
  constructor (opts) {
    super(opts, 'Gunzip')
  }
}

// raw - no header
class DeflateRaw extends Zlib {
  constructor (opts) {
    super(opts, 'DeflateRaw')
  }
}

class InflateRaw extends Zlib {
  constructor (opts) {
    super(opts, 'InflateRaw')
  }
}

// auto-detect header.
class Unzip extends Zlib {
  constructor (opts) {
    super(opts, 'Unzip')
  }
}

class Brotli extends ZlibBase {
  constructor (opts, mode) {
    opts = opts || {}

    opts.flush = opts.flush || constants.BROTLI_OPERATION_PROCESS
    opts.finishFlush = opts.finishFlush || constants.BROTLI_OPERATION_FINISH

    super(opts, mode)

    this[_fullFlushFlag] = constants.BROTLI_OPERATION_FLUSH
  }
}

class BrotliCompress extends Brotli {
  constructor (opts) {
    super(opts, 'BrotliCompress')
  }
}

class BrotliDecompress extends Brotli {
  constructor (opts) {
    super(opts, 'BrotliDecompress')
  }
}

exports.Deflate = Deflate
exports.Inflate = Inflate
exports.Gzip = Gzip
exports.Gunzip = Gunzip
exports.DeflateRaw = DeflateRaw
exports.InflateRaw = InflateRaw
exports.Unzip = Unzip
/* istanbul ignore else */
if (typeof realZlib.BrotliCompress === 'function') {
  exports.BrotliCompress = BrotliCompress
  exports.BrotliDecompress = BrotliDecompress
} else {
  exports.BrotliCompress = exports.BrotliDecompress = class {
    constructor () {
      throw new Error('Brotli is not supported in this version of Node.js')
    }
  }
}


/***/ }),

/***/ 7464:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const optsArg = __nccwpck_require__(6638)
const pathArg = __nccwpck_require__(9646)

const {mkdirpNative, mkdirpNativeSync} = __nccwpck_require__(3967)
const {mkdirpManual, mkdirpManualSync} = __nccwpck_require__(220)
const {useNative, useNativeSync} = __nccwpck_require__(2256)


const mkdirp = (path, opts) => {
  path = pathArg(path)
  opts = optsArg(opts)
  return useNative(opts)
    ? mkdirpNative(path, opts)
    : mkdirpManual(path, opts)
}

const mkdirpSync = (path, opts) => {
  path = pathArg(path)
  opts = optsArg(opts)
  return useNativeSync(opts)
    ? mkdirpNativeSync(path, opts)
    : mkdirpManualSync(path, opts)
}

mkdirp.sync = mkdirpSync
mkdirp.native = (path, opts) => mkdirpNative(pathArg(path), optsArg(opts))
mkdirp.manual = (path, opts) => mkdirpManual(pathArg(path), optsArg(opts))
mkdirp.nativeSync = (path, opts) => mkdirpNativeSync(pathArg(path), optsArg(opts))
mkdirp.manualSync = (path, opts) => mkdirpManualSync(pathArg(path), optsArg(opts))

module.exports = mkdirp


/***/ }),

/***/ 1154:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const {dirname} = __nccwpck_require__(1017)

const findMade = (opts, parent, path = undefined) => {
  // we never want the 'made' return value to be a root directory
  if (path === parent)
    return Promise.resolve()

  return opts.statAsync(parent).then(
    st => st.isDirectory() ? path : undefined, // will fail later
    er => er.code === 'ENOENT'
      ? findMade(opts, dirname(parent), parent)
      : undefined
  )
}

const findMadeSync = (opts, parent, path = undefined) => {
  if (path === parent)
    return undefined

  try {
    return opts.statSync(parent).isDirectory() ? path : undefined
  } catch (er) {
    return er.code === 'ENOENT'
      ? findMadeSync(opts, dirname(parent), parent)
      : undefined
  }
}

module.exports = {findMade, findMadeSync}


/***/ }),

/***/ 220:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const {dirname} = __nccwpck_require__(1017)

const mkdirpManual = (path, opts, made) => {
  opts.recursive = false
  const parent = dirname(path)
  if (parent === path) {
    return opts.mkdirAsync(path, opts).catch(er => {
      // swallowed by recursive implementation on posix systems
      // any other error is a failure
      if (er.code !== 'EISDIR')
        throw er
    })
  }

  return opts.mkdirAsync(path, opts).then(() => made || path, er => {
    if (er.code === 'ENOENT')
      return mkdirpManual(parent, opts)
        .then(made => mkdirpManual(path, opts, made))
    if (er.code !== 'EEXIST' && er.code !== 'EROFS')
      throw er
    return opts.statAsync(path).then(st => {
      if (st.isDirectory())
        return made
      else
        throw er
    }, () => { throw er })
  })
}

const mkdirpManualSync = (path, opts, made) => {
  const parent = dirname(path)
  opts.recursive = false

  if (parent === path) {
    try {
      return opts.mkdirSync(path, opts)
    } catch (er) {
      // swallowed by recursive implementation on posix systems
      // any other error is a failure
      if (er.code !== 'EISDIR')
        throw er
      else
        return
    }
  }

  try {
    opts.mkdirSync(path, opts)
    return made || path
  } catch (er) {
    if (er.code === 'ENOENT')
      return mkdirpManualSync(path, opts, mkdirpManualSync(parent, opts, made))
    if (er.code !== 'EEXIST' && er.code !== 'EROFS')
      throw er
    try {
      if (!opts.statSync(path).isDirectory())
        throw er
    } catch (_) {
      throw er
    }
  }
}

module.exports = {mkdirpManual, mkdirpManualSync}


/***/ }),

/***/ 3967:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const {dirname} = __nccwpck_require__(1017)
const {findMade, findMadeSync} = __nccwpck_require__(1154)
const {mkdirpManual, mkdirpManualSync} = __nccwpck_require__(220)

const mkdirpNative = (path, opts) => {
  opts.recursive = true
  const parent = dirname(path)
  if (parent === path)
    return opts.mkdirAsync(path, opts)

  return findMade(opts, path).then(made =>
    opts.mkdirAsync(path, opts).then(() => made)
    .catch(er => {
      if (er.code === 'ENOENT')
        return mkdirpManual(path, opts)
      else
        throw er
    }))
}

const mkdirpNativeSync = (path, opts) => {
  opts.recursive = true
  const parent = dirname(path)
  if (parent === path)
    return opts.mkdirSync(path, opts)

  const made = findMadeSync(opts, path)
  try {
    opts.mkdirSync(path, opts)
    return made
  } catch (er) {
    if (er.code === 'ENOENT')
      return mkdirpManualSync(path, opts)
    else
      throw er
  }
}

module.exports = {mkdirpNative, mkdirpNativeSync}


/***/ }),

/***/ 6638:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const { promisify } = __nccwpck_require__(3837)
const fs = __nccwpck_require__(7147)
const optsArg = opts => {
  if (!opts)
    opts = { mode: 0o777, fs }
  else if (typeof opts === 'object')
    opts = { mode: 0o777, fs, ...opts }
  else if (typeof opts === 'number')
    opts = { mode: opts, fs }
  else if (typeof opts === 'string')
    opts = { mode: parseInt(opts, 8), fs }
  else
    throw new TypeError('invalid options argument')

  opts.mkdir = opts.mkdir || opts.fs.mkdir || fs.mkdir
  opts.mkdirAsync = promisify(opts.mkdir)
  opts.stat = opts.stat || opts.fs.stat || fs.stat
  opts.statAsync = promisify(opts.stat)
  opts.statSync = opts.statSync || opts.fs.statSync || fs.statSync
  opts.mkdirSync = opts.mkdirSync || opts.fs.mkdirSync || fs.mkdirSync
  return opts
}
module.exports = optsArg


/***/ }),

/***/ 9646:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const platform = process.env.__TESTING_MKDIRP_PLATFORM__ || process.platform
const { resolve, parse } = __nccwpck_require__(1017)
const pathArg = path => {
  if (/\0/.test(path)) {
    // simulate same failure that node raises
    throw Object.assign(
      new TypeError('path must be a string without null bytes'),
      {
        path,
        code: 'ERR_INVALID_ARG_VALUE',
      }
    )
  }

  path = resolve(path)
  if (platform === 'win32') {
    const badWinChars = /[*|"<>?:]/
    const {root} = parse(path)
    if (badWinChars.test(path.substr(root.length))) {
      throw Object.assign(new Error('Illegal characters in path.'), {
        path,
        code: 'EINVAL',
      })
    }
  }

  return path
}
module.exports = pathArg


/***/ }),

/***/ 2256:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const fs = __nccwpck_require__(7147)

const version = process.env.__TESTING_MKDIRP_NODE_VERSION__ || process.version
const versArr = version.replace(/^v/, '').split('.')
const hasNative = +versArr[0] > 10 || +versArr[0] === 10 && +versArr[1] >= 12

const useNative = !hasNative ? () => false : opts => opts.mkdir === fs.mkdir
const useNativeSync = !hasNative ? () => false : opts => opts.mkdirSync === fs.mkdirSync

module.exports = {useNative, useNativeSync}


/***/ }),

/***/ 9580:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 1174:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const os = __nccwpck_require__(2037);
const tty = __nccwpck_require__(6224);
const hasFlag = __nccwpck_require__(2410);

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty.isatty(1))),
	stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};


/***/ }),

/***/ 3002:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


// high-level commands
exports.c = exports.create = __nccwpck_require__(9145)
exports.r = exports.replace = __nccwpck_require__(652)
exports.t = exports.list = __nccwpck_require__(5765)
exports.u = exports.update = __nccwpck_require__(3895)
exports.x = exports.extract = __nccwpck_require__(9823)

// classes
exports.Pack = __nccwpck_require__(6456)
exports.Unpack = __nccwpck_require__(1073)
exports.Parse = __nccwpck_require__(7635)
exports.ReadEntry = __nccwpck_require__(9883)
exports.WriteEntry = __nccwpck_require__(9255)
exports.Header = __nccwpck_require__(5797)
exports.Pax = __nccwpck_require__(3290)
exports.types = __nccwpck_require__(3226)


/***/ }),

/***/ 9145:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


// tar -c
const hlo = __nccwpck_require__(6640)

const Pack = __nccwpck_require__(6456)
const fsm = __nccwpck_require__(5879)
const t = __nccwpck_require__(5765)
const path = __nccwpck_require__(1017)

module.exports = (opt_, files, cb) => {
  if (typeof files === 'function') {
    cb = files
  }

  if (Array.isArray(opt_)) {
    files = opt_, opt_ = {}
  }

  if (!files || !Array.isArray(files) || !files.length) {
    throw new TypeError('no files or directories specified')
  }

  files = Array.from(files)

  const opt = hlo(opt_)

  if (opt.sync && typeof cb === 'function') {
    throw new TypeError('callback not supported for sync tar functions')
  }

  if (!opt.file && typeof cb === 'function') {
    throw new TypeError('callback only supported with file option')
  }

  return opt.file && opt.sync ? createFileSync(opt, files)
    : opt.file ? createFile(opt, files, cb)
    : opt.sync ? createSync(opt, files)
    : create(opt, files)
}

const createFileSync = (opt, files) => {
  const p = new Pack.Sync(opt)
  const stream = new fsm.WriteStreamSync(opt.file, {
    mode: opt.mode || 0o666,
  })
  p.pipe(stream)
  addFilesSync(p, files)
}

const createFile = (opt, files, cb) => {
  const p = new Pack(opt)
  const stream = new fsm.WriteStream(opt.file, {
    mode: opt.mode || 0o666,
  })
  p.pipe(stream)

  const promise = new Promise((res, rej) => {
    stream.on('error', rej)
    stream.on('close', res)
    p.on('error', rej)
  })

  addFilesAsync(p, files)

  return cb ? promise.then(cb, cb) : promise
}

const addFilesSync = (p, files) => {
  files.forEach(file => {
    if (file.charAt(0) === '@') {
      t({
        file: path.resolve(p.cwd, file.slice(1)),
        sync: true,
        noResume: true,
        onentry: entry => p.add(entry),
      })
    } else {
      p.add(file)
    }
  })
  p.end()
}

const addFilesAsync = (p, files) => {
  while (files.length) {
    const file = files.shift()
    if (file.charAt(0) === '@') {
      return t({
        file: path.resolve(p.cwd, file.slice(1)),
        noResume: true,
        onentry: entry => p.add(entry),
      }).then(_ => addFilesAsync(p, files))
    } else {
      p.add(file)
    }
  }
  p.end()
}

const createSync = (opt, files) => {
  const p = new Pack.Sync(opt)
  addFilesSync(p, files)
  return p
}

const create = (opt, files) => {
  const p = new Pack(opt)
  addFilesAsync(p, files)
  return p
}


/***/ }),

/***/ 9823:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


// tar -x
const hlo = __nccwpck_require__(6640)
const Unpack = __nccwpck_require__(1073)
const fs = __nccwpck_require__(7147)
const fsm = __nccwpck_require__(5879)
const path = __nccwpck_require__(1017)
const stripSlash = __nccwpck_require__(3726)

module.exports = (opt_, files, cb) => {
  if (typeof opt_ === 'function') {
    cb = opt_, files = null, opt_ = {}
  } else if (Array.isArray(opt_)) {
    files = opt_, opt_ = {}
  }

  if (typeof files === 'function') {
    cb = files, files = null
  }

  if (!files) {
    files = []
  } else {
    files = Array.from(files)
  }

  const opt = hlo(opt_)

  if (opt.sync && typeof cb === 'function') {
    throw new TypeError('callback not supported for sync tar functions')
  }

  if (!opt.file && typeof cb === 'function') {
    throw new TypeError('callback only supported with file option')
  }

  if (files.length) {
    filesFilter(opt, files)
  }

  return opt.file && opt.sync ? extractFileSync(opt)
    : opt.file ? extractFile(opt, cb)
    : opt.sync ? extractSync(opt)
    : extract(opt)
}

// construct a filter that limits the file entries listed
// include child entries if a dir is included
const filesFilter = (opt, files) => {
  const map = new Map(files.map(f => [stripSlash(f), true]))
  const filter = opt.filter

  const mapHas = (file, r) => {
    const root = r || path.parse(file).root || '.'
    const ret = file === root ? false
      : map.has(file) ? map.get(file)
      : mapHas(path.dirname(file), root)

    map.set(file, ret)
    return ret
  }

  opt.filter = filter
    ? (file, entry) => filter(file, entry) && mapHas(stripSlash(file))
    : file => mapHas(stripSlash(file))
}

const extractFileSync = opt => {
  const u = new Unpack.Sync(opt)

  const file = opt.file
  const stat = fs.statSync(file)
  // This trades a zero-byte read() syscall for a stat
  // However, it will usually result in less memory allocation
  const readSize = opt.maxReadSize || 16 * 1024 * 1024
  const stream = new fsm.ReadStreamSync(file, {
    readSize: readSize,
    size: stat.size,
  })
  stream.pipe(u)
}

const extractFile = (opt, cb) => {
  const u = new Unpack(opt)
  const readSize = opt.maxReadSize || 16 * 1024 * 1024

  const file = opt.file
  const p = new Promise((resolve, reject) => {
    u.on('error', reject)
    u.on('close', resolve)

    // This trades a zero-byte read() syscall for a stat
    // However, it will usually result in less memory allocation
    fs.stat(file, (er, stat) => {
      if (er) {
        reject(er)
      } else {
        const stream = new fsm.ReadStream(file, {
          readSize: readSize,
          size: stat.size,
        })
        stream.on('error', reject)
        stream.pipe(u)
      }
    })
  })
  return cb ? p.then(cb, cb) : p
}

const extractSync = opt => new Unpack.Sync(opt)

const extract = opt => new Unpack(opt)


/***/ }),

/***/ 337:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Get the appropriate flag to use for creating files
// We use fmap on Windows platforms for files less than
// 512kb.  This is a fairly low limit, but avoids making
// things slower in some cases.  Since most of what this
// library is used for is extracting tarballs of many
// relatively small files in npm packages and the like,
// it can be a big boost on Windows platforms.
// Only supported in Node v12.9.0 and above.
const platform = process.env.__FAKE_PLATFORM__ || process.platform
const isWindows = platform === 'win32'
const fs = global.__FAKE_TESTING_FS__ || __nccwpck_require__(7147)

/* istanbul ignore next */
const { O_CREAT, O_TRUNC, O_WRONLY, UV_FS_O_FILEMAP = 0 } = fs.constants

const fMapEnabled = isWindows && !!UV_FS_O_FILEMAP
const fMapLimit = 512 * 1024
const fMapFlag = UV_FS_O_FILEMAP | O_TRUNC | O_CREAT | O_WRONLY
module.exports = !fMapEnabled ? () => 'w'
  : size => size < fMapLimit ? fMapFlag : 'w'


/***/ }),

/***/ 5797:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

// parse a 512-byte header block to a data object, or vice-versa
// encode returns `true` if a pax extended header is needed, because
// the data could not be faithfully encoded in a simple header.
// (Also, check header.needPax to see if it needs a pax header.)

const types = __nccwpck_require__(3226)
const pathModule = (__nccwpck_require__(1017).posix)
const large = __nccwpck_require__(6316)

const SLURP = Symbol('slurp')
const TYPE = Symbol('type')

class Header {
  constructor (data, off, ex, gex) {
    this.cksumValid = false
    this.needPax = false
    this.nullBlock = false

    this.block = null
    this.path = null
    this.mode = null
    this.uid = null
    this.gid = null
    this.size = null
    this.mtime = null
    this.cksum = null
    this[TYPE] = '0'
    this.linkpath = null
    this.uname = null
    this.gname = null
    this.devmaj = 0
    this.devmin = 0
    this.atime = null
    this.ctime = null

    if (Buffer.isBuffer(data)) {
      this.decode(data, off || 0, ex, gex)
    } else if (data) {
      this.set(data)
    }
  }

  decode (buf, off, ex, gex) {
    if (!off) {
      off = 0
    }

    if (!buf || !(buf.length >= off + 512)) {
      throw new Error('need 512 bytes for header')
    }

    this.path = decString(buf, off, 100)
    this.mode = decNumber(buf, off + 100, 8)
    this.uid = decNumber(buf, off + 108, 8)
    this.gid = decNumber(buf, off + 116, 8)
    this.size = decNumber(buf, off + 124, 12)
    this.mtime = decDate(buf, off + 136, 12)
    this.cksum = decNumber(buf, off + 148, 12)

    // if we have extended or global extended headers, apply them now
    // See https://github.com/npm/node-tar/pull/187
    this[SLURP](ex)
    this[SLURP](gex, true)

    // old tar versions marked dirs as a file with a trailing /
    this[TYPE] = decString(buf, off + 156, 1)
    if (this[TYPE] === '') {
      this[TYPE] = '0'
    }
    if (this[TYPE] === '0' && this.path.slice(-1) === '/') {
      this[TYPE] = '5'
    }

    // tar implementations sometimes incorrectly put the stat(dir).size
    // as the size in the tarball, even though Directory entries are
    // not able to have any body at all.  In the very rare chance that
    // it actually DOES have a body, we weren't going to do anything with
    // it anyway, and it'll just be a warning about an invalid header.
    if (this[TYPE] === '5') {
      this.size = 0
    }

    this.linkpath = decString(buf, off + 157, 100)
    if (buf.slice(off + 257, off + 265).toString() === 'ustar\u000000') {
      this.uname = decString(buf, off + 265, 32)
      this.gname = decString(buf, off + 297, 32)
      this.devmaj = decNumber(buf, off + 329, 8)
      this.devmin = decNumber(buf, off + 337, 8)
      if (buf[off + 475] !== 0) {
        // definitely a prefix, definitely >130 chars.
        const prefix = decString(buf, off + 345, 155)
        this.path = prefix + '/' + this.path
      } else {
        const prefix = decString(buf, off + 345, 130)
        if (prefix) {
          this.path = prefix + '/' + this.path
        }
        this.atime = decDate(buf, off + 476, 12)
        this.ctime = decDate(buf, off + 488, 12)
      }
    }

    let sum = 8 * 0x20
    for (let i = off; i < off + 148; i++) {
      sum += buf[i]
    }

    for (let i = off + 156; i < off + 512; i++) {
      sum += buf[i]
    }

    this.cksumValid = sum === this.cksum
    if (this.cksum === null && sum === 8 * 0x20) {
      this.nullBlock = true
    }
  }

  [SLURP] (ex, global) {
    for (const k in ex) {
      // we slurp in everything except for the path attribute in
      // a global extended header, because that's weird.
      if (ex[k] !== null && ex[k] !== undefined &&
          !(global && k === 'path')) {
        this[k] = ex[k]
      }
    }
  }

  encode (buf, off) {
    if (!buf) {
      buf = this.block = Buffer.alloc(512)
      off = 0
    }

    if (!off) {
      off = 0
    }

    if (!(buf.length >= off + 512)) {
      throw new Error('need 512 bytes for header')
    }

    const prefixSize = this.ctime || this.atime ? 130 : 155
    const split = splitPrefix(this.path || '', prefixSize)
    const path = split[0]
    const prefix = split[1]
    this.needPax = split[2]

    this.needPax = encString(buf, off, 100, path) || this.needPax
    this.needPax = encNumber(buf, off + 100, 8, this.mode) || this.needPax
    this.needPax = encNumber(buf, off + 108, 8, this.uid) || this.needPax
    this.needPax = encNumber(buf, off + 116, 8, this.gid) || this.needPax
    this.needPax = encNumber(buf, off + 124, 12, this.size) || this.needPax
    this.needPax = encDate(buf, off + 136, 12, this.mtime) || this.needPax
    buf[off + 156] = this[TYPE].charCodeAt(0)
    this.needPax = encString(buf, off + 157, 100, this.linkpath) || this.needPax
    buf.write('ustar\u000000', off + 257, 8)
    this.needPax = encString(buf, off + 265, 32, this.uname) || this.needPax
    this.needPax = encString(buf, off + 297, 32, this.gname) || this.needPax
    this.needPax = encNumber(buf, off + 329, 8, this.devmaj) || this.needPax
    this.needPax = encNumber(buf, off + 337, 8, this.devmin) || this.needPax
    this.needPax = encString(buf, off + 345, prefixSize, prefix) || this.needPax
    if (buf[off + 475] !== 0) {
      this.needPax = encString(buf, off + 345, 155, prefix) || this.needPax
    } else {
      this.needPax = encString(buf, off + 345, 130, prefix) || this.needPax
      this.needPax = encDate(buf, off + 476, 12, this.atime) || this.needPax
      this.needPax = encDate(buf, off + 488, 12, this.ctime) || this.needPax
    }

    let sum = 8 * 0x20
    for (let i = off; i < off + 148; i++) {
      sum += buf[i]
    }

    for (let i = off + 156; i < off + 512; i++) {
      sum += buf[i]
    }

    this.cksum = sum
    encNumber(buf, off + 148, 8, this.cksum)
    this.cksumValid = true

    return this.needPax
  }

  set (data) {
    for (const i in data) {
      if (data[i] !== null && data[i] !== undefined) {
        this[i] = data[i]
      }
    }
  }

  get type () {
    return types.name.get(this[TYPE]) || this[TYPE]
  }

  get typeKey () {
    return this[TYPE]
  }

  set type (type) {
    if (types.code.has(type)) {
      this[TYPE] = types.code.get(type)
    } else {
      this[TYPE] = type
    }
  }
}

const splitPrefix = (p, prefixSize) => {
  const pathSize = 100
  let pp = p
  let prefix = ''
  let ret
  const root = pathModule.parse(p).root || '.'

  if (Buffer.byteLength(pp) < pathSize) {
    ret = [pp, prefix, false]
  } else {
    // first set prefix to the dir, and path to the base
    prefix = pathModule.dirname(pp)
    pp = pathModule.basename(pp)

    do {
      if (Buffer.byteLength(pp) <= pathSize &&
          Buffer.byteLength(prefix) <= prefixSize) {
        // both fit!
        ret = [pp, prefix, false]
      } else if (Buffer.byteLength(pp) > pathSize &&
          Buffer.byteLength(prefix) <= prefixSize) {
        // prefix fits in prefix, but path doesn't fit in path
        ret = [pp.slice(0, pathSize - 1), prefix, true]
      } else {
        // make path take a bit from prefix
        pp = pathModule.join(pathModule.basename(prefix), pp)
        prefix = pathModule.dirname(prefix)
      }
    } while (prefix !== root && !ret)

    // at this point, found no resolution, just truncate
    if (!ret) {
      ret = [p.slice(0, pathSize - 1), '', true]
    }
  }
  return ret
}

const decString = (buf, off, size) =>
  buf.slice(off, off + size).toString('utf8').replace(/\0.*/, '')

const decDate = (buf, off, size) =>
  numToDate(decNumber(buf, off, size))

const numToDate = num => num === null ? null : new Date(num * 1000)

const decNumber = (buf, off, size) =>
  buf[off] & 0x80 ? large.parse(buf.slice(off, off + size))
  : decSmallNumber(buf, off, size)

const nanNull = value => isNaN(value) ? null : value

const decSmallNumber = (buf, off, size) =>
  nanNull(parseInt(
    buf.slice(off, off + size)
      .toString('utf8').replace(/\0.*$/, '').trim(), 8))

// the maximum encodable as a null-terminated octal, by field size
const MAXNUM = {
  12: 0o77777777777,
  8: 0o7777777,
}

const encNumber = (buf, off, size, number) =>
  number === null ? false :
  number > MAXNUM[size] || number < 0
    ? (large.encode(number, buf.slice(off, off + size)), true)
    : (encSmallNumber(buf, off, size, number), false)

const encSmallNumber = (buf, off, size, number) =>
  buf.write(octalString(number, size), off, size, 'ascii')

const octalString = (number, size) =>
  padOctal(Math.floor(number).toString(8), size)

const padOctal = (string, size) =>
  (string.length === size - 1 ? string
  : new Array(size - string.length - 1).join('0') + string + ' ') + '\0'

const encDate = (buf, off, size, date) =>
  date === null ? false :
  encNumber(buf, off, size, date.getTime() / 1000)

// enough to fill the longest string we've got
const NULLS = new Array(156).join('\0')
// pad with nulls, return true if it's longer or non-ascii
const encString = (buf, off, size, string) =>
  string === null ? false :
  (buf.write(string + NULLS, off, size, 'utf8'),
  string.length !== Buffer.byteLength(string) || string.length > size)

module.exports = Header


/***/ }),

/***/ 6640:
/***/ ((module) => {

"use strict";


// turn tar(1) style args like `C` into the more verbose things like `cwd`

const argmap = new Map([
  ['C', 'cwd'],
  ['f', 'file'],
  ['z', 'gzip'],
  ['P', 'preservePaths'],
  ['U', 'unlink'],
  ['strip-components', 'strip'],
  ['stripComponents', 'strip'],
  ['keep-newer', 'newer'],
  ['keepNewer', 'newer'],
  ['keep-newer-files', 'newer'],
  ['keepNewerFiles', 'newer'],
  ['k', 'keep'],
  ['keep-existing', 'keep'],
  ['keepExisting', 'keep'],
  ['m', 'noMtime'],
  ['no-mtime', 'noMtime'],
  ['p', 'preserveOwner'],
  ['L', 'follow'],
  ['h', 'follow'],
])

module.exports = opt => opt ? Object.keys(opt).map(k => [
  argmap.has(k) ? argmap.get(k) : k, opt[k],
]).reduce((set, kv) => (set[kv[0]] = kv[1], set), Object.create(null)) : {}


/***/ }),

/***/ 6316:
/***/ ((module) => {

"use strict";

// Tar can encode large and negative numbers using a leading byte of
// 0xff for negative, and 0x80 for positive.

const encode = (num, buf) => {
  if (!Number.isSafeInteger(num)) {
  // The number is so large that javascript cannot represent it with integer
  // precision.
    throw Error('cannot encode number outside of javascript safe integer range')
  } else if (num < 0) {
    encodeNegative(num, buf)
  } else {
    encodePositive(num, buf)
  }
  return buf
}

const encodePositive = (num, buf) => {
  buf[0] = 0x80

  for (var i = buf.length; i > 1; i--) {
    buf[i - 1] = num & 0xff
    num = Math.floor(num / 0x100)
  }
}

const encodeNegative = (num, buf) => {
  buf[0] = 0xff
  var flipped = false
  num = num * -1
  for (var i = buf.length; i > 1; i--) {
    var byte = num & 0xff
    num = Math.floor(num / 0x100)
    if (flipped) {
      buf[i - 1] = onesComp(byte)
    } else if (byte === 0) {
      buf[i - 1] = 0
    } else {
      flipped = true
      buf[i - 1] = twosComp(byte)
    }
  }
}

const parse = (buf) => {
  const pre = buf[0]
  const value = pre === 0x80 ? pos(buf.slice(1, buf.length))
    : pre === 0xff ? twos(buf)
    : null
  if (value === null) {
    throw Error('invalid base256 encoding')
  }

  if (!Number.isSafeInteger(value)) {
  // The number is so large that javascript cannot represent it with integer
  // precision.
    throw Error('parsed number outside of javascript safe integer range')
  }

  return value
}

const twos = (buf) => {
  var len = buf.length
  var sum = 0
  var flipped = false
  for (var i = len - 1; i > -1; i--) {
    var byte = buf[i]
    var f
    if (flipped) {
      f = onesComp(byte)
    } else if (byte === 0) {
      f = byte
    } else {
      flipped = true
      f = twosComp(byte)
    }
    if (f !== 0) {
      sum -= f * Math.pow(256, len - i - 1)
    }
  }
  return sum
}

const pos = (buf) => {
  var len = buf.length
  var sum = 0
  for (var i = len - 1; i > -1; i--) {
    var byte = buf[i]
    if (byte !== 0) {
      sum += byte * Math.pow(256, len - i - 1)
    }
  }
  return sum
}

const onesComp = byte => (0xff ^ byte) & 0xff

const twosComp = byte => ((0xff ^ byte) + 1) & 0xff

module.exports = {
  encode,
  parse,
}


/***/ }),

/***/ 5765:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


// XXX: This shares a lot in common with extract.js
// maybe some DRY opportunity here?

// tar -t
const hlo = __nccwpck_require__(6640)
const Parser = __nccwpck_require__(7635)
const fs = __nccwpck_require__(7147)
const fsm = __nccwpck_require__(5879)
const path = __nccwpck_require__(1017)
const stripSlash = __nccwpck_require__(3726)

module.exports = (opt_, files, cb) => {
  if (typeof opt_ === 'function') {
    cb = opt_, files = null, opt_ = {}
  } else if (Array.isArray(opt_)) {
    files = opt_, opt_ = {}
  }

  if (typeof files === 'function') {
    cb = files, files = null
  }

  if (!files) {
    files = []
  } else {
    files = Array.from(files)
  }

  const opt = hlo(opt_)

  if (opt.sync && typeof cb === 'function') {
    throw new TypeError('callback not supported for sync tar functions')
  }

  if (!opt.file && typeof cb === 'function') {
    throw new TypeError('callback only supported with file option')
  }

  if (files.length) {
    filesFilter(opt, files)
  }

  if (!opt.noResume) {
    onentryFunction(opt)
  }

  return opt.file && opt.sync ? listFileSync(opt)
    : opt.file ? listFile(opt, cb)
    : list(opt)
}

const onentryFunction = opt => {
  const onentry = opt.onentry
  opt.onentry = onentry ? e => {
    onentry(e)
    e.resume()
  } : e => e.resume()
}

// construct a filter that limits the file entries listed
// include child entries if a dir is included
const filesFilter = (opt, files) => {
  const map = new Map(files.map(f => [stripSlash(f), true]))
  const filter = opt.filter

  const mapHas = (file, r) => {
    const root = r || path.parse(file).root || '.'
    const ret = file === root ? false
      : map.has(file) ? map.get(file)
      : mapHas(path.dirname(file), root)

    map.set(file, ret)
    return ret
  }

  opt.filter = filter
    ? (file, entry) => filter(file, entry) && mapHas(stripSlash(file))
    : file => mapHas(stripSlash(file))
}

const listFileSync = opt => {
  const p = list(opt)
  const file = opt.file
  let threw = true
  let fd
  try {
    const stat = fs.statSync(file)
    const readSize = opt.maxReadSize || 16 * 1024 * 1024
    if (stat.size < readSize) {
      p.end(fs.readFileSync(file))
    } else {
      let pos = 0
      const buf = Buffer.allocUnsafe(readSize)
      fd = fs.openSync(file, 'r')
      while (pos < stat.size) {
        const bytesRead = fs.readSync(fd, buf, 0, readSize, pos)
        pos += bytesRead
        p.write(buf.slice(0, bytesRead))
      }
      p.end()
    }
    threw = false
  } finally {
    if (threw && fd) {
      try {
        fs.closeSync(fd)
      } catch (er) {}
    }
  }
}

const listFile = (opt, cb) => {
  const parse = new Parser(opt)
  const readSize = opt.maxReadSize || 16 * 1024 * 1024

  const file = opt.file
  const p = new Promise((resolve, reject) => {
    parse.on('error', reject)
    parse.on('end', resolve)

    fs.stat(file, (er, stat) => {
      if (er) {
        reject(er)
      } else {
        const stream = new fsm.ReadStream(file, {
          readSize: readSize,
          size: stat.size,
        })
        stream.on('error', reject)
        stream.pipe(parse)
      }
    })
  })
  return cb ? p.then(cb, cb) : p
}

const list = opt => new Parser(opt)


/***/ }),

/***/ 1953:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

// wrapper around mkdirp for tar's needs.

// TODO: This should probably be a class, not functionally
// passing around state in a gazillion args.

const mkdirp = __nccwpck_require__(7464)
const fs = __nccwpck_require__(7147)
const path = __nccwpck_require__(1017)
const chownr = __nccwpck_require__(4048)
const normPath = __nccwpck_require__(7457)

class SymlinkError extends Error {
  constructor (symlink, path) {
    super('Cannot extract through symbolic link')
    this.path = path
    this.symlink = symlink
  }

  get name () {
    return 'SylinkError'
  }
}

class CwdError extends Error {
  constructor (path, code) {
    super(code + ': Cannot cd into \'' + path + '\'')
    this.path = path
    this.code = code
  }

  get name () {
    return 'CwdError'
  }
}

const cGet = (cache, key) => cache.get(normPath(key))
const cSet = (cache, key, val) => cache.set(normPath(key), val)

const checkCwd = (dir, cb) => {
  fs.stat(dir, (er, st) => {
    if (er || !st.isDirectory()) {
      er = new CwdError(dir, er && er.code || 'ENOTDIR')
    }
    cb(er)
  })
}

module.exports = (dir, opt, cb) => {
  dir = normPath(dir)

  // if there's any overlap between mask and mode,
  // then we'll need an explicit chmod
  const umask = opt.umask
  const mode = opt.mode | 0o0700
  const needChmod = (mode & umask) !== 0

  const uid = opt.uid
  const gid = opt.gid
  const doChown = typeof uid === 'number' &&
    typeof gid === 'number' &&
    (uid !== opt.processUid || gid !== opt.processGid)

  const preserve = opt.preserve
  const unlink = opt.unlink
  const cache = opt.cache
  const cwd = normPath(opt.cwd)

  const done = (er, created) => {
    if (er) {
      cb(er)
    } else {
      cSet(cache, dir, true)
      if (created && doChown) {
        chownr(created, uid, gid, er => done(er))
      } else if (needChmod) {
        fs.chmod(dir, mode, cb)
      } else {
        cb()
      }
    }
  }

  if (cache && cGet(cache, dir) === true) {
    return done()
  }

  if (dir === cwd) {
    return checkCwd(dir, done)
  }

  if (preserve) {
    return mkdirp(dir, { mode }).then(made => done(null, made), done)
  }

  const sub = normPath(path.relative(cwd, dir))
  const parts = sub.split('/')
  mkdir_(cwd, parts, mode, cache, unlink, cwd, null, done)
}

const mkdir_ = (base, parts, mode, cache, unlink, cwd, created, cb) => {
  if (!parts.length) {
    return cb(null, created)
  }
  const p = parts.shift()
  const part = normPath(path.resolve(base + '/' + p))
  if (cGet(cache, part)) {
    return mkdir_(part, parts, mode, cache, unlink, cwd, created, cb)
  }
  fs.mkdir(part, mode, onmkdir(part, parts, mode, cache, unlink, cwd, created, cb))
}

const onmkdir = (part, parts, mode, cache, unlink, cwd, created, cb) => er => {
  if (er) {
    fs.lstat(part, (statEr, st) => {
      if (statEr) {
        statEr.path = statEr.path && normPath(statEr.path)
        cb(statEr)
      } else if (st.isDirectory()) {
        mkdir_(part, parts, mode, cache, unlink, cwd, created, cb)
      } else if (unlink) {
        fs.unlink(part, er => {
          if (er) {
            return cb(er)
          }
          fs.mkdir(part, mode, onmkdir(part, parts, mode, cache, unlink, cwd, created, cb))
        })
      } else if (st.isSymbolicLink()) {
        return cb(new SymlinkError(part, part + '/' + parts.join('/')))
      } else {
        cb(er)
      }
    })
  } else {
    created = created || part
    mkdir_(part, parts, mode, cache, unlink, cwd, created, cb)
  }
}

const checkCwdSync = dir => {
  let ok = false
  let code = 'ENOTDIR'
  try {
    ok = fs.statSync(dir).isDirectory()
  } catch (er) {
    code = er.code
  } finally {
    if (!ok) {
      throw new CwdError(dir, code)
    }
  }
}

module.exports.sync = (dir, opt) => {
  dir = normPath(dir)
  // if there's any overlap between mask and mode,
  // then we'll need an explicit chmod
  const umask = opt.umask
  const mode = opt.mode | 0o0700
  const needChmod = (mode & umask) !== 0

  const uid = opt.uid
  const gid = opt.gid
  const doChown = typeof uid === 'number' &&
    typeof gid === 'number' &&
    (uid !== opt.processUid || gid !== opt.processGid)

  const preserve = opt.preserve
  const unlink = opt.unlink
  const cache = opt.cache
  const cwd = normPath(opt.cwd)

  const done = (created) => {
    cSet(cache, dir, true)
    if (created && doChown) {
      chownr.sync(created, uid, gid)
    }
    if (needChmod) {
      fs.chmodSync(dir, mode)
    }
  }

  if (cache && cGet(cache, dir) === true) {
    return done()
  }

  if (dir === cwd) {
    checkCwdSync(cwd)
    return done()
  }

  if (preserve) {
    return done(mkdirp.sync(dir, mode))
  }

  const sub = normPath(path.relative(cwd, dir))
  const parts = sub.split('/')
  let created = null
  for (let p = parts.shift(), part = cwd;
    p && (part += '/' + p);
    p = parts.shift()) {
    part = normPath(path.resolve(part))
    if (cGet(cache, part)) {
      continue
    }

    try {
      fs.mkdirSync(part, mode)
      created = created || part
      cSet(cache, part, true)
    } catch (er) {
      const st = fs.lstatSync(part)
      if (st.isDirectory()) {
        cSet(cache, part, true)
        continue
      } else if (unlink) {
        fs.unlinkSync(part)
        fs.mkdirSync(part, mode)
        created = created || part
        cSet(cache, part, true)
        continue
      } else if (st.isSymbolicLink()) {
        return new SymlinkError(part, part + '/' + parts.join('/'))
      }
    }
  }

  return done(created)
}


/***/ }),

/***/ 687:
/***/ ((module) => {

"use strict";

module.exports = (mode, isDir, portable) => {
  mode &= 0o7777

  // in portable mode, use the minimum reasonable umask
  // if this system creates files with 0o664 by default
  // (as some linux distros do), then we'll write the
  // archive with 0o644 instead.  Also, don't ever create
  // a file that is not readable/writable by the owner.
  if (portable) {
    mode = (mode | 0o600) & ~0o22
  }

  // if dirs are readable, then they should be listable
  if (isDir) {
    if (mode & 0o400) {
      mode |= 0o100
    }
    if (mode & 0o40) {
      mode |= 0o10
    }
    if (mode & 0o4) {
      mode |= 0o1
    }
  }
  return mode
}


/***/ }),

/***/ 3909:
/***/ ((module) => {

// warning: extremely hot code path.
// This has been meticulously optimized for use
// within npm install on large package trees.
// Do not edit without careful benchmarking.
const normalizeCache = Object.create(null)
const { hasOwnProperty } = Object.prototype
module.exports = s => {
  if (!hasOwnProperty.call(normalizeCache, s)) {
    normalizeCache[s] = s.normalize('NFKD')
  }
  return normalizeCache[s]
}


/***/ }),

/***/ 7457:
/***/ ((module) => {

// on windows, either \ or / are valid directory separators.
// on unix, \ is a valid character in filenames.
// so, on windows, and only on windows, we replace all \ chars with /,
// so that we can use / as our one and only directory separator char.

const platform = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform
module.exports = platform !== 'win32' ? p => p
  : p => p && p.replace(/\\/g, '/')


/***/ }),

/***/ 6456:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


// A readable tar stream creator
// Technically, this is a transform stream that you write paths into,
// and tar format comes out of.
// The `add()` method is like `write()` but returns this,
// and end() return `this` as well, so you can
// do `new Pack(opt).add('files').add('dir').end().pipe(output)
// You could also do something like:
// streamOfPaths().pipe(new Pack()).pipe(new fs.WriteStream('out.tar'))

class PackJob {
  constructor (path, absolute) {
    this.path = path || './'
    this.absolute = absolute
    this.entry = null
    this.stat = null
    this.readdir = null
    this.pending = false
    this.ignore = false
    this.piped = false
  }
}

const MiniPass = __nccwpck_require__(6977)
const zlib = __nccwpck_require__(5351)
const ReadEntry = __nccwpck_require__(9883)
const WriteEntry = __nccwpck_require__(9255)
const WriteEntrySync = WriteEntry.Sync
const WriteEntryTar = WriteEntry.Tar
const Yallist = __nccwpck_require__(1557)
const EOF = Buffer.alloc(1024)
const ONSTAT = Symbol('onStat')
const ENDED = Symbol('ended')
const QUEUE = Symbol('queue')
const CURRENT = Symbol('current')
const PROCESS = Symbol('process')
const PROCESSING = Symbol('processing')
const PROCESSJOB = Symbol('processJob')
const JOBS = Symbol('jobs')
const JOBDONE = Symbol('jobDone')
const ADDFSENTRY = Symbol('addFSEntry')
const ADDTARENTRY = Symbol('addTarEntry')
const STAT = Symbol('stat')
const READDIR = Symbol('readdir')
const ONREADDIR = Symbol('onreaddir')
const PIPE = Symbol('pipe')
const ENTRY = Symbol('entry')
const ENTRYOPT = Symbol('entryOpt')
const WRITEENTRYCLASS = Symbol('writeEntryClass')
const WRITE = Symbol('write')
const ONDRAIN = Symbol('ondrain')

const fs = __nccwpck_require__(7147)
const path = __nccwpck_require__(1017)
const warner = __nccwpck_require__(9144)
const normPath = __nccwpck_require__(7457)

const Pack = warner(class Pack extends MiniPass {
  constructor (opt) {
    super(opt)
    opt = opt || Object.create(null)
    this.opt = opt
    this.file = opt.file || ''
    this.cwd = opt.cwd || process.cwd()
    this.maxReadSize = opt.maxReadSize
    this.preservePaths = !!opt.preservePaths
    this.strict = !!opt.strict
    this.noPax = !!opt.noPax
    this.prefix = normPath(opt.prefix || '')
    this.linkCache = opt.linkCache || new Map()
    this.statCache = opt.statCache || new Map()
    this.readdirCache = opt.readdirCache || new Map()

    this[WRITEENTRYCLASS] = WriteEntry
    if (typeof opt.onwarn === 'function') {
      this.on('warn', opt.onwarn)
    }

    this.portable = !!opt.portable
    this.zip = null
    if (opt.gzip) {
      if (typeof opt.gzip !== 'object') {
        opt.gzip = {}
      }
      if (this.portable) {
        opt.gzip.portable = true
      }
      this.zip = new zlib.Gzip(opt.gzip)
      this.zip.on('data', chunk => super.write(chunk))
      this.zip.on('end', _ => super.end())
      this.zip.on('drain', _ => this[ONDRAIN]())
      this.on('resume', _ => this.zip.resume())
    } else {
      this.on('drain', this[ONDRAIN])
    }

    this.noDirRecurse = !!opt.noDirRecurse
    this.follow = !!opt.follow
    this.noMtime = !!opt.noMtime
    this.mtime = opt.mtime || null

    this.filter = typeof opt.filter === 'function' ? opt.filter : _ => true

    this[QUEUE] = new Yallist()
    this[JOBS] = 0
    this.jobs = +opt.jobs || 4
    this[PROCESSING] = false
    this[ENDED] = false
  }

  [WRITE] (chunk) {
    return super.write(chunk)
  }

  add (path) {
    this.write(path)
    return this
  }

  end (path) {
    if (path) {
      this.write(path)
    }
    this[ENDED] = true
    this[PROCESS]()
    return this
  }

  write (path) {
    if (this[ENDED]) {
      throw new Error('write after end')
    }

    if (path instanceof ReadEntry) {
      this[ADDTARENTRY](path)
    } else {
      this[ADDFSENTRY](path)
    }
    return this.flowing
  }

  [ADDTARENTRY] (p) {
    const absolute = normPath(path.resolve(this.cwd, p.path))
    // in this case, we don't have to wait for the stat
    if (!this.filter(p.path, p)) {
      p.resume()
    } else {
      const job = new PackJob(p.path, absolute, false)
      job.entry = new WriteEntryTar(p, this[ENTRYOPT](job))
      job.entry.on('end', _ => this[JOBDONE](job))
      this[JOBS] += 1
      this[QUEUE].push(job)
    }

    this[PROCESS]()
  }

  [ADDFSENTRY] (p) {
    const absolute = normPath(path.resolve(this.cwd, p))
    this[QUEUE].push(new PackJob(p, absolute))
    this[PROCESS]()
  }

  [STAT] (job) {
    job.pending = true
    this[JOBS] += 1
    const stat = this.follow ? 'stat' : 'lstat'
    fs[stat](job.absolute, (er, stat) => {
      job.pending = false
      this[JOBS] -= 1
      if (er) {
        this.emit('error', er)
      } else {
        this[ONSTAT](job, stat)
      }
    })
  }

  [ONSTAT] (job, stat) {
    this.statCache.set(job.absolute, stat)
    job.stat = stat

    // now we have the stat, we can filter it.
    if (!this.filter(job.path, stat)) {
      job.ignore = true
    }

    this[PROCESS]()
  }

  [READDIR] (job) {
    job.pending = true
    this[JOBS] += 1
    fs.readdir(job.absolute, (er, entries) => {
      job.pending = false
      this[JOBS] -= 1
      if (er) {
        return this.emit('error', er)
      }
      this[ONREADDIR](job, entries)
    })
  }

  [ONREADDIR] (job, entries) {
    this.readdirCache.set(job.absolute, entries)
    job.readdir = entries
    this[PROCESS]()
  }

  [PROCESS] () {
    if (this[PROCESSING]) {
      return
    }

    this[PROCESSING] = true
    for (let w = this[QUEUE].head;
      w !== null && this[JOBS] < this.jobs;
      w = w.next) {
      this[PROCESSJOB](w.value)
      if (w.value.ignore) {
        const p = w.next
        this[QUEUE].removeNode(w)
        w.next = p
      }
    }

    this[PROCESSING] = false

    if (this[ENDED] && !this[QUEUE].length && this[JOBS] === 0) {
      if (this.zip) {
        this.zip.end(EOF)
      } else {
        super.write(EOF)
        super.end()
      }
    }
  }

  get [CURRENT] () {
    return this[QUEUE] && this[QUEUE].head && this[QUEUE].head.value
  }

  [JOBDONE] (job) {
    this[QUEUE].shift()
    this[JOBS] -= 1
    this[PROCESS]()
  }

  [PROCESSJOB] (job) {
    if (job.pending) {
      return
    }

    if (job.entry) {
      if (job === this[CURRENT] && !job.piped) {
        this[PIPE](job)
      }
      return
    }

    if (!job.stat) {
      if (this.statCache.has(job.absolute)) {
        this[ONSTAT](job, this.statCache.get(job.absolute))
      } else {
        this[STAT](job)
      }
    }
    if (!job.stat) {
      return
    }

    // filtered out!
    if (job.ignore) {
      return
    }

    if (!this.noDirRecurse && job.stat.isDirectory() && !job.readdir) {
      if (this.readdirCache.has(job.absolute)) {
        this[ONREADDIR](job, this.readdirCache.get(job.absolute))
      } else {
        this[READDIR](job)
      }
      if (!job.readdir) {
        return
      }
    }

    // we know it doesn't have an entry, because that got checked above
    job.entry = this[ENTRY](job)
    if (!job.entry) {
      job.ignore = true
      return
    }

    if (job === this[CURRENT] && !job.piped) {
      this[PIPE](job)
    }
  }

  [ENTRYOPT] (job) {
    return {
      onwarn: (code, msg, data) => this.warn(code, msg, data),
      noPax: this.noPax,
      cwd: this.cwd,
      absolute: job.absolute,
      preservePaths: this.preservePaths,
      maxReadSize: this.maxReadSize,
      strict: this.strict,
      portable: this.portable,
      linkCache: this.linkCache,
      statCache: this.statCache,
      noMtime: this.noMtime,
      mtime: this.mtime,
      prefix: this.prefix,
    }
  }

  [ENTRY] (job) {
    this[JOBS] += 1
    try {
      return new this[WRITEENTRYCLASS](job.path, this[ENTRYOPT](job))
        .on('end', () => this[JOBDONE](job))
        .on('error', er => this.emit('error', er))
    } catch (er) {
      this.emit('error', er)
    }
  }

  [ONDRAIN] () {
    if (this[CURRENT] && this[CURRENT].entry) {
      this[CURRENT].entry.resume()
    }
  }

  // like .pipe() but using super, because our write() is special
  [PIPE] (job) {
    job.piped = true

    if (job.readdir) {
      job.readdir.forEach(entry => {
        const p = job.path
        const base = p === './' ? '' : p.replace(/\/*$/, '/')
        this[ADDFSENTRY](base + entry)
      })
    }

    const source = job.entry
    const zip = this.zip

    if (zip) {
      source.on('data', chunk => {
        if (!zip.write(chunk)) {
          source.pause()
        }
      })
    } else {
      source.on('data', chunk => {
        if (!super.write(chunk)) {
          source.pause()
        }
      })
    }
  }

  pause () {
    if (this.zip) {
      this.zip.pause()
    }
    return super.pause()
  }
})

class PackSync extends Pack {
  constructor (opt) {
    super(opt)
    this[WRITEENTRYCLASS] = WriteEntrySync
  }

  // pause/resume are no-ops in sync streams.
  pause () {}
  resume () {}

  [STAT] (job) {
    const stat = this.follow ? 'statSync' : 'lstatSync'
    this[ONSTAT](job, fs[stat](job.absolute))
  }

  [READDIR] (job, stat) {
    this[ONREADDIR](job, fs.readdirSync(job.absolute))
  }

  // gotta get it all in this tick
  [PIPE] (job) {
    const source = job.entry
    const zip = this.zip

    if (job.readdir) {
      job.readdir.forEach(entry => {
        const p = job.path
        const base = p === './' ? '' : p.replace(/\/*$/, '/')
        this[ADDFSENTRY](base + entry)
      })
    }

    if (zip) {
      source.on('data', chunk => {
        zip.write(chunk)
      })
    } else {
      source.on('data', chunk => {
        super[WRITE](chunk)
      })
    }
  }
}

Pack.Sync = PackSync

module.exports = Pack


/***/ }),

/***/ 7635:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


// this[BUFFER] is the remainder of a chunk if we're waiting for
// the full 512 bytes of a header to come in.  We will Buffer.concat()
// it to the next write(), which is a mem copy, but a small one.
//
// this[QUEUE] is a Yallist of entries that haven't been emitted
// yet this can only get filled up if the user keeps write()ing after
// a write() returns false, or does a write() with more than one entry
//
// We don't buffer chunks, we always parse them and either create an
// entry, or push it into the active entry.  The ReadEntry class knows
// to throw data away if .ignore=true
//
// Shift entry off the buffer when it emits 'end', and emit 'entry' for
// the next one in the list.
//
// At any time, we're pushing body chunks into the entry at WRITEENTRY,
// and waiting for 'end' on the entry at READENTRY
//
// ignored entries get .resume() called on them straight away

const warner = __nccwpck_require__(9144)
const Header = __nccwpck_require__(5797)
const EE = __nccwpck_require__(2361)
const Yallist = __nccwpck_require__(1557)
const maxMetaEntrySize = 1024 * 1024
const Entry = __nccwpck_require__(9883)
const Pax = __nccwpck_require__(3290)
const zlib = __nccwpck_require__(5351)
const { nextTick } = __nccwpck_require__(7282)

const gzipHeader = Buffer.from([0x1f, 0x8b])
const STATE = Symbol('state')
const WRITEENTRY = Symbol('writeEntry')
const READENTRY = Symbol('readEntry')
const NEXTENTRY = Symbol('nextEntry')
const PROCESSENTRY = Symbol('processEntry')
const EX = Symbol('extendedHeader')
const GEX = Symbol('globalExtendedHeader')
const META = Symbol('meta')
const EMITMETA = Symbol('emitMeta')
const BUFFER = Symbol('buffer')
const QUEUE = Symbol('queue')
const ENDED = Symbol('ended')
const EMITTEDEND = Symbol('emittedEnd')
const EMIT = Symbol('emit')
const UNZIP = Symbol('unzip')
const CONSUMECHUNK = Symbol('consumeChunk')
const CONSUMECHUNKSUB = Symbol('consumeChunkSub')
const CONSUMEBODY = Symbol('consumeBody')
const CONSUMEMETA = Symbol('consumeMeta')
const CONSUMEHEADER = Symbol('consumeHeader')
const CONSUMING = Symbol('consuming')
const BUFFERCONCAT = Symbol('bufferConcat')
const MAYBEEND = Symbol('maybeEnd')
const WRITING = Symbol('writing')
const ABORTED = Symbol('aborted')
const DONE = Symbol('onDone')
const SAW_VALID_ENTRY = Symbol('sawValidEntry')
const SAW_NULL_BLOCK = Symbol('sawNullBlock')
const SAW_EOF = Symbol('sawEOF')
const CLOSESTREAM = Symbol('closeStream')

const noop = _ => true

module.exports = warner(class Parser extends EE {
  constructor (opt) {
    opt = opt || {}
    super(opt)

    this.file = opt.file || ''

    // set to boolean false when an entry starts.  1024 bytes of \0
    // is technically a valid tarball, albeit a boring one.
    this[SAW_VALID_ENTRY] = null

    // these BADARCHIVE errors can't be detected early. listen on DONE.
    this.on(DONE, _ => {
      if (this[STATE] === 'begin' || this[SAW_VALID_ENTRY] === false) {
        // either less than 1 block of data, or all entries were invalid.
        // Either way, probably not even a tarball.
        this.warn('TAR_BAD_ARCHIVE', 'Unrecognized archive format')
      }
    })

    if (opt.ondone) {
      this.on(DONE, opt.ondone)
    } else {
      this.on(DONE, _ => {
        this.emit('prefinish')
        this.emit('finish')
        this.emit('end')
      })
    }

    this.strict = !!opt.strict
    this.maxMetaEntrySize = opt.maxMetaEntrySize || maxMetaEntrySize
    this.filter = typeof opt.filter === 'function' ? opt.filter : noop

    // have to set this so that streams are ok piping into it
    this.writable = true
    this.readable = false

    this[QUEUE] = new Yallist()
    this[BUFFER] = null
    this[READENTRY] = null
    this[WRITEENTRY] = null
    this[STATE] = 'begin'
    this[META] = ''
    this[EX] = null
    this[GEX] = null
    this[ENDED] = false
    this[UNZIP] = null
    this[ABORTED] = false
    this[SAW_NULL_BLOCK] = false
    this[SAW_EOF] = false

    this.on('end', () => this[CLOSESTREAM]())

    if (typeof opt.onwarn === 'function') {
      this.on('warn', opt.onwarn)
    }
    if (typeof opt.onentry === 'function') {
      this.on('entry', opt.onentry)
    }
  }

  [CONSUMEHEADER] (chunk, position) {
    if (this[SAW_VALID_ENTRY] === null) {
      this[SAW_VALID_ENTRY] = false
    }
    let header
    try {
      header = new Header(chunk, position, this[EX], this[GEX])
    } catch (er) {
      return this.warn('TAR_ENTRY_INVALID', er)
    }

    if (header.nullBlock) {
      if (this[SAW_NULL_BLOCK]) {
        this[SAW_EOF] = true
        // ending an archive with no entries.  pointless, but legal.
        if (this[STATE] === 'begin') {
          this[STATE] = 'header'
        }
        this[EMIT]('eof')
      } else {
        this[SAW_NULL_BLOCK] = true
        this[EMIT]('nullBlock')
      }
    } else {
      this[SAW_NULL_BLOCK] = false
      if (!header.cksumValid) {
        this.warn('TAR_ENTRY_INVALID', 'checksum failure', { header })
      } else if (!header.path) {
        this.warn('TAR_ENTRY_INVALID', 'path is required', { header })
      } else {
        const type = header.type
        if (/^(Symbolic)?Link$/.test(type) && !header.linkpath) {
          this.warn('TAR_ENTRY_INVALID', 'linkpath required', { header })
        } else if (!/^(Symbolic)?Link$/.test(type) && header.linkpath) {
          this.warn('TAR_ENTRY_INVALID', 'linkpath forbidden', { header })
        } else {
          const entry = this[WRITEENTRY] = new Entry(header, this[EX], this[GEX])

          // we do this for meta & ignored entries as well, because they
          // are still valid tar, or else we wouldn't know to ignore them
          if (!this[SAW_VALID_ENTRY]) {
            if (entry.remain) {
              // this might be the one!
              const onend = () => {
                if (!entry.invalid) {
                  this[SAW_VALID_ENTRY] = true
                }
              }
              entry.on('end', onend)
            } else {
              this[SAW_VALID_ENTRY] = true
            }
          }

          if (entry.meta) {
            if (entry.size > this.maxMetaEntrySize) {
              entry.ignore = true
              this[EMIT]('ignoredEntry', entry)
              this[STATE] = 'ignore'
              entry.resume()
            } else if (entry.size > 0) {
              this[META] = ''
              entry.on('data', c => this[META] += c)
              this[STATE] = 'meta'
            }
          } else {
            this[EX] = null
            entry.ignore = entry.ignore || !this.filter(entry.path, entry)

            if (entry.ignore) {
              // probably valid, just not something we care about
              this[EMIT]('ignoredEntry', entry)
              this[STATE] = entry.remain ? 'ignore' : 'header'
              entry.resume()
            } else {
              if (entry.remain) {
                this[STATE] = 'body'
              } else {
                this[STATE] = 'header'
                entry.end()
              }

              if (!this[READENTRY]) {
                this[QUEUE].push(entry)
                this[NEXTENTRY]()
              } else {
                this[QUEUE].push(entry)
              }
            }
          }
        }
      }
    }
  }

  [CLOSESTREAM] () {
    nextTick(() => this.emit('close'))
  }

  [PROCESSENTRY] (entry) {
    let go = true

    if (!entry) {
      this[READENTRY] = null
      go = false
    } else if (Array.isArray(entry)) {
      this.emit.apply(this, entry)
    } else {
      this[READENTRY] = entry
      this.emit('entry', entry)
      if (!entry.emittedEnd) {
        entry.on('end', _ => this[NEXTENTRY]())
        go = false
      }
    }

    return go
  }

  [NEXTENTRY] () {
    do {} while (this[PROCESSENTRY](this[QUEUE].shift()))

    if (!this[QUEUE].length) {
      // At this point, there's nothing in the queue, but we may have an
      // entry which is being consumed (readEntry).
      // If we don't, then we definitely can handle more data.
      // If we do, and either it's flowing, or it has never had any data
      // written to it, then it needs more.
      // The only other possibility is that it has returned false from a
      // write() call, so we wait for the next drain to continue.
      const re = this[READENTRY]
      const drainNow = !re || re.flowing || re.size === re.remain
      if (drainNow) {
        if (!this[WRITING]) {
          this.emit('drain')
        }
      } else {
        re.once('drain', _ => this.emit('drain'))
      }
    }
  }

  [CONSUMEBODY] (chunk, position) {
    // write up to but no  more than writeEntry.blockRemain
    const entry = this[WRITEENTRY]
    const br = entry.blockRemain
    const c = (br >= chunk.length && position === 0) ? chunk
      : chunk.slice(position, position + br)

    entry.write(c)

    if (!entry.blockRemain) {
      this[STATE] = 'header'
      this[WRITEENTRY] = null
      entry.end()
    }

    return c.length
  }

  [CONSUMEMETA] (chunk, position) {
    const entry = this[WRITEENTRY]
    const ret = this[CONSUMEBODY](chunk, position)

    // if we finished, then the entry is reset
    if (!this[WRITEENTRY]) {
      this[EMITMETA](entry)
    }

    return ret
  }

  [EMIT] (ev, data, extra) {
    if (!this[QUEUE].length && !this[READENTRY]) {
      this.emit(ev, data, extra)
    } else {
      this[QUEUE].push([ev, data, extra])
    }
  }

  [EMITMETA] (entry) {
    this[EMIT]('meta', this[META])
    switch (entry.type) {
      case 'ExtendedHeader':
      case 'OldExtendedHeader':
        this[EX] = Pax.parse(this[META], this[EX], false)
        break

      case 'GlobalExtendedHeader':
        this[GEX] = Pax.parse(this[META], this[GEX], true)
        break

      case 'NextFileHasLongPath':
      case 'OldGnuLongPath':
        this[EX] = this[EX] || Object.create(null)
        this[EX].path = this[META].replace(/\0.*/, '')
        break

      case 'NextFileHasLongLinkpath':
        this[EX] = this[EX] || Object.create(null)
        this[EX].linkpath = this[META].replace(/\0.*/, '')
        break

      /* istanbul ignore next */
      default: throw new Error('unknown meta: ' + entry.type)
    }
  }

  abort (error) {
    this[ABORTED] = true
    this.emit('abort', error)
    // always throws, even in non-strict mode
    this.warn('TAR_ABORT', error, { recoverable: false })
  }

  write (chunk) {
    if (this[ABORTED]) {
      return
    }

    // first write, might be gzipped
    if (this[UNZIP] === null && chunk) {
      if (this[BUFFER]) {
        chunk = Buffer.concat([this[BUFFER], chunk])
        this[BUFFER] = null
      }
      if (chunk.length < gzipHeader.length) {
        this[BUFFER] = chunk
        return true
      }
      for (let i = 0; this[UNZIP] === null && i < gzipHeader.length; i++) {
        if (chunk[i] !== gzipHeader[i]) {
          this[UNZIP] = false
        }
      }
      if (this[UNZIP] === null) {
        const ended = this[ENDED]
        this[ENDED] = false
        this[UNZIP] = new zlib.Unzip()
        this[UNZIP].on('data', chunk => this[CONSUMECHUNK](chunk))
        this[UNZIP].on('error', er => this.abort(er))
        this[UNZIP].on('end', _ => {
          this[ENDED] = true
          this[CONSUMECHUNK]()
        })
        this[WRITING] = true
        const ret = this[UNZIP][ended ? 'end' : 'write'](chunk)
        this[WRITING] = false
        return ret
      }
    }

    this[WRITING] = true
    if (this[UNZIP]) {
      this[UNZIP].write(chunk)
    } else {
      this[CONSUMECHUNK](chunk)
    }
    this[WRITING] = false

    // return false if there's a queue, or if the current entry isn't flowing
    const ret =
      this[QUEUE].length ? false :
      this[READENTRY] ? this[READENTRY].flowing :
      true

    // if we have no queue, then that means a clogged READENTRY
    if (!ret && !this[QUEUE].length) {
      this[READENTRY].once('drain', _ => this.emit('drain'))
    }

    return ret
  }

  [BUFFERCONCAT] (c) {
    if (c && !this[ABORTED]) {
      this[BUFFER] = this[BUFFER] ? Buffer.concat([this[BUFFER], c]) : c
    }
  }

  [MAYBEEND] () {
    if (this[ENDED] &&
        !this[EMITTEDEND] &&
        !this[ABORTED] &&
        !this[CONSUMING]) {
      this[EMITTEDEND] = true
      const entry = this[WRITEENTRY]
      if (entry && entry.blockRemain) {
        // truncated, likely a damaged file
        const have = this[BUFFER] ? this[BUFFER].length : 0
        this.warn('TAR_BAD_ARCHIVE', `Truncated input (needed ${
          entry.blockRemain} more bytes, only ${have} available)`, { entry })
        if (this[BUFFER]) {
          entry.write(this[BUFFER])
        }
        entry.end()
      }
      this[EMIT](DONE)
    }
  }

  [CONSUMECHUNK] (chunk) {
    if (this[CONSUMING]) {
      this[BUFFERCONCAT](chunk)
    } else if (!chunk && !this[BUFFER]) {
      this[MAYBEEND]()
    } else {
      this[CONSUMING] = true
      if (this[BUFFER]) {
        this[BUFFERCONCAT](chunk)
        const c = this[BUFFER]
        this[BUFFER] = null
        this[CONSUMECHUNKSUB](c)
      } else {
        this[CONSUMECHUNKSUB](chunk)
      }

      while (this[BUFFER] &&
          this[BUFFER].length >= 512 &&
          !this[ABORTED] &&
          !this[SAW_EOF]) {
        const c = this[BUFFER]
        this[BUFFER] = null
        this[CONSUMECHUNKSUB](c)
      }
      this[CONSUMING] = false
    }

    if (!this[BUFFER] || this[ENDED]) {
      this[MAYBEEND]()
    }
  }

  [CONSUMECHUNKSUB] (chunk) {
    // we know that we are in CONSUMING mode, so anything written goes into
    // the buffer.  Advance the position and put any remainder in the buffer.
    let position = 0
    const length = chunk.length
    while (position + 512 <= length && !this[ABORTED] && !this[SAW_EOF]) {
      switch (this[STATE]) {
        case 'begin':
        case 'header':
          this[CONSUMEHEADER](chunk, position)
          position += 512
          break

        case 'ignore':
        case 'body':
          position += this[CONSUMEBODY](chunk, position)
          break

        case 'meta':
          position += this[CONSUMEMETA](chunk, position)
          break

        /* istanbul ignore next */
        default:
          throw new Error('invalid state: ' + this[STATE])
      }
    }

    if (position < length) {
      if (this[BUFFER]) {
        this[BUFFER] = Buffer.concat([chunk.slice(position), this[BUFFER]])
      } else {
        this[BUFFER] = chunk.slice(position)
      }
    }
  }

  end (chunk) {
    if (!this[ABORTED]) {
      if (this[UNZIP]) {
        this[UNZIP].end(chunk)
      } else {
        this[ENDED] = true
        this.write(chunk)
      }
    }
  }
})


/***/ }),

/***/ 2526:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// A path exclusive reservation system
// reserve([list, of, paths], fn)
// When the fn is first in line for all its paths, it
// is called with a cb that clears the reservation.
//
// Used by async unpack to avoid clobbering paths in use,
// while still allowing maximal safe parallelization.

const assert = __nccwpck_require__(9491)
const normalize = __nccwpck_require__(3909)
const stripSlashes = __nccwpck_require__(3726)
const { join } = __nccwpck_require__(1017)

const platform = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform
const isWindows = platform === 'win32'

module.exports = () => {
  // path => [function or Set]
  // A Set object means a directory reservation
  // A fn is a direct reservation on that path
  const queues = new Map()

  // fn => {paths:[path,...], dirs:[path, ...]}
  const reservations = new Map()

  // return a set of parent dirs for a given path
  // '/a/b/c/d' -> ['/', '/a', '/a/b', '/a/b/c', '/a/b/c/d']
  const getDirs = path => {
    const dirs = path.split('/').slice(0, -1).reduce((set, path) => {
      if (set.length) {
        path = join(set[set.length - 1], path)
      }
      set.push(path || '/')
      return set
    }, [])
    return dirs
  }

  // functions currently running
  const running = new Set()

  // return the queues for each path the function cares about
  // fn => {paths, dirs}
  const getQueues = fn => {
    const res = reservations.get(fn)
    /* istanbul ignore if - unpossible */
    if (!res) {
      throw new Error('function does not have any path reservations')
    }
    return {
      paths: res.paths.map(path => queues.get(path)),
      dirs: [...res.dirs].map(path => queues.get(path)),
    }
  }

  // check if fn is first in line for all its paths, and is
  // included in the first set for all its dir queues
  const check = fn => {
    const { paths, dirs } = getQueues(fn)
    return paths.every(q => q[0] === fn) &&
      dirs.every(q => q[0] instanceof Set && q[0].has(fn))
  }

  // run the function if it's first in line and not already running
  const run = fn => {
    if (running.has(fn) || !check(fn)) {
      return false
    }
    running.add(fn)
    fn(() => clear(fn))
    return true
  }

  const clear = fn => {
    if (!running.has(fn)) {
      return false
    }

    const { paths, dirs } = reservations.get(fn)
    const next = new Set()

    paths.forEach(path => {
      const q = queues.get(path)
      assert.equal(q[0], fn)
      if (q.length === 1) {
        queues.delete(path)
      } else {
        q.shift()
        if (typeof q[0] === 'function') {
          next.add(q[0])
        } else {
          q[0].forEach(fn => next.add(fn))
        }
      }
    })

    dirs.forEach(dir => {
      const q = queues.get(dir)
      assert(q[0] instanceof Set)
      if (q[0].size === 1 && q.length === 1) {
        queues.delete(dir)
      } else if (q[0].size === 1) {
        q.shift()

        // must be a function or else the Set would've been reused
        next.add(q[0])
      } else {
        q[0].delete(fn)
      }
    })
    running.delete(fn)

    next.forEach(fn => run(fn))
    return true
  }

  const reserve = (paths, fn) => {
    // collide on matches across case and unicode normalization
    // On windows, thanks to the magic of 8.3 shortnames, it is fundamentally
    // impossible to determine whether two paths refer to the same thing on
    // disk, without asking the kernel for a shortname.
    // So, we just pretend that every path matches every other path here,
    // effectively removing all parallelization on windows.
    paths = isWindows ? ['win32 parallelization disabled'] : paths.map(p => {
      // don't need normPath, because we skip this entirely for windows
      return normalize(stripSlashes(join(p))).toLowerCase()
    })

    const dirs = new Set(
      paths.map(path => getDirs(path)).reduce((a, b) => a.concat(b))
    )
    reservations.set(fn, { dirs, paths })
    paths.forEach(path => {
      const q = queues.get(path)
      if (!q) {
        queues.set(path, [fn])
      } else {
        q.push(fn)
      }
    })
    dirs.forEach(dir => {
      const q = queues.get(dir)
      if (!q) {
        queues.set(dir, [new Set([fn])])
      } else if (q[q.length - 1] instanceof Set) {
        q[q.length - 1].add(fn)
      } else {
        q.push(new Set([fn]))
      }
    })

    return run(fn)
  }

  return { check, reserve }
}


/***/ }),

/***/ 3290:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const Header = __nccwpck_require__(5797)
const path = __nccwpck_require__(1017)

class Pax {
  constructor (obj, global) {
    this.atime = obj.atime || null
    this.charset = obj.charset || null
    this.comment = obj.comment || null
    this.ctime = obj.ctime || null
    this.gid = obj.gid || null
    this.gname = obj.gname || null
    this.linkpath = obj.linkpath || null
    this.mtime = obj.mtime || null
    this.path = obj.path || null
    this.size = obj.size || null
    this.uid = obj.uid || null
    this.uname = obj.uname || null
    this.dev = obj.dev || null
    this.ino = obj.ino || null
    this.nlink = obj.nlink || null
    this.global = global || false
  }

  encode () {
    const body = this.encodeBody()
    if (body === '') {
      return null
    }

    const bodyLen = Buffer.byteLength(body)
    // round up to 512 bytes
    // add 512 for header
    const bufLen = 512 * Math.ceil(1 + bodyLen / 512)
    const buf = Buffer.allocUnsafe(bufLen)

    // 0-fill the header section, it might not hit every field
    for (let i = 0; i < 512; i++) {
      buf[i] = 0
    }

    new Header({
      // XXX split the path
      // then the path should be PaxHeader + basename, but less than 99,
      // prepend with the dirname
      path: ('PaxHeader/' + path.basename(this.path)).slice(0, 99),
      mode: this.mode || 0o644,
      uid: this.uid || null,
      gid: this.gid || null,
      size: bodyLen,
      mtime: this.mtime || null,
      type: this.global ? 'GlobalExtendedHeader' : 'ExtendedHeader',
      linkpath: '',
      uname: this.uname || '',
      gname: this.gname || '',
      devmaj: 0,
      devmin: 0,
      atime: this.atime || null,
      ctime: this.ctime || null,
    }).encode(buf)

    buf.write(body, 512, bodyLen, 'utf8')

    // null pad after the body
    for (let i = bodyLen + 512; i < buf.length; i++) {
      buf[i] = 0
    }

    return buf
  }

  encodeBody () {
    return (
      this.encodeField('path') +
      this.encodeField('ctime') +
      this.encodeField('atime') +
      this.encodeField('dev') +
      this.encodeField('ino') +
      this.encodeField('nlink') +
      this.encodeField('charset') +
      this.encodeField('comment') +
      this.encodeField('gid') +
      this.encodeField('gname') +
      this.encodeField('linkpath') +
      this.encodeField('mtime') +
      this.encodeField('size') +
      this.encodeField('uid') +
      this.encodeField('uname')
    )
  }

  encodeField (field) {
    if (this[field] === null || this[field] === undefined) {
      return ''
    }
    const v = this[field] instanceof Date ? this[field].getTime() / 1000
      : this[field]
    const s = ' ' +
      (field === 'dev' || field === 'ino' || field === 'nlink'
        ? 'SCHILY.' : '') +
      field + '=' + v + '\n'
    const byteLen = Buffer.byteLength(s)
    // the digits includes the length of the digits in ascii base-10
    // so if it's 9 characters, then adding 1 for the 9 makes it 10
    // which makes it 11 chars.
    let digits = Math.floor(Math.log(byteLen) / Math.log(10)) + 1
    if (byteLen + digits >= Math.pow(10, digits)) {
      digits += 1
    }
    const len = digits + byteLen
    return len + s
  }
}

Pax.parse = (string, ex, g) => new Pax(merge(parseKV(string), ex), g)

const merge = (a, b) =>
  b ? Object.keys(a).reduce((s, k) => (s[k] = a[k], s), b) : a

const parseKV = string =>
  string
    .replace(/\n$/, '')
    .split('\n')
    .reduce(parseKVLine, Object.create(null))

const parseKVLine = (set, line) => {
  const n = parseInt(line, 10)

  // XXX Values with \n in them will fail this.
  // Refactor to not be a naive line-by-line parse.
  if (n !== Buffer.byteLength(line) + 1) {
    return set
  }

  line = line.slice((n + ' ').length)
  const kv = line.split('=')
  const k = kv.shift().replace(/^SCHILY\.(dev|ino|nlink)/, '$1')
  if (!k) {
    return set
  }

  const v = kv.join('=')
  set[k] = /^([A-Z]+\.)?([mac]|birth|creation)time$/.test(k)
    ? new Date(v * 1000)
    : /^[0-9]+$/.test(v) ? +v
    : v
  return set
}

module.exports = Pax


/***/ }),

/***/ 9883:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const MiniPass = __nccwpck_require__(6977)
const normPath = __nccwpck_require__(7457)

const SLURP = Symbol('slurp')
module.exports = class ReadEntry extends MiniPass {
  constructor (header, ex, gex) {
    super()
    // read entries always start life paused.  this is to avoid the
    // situation where Minipass's auto-ending empty streams results
    // in an entry ending before we're ready for it.
    this.pause()
    this.extended = ex
    this.globalExtended = gex
    this.header = header
    this.startBlockSize = 512 * Math.ceil(header.size / 512)
    this.blockRemain = this.startBlockSize
    this.remain = header.size
    this.type = header.type
    this.meta = false
    this.ignore = false
    switch (this.type) {
      case 'File':
      case 'OldFile':
      case 'Link':
      case 'SymbolicLink':
      case 'CharacterDevice':
      case 'BlockDevice':
      case 'Directory':
      case 'FIFO':
      case 'ContiguousFile':
      case 'GNUDumpDir':
        break

      case 'NextFileHasLongLinkpath':
      case 'NextFileHasLongPath':
      case 'OldGnuLongPath':
      case 'GlobalExtendedHeader':
      case 'ExtendedHeader':
      case 'OldExtendedHeader':
        this.meta = true
        break

      // NOTE: gnutar and bsdtar treat unrecognized types as 'File'
      // it may be worth doing the same, but with a warning.
      default:
        this.ignore = true
    }

    this.path = normPath(header.path)
    this.mode = header.mode
    if (this.mode) {
      this.mode = this.mode & 0o7777
    }
    this.uid = header.uid
    this.gid = header.gid
    this.uname = header.uname
    this.gname = header.gname
    this.size = header.size
    this.mtime = header.mtime
    this.atime = header.atime
    this.ctime = header.ctime
    this.linkpath = normPath(header.linkpath)
    this.uname = header.uname
    this.gname = header.gname

    if (ex) {
      this[SLURP](ex)
    }
    if (gex) {
      this[SLURP](gex, true)
    }
  }

  write (data) {
    const writeLen = data.length
    if (writeLen > this.blockRemain) {
      throw new Error('writing more to entry than is appropriate')
    }

    const r = this.remain
    const br = this.blockRemain
    this.remain = Math.max(0, r - writeLen)
    this.blockRemain = Math.max(0, br - writeLen)
    if (this.ignore) {
      return true
    }

    if (r >= writeLen) {
      return super.write(data)
    }

    // r < writeLen
    return super.write(data.slice(0, r))
  }

  [SLURP] (ex, global) {
    for (const k in ex) {
      // we slurp in everything except for the path attribute in
      // a global extended header, because that's weird.
      if (ex[k] !== null && ex[k] !== undefined &&
          !(global && k === 'path')) {
        this[k] = k === 'path' || k === 'linkpath' ? normPath(ex[k]) : ex[k]
      }
    }
  }
}


/***/ }),

/***/ 652:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


// tar -r
const hlo = __nccwpck_require__(6640)
const Pack = __nccwpck_require__(6456)
const fs = __nccwpck_require__(7147)
const fsm = __nccwpck_require__(5879)
const t = __nccwpck_require__(5765)
const path = __nccwpck_require__(1017)

// starting at the head of the file, read a Header
// If the checksum is invalid, that's our position to start writing
// If it is, jump forward by the specified size (round up to 512)
// and try again.
// Write the new Pack stream starting there.

const Header = __nccwpck_require__(5797)

module.exports = (opt_, files, cb) => {
  const opt = hlo(opt_)

  if (!opt.file) {
    throw new TypeError('file is required')
  }

  if (opt.gzip) {
    throw new TypeError('cannot append to compressed archives')
  }

  if (!files || !Array.isArray(files) || !files.length) {
    throw new TypeError('no files or directories specified')
  }

  files = Array.from(files)

  return opt.sync ? replaceSync(opt, files)
    : replace(opt, files, cb)
}

const replaceSync = (opt, files) => {
  const p = new Pack.Sync(opt)

  let threw = true
  let fd
  let position

  try {
    try {
      fd = fs.openSync(opt.file, 'r+')
    } catch (er) {
      if (er.code === 'ENOENT') {
        fd = fs.openSync(opt.file, 'w+')
      } else {
        throw er
      }
    }

    const st = fs.fstatSync(fd)
    const headBuf = Buffer.alloc(512)

    POSITION: for (position = 0; position < st.size; position += 512) {
      for (let bufPos = 0, bytes = 0; bufPos < 512; bufPos += bytes) {
        bytes = fs.readSync(
          fd, headBuf, bufPos, headBuf.length - bufPos, position + bufPos
        )

        if (position === 0 && headBuf[0] === 0x1f && headBuf[1] === 0x8b) {
          throw new Error('cannot append to compressed archives')
        }

        if (!bytes) {
          break POSITION
        }
      }

      const h = new Header(headBuf)
      if (!h.cksumValid) {
        break
      }
      const entryBlockSize = 512 * Math.ceil(h.size / 512)
      if (position + entryBlockSize + 512 > st.size) {
        break
      }
      // the 512 for the header we just parsed will be added as well
      // also jump ahead all the blocks for the body
      position += entryBlockSize
      if (opt.mtimeCache) {
        opt.mtimeCache.set(h.path, h.mtime)
      }
    }
    threw = false

    streamSync(opt, p, position, fd, files)
  } finally {
    if (threw) {
      try {
        fs.closeSync(fd)
      } catch (er) {}
    }
  }
}

const streamSync = (opt, p, position, fd, files) => {
  const stream = new fsm.WriteStreamSync(opt.file, {
    fd: fd,
    start: position,
  })
  p.pipe(stream)
  addFilesSync(p, files)
}

const replace = (opt, files, cb) => {
  files = Array.from(files)
  const p = new Pack(opt)

  const getPos = (fd, size, cb_) => {
    const cb = (er, pos) => {
      if (er) {
        fs.close(fd, _ => cb_(er))
      } else {
        cb_(null, pos)
      }
    }

    let position = 0
    if (size === 0) {
      return cb(null, 0)
    }

    let bufPos = 0
    const headBuf = Buffer.alloc(512)
    const onread = (er, bytes) => {
      if (er) {
        return cb(er)
      }
      bufPos += bytes
      if (bufPos < 512 && bytes) {
        return fs.read(
          fd, headBuf, bufPos, headBuf.length - bufPos,
          position + bufPos, onread
        )
      }

      if (position === 0 && headBuf[0] === 0x1f && headBuf[1] === 0x8b) {
        return cb(new Error('cannot append to compressed archives'))
      }

      // truncated header
      if (bufPos < 512) {
        return cb(null, position)
      }

      const h = new Header(headBuf)
      if (!h.cksumValid) {
        return cb(null, position)
      }

      const entryBlockSize = 512 * Math.ceil(h.size / 512)
      if (position + entryBlockSize + 512 > size) {
        return cb(null, position)
      }

      position += entryBlockSize + 512
      if (position >= size) {
        return cb(null, position)
      }

      if (opt.mtimeCache) {
        opt.mtimeCache.set(h.path, h.mtime)
      }
      bufPos = 0
      fs.read(fd, headBuf, 0, 512, position, onread)
    }
    fs.read(fd, headBuf, 0, 512, position, onread)
  }

  const promise = new Promise((resolve, reject) => {
    p.on('error', reject)
    let flag = 'r+'
    const onopen = (er, fd) => {
      if (er && er.code === 'ENOENT' && flag === 'r+') {
        flag = 'w+'
        return fs.open(opt.file, flag, onopen)
      }

      if (er) {
        return reject(er)
      }

      fs.fstat(fd, (er, st) => {
        if (er) {
          return fs.close(fd, () => reject(er))
        }

        getPos(fd, st.size, (er, position) => {
          if (er) {
            return reject(er)
          }
          const stream = new fsm.WriteStream(opt.file, {
            fd: fd,
            start: position,
          })
          p.pipe(stream)
          stream.on('error', reject)
          stream.on('close', resolve)
          addFilesAsync(p, files)
        })
      })
    }
    fs.open(opt.file, flag, onopen)
  })

  return cb ? promise.then(cb, cb) : promise
}

const addFilesSync = (p, files) => {
  files.forEach(file => {
    if (file.charAt(0) === '@') {
      t({
        file: path.resolve(p.cwd, file.slice(1)),
        sync: true,
        noResume: true,
        onentry: entry => p.add(entry),
      })
    } else {
      p.add(file)
    }
  })
  p.end()
}

const addFilesAsync = (p, files) => {
  while (files.length) {
    const file = files.shift()
    if (file.charAt(0) === '@') {
      return t({
        file: path.resolve(p.cwd, file.slice(1)),
        noResume: true,
        onentry: entry => p.add(entry),
      }).then(_ => addFilesAsync(p, files))
    } else {
      p.add(file)
    }
  }
  p.end()
}


/***/ }),

/***/ 9820:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// unix absolute paths are also absolute on win32, so we use this for both
const { isAbsolute, parse } = (__nccwpck_require__(1017).win32)

// returns [root, stripped]
// Note that windows will think that //x/y/z/a has a "root" of //x/y, and in
// those cases, we want to sanitize it to x/y/z/a, not z/a, so we strip /
// explicitly if it's the first character.
// drive-specific relative paths on Windows get their root stripped off even
// though they are not absolute, so `c:../foo` becomes ['c:', '../foo']
module.exports = path => {
  let r = ''

  let parsed = parse(path)
  while (isAbsolute(path) || parsed.root) {
    // windows will think that //x/y/z has a "root" of //x/y/
    // but strip the //?/C:/ off of //?/C:/path
    const root = path.charAt(0) === '/' && path.slice(0, 4) !== '//?/' ? '/'
      : parsed.root
    path = path.slice(root.length)
    r += root
    parsed = parse(path)
  }
  return [r, path]
}


/***/ }),

/***/ 3726:
/***/ ((module) => {

// warning: extremely hot code path.
// This has been meticulously optimized for use
// within npm install on large package trees.
// Do not edit without careful benchmarking.
module.exports = str => {
  let i = str.length - 1
  let slashesStart = -1
  while (i > -1 && str.charAt(i) === '/') {
    slashesStart = i
    i--
  }
  return slashesStart === -1 ? str : str.slice(0, slashesStart)
}


/***/ }),

/***/ 3226:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// map types from key to human-friendly name
exports.name = new Map([
  ['0', 'File'],
  // same as File
  ['', 'OldFile'],
  ['1', 'Link'],
  ['2', 'SymbolicLink'],
  // Devices and FIFOs aren't fully supported
  // they are parsed, but skipped when unpacking
  ['3', 'CharacterDevice'],
  ['4', 'BlockDevice'],
  ['5', 'Directory'],
  ['6', 'FIFO'],
  // same as File
  ['7', 'ContiguousFile'],
  // pax headers
  ['g', 'GlobalExtendedHeader'],
  ['x', 'ExtendedHeader'],
  // vendor-specific stuff
  // skip
  ['A', 'SolarisACL'],
  // like 5, but with data, which should be skipped
  ['D', 'GNUDumpDir'],
  // metadata only, skip
  ['I', 'Inode'],
  // data = link path of next file
  ['K', 'NextFileHasLongLinkpath'],
  // data = path of next file
  ['L', 'NextFileHasLongPath'],
  // skip
  ['M', 'ContinuationFile'],
  // like L
  ['N', 'OldGnuLongPath'],
  // skip
  ['S', 'SparseFile'],
  // skip
  ['V', 'TapeVolumeHeader'],
  // like x
  ['X', 'OldExtendedHeader'],
])

// map the other direction
exports.code = new Map(Array.from(exports.name).map(kv => [kv[1], kv[0]]))


/***/ }),

/***/ 1073:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


// the PEND/UNPEND stuff tracks whether we're ready to emit end/close yet.
// but the path reservations are required to avoid race conditions where
// parallelized unpack ops may mess with one another, due to dependencies
// (like a Link depending on its target) or destructive operations (like
// clobbering an fs object to create one of a different type.)

const assert = __nccwpck_require__(9491)
const Parser = __nccwpck_require__(7635)
const fs = __nccwpck_require__(7147)
const fsm = __nccwpck_require__(5879)
const path = __nccwpck_require__(1017)
const mkdir = __nccwpck_require__(1953)
const wc = __nccwpck_require__(3705)
const pathReservations = __nccwpck_require__(2526)
const stripAbsolutePath = __nccwpck_require__(9820)
const normPath = __nccwpck_require__(7457)
const stripSlash = __nccwpck_require__(3726)
const normalize = __nccwpck_require__(3909)

const ONENTRY = Symbol('onEntry')
const CHECKFS = Symbol('checkFs')
const CHECKFS2 = Symbol('checkFs2')
const PRUNECACHE = Symbol('pruneCache')
const ISREUSABLE = Symbol('isReusable')
const MAKEFS = Symbol('makeFs')
const FILE = Symbol('file')
const DIRECTORY = Symbol('directory')
const LINK = Symbol('link')
const SYMLINK = Symbol('symlink')
const HARDLINK = Symbol('hardlink')
const UNSUPPORTED = Symbol('unsupported')
const CHECKPATH = Symbol('checkPath')
const MKDIR = Symbol('mkdir')
const ONERROR = Symbol('onError')
const PENDING = Symbol('pending')
const PEND = Symbol('pend')
const UNPEND = Symbol('unpend')
const ENDED = Symbol('ended')
const MAYBECLOSE = Symbol('maybeClose')
const SKIP = Symbol('skip')
const DOCHOWN = Symbol('doChown')
const UID = Symbol('uid')
const GID = Symbol('gid')
const CHECKED_CWD = Symbol('checkedCwd')
const crypto = __nccwpck_require__(6113)
const getFlag = __nccwpck_require__(337)
const platform = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform
const isWindows = platform === 'win32'

// Unlinks on Windows are not atomic.
//
// This means that if you have a file entry, followed by another
// file entry with an identical name, and you cannot re-use the file
// (because it's a hardlink, or because unlink:true is set, or it's
// Windows, which does not have useful nlink values), then the unlink
// will be committed to the disk AFTER the new file has been written
// over the old one, deleting the new file.
//
// To work around this, on Windows systems, we rename the file and then
// delete the renamed file.  It's a sloppy kludge, but frankly, I do not
// know of a better way to do this, given windows' non-atomic unlink
// semantics.
//
// See: https://github.com/npm/node-tar/issues/183
/* istanbul ignore next */
const unlinkFile = (path, cb) => {
  if (!isWindows) {
    return fs.unlink(path, cb)
  }

  const name = path + '.DELETE.' + crypto.randomBytes(16).toString('hex')
  fs.rename(path, name, er => {
    if (er) {
      return cb(er)
    }
    fs.unlink(name, cb)
  })
}

/* istanbul ignore next */
const unlinkFileSync = path => {
  if (!isWindows) {
    return fs.unlinkSync(path)
  }

  const name = path + '.DELETE.' + crypto.randomBytes(16).toString('hex')
  fs.renameSync(path, name)
  fs.unlinkSync(name)
}

// this.gid, entry.gid, this.processUid
const uint32 = (a, b, c) =>
  a === a >>> 0 ? a
  : b === b >>> 0 ? b
  : c

// clear the cache if it's a case-insensitive unicode-squashing match.
// we can't know if the current file system is case-sensitive or supports
// unicode fully, so we check for similarity on the maximally compatible
// representation.  Err on the side of pruning, since all it's doing is
// preventing lstats, and it's not the end of the world if we get a false
// positive.
// Note that on windows, we always drop the entire cache whenever a
// symbolic link is encountered, because 8.3 filenames are impossible
// to reason about, and collisions are hazards rather than just failures.
const cacheKeyNormalize = path => normalize(stripSlash(normPath(path)))
  .toLowerCase()

const pruneCache = (cache, abs) => {
  abs = cacheKeyNormalize(abs)
  for (const path of cache.keys()) {
    const pnorm = cacheKeyNormalize(path)
    if (pnorm === abs || pnorm.indexOf(abs + '/') === 0) {
      cache.delete(path)
    }
  }
}

const dropCache = cache => {
  for (const key of cache.keys()) {
    cache.delete(key)
  }
}

class Unpack extends Parser {
  constructor (opt) {
    if (!opt) {
      opt = {}
    }

    opt.ondone = _ => {
      this[ENDED] = true
      this[MAYBECLOSE]()
    }

    super(opt)

    this[CHECKED_CWD] = false

    this.reservations = pathReservations()

    this.transform = typeof opt.transform === 'function' ? opt.transform : null

    this.writable = true
    this.readable = false

    this[PENDING] = 0
    this[ENDED] = false

    this.dirCache = opt.dirCache || new Map()

    if (typeof opt.uid === 'number' || typeof opt.gid === 'number') {
      // need both or neither
      if (typeof opt.uid !== 'number' || typeof opt.gid !== 'number') {
        throw new TypeError('cannot set owner without number uid and gid')
      }
      if (opt.preserveOwner) {
        throw new TypeError(
          'cannot preserve owner in archive and also set owner explicitly')
      }
      this.uid = opt.uid
      this.gid = opt.gid
      this.setOwner = true
    } else {
      this.uid = null
      this.gid = null
      this.setOwner = false
    }

    // default true for root
    if (opt.preserveOwner === undefined && typeof opt.uid !== 'number') {
      this.preserveOwner = process.getuid && process.getuid() === 0
    } else {
      this.preserveOwner = !!opt.preserveOwner
    }

    this.processUid = (this.preserveOwner || this.setOwner) && process.getuid ?
      process.getuid() : null
    this.processGid = (this.preserveOwner || this.setOwner) && process.getgid ?
      process.getgid() : null

    // mostly just for testing, but useful in some cases.
    // Forcibly trigger a chown on every entry, no matter what
    this.forceChown = opt.forceChown === true

    // turn ><?| in filenames into 0xf000-higher encoded forms
    this.win32 = !!opt.win32 || isWindows

    // do not unpack over files that are newer than what's in the archive
    this.newer = !!opt.newer

    // do not unpack over ANY files
    this.keep = !!opt.keep

    // do not set mtime/atime of extracted entries
    this.noMtime = !!opt.noMtime

    // allow .., absolute path entries, and unpacking through symlinks
    // without this, warn and skip .., relativize absolutes, and error
    // on symlinks in extraction path
    this.preservePaths = !!opt.preservePaths

    // unlink files and links before writing. This breaks existing hard
    // links, and removes symlink directories rather than erroring
    this.unlink = !!opt.unlink

    this.cwd = normPath(path.resolve(opt.cwd || process.cwd()))
    this.strip = +opt.strip || 0
    // if we're not chmodding, then we don't need the process umask
    this.processUmask = opt.noChmod ? 0 : process.umask()
    this.umask = typeof opt.umask === 'number' ? opt.umask : this.processUmask

    // default mode for dirs created as parents
    this.dmode = opt.dmode || (0o0777 & (~this.umask))
    this.fmode = opt.fmode || (0o0666 & (~this.umask))

    this.on('entry', entry => this[ONENTRY](entry))
  }

  // a bad or damaged archive is a warning for Parser, but an error
  // when extracting.  Mark those errors as unrecoverable, because
  // the Unpack contract cannot be met.
  warn (code, msg, data = {}) {
    if (code === 'TAR_BAD_ARCHIVE' || code === 'TAR_ABORT') {
      data.recoverable = false
    }
    return super.warn(code, msg, data)
  }

  [MAYBECLOSE] () {
    if (this[ENDED] && this[PENDING] === 0) {
      this.emit('prefinish')
      this.emit('finish')
      this.emit('end')
    }
  }

  [CHECKPATH] (entry) {
    if (this.strip) {
      const parts = normPath(entry.path).split('/')
      if (parts.length < this.strip) {
        return false
      }
      entry.path = parts.slice(this.strip).join('/')

      if (entry.type === 'Link') {
        const linkparts = normPath(entry.linkpath).split('/')
        if (linkparts.length >= this.strip) {
          entry.linkpath = linkparts.slice(this.strip).join('/')
        } else {
          return false
        }
      }
    }

    if (!this.preservePaths) {
      const p = normPath(entry.path)
      const parts = p.split('/')
      if (parts.includes('..') || isWindows && /^[a-z]:\.\.$/i.test(parts[0])) {
        this.warn('TAR_ENTRY_ERROR', `path contains '..'`, {
          entry,
          path: p,
        })
        return false
      }

      // strip off the root
      const [root, stripped] = stripAbsolutePath(p)
      if (root) {
        entry.path = stripped
        this.warn('TAR_ENTRY_INFO', `stripping ${root} from absolute path`, {
          entry,
          path: p,
        })
      }
    }

    if (path.isAbsolute(entry.path)) {
      entry.absolute = normPath(path.resolve(entry.path))
    } else {
      entry.absolute = normPath(path.resolve(this.cwd, entry.path))
    }

    // if we somehow ended up with a path that escapes the cwd, and we are
    // not in preservePaths mode, then something is fishy!  This should have
    // been prevented above, so ignore this for coverage.
    /* istanbul ignore if - defense in depth */
    if (!this.preservePaths &&
        entry.absolute.indexOf(this.cwd + '/') !== 0 &&
        entry.absolute !== this.cwd) {
      this.warn('TAR_ENTRY_ERROR', 'path escaped extraction target', {
        entry,
        path: normPath(entry.path),
        resolvedPath: entry.absolute,
        cwd: this.cwd,
      })
      return false
    }

    // an archive can set properties on the extraction directory, but it
    // may not replace the cwd with a different kind of thing entirely.
    if (entry.absolute === this.cwd &&
        entry.type !== 'Directory' &&
        entry.type !== 'GNUDumpDir') {
      return false
    }

    // only encode : chars that aren't drive letter indicators
    if (this.win32) {
      const { root: aRoot } = path.win32.parse(entry.absolute)
      entry.absolute = aRoot + wc.encode(entry.absolute.slice(aRoot.length))
      const { root: pRoot } = path.win32.parse(entry.path)
      entry.path = pRoot + wc.encode(entry.path.slice(pRoot.length))
    }

    return true
  }

  [ONENTRY] (entry) {
    if (!this[CHECKPATH](entry)) {
      return entry.resume()
    }

    assert.equal(typeof entry.absolute, 'string')

    switch (entry.type) {
      case 'Directory':
      case 'GNUDumpDir':
        if (entry.mode) {
          entry.mode = entry.mode | 0o700
        }

      // eslint-disable-next-line no-fallthrough
      case 'File':
      case 'OldFile':
      case 'ContiguousFile':
      case 'Link':
      case 'SymbolicLink':
        return this[CHECKFS](entry)

      case 'CharacterDevice':
      case 'BlockDevice':
      case 'FIFO':
      default:
        return this[UNSUPPORTED](entry)
    }
  }

  [ONERROR] (er, entry) {
    // Cwd has to exist, or else nothing works. That's serious.
    // Other errors are warnings, which raise the error in strict
    // mode, but otherwise continue on.
    if (er.name === 'CwdError') {
      this.emit('error', er)
    } else {
      this.warn('TAR_ENTRY_ERROR', er, { entry })
      this[UNPEND]()
      entry.resume()
    }
  }

  [MKDIR] (dir, mode, cb) {
    mkdir(normPath(dir), {
      uid: this.uid,
      gid: this.gid,
      processUid: this.processUid,
      processGid: this.processGid,
      umask: this.processUmask,
      preserve: this.preservePaths,
      unlink: this.unlink,
      cache: this.dirCache,
      cwd: this.cwd,
      mode: mode,
      noChmod: this.noChmod,
    }, cb)
  }

  [DOCHOWN] (entry) {
    // in preserve owner mode, chown if the entry doesn't match process
    // in set owner mode, chown if setting doesn't match process
    return this.forceChown ||
      this.preserveOwner &&
      (typeof entry.uid === 'number' && entry.uid !== this.processUid ||
        typeof entry.gid === 'number' && entry.gid !== this.processGid)
      ||
      (typeof this.uid === 'number' && this.uid !== this.processUid ||
        typeof this.gid === 'number' && this.gid !== this.processGid)
  }

  [UID] (entry) {
    return uint32(this.uid, entry.uid, this.processUid)
  }

  [GID] (entry) {
    return uint32(this.gid, entry.gid, this.processGid)
  }

  [FILE] (entry, fullyDone) {
    const mode = entry.mode & 0o7777 || this.fmode
    const stream = new fsm.WriteStream(entry.absolute, {
      flags: getFlag(entry.size),
      mode: mode,
      autoClose: false,
    })
    stream.on('error', er => {
      if (stream.fd) {
        fs.close(stream.fd, () => {})
      }

      // flush all the data out so that we aren't left hanging
      // if the error wasn't actually fatal.  otherwise the parse
      // is blocked, and we never proceed.
      stream.write = () => true
      this[ONERROR](er, entry)
      fullyDone()
    })

    let actions = 1
    const done = er => {
      if (er) {
        /* istanbul ignore else - we should always have a fd by now */
        if (stream.fd) {
          fs.close(stream.fd, () => {})
        }

        this[ONERROR](er, entry)
        fullyDone()
        return
      }

      if (--actions === 0) {
        fs.close(stream.fd, er => {
          if (er) {
            this[ONERROR](er, entry)
          } else {
            this[UNPEND]()
          }
          fullyDone()
        })
      }
    }

    stream.on('finish', _ => {
      // if futimes fails, try utimes
      // if utimes fails, fail with the original error
      // same for fchown/chown
      const abs = entry.absolute
      const fd = stream.fd

      if (entry.mtime && !this.noMtime) {
        actions++
        const atime = entry.atime || new Date()
        const mtime = entry.mtime
        fs.futimes(fd, atime, mtime, er =>
          er ? fs.utimes(abs, atime, mtime, er2 => done(er2 && er))
          : done())
      }

      if (this[DOCHOWN](entry)) {
        actions++
        const uid = this[UID](entry)
        const gid = this[GID](entry)
        fs.fchown(fd, uid, gid, er =>
          er ? fs.chown(abs, uid, gid, er2 => done(er2 && er))
          : done())
      }

      done()
    })

    const tx = this.transform ? this.transform(entry) || entry : entry
    if (tx !== entry) {
      tx.on('error', er => {
        this[ONERROR](er, entry)
        fullyDone()
      })
      entry.pipe(tx)
    }
    tx.pipe(stream)
  }

  [DIRECTORY] (entry, fullyDone) {
    const mode = entry.mode & 0o7777 || this.dmode
    this[MKDIR](entry.absolute, mode, er => {
      if (er) {
        this[ONERROR](er, entry)
        fullyDone()
        return
      }

      let actions = 1
      const done = _ => {
        if (--actions === 0) {
          fullyDone()
          this[UNPEND]()
          entry.resume()
        }
      }

      if (entry.mtime && !this.noMtime) {
        actions++
        fs.utimes(entry.absolute, entry.atime || new Date(), entry.mtime, done)
      }

      if (this[DOCHOWN](entry)) {
        actions++
        fs.chown(entry.absolute, this[UID](entry), this[GID](entry), done)
      }

      done()
    })
  }

  [UNSUPPORTED] (entry) {
    entry.unsupported = true
    this.warn('TAR_ENTRY_UNSUPPORTED',
      `unsupported entry type: ${entry.type}`, { entry })
    entry.resume()
  }

  [SYMLINK] (entry, done) {
    this[LINK](entry, entry.linkpath, 'symlink', done)
  }

  [HARDLINK] (entry, done) {
    const linkpath = normPath(path.resolve(this.cwd, entry.linkpath))
    this[LINK](entry, linkpath, 'link', done)
  }

  [PEND] () {
    this[PENDING]++
  }

  [UNPEND] () {
    this[PENDING]--
    this[MAYBECLOSE]()
  }

  [SKIP] (entry) {
    this[UNPEND]()
    entry.resume()
  }

  // Check if we can reuse an existing filesystem entry safely and
  // overwrite it, rather than unlinking and recreating
  // Windows doesn't report a useful nlink, so we just never reuse entries
  [ISREUSABLE] (entry, st) {
    return entry.type === 'File' &&
      !this.unlink &&
      st.isFile() &&
      st.nlink <= 1 &&
      !isWindows
  }

  // check if a thing is there, and if so, try to clobber it
  [CHECKFS] (entry) {
    this[PEND]()
    const paths = [entry.path]
    if (entry.linkpath) {
      paths.push(entry.linkpath)
    }
    this.reservations.reserve(paths, done => this[CHECKFS2](entry, done))
  }

  [PRUNECACHE] (entry) {
    // if we are not creating a directory, and the path is in the dirCache,
    // then that means we are about to delete the directory we created
    // previously, and it is no longer going to be a directory, and neither
    // is any of its children.
    // If a symbolic link is encountered, all bets are off.  There is no
    // reasonable way to sanitize the cache in such a way we will be able to
    // avoid having filesystem collisions.  If this happens with a non-symlink
    // entry, it'll just fail to unpack, but a symlink to a directory, using an
    // 8.3 shortname or certain unicode attacks, can evade detection and lead
    // to arbitrary writes to anywhere on the system.
    if (entry.type === 'SymbolicLink') {
      dropCache(this.dirCache)
    } else if (entry.type !== 'Directory') {
      pruneCache(this.dirCache, entry.absolute)
    }
  }

  [CHECKFS2] (entry, fullyDone) {
    this[PRUNECACHE](entry)

    const done = er => {
      this[PRUNECACHE](entry)
      fullyDone(er)
    }

    const checkCwd = () => {
      this[MKDIR](this.cwd, this.dmode, er => {
        if (er) {
          this[ONERROR](er, entry)
          done()
          return
        }
        this[CHECKED_CWD] = true
        start()
      })
    }

    const start = () => {
      if (entry.absolute !== this.cwd) {
        const parent = normPath(path.dirname(entry.absolute))
        if (parent !== this.cwd) {
          return this[MKDIR](parent, this.dmode, er => {
            if (er) {
              this[ONERROR](er, entry)
              done()
              return
            }
            afterMakeParent()
          })
        }
      }
      afterMakeParent()
    }

    const afterMakeParent = () => {
      fs.lstat(entry.absolute, (lstatEr, st) => {
        if (st && (this.keep || this.newer && st.mtime > entry.mtime)) {
          this[SKIP](entry)
          done()
          return
        }
        if (lstatEr || this[ISREUSABLE](entry, st)) {
          return this[MAKEFS](null, entry, done)
        }

        if (st.isDirectory()) {
          if (entry.type === 'Directory') {
            const needChmod = !this.noChmod &&
              entry.mode &&
              (st.mode & 0o7777) !== entry.mode
            const afterChmod = er => this[MAKEFS](er, entry, done)
            if (!needChmod) {
              return afterChmod()
            }
            return fs.chmod(entry.absolute, entry.mode, afterChmod)
          }
          // Not a dir entry, have to remove it.
          // NB: the only way to end up with an entry that is the cwd
          // itself, in such a way that == does not detect, is a
          // tricky windows absolute path with UNC or 8.3 parts (and
          // preservePaths:true, or else it will have been stripped).
          // In that case, the user has opted out of path protections
          // explicitly, so if they blow away the cwd, c'est la vie.
          if (entry.absolute !== this.cwd) {
            return fs.rmdir(entry.absolute, er =>
              this[MAKEFS](er, entry, done))
          }
        }

        // not a dir, and not reusable
        // don't remove if the cwd, we want that error
        if (entry.absolute === this.cwd) {
          return this[MAKEFS](null, entry, done)
        }

        unlinkFile(entry.absolute, er =>
          this[MAKEFS](er, entry, done))
      })
    }

    if (this[CHECKED_CWD]) {
      start()
    } else {
      checkCwd()
    }
  }

  [MAKEFS] (er, entry, done) {
    if (er) {
      this[ONERROR](er, entry)
      done()
      return
    }

    switch (entry.type) {
      case 'File':
      case 'OldFile':
      case 'ContiguousFile':
        return this[FILE](entry, done)

      case 'Link':
        return this[HARDLINK](entry, done)

      case 'SymbolicLink':
        return this[SYMLINK](entry, done)

      case 'Directory':
      case 'GNUDumpDir':
        return this[DIRECTORY](entry, done)
    }
  }

  [LINK] (entry, linkpath, link, done) {
    // XXX: get the type ('symlink' or 'junction') for windows
    fs[link](linkpath, entry.absolute, er => {
      if (er) {
        this[ONERROR](er, entry)
      } else {
        this[UNPEND]()
        entry.resume()
      }
      done()
    })
  }
}

const callSync = fn => {
  try {
    return [null, fn()]
  } catch (er) {
    return [er, null]
  }
}
class UnpackSync extends Unpack {
  [MAKEFS] (er, entry) {
    return super[MAKEFS](er, entry, () => {})
  }

  [CHECKFS] (entry) {
    this[PRUNECACHE](entry)

    if (!this[CHECKED_CWD]) {
      const er = this[MKDIR](this.cwd, this.dmode)
      if (er) {
        return this[ONERROR](er, entry)
      }
      this[CHECKED_CWD] = true
    }

    // don't bother to make the parent if the current entry is the cwd,
    // we've already checked it.
    if (entry.absolute !== this.cwd) {
      const parent = normPath(path.dirname(entry.absolute))
      if (parent !== this.cwd) {
        const mkParent = this[MKDIR](parent, this.dmode)
        if (mkParent) {
          return this[ONERROR](mkParent, entry)
        }
      }
    }

    const [lstatEr, st] = callSync(() => fs.lstatSync(entry.absolute))
    if (st && (this.keep || this.newer && st.mtime > entry.mtime)) {
      return this[SKIP](entry)
    }

    if (lstatEr || this[ISREUSABLE](entry, st)) {
      return this[MAKEFS](null, entry)
    }

    if (st.isDirectory()) {
      if (entry.type === 'Directory') {
        const needChmod = !this.noChmod &&
          entry.mode &&
          (st.mode & 0o7777) !== entry.mode
        const [er] = needChmod ? callSync(() => {
          fs.chmodSync(entry.absolute, entry.mode)
        }) : []
        return this[MAKEFS](er, entry)
      }
      // not a dir entry, have to remove it
      const [er] = callSync(() => fs.rmdirSync(entry.absolute))
      this[MAKEFS](er, entry)
    }

    // not a dir, and not reusable.
    // don't remove if it's the cwd, since we want that error.
    const [er] = entry.absolute === this.cwd ? []
      : callSync(() => unlinkFileSync(entry.absolute))
    this[MAKEFS](er, entry)
  }

  [FILE] (entry, done) {
    const mode = entry.mode & 0o7777 || this.fmode

    const oner = er => {
      let closeError
      try {
        fs.closeSync(fd)
      } catch (e) {
        closeError = e
      }
      if (er || closeError) {
        this[ONERROR](er || closeError, entry)
      }
      done()
    }

    let fd
    try {
      fd = fs.openSync(entry.absolute, getFlag(entry.size), mode)
    } catch (er) {
      return oner(er)
    }
    const tx = this.transform ? this.transform(entry) || entry : entry
    if (tx !== entry) {
      tx.on('error', er => this[ONERROR](er, entry))
      entry.pipe(tx)
    }

    tx.on('data', chunk => {
      try {
        fs.writeSync(fd, chunk, 0, chunk.length)
      } catch (er) {
        oner(er)
      }
    })

    tx.on('end', _ => {
      let er = null
      // try both, falling futimes back to utimes
      // if either fails, handle the first error
      if (entry.mtime && !this.noMtime) {
        const atime = entry.atime || new Date()
        const mtime = entry.mtime
        try {
          fs.futimesSync(fd, atime, mtime)
        } catch (futimeser) {
          try {
            fs.utimesSync(entry.absolute, atime, mtime)
          } catch (utimeser) {
            er = futimeser
          }
        }
      }

      if (this[DOCHOWN](entry)) {
        const uid = this[UID](entry)
        const gid = this[GID](entry)

        try {
          fs.fchownSync(fd, uid, gid)
        } catch (fchowner) {
          try {
            fs.chownSync(entry.absolute, uid, gid)
          } catch (chowner) {
            er = er || fchowner
          }
        }
      }

      oner(er)
    })
  }

  [DIRECTORY] (entry, done) {
    const mode = entry.mode & 0o7777 || this.dmode
    const er = this[MKDIR](entry.absolute, mode)
    if (er) {
      this[ONERROR](er, entry)
      done()
      return
    }
    if (entry.mtime && !this.noMtime) {
      try {
        fs.utimesSync(entry.absolute, entry.atime || new Date(), entry.mtime)
      } catch (er) {}
    }
    if (this[DOCHOWN](entry)) {
      try {
        fs.chownSync(entry.absolute, this[UID](entry), this[GID](entry))
      } catch (er) {}
    }
    done()
    entry.resume()
  }

  [MKDIR] (dir, mode) {
    try {
      return mkdir.sync(normPath(dir), {
        uid: this.uid,
        gid: this.gid,
        processUid: this.processUid,
        processGid: this.processGid,
        umask: this.processUmask,
        preserve: this.preservePaths,
        unlink: this.unlink,
        cache: this.dirCache,
        cwd: this.cwd,
        mode: mode,
      })
    } catch (er) {
      return er
    }
  }

  [LINK] (entry, linkpath, link, done) {
    try {
      fs[link + 'Sync'](linkpath, entry.absolute)
      done()
      entry.resume()
    } catch (er) {
      return this[ONERROR](er, entry)
    }
  }
}

Unpack.Sync = UnpackSync
module.exports = Unpack


/***/ }),

/***/ 3895:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


// tar -u

const hlo = __nccwpck_require__(6640)
const r = __nccwpck_require__(652)
// just call tar.r with the filter and mtimeCache

module.exports = (opt_, files, cb) => {
  const opt = hlo(opt_)

  if (!opt.file) {
    throw new TypeError('file is required')
  }

  if (opt.gzip) {
    throw new TypeError('cannot append to compressed archives')
  }

  if (!files || !Array.isArray(files) || !files.length) {
    throw new TypeError('no files or directories specified')
  }

  files = Array.from(files)

  mtimeFilter(opt)
  return r(opt, files, cb)
}

const mtimeFilter = opt => {
  const filter = opt.filter

  if (!opt.mtimeCache) {
    opt.mtimeCache = new Map()
  }

  opt.filter = filter ? (path, stat) =>
    filter(path, stat) && !(opt.mtimeCache.get(path) > stat.mtime)
    : (path, stat) => !(opt.mtimeCache.get(path) > stat.mtime)
}


/***/ }),

/***/ 9144:
/***/ ((module) => {

"use strict";

module.exports = Base => class extends Base {
  warn (code, message, data = {}) {
    if (this.file) {
      data.file = this.file
    }
    if (this.cwd) {
      data.cwd = this.cwd
    }
    data.code = message instanceof Error && message.code || code
    data.tarCode = code
    if (!this.strict && data.recoverable !== false) {
      if (message instanceof Error) {
        data = Object.assign(message, data)
        message = message.message
      }
      this.emit('warn', data.tarCode, message, data)
    } else if (message instanceof Error) {
      this.emit('error', Object.assign(message, data))
    } else {
      this.emit('error', Object.assign(new Error(`${code}: ${message}`), data))
    }
  }
}


/***/ }),

/***/ 3705:
/***/ ((module) => {

"use strict";


// When writing files on Windows, translate the characters to their
// 0xf000 higher-encoded versions.

const raw = [
  '|',
  '<',
  '>',
  '?',
  ':',
]

const win = raw.map(char =>
  String.fromCharCode(0xf000 + char.charCodeAt(0)))

const toWin = new Map(raw.map((char, i) => [char, win[i]]))
const toRaw = new Map(win.map((char, i) => [char, raw[i]]))

module.exports = {
  encode: s => raw.reduce((s, c) => s.split(c).join(toWin.get(c)), s),
  decode: s => win.reduce((s, c) => s.split(c).join(toRaw.get(c)), s),
}


/***/ }),

/***/ 9255:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const MiniPass = __nccwpck_require__(6977)
const Pax = __nccwpck_require__(3290)
const Header = __nccwpck_require__(5797)
const fs = __nccwpck_require__(7147)
const path = __nccwpck_require__(1017)
const normPath = __nccwpck_require__(7457)
const stripSlash = __nccwpck_require__(3726)

const prefixPath = (path, prefix) => {
  if (!prefix) {
    return normPath(path)
  }
  path = normPath(path).replace(/^\.(\/|$)/, '')
  return stripSlash(prefix) + '/' + path
}

const maxReadSize = 16 * 1024 * 1024
const PROCESS = Symbol('process')
const FILE = Symbol('file')
const DIRECTORY = Symbol('directory')
const SYMLINK = Symbol('symlink')
const HARDLINK = Symbol('hardlink')
const HEADER = Symbol('header')
const READ = Symbol('read')
const LSTAT = Symbol('lstat')
const ONLSTAT = Symbol('onlstat')
const ONREAD = Symbol('onread')
const ONREADLINK = Symbol('onreadlink')
const OPENFILE = Symbol('openfile')
const ONOPENFILE = Symbol('onopenfile')
const CLOSE = Symbol('close')
const MODE = Symbol('mode')
const AWAITDRAIN = Symbol('awaitDrain')
const ONDRAIN = Symbol('ondrain')
const PREFIX = Symbol('prefix')
const HAD_ERROR = Symbol('hadError')
const warner = __nccwpck_require__(9144)
const winchars = __nccwpck_require__(3705)
const stripAbsolutePath = __nccwpck_require__(9820)

const modeFix = __nccwpck_require__(687)

const WriteEntry = warner(class WriteEntry extends MiniPass {
  constructor (p, opt) {
    opt = opt || {}
    super(opt)
    if (typeof p !== 'string') {
      throw new TypeError('path is required')
    }
    this.path = normPath(p)
    // suppress atime, ctime, uid, gid, uname, gname
    this.portable = !!opt.portable
    // until node has builtin pwnam functions, this'll have to do
    this.myuid = process.getuid && process.getuid() || 0
    this.myuser = process.env.USER || ''
    this.maxReadSize = opt.maxReadSize || maxReadSize
    this.linkCache = opt.linkCache || new Map()
    this.statCache = opt.statCache || new Map()
    this.preservePaths = !!opt.preservePaths
    this.cwd = normPath(opt.cwd || process.cwd())
    this.strict = !!opt.strict
    this.noPax = !!opt.noPax
    this.noMtime = !!opt.noMtime
    this.mtime = opt.mtime || null
    this.prefix = opt.prefix ? normPath(opt.prefix) : null

    this.fd = null
    this.blockLen = null
    this.blockRemain = null
    this.buf = null
    this.offset = null
    this.length = null
    this.pos = null
    this.remain = null

    if (typeof opt.onwarn === 'function') {
      this.on('warn', opt.onwarn)
    }

    let pathWarn = false
    if (!this.preservePaths) {
      const [root, stripped] = stripAbsolutePath(this.path)
      if (root) {
        this.path = stripped
        pathWarn = root
      }
    }

    this.win32 = !!opt.win32 || process.platform === 'win32'
    if (this.win32) {
      // force the \ to / normalization, since we might not *actually*
      // be on windows, but want \ to be considered a path separator.
      this.path = winchars.decode(this.path.replace(/\\/g, '/'))
      p = p.replace(/\\/g, '/')
    }

    this.absolute = normPath(opt.absolute || path.resolve(this.cwd, p))

    if (this.path === '') {
      this.path = './'
    }

    if (pathWarn) {
      this.warn('TAR_ENTRY_INFO', `stripping ${pathWarn} from absolute path`, {
        entry: this,
        path: pathWarn + this.path,
      })
    }

    if (this.statCache.has(this.absolute)) {
      this[ONLSTAT](this.statCache.get(this.absolute))
    } else {
      this[LSTAT]()
    }
  }

  emit (ev, ...data) {
    if (ev === 'error') {
      this[HAD_ERROR] = true
    }
    return super.emit(ev, ...data)
  }

  [LSTAT] () {
    fs.lstat(this.absolute, (er, stat) => {
      if (er) {
        return this.emit('error', er)
      }
      this[ONLSTAT](stat)
    })
  }

  [ONLSTAT] (stat) {
    this.statCache.set(this.absolute, stat)
    this.stat = stat
    if (!stat.isFile()) {
      stat.size = 0
    }
    this.type = getType(stat)
    this.emit('stat', stat)
    this[PROCESS]()
  }

  [PROCESS] () {
    switch (this.type) {
      case 'File': return this[FILE]()
      case 'Directory': return this[DIRECTORY]()
      case 'SymbolicLink': return this[SYMLINK]()
      // unsupported types are ignored.
      default: return this.end()
    }
  }

  [MODE] (mode) {
    return modeFix(mode, this.type === 'Directory', this.portable)
  }

  [PREFIX] (path) {
    return prefixPath(path, this.prefix)
  }

  [HEADER] () {
    if (this.type === 'Directory' && this.portable) {
      this.noMtime = true
    }

    this.header = new Header({
      path: this[PREFIX](this.path),
      // only apply the prefix to hard links.
      linkpath: this.type === 'Link' ? this[PREFIX](this.linkpath)
      : this.linkpath,
      // only the permissions and setuid/setgid/sticky bitflags
      // not the higher-order bits that specify file type
      mode: this[MODE](this.stat.mode),
      uid: this.portable ? null : this.stat.uid,
      gid: this.portable ? null : this.stat.gid,
      size: this.stat.size,
      mtime: this.noMtime ? null : this.mtime || this.stat.mtime,
      type: this.type,
      uname: this.portable ? null :
      this.stat.uid === this.myuid ? this.myuser : '',
      atime: this.portable ? null : this.stat.atime,
      ctime: this.portable ? null : this.stat.ctime,
    })

    if (this.header.encode() && !this.noPax) {
      super.write(new Pax({
        atime: this.portable ? null : this.header.atime,
        ctime: this.portable ? null : this.header.ctime,
        gid: this.portable ? null : this.header.gid,
        mtime: this.noMtime ? null : this.mtime || this.header.mtime,
        path: this[PREFIX](this.path),
        linkpath: this.type === 'Link' ? this[PREFIX](this.linkpath)
        : this.linkpath,
        size: this.header.size,
        uid: this.portable ? null : this.header.uid,
        uname: this.portable ? null : this.header.uname,
        dev: this.portable ? null : this.stat.dev,
        ino: this.portable ? null : this.stat.ino,
        nlink: this.portable ? null : this.stat.nlink,
      }).encode())
    }
    super.write(this.header.block)
  }

  [DIRECTORY] () {
    if (this.path.slice(-1) !== '/') {
      this.path += '/'
    }
    this.stat.size = 0
    this[HEADER]()
    this.end()
  }

  [SYMLINK] () {
    fs.readlink(this.absolute, (er, linkpath) => {
      if (er) {
        return this.emit('error', er)
      }
      this[ONREADLINK](linkpath)
    })
  }

  [ONREADLINK] (linkpath) {
    this.linkpath = normPath(linkpath)
    this[HEADER]()
    this.end()
  }

  [HARDLINK] (linkpath) {
    this.type = 'Link'
    this.linkpath = normPath(path.relative(this.cwd, linkpath))
    this.stat.size = 0
    this[HEADER]()
    this.end()
  }

  [FILE] () {
    if (this.stat.nlink > 1) {
      const linkKey = this.stat.dev + ':' + this.stat.ino
      if (this.linkCache.has(linkKey)) {
        const linkpath = this.linkCache.get(linkKey)
        if (linkpath.indexOf(this.cwd) === 0) {
          return this[HARDLINK](linkpath)
        }
      }
      this.linkCache.set(linkKey, this.absolute)
    }

    this[HEADER]()
    if (this.stat.size === 0) {
      return this.end()
    }

    this[OPENFILE]()
  }

  [OPENFILE] () {
    fs.open(this.absolute, 'r', (er, fd) => {
      if (er) {
        return this.emit('error', er)
      }
      this[ONOPENFILE](fd)
    })
  }

  [ONOPENFILE] (fd) {
    this.fd = fd
    if (this[HAD_ERROR]) {
      return this[CLOSE]()
    }

    this.blockLen = 512 * Math.ceil(this.stat.size / 512)
    this.blockRemain = this.blockLen
    const bufLen = Math.min(this.blockLen, this.maxReadSize)
    this.buf = Buffer.allocUnsafe(bufLen)
    this.offset = 0
    this.pos = 0
    this.remain = this.stat.size
    this.length = this.buf.length
    this[READ]()
  }

  [READ] () {
    const { fd, buf, offset, length, pos } = this
    fs.read(fd, buf, offset, length, pos, (er, bytesRead) => {
      if (er) {
        // ignoring the error from close(2) is a bad practice, but at
        // this point we already have an error, don't need another one
        return this[CLOSE](() => this.emit('error', er))
      }
      this[ONREAD](bytesRead)
    })
  }

  [CLOSE] (cb) {
    fs.close(this.fd, cb)
  }

  [ONREAD] (bytesRead) {
    if (bytesRead <= 0 && this.remain > 0) {
      const er = new Error('encountered unexpected EOF')
      er.path = this.absolute
      er.syscall = 'read'
      er.code = 'EOF'
      return this[CLOSE](() => this.emit('error', er))
    }

    if (bytesRead > this.remain) {
      const er = new Error('did not encounter expected EOF')
      er.path = this.absolute
      er.syscall = 'read'
      er.code = 'EOF'
      return this[CLOSE](() => this.emit('error', er))
    }

    // null out the rest of the buffer, if we could fit the block padding
    // at the end of this loop, we've incremented bytesRead and this.remain
    // to be incremented up to the blockRemain level, as if we had expected
    // to get a null-padded file, and read it until the end.  then we will
    // decrement both remain and blockRemain by bytesRead, and know that we
    // reached the expected EOF, without any null buffer to append.
    if (bytesRead === this.remain) {
      for (let i = bytesRead; i < this.length && bytesRead < this.blockRemain; i++) {
        this.buf[i + this.offset] = 0
        bytesRead++
        this.remain++
      }
    }

    const writeBuf = this.offset === 0 && bytesRead === this.buf.length ?
      this.buf : this.buf.slice(this.offset, this.offset + bytesRead)

    const flushed = this.write(writeBuf)
    if (!flushed) {
      this[AWAITDRAIN](() => this[ONDRAIN]())
    } else {
      this[ONDRAIN]()
    }
  }

  [AWAITDRAIN] (cb) {
    this.once('drain', cb)
  }

  write (writeBuf) {
    if (this.blockRemain < writeBuf.length) {
      const er = new Error('writing more data than expected')
      er.path = this.absolute
      return this.emit('error', er)
    }
    this.remain -= writeBuf.length
    this.blockRemain -= writeBuf.length
    this.pos += writeBuf.length
    this.offset += writeBuf.length
    return super.write(writeBuf)
  }

  [ONDRAIN] () {
    if (!this.remain) {
      if (this.blockRemain) {
        super.write(Buffer.alloc(this.blockRemain))
      }
      return this[CLOSE](er => er ? this.emit('error', er) : this.end())
    }

    if (this.offset >= this.length) {
      // if we only have a smaller bit left to read, alloc a smaller buffer
      // otherwise, keep it the same length it was before.
      this.buf = Buffer.allocUnsafe(Math.min(this.blockRemain, this.buf.length))
      this.offset = 0
    }
    this.length = this.buf.length - this.offset
    this[READ]()
  }
})

class WriteEntrySync extends WriteEntry {
  [LSTAT] () {
    this[ONLSTAT](fs.lstatSync(this.absolute))
  }

  [SYMLINK] () {
    this[ONREADLINK](fs.readlinkSync(this.absolute))
  }

  [OPENFILE] () {
    this[ONOPENFILE](fs.openSync(this.absolute, 'r'))
  }

  [READ] () {
    let threw = true
    try {
      const { fd, buf, offset, length, pos } = this
      const bytesRead = fs.readSync(fd, buf, offset, length, pos)
      this[ONREAD](bytesRead)
      threw = false
    } finally {
      // ignoring the error from close(2) is a bad practice, but at
      // this point we already have an error, don't need another one
      if (threw) {
        try {
          this[CLOSE](() => {})
        } catch (er) {}
      }
    }
  }

  [AWAITDRAIN] (cb) {
    cb()
  }

  [CLOSE] (cb) {
    fs.closeSync(this.fd)
    cb()
  }
}

const WriteEntryTar = warner(class WriteEntryTar extends MiniPass {
  constructor (readEntry, opt) {
    opt = opt || {}
    super(opt)
    this.preservePaths = !!opt.preservePaths
    this.portable = !!opt.portable
    this.strict = !!opt.strict
    this.noPax = !!opt.noPax
    this.noMtime = !!opt.noMtime

    this.readEntry = readEntry
    this.type = readEntry.type
    if (this.type === 'Directory' && this.portable) {
      this.noMtime = true
    }

    this.prefix = opt.prefix || null

    this.path = normPath(readEntry.path)
    this.mode = this[MODE](readEntry.mode)
    this.uid = this.portable ? null : readEntry.uid
    this.gid = this.portable ? null : readEntry.gid
    this.uname = this.portable ? null : readEntry.uname
    this.gname = this.portable ? null : readEntry.gname
    this.size = readEntry.size
    this.mtime = this.noMtime ? null : opt.mtime || readEntry.mtime
    this.atime = this.portable ? null : readEntry.atime
    this.ctime = this.portable ? null : readEntry.ctime
    this.linkpath = normPath(readEntry.linkpath)

    if (typeof opt.onwarn === 'function') {
      this.on('warn', opt.onwarn)
    }

    let pathWarn = false
    if (!this.preservePaths) {
      const [root, stripped] = stripAbsolutePath(this.path)
      if (root) {
        this.path = stripped
        pathWarn = root
      }
    }

    this.remain = readEntry.size
    this.blockRemain = readEntry.startBlockSize

    this.header = new Header({
      path: this[PREFIX](this.path),
      linkpath: this.type === 'Link' ? this[PREFIX](this.linkpath)
      : this.linkpath,
      // only the permissions and setuid/setgid/sticky bitflags
      // not the higher-order bits that specify file type
      mode: this.mode,
      uid: this.portable ? null : this.uid,
      gid: this.portable ? null : this.gid,
      size: this.size,
      mtime: this.noMtime ? null : this.mtime,
      type: this.type,
      uname: this.portable ? null : this.uname,
      atime: this.portable ? null : this.atime,
      ctime: this.portable ? null : this.ctime,
    })

    if (pathWarn) {
      this.warn('TAR_ENTRY_INFO', `stripping ${pathWarn} from absolute path`, {
        entry: this,
        path: pathWarn + this.path,
      })
    }

    if (this.header.encode() && !this.noPax) {
      super.write(new Pax({
        atime: this.portable ? null : this.atime,
        ctime: this.portable ? null : this.ctime,
        gid: this.portable ? null : this.gid,
        mtime: this.noMtime ? null : this.mtime,
        path: this[PREFIX](this.path),
        linkpath: this.type === 'Link' ? this[PREFIX](this.linkpath)
        : this.linkpath,
        size: this.size,
        uid: this.portable ? null : this.uid,
        uname: this.portable ? null : this.uname,
        dev: this.portable ? null : this.readEntry.dev,
        ino: this.portable ? null : this.readEntry.ino,
        nlink: this.portable ? null : this.readEntry.nlink,
      }).encode())
    }

    super.write(this.header.block)
    readEntry.pipe(this)
  }

  [PREFIX] (path) {
    return prefixPath(path, this.prefix)
  }

  [MODE] (mode) {
    return modeFix(mode, this.type === 'Directory', this.portable)
  }

  write (data) {
    const writeLen = data.length
    if (writeLen > this.blockRemain) {
      throw new Error('writing more to entry than is appropriate')
    }
    this.blockRemain -= writeLen
    return super.write(data)
  }

  end () {
    if (this.blockRemain) {
      super.write(Buffer.alloc(this.blockRemain))
    }
    return super.end()
  }
})

WriteEntry.Sync = WriteEntrySync
WriteEntry.Tar = WriteEntryTar

const getType = stat =>
  stat.isFile() ? 'File'
  : stat.isDirectory() ? 'Directory'
  : stat.isSymbolicLink() ? 'SymbolicLink'
  : 'Unsupported'

module.exports = WriteEntry


/***/ }),

/***/ 5879:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

const MiniPass = __nccwpck_require__(6855)
const EE = (__nccwpck_require__(2361).EventEmitter)
const fs = __nccwpck_require__(7147)

let writev = fs.writev
/* istanbul ignore next */
if (!writev) {
  // This entire block can be removed if support for earlier than Node.js
  // 12.9.0 is not needed.
  const binding = process.binding('fs')
  const FSReqWrap = binding.FSReqWrap || binding.FSReqCallback

  writev = (fd, iovec, pos, cb) => {
    const done = (er, bw) => cb(er, bw, iovec)
    const req = new FSReqWrap()
    req.oncomplete = done
    binding.writeBuffers(fd, iovec, pos, req)
  }
}

const _autoClose = Symbol('_autoClose')
const _close = Symbol('_close')
const _ended = Symbol('_ended')
const _fd = Symbol('_fd')
const _finished = Symbol('_finished')
const _flags = Symbol('_flags')
const _flush = Symbol('_flush')
const _handleChunk = Symbol('_handleChunk')
const _makeBuf = Symbol('_makeBuf')
const _mode = Symbol('_mode')
const _needDrain = Symbol('_needDrain')
const _onerror = Symbol('_onerror')
const _onopen = Symbol('_onopen')
const _onread = Symbol('_onread')
const _onwrite = Symbol('_onwrite')
const _open = Symbol('_open')
const _path = Symbol('_path')
const _pos = Symbol('_pos')
const _queue = Symbol('_queue')
const _read = Symbol('_read')
const _readSize = Symbol('_readSize')
const _reading = Symbol('_reading')
const _remain = Symbol('_remain')
const _size = Symbol('_size')
const _write = Symbol('_write')
const _writing = Symbol('_writing')
const _defaultFlag = Symbol('_defaultFlag')
const _errored = Symbol('_errored')

class ReadStream extends MiniPass {
  constructor (path, opt) {
    opt = opt || {}
    super(opt)

    this.readable = true
    this.writable = false

    if (typeof path !== 'string')
      throw new TypeError('path must be a string')

    this[_errored] = false
    this[_fd] = typeof opt.fd === 'number' ? opt.fd : null
    this[_path] = path
    this[_readSize] = opt.readSize || 16*1024*1024
    this[_reading] = false
    this[_size] = typeof opt.size === 'number' ? opt.size : Infinity
    this[_remain] = this[_size]
    this[_autoClose] = typeof opt.autoClose === 'boolean' ?
      opt.autoClose : true

    if (typeof this[_fd] === 'number')
      this[_read]()
    else
      this[_open]()
  }

  get fd () { return this[_fd] }
  get path () { return this[_path] }

  write () {
    throw new TypeError('this is a readable stream')
  }

  end () {
    throw new TypeError('this is a readable stream')
  }

  [_open] () {
    fs.open(this[_path], 'r', (er, fd) => this[_onopen](er, fd))
  }

  [_onopen] (er, fd) {
    if (er)
      this[_onerror](er)
    else {
      this[_fd] = fd
      this.emit('open', fd)
      this[_read]()
    }
  }

  [_makeBuf] () {
    return Buffer.allocUnsafe(Math.min(this[_readSize], this[_remain]))
  }

  [_read] () {
    if (!this[_reading]) {
      this[_reading] = true
      const buf = this[_makeBuf]()
      /* istanbul ignore if */
      if (buf.length === 0)
        return process.nextTick(() => this[_onread](null, 0, buf))
      fs.read(this[_fd], buf, 0, buf.length, null, (er, br, buf) =>
        this[_onread](er, br, buf))
    }
  }

  [_onread] (er, br, buf) {
    this[_reading] = false
    if (er)
      this[_onerror](er)
    else if (this[_handleChunk](br, buf))
      this[_read]()
  }

  [_close] () {
    if (this[_autoClose] && typeof this[_fd] === 'number') {
      const fd = this[_fd]
      this[_fd] = null
      fs.close(fd, er => er ? this.emit('error', er) : this.emit('close'))
    }
  }

  [_onerror] (er) {
    this[_reading] = true
    this[_close]()
    this.emit('error', er)
  }

  [_handleChunk] (br, buf) {
    let ret = false
    // no effect if infinite
    this[_remain] -= br
    if (br > 0)
      ret = super.write(br < buf.length ? buf.slice(0, br) : buf)

    if (br === 0 || this[_remain] <= 0) {
      ret = false
      this[_close]()
      super.end()
    }

    return ret
  }

  emit (ev, data) {
    switch (ev) {
      case 'prefinish':
      case 'finish':
        break

      case 'drain':
        if (typeof this[_fd] === 'number')
          this[_read]()
        break

      case 'error':
        if (this[_errored])
          return
        this[_errored] = true
        return super.emit(ev, data)

      default:
        return super.emit(ev, data)
    }
  }
}

class ReadStreamSync extends ReadStream {
  [_open] () {
    let threw = true
    try {
      this[_onopen](null, fs.openSync(this[_path], 'r'))
      threw = false
    } finally {
      if (threw)
        this[_close]()
    }
  }

  [_read] () {
    let threw = true
    try {
      if (!this[_reading]) {
        this[_reading] = true
        do {
          const buf = this[_makeBuf]()
          /* istanbul ignore next */
          const br = buf.length === 0 ? 0
            : fs.readSync(this[_fd], buf, 0, buf.length, null)
          if (!this[_handleChunk](br, buf))
            break
        } while (true)
        this[_reading] = false
      }
      threw = false
    } finally {
      if (threw)
        this[_close]()
    }
  }

  [_close] () {
    if (this[_autoClose] && typeof this[_fd] === 'number') {
      const fd = this[_fd]
      this[_fd] = null
      fs.closeSync(fd)
      this.emit('close')
    }
  }
}

class WriteStream extends EE {
  constructor (path, opt) {
    opt = opt || {}
    super(opt)
    this.readable = false
    this.writable = true
    this[_errored] = false
    this[_writing] = false
    this[_ended] = false
    this[_needDrain] = false
    this[_queue] = []
    this[_path] = path
    this[_fd] = typeof opt.fd === 'number' ? opt.fd : null
    this[_mode] = opt.mode === undefined ? 0o666 : opt.mode
    this[_pos] = typeof opt.start === 'number' ? opt.start : null
    this[_autoClose] = typeof opt.autoClose === 'boolean' ?
      opt.autoClose : true

    // truncating makes no sense when writing into the middle
    const defaultFlag = this[_pos] !== null ? 'r+' : 'w'
    this[_defaultFlag] = opt.flags === undefined
    this[_flags] = this[_defaultFlag] ? defaultFlag : opt.flags

    if (this[_fd] === null)
      this[_open]()
  }

  emit (ev, data) {
    if (ev === 'error') {
      if (this[_errored])
        return
      this[_errored] = true
    }
    return super.emit(ev, data)
  }


  get fd () { return this[_fd] }
  get path () { return this[_path] }

  [_onerror] (er) {
    this[_close]()
    this[_writing] = true
    this.emit('error', er)
  }

  [_open] () {
    fs.open(this[_path], this[_flags], this[_mode],
      (er, fd) => this[_onopen](er, fd))
  }

  [_onopen] (er, fd) {
    if (this[_defaultFlag] &&
        this[_flags] === 'r+' &&
        er && er.code === 'ENOENT') {
      this[_flags] = 'w'
      this[_open]()
    } else if (er)
      this[_onerror](er)
    else {
      this[_fd] = fd
      this.emit('open', fd)
      this[_flush]()
    }
  }

  end (buf, enc) {
    if (buf)
      this.write(buf, enc)

    this[_ended] = true

    // synthetic after-write logic, where drain/finish live
    if (!this[_writing] && !this[_queue].length &&
        typeof this[_fd] === 'number')
      this[_onwrite](null, 0)
    return this
  }

  write (buf, enc) {
    if (typeof buf === 'string')
      buf = Buffer.from(buf, enc)

    if (this[_ended]) {
      this.emit('error', new Error('write() after end()'))
      return false
    }

    if (this[_fd] === null || this[_writing] || this[_queue].length) {
      this[_queue].push(buf)
      this[_needDrain] = true
      return false
    }

    this[_writing] = true
    this[_write](buf)
    return true
  }

  [_write] (buf) {
    fs.write(this[_fd], buf, 0, buf.length, this[_pos], (er, bw) =>
      this[_onwrite](er, bw))
  }

  [_onwrite] (er, bw) {
    if (er)
      this[_onerror](er)
    else {
      if (this[_pos] !== null)
        this[_pos] += bw
      if (this[_queue].length)
        this[_flush]()
      else {
        this[_writing] = false

        if (this[_ended] && !this[_finished]) {
          this[_finished] = true
          this[_close]()
          this.emit('finish')
        } else if (this[_needDrain]) {
          this[_needDrain] = false
          this.emit('drain')
        }
      }
    }
  }

  [_flush] () {
    if (this[_queue].length === 0) {
      if (this[_ended])
        this[_onwrite](null, 0)
    } else if (this[_queue].length === 1)
      this[_write](this[_queue].pop())
    else {
      const iovec = this[_queue]
      this[_queue] = []
      writev(this[_fd], iovec, this[_pos],
        (er, bw) => this[_onwrite](er, bw))
    }
  }

  [_close] () {
    if (this[_autoClose] && typeof this[_fd] === 'number') {
      const fd = this[_fd]
      this[_fd] = null
      fs.close(fd, er => er ? this.emit('error', er) : this.emit('close'))
    }
  }
}

class WriteStreamSync extends WriteStream {
  [_open] () {
    let fd
    // only wrap in a try{} block if we know we'll retry, to avoid
    // the rethrow obscuring the error's source frame in most cases.
    if (this[_defaultFlag] && this[_flags] === 'r+') {
      try {
        fd = fs.openSync(this[_path], this[_flags], this[_mode])
      } catch (er) {
        if (er.code === 'ENOENT') {
          this[_flags] = 'w'
          return this[_open]()
        } else
          throw er
      }
    } else
      fd = fs.openSync(this[_path], this[_flags], this[_mode])

    this[_onopen](null, fd)
  }

  [_close] () {
    if (this[_autoClose] && typeof this[_fd] === 'number') {
      const fd = this[_fd]
      this[_fd] = null
      fs.closeSync(fd)
      this.emit('close')
    }
  }

  [_write] (buf) {
    // throw the original, but try to close if it fails
    let threw = true
    try {
      this[_onwrite](null,
        fs.writeSync(this[_fd], buf, 0, buf.length, this[_pos]))
      threw = false
    } finally {
      if (threw)
        try { this[_close]() } catch (_) {}
    }
  }
}

exports.ReadStream = ReadStream
exports.ReadStreamSync = ReadStreamSync

exports.WriteStream = WriteStream
exports.WriteStreamSync = WriteStreamSync


/***/ }),

/***/ 6855:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const proc = typeof process === 'object' && process ? process : {
  stdout: null,
  stderr: null,
}
const EE = __nccwpck_require__(2361)
const Stream = __nccwpck_require__(2781)
const SD = (__nccwpck_require__(1576).StringDecoder)

const EOF = Symbol('EOF')
const MAYBE_EMIT_END = Symbol('maybeEmitEnd')
const EMITTED_END = Symbol('emittedEnd')
const EMITTING_END = Symbol('emittingEnd')
const EMITTED_ERROR = Symbol('emittedError')
const CLOSED = Symbol('closed')
const READ = Symbol('read')
const FLUSH = Symbol('flush')
const FLUSHCHUNK = Symbol('flushChunk')
const ENCODING = Symbol('encoding')
const DECODER = Symbol('decoder')
const FLOWING = Symbol('flowing')
const PAUSED = Symbol('paused')
const RESUME = Symbol('resume')
const BUFFERLENGTH = Symbol('bufferLength')
const BUFFERPUSH = Symbol('bufferPush')
const BUFFERSHIFT = Symbol('bufferShift')
const OBJECTMODE = Symbol('objectMode')
const DESTROYED = Symbol('destroyed')
const EMITDATA = Symbol('emitData')
const EMITEND = Symbol('emitEnd')
const EMITEND2 = Symbol('emitEnd2')
const ASYNC = Symbol('async')

const defer = fn => Promise.resolve().then(fn)

// TODO remove when Node v8 support drops
const doIter = global._MP_NO_ITERATOR_SYMBOLS_  !== '1'
const ASYNCITERATOR = doIter && Symbol.asyncIterator
  || Symbol('asyncIterator not implemented')
const ITERATOR = doIter && Symbol.iterator
  || Symbol('iterator not implemented')

// events that mean 'the stream is over'
// these are treated specially, and re-emitted
// if they are listened for after emitting.
const isEndish = ev =>
  ev === 'end' ||
  ev === 'finish' ||
  ev === 'prefinish'

const isArrayBuffer = b => b instanceof ArrayBuffer ||
  typeof b === 'object' &&
  b.constructor &&
  b.constructor.name === 'ArrayBuffer' &&
  b.byteLength >= 0

const isArrayBufferView = b => !Buffer.isBuffer(b) && ArrayBuffer.isView(b)

class Pipe {
  constructor (src, dest, opts) {
    this.src = src
    this.dest = dest
    this.opts = opts
    this.ondrain = () => src[RESUME]()
    dest.on('drain', this.ondrain)
  }
  unpipe () {
    this.dest.removeListener('drain', this.ondrain)
  }
  // istanbul ignore next - only here for the prototype
  proxyErrors () {}
  end () {
    this.unpipe()
    if (this.opts.end)
      this.dest.end()
  }
}

class PipeProxyErrors extends Pipe {
  unpipe () {
    this.src.removeListener('error', this.proxyErrors)
    super.unpipe()
  }
  constructor (src, dest, opts) {
    super(src, dest, opts)
    this.proxyErrors = er => dest.emit('error', er)
    src.on('error', this.proxyErrors)
  }
}

module.exports = class Minipass extends Stream {
  constructor (options) {
    super()
    this[FLOWING] = false
    // whether we're explicitly paused
    this[PAUSED] = false
    this.pipes = []
    this.buffer = []
    this[OBJECTMODE] = options && options.objectMode || false
    if (this[OBJECTMODE])
      this[ENCODING] = null
    else
      this[ENCODING] = options && options.encoding || null
    if (this[ENCODING] === 'buffer')
      this[ENCODING] = null
    this[ASYNC] = options && !!options.async || false
    this[DECODER] = this[ENCODING] ? new SD(this[ENCODING]) : null
    this[EOF] = false
    this[EMITTED_END] = false
    this[EMITTING_END] = false
    this[CLOSED] = false
    this[EMITTED_ERROR] = null
    this.writable = true
    this.readable = true
    this[BUFFERLENGTH] = 0
    this[DESTROYED] = false
  }

  get bufferLength () { return this[BUFFERLENGTH] }

  get encoding () { return this[ENCODING] }
  set encoding (enc) {
    if (this[OBJECTMODE])
      throw new Error('cannot set encoding in objectMode')

    if (this[ENCODING] && enc !== this[ENCODING] &&
        (this[DECODER] && this[DECODER].lastNeed || this[BUFFERLENGTH]))
      throw new Error('cannot change encoding')

    if (this[ENCODING] !== enc) {
      this[DECODER] = enc ? new SD(enc) : null
      if (this.buffer.length)
        this.buffer = this.buffer.map(chunk => this[DECODER].write(chunk))
    }

    this[ENCODING] = enc
  }

  setEncoding (enc) {
    this.encoding = enc
  }

  get objectMode () { return this[OBJECTMODE] }
  set objectMode (om) { this[OBJECTMODE] = this[OBJECTMODE] || !!om }

  get ['async'] () { return this[ASYNC] }
  set ['async'] (a) { this[ASYNC] = this[ASYNC] || !!a }

  write (chunk, encoding, cb) {
    if (this[EOF])
      throw new Error('write after end')

    if (this[DESTROYED]) {
      this.emit('error', Object.assign(
        new Error('Cannot call write after a stream was destroyed'),
        { code: 'ERR_STREAM_DESTROYED' }
      ))
      return true
    }

    if (typeof encoding === 'function')
      cb = encoding, encoding = 'utf8'

    if (!encoding)
      encoding = 'utf8'

    const fn = this[ASYNC] ? defer : f => f()

    // convert array buffers and typed array views into buffers
    // at some point in the future, we may want to do the opposite!
    // leave strings and buffers as-is
    // anything else switches us into object mode
    if (!this[OBJECTMODE] && !Buffer.isBuffer(chunk)) {
      if (isArrayBufferView(chunk))
        chunk = Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength)
      else if (isArrayBuffer(chunk))
        chunk = Buffer.from(chunk)
      else if (typeof chunk !== 'string')
        // use the setter so we throw if we have encoding set
        this.objectMode = true
    }

    // handle object mode up front, since it's simpler
    // this yields better performance, fewer checks later.
    if (this[OBJECTMODE]) {
      /* istanbul ignore if - maybe impossible? */
      if (this.flowing && this[BUFFERLENGTH] !== 0)
        this[FLUSH](true)

      if (this.flowing)
        this.emit('data', chunk)
      else
        this[BUFFERPUSH](chunk)

      if (this[BUFFERLENGTH] !== 0)
        this.emit('readable')

      if (cb)
        fn(cb)

      return this.flowing
    }

    // at this point the chunk is a buffer or string
    // don't buffer it up or send it to the decoder
    if (!chunk.length) {
      if (this[BUFFERLENGTH] !== 0)
        this.emit('readable')
      if (cb)
        fn(cb)
      return this.flowing
    }

    // fast-path writing strings of same encoding to a stream with
    // an empty buffer, skipping the buffer/decoder dance
    if (typeof chunk === 'string' &&
        // unless it is a string already ready for us to use
        !(encoding === this[ENCODING] && !this[DECODER].lastNeed)) {
      chunk = Buffer.from(chunk, encoding)
    }

    if (Buffer.isBuffer(chunk) && this[ENCODING])
      chunk = this[DECODER].write(chunk)

    // Note: flushing CAN potentially switch us into not-flowing mode
    if (this.flowing && this[BUFFERLENGTH] !== 0)
      this[FLUSH](true)

    if (this.flowing)
      this.emit('data', chunk)
    else
      this[BUFFERPUSH](chunk)

    if (this[BUFFERLENGTH] !== 0)
      this.emit('readable')

    if (cb)
      fn(cb)

    return this.flowing
  }

  read (n) {
    if (this[DESTROYED])
      return null

    if (this[BUFFERLENGTH] === 0 || n === 0 || n > this[BUFFERLENGTH]) {
      this[MAYBE_EMIT_END]()
      return null
    }

    if (this[OBJECTMODE])
      n = null

    if (this.buffer.length > 1 && !this[OBJECTMODE]) {
      if (this.encoding)
        this.buffer = [this.buffer.join('')]
      else
        this.buffer = [Buffer.concat(this.buffer, this[BUFFERLENGTH])]
    }

    const ret = this[READ](n || null, this.buffer[0])
    this[MAYBE_EMIT_END]()
    return ret
  }

  [READ] (n, chunk) {
    if (n === chunk.length || n === null)
      this[BUFFERSHIFT]()
    else {
      this.buffer[0] = chunk.slice(n)
      chunk = chunk.slice(0, n)
      this[BUFFERLENGTH] -= n
    }

    this.emit('data', chunk)

    if (!this.buffer.length && !this[EOF])
      this.emit('drain')

    return chunk
  }

  end (chunk, encoding, cb) {
    if (typeof chunk === 'function')
      cb = chunk, chunk = null
    if (typeof encoding === 'function')
      cb = encoding, encoding = 'utf8'
    if (chunk)
      this.write(chunk, encoding)
    if (cb)
      this.once('end', cb)
    this[EOF] = true
    this.writable = false

    // if we haven't written anything, then go ahead and emit,
    // even if we're not reading.
    // we'll re-emit if a new 'end' listener is added anyway.
    // This makes MP more suitable to write-only use cases.
    if (this.flowing || !this[PAUSED])
      this[MAYBE_EMIT_END]()
    return this
  }

  // don't let the internal resume be overwritten
  [RESUME] () {
    if (this[DESTROYED])
      return

    this[PAUSED] = false
    this[FLOWING] = true
    this.emit('resume')
    if (this.buffer.length)
      this[FLUSH]()
    else if (this[EOF])
      this[MAYBE_EMIT_END]()
    else
      this.emit('drain')
  }

  resume () {
    return this[RESUME]()
  }

  pause () {
    this[FLOWING] = false
    this[PAUSED] = true
  }

  get destroyed () {
    return this[DESTROYED]
  }

  get flowing () {
    return this[FLOWING]
  }

  get paused () {
    return this[PAUSED]
  }

  [BUFFERPUSH] (chunk) {
    if (this[OBJECTMODE])
      this[BUFFERLENGTH] += 1
    else
      this[BUFFERLENGTH] += chunk.length
    this.buffer.push(chunk)
  }

  [BUFFERSHIFT] () {
    if (this.buffer.length) {
      if (this[OBJECTMODE])
        this[BUFFERLENGTH] -= 1
      else
        this[BUFFERLENGTH] -= this.buffer[0].length
    }
    return this.buffer.shift()
  }

  [FLUSH] (noDrain) {
    do {} while (this[FLUSHCHUNK](this[BUFFERSHIFT]()))

    if (!noDrain && !this.buffer.length && !this[EOF])
      this.emit('drain')
  }

  [FLUSHCHUNK] (chunk) {
    return chunk ? (this.emit('data', chunk), this.flowing) : false
  }

  pipe (dest, opts) {
    if (this[DESTROYED])
      return

    const ended = this[EMITTED_END]
    opts = opts || {}
    if (dest === proc.stdout || dest === proc.stderr)
      opts.end = false
    else
      opts.end = opts.end !== false
    opts.proxyErrors = !!opts.proxyErrors

    // piping an ended stream ends immediately
    if (ended) {
      if (opts.end)
        dest.end()
    } else {
      this.pipes.push(!opts.proxyErrors ? new Pipe(this, dest, opts)
        : new PipeProxyErrors(this, dest, opts))
      if (this[ASYNC])
        defer(() => this[RESUME]())
      else
        this[RESUME]()
    }

    return dest
  }

  unpipe (dest) {
    const p = this.pipes.find(p => p.dest === dest)
    if (p) {
      this.pipes.splice(this.pipes.indexOf(p), 1)
      p.unpipe()
    }
  }

  addListener (ev, fn) {
    return this.on(ev, fn)
  }

  on (ev, fn) {
    const ret = super.on(ev, fn)
    if (ev === 'data' && !this.pipes.length && !this.flowing)
      this[RESUME]()
    else if (ev === 'readable' && this[BUFFERLENGTH] !== 0)
      super.emit('readable')
    else if (isEndish(ev) && this[EMITTED_END]) {
      super.emit(ev)
      this.removeAllListeners(ev)
    } else if (ev === 'error' && this[EMITTED_ERROR]) {
      if (this[ASYNC])
        defer(() => fn.call(this, this[EMITTED_ERROR]))
      else
        fn.call(this, this[EMITTED_ERROR])
    }
    return ret
  }

  get emittedEnd () {
    return this[EMITTED_END]
  }

  [MAYBE_EMIT_END] () {
    if (!this[EMITTING_END] &&
        !this[EMITTED_END] &&
        !this[DESTROYED] &&
        this.buffer.length === 0 &&
        this[EOF]) {
      this[EMITTING_END] = true
      this.emit('end')
      this.emit('prefinish')
      this.emit('finish')
      if (this[CLOSED])
        this.emit('close')
      this[EMITTING_END] = false
    }
  }

  emit (ev, data, ...extra) {
    // error and close are only events allowed after calling destroy()
    if (ev !== 'error' && ev !== 'close' && ev !== DESTROYED && this[DESTROYED])
      return
    else if (ev === 'data') {
      return !data ? false
        : this[ASYNC] ? defer(() => this[EMITDATA](data))
        : this[EMITDATA](data)
    } else if (ev === 'end') {
      return this[EMITEND]()
    } else if (ev === 'close') {
      this[CLOSED] = true
      // don't emit close before 'end' and 'finish'
      if (!this[EMITTED_END] && !this[DESTROYED])
        return
      const ret = super.emit('close')
      this.removeAllListeners('close')
      return ret
    } else if (ev === 'error') {
      this[EMITTED_ERROR] = data
      const ret = super.emit('error', data)
      this[MAYBE_EMIT_END]()
      return ret
    } else if (ev === 'resume') {
      const ret = super.emit('resume')
      this[MAYBE_EMIT_END]()
      return ret
    } else if (ev === 'finish' || ev === 'prefinish') {
      const ret = super.emit(ev)
      this.removeAllListeners(ev)
      return ret
    }

    // Some other unknown event
    const ret = super.emit(ev, data, ...extra)
    this[MAYBE_EMIT_END]()
    return ret
  }

  [EMITDATA] (data) {
    for (const p of this.pipes) {
      if (p.dest.write(data) === false)
        this.pause()
    }
    const ret = super.emit('data', data)
    this[MAYBE_EMIT_END]()
    return ret
  }

  [EMITEND] () {
    if (this[EMITTED_END])
      return

    this[EMITTED_END] = true
    this.readable = false
    if (this[ASYNC])
      defer(() => this[EMITEND2]())
    else
      this[EMITEND2]()
  }

  [EMITEND2] () {
    if (this[DECODER]) {
      const data = this[DECODER].end()
      if (data) {
        for (const p of this.pipes) {
          p.dest.write(data)
        }
        super.emit('data', data)
      }
    }

    for (const p of this.pipes) {
      p.end()
    }
    const ret = super.emit('end')
    this.removeAllListeners('end')
    return ret
  }

  // const all = await stream.collect()
  collect () {
    const buf = []
    if (!this[OBJECTMODE])
      buf.dataLength = 0
    // set the promise first, in case an error is raised
    // by triggering the flow here.
    const p = this.promise()
    this.on('data', c => {
      buf.push(c)
      if (!this[OBJECTMODE])
        buf.dataLength += c.length
    })
    return p.then(() => buf)
  }

  // const data = await stream.concat()
  concat () {
    return this[OBJECTMODE]
      ? Promise.reject(new Error('cannot concat in objectMode'))
      : this.collect().then(buf =>
          this[OBJECTMODE]
            ? Promise.reject(new Error('cannot concat in objectMode'))
            : this[ENCODING] ? buf.join('') : Buffer.concat(buf, buf.dataLength))
  }

  // stream.promise().then(() => done, er => emitted error)
  promise () {
    return new Promise((resolve, reject) => {
      this.on(DESTROYED, () => reject(new Error('stream destroyed')))
      this.on('error', er => reject(er))
      this.on('end', () => resolve())
    })
  }

  // for await (let chunk of stream)
  [ASYNCITERATOR] () {
    const next = () => {
      const res = this.read()
      if (res !== null)
        return Promise.resolve({ done: false, value: res })

      if (this[EOF])
        return Promise.resolve({ done: true })

      let resolve = null
      let reject = null
      const onerr = er => {
        this.removeListener('data', ondata)
        this.removeListener('end', onend)
        reject(er)
      }
      const ondata = value => {
        this.removeListener('error', onerr)
        this.removeListener('end', onend)
        this.pause()
        resolve({ value: value, done: !!this[EOF] })
      }
      const onend = () => {
        this.removeListener('error', onerr)
        this.removeListener('data', ondata)
        resolve({ done: true })
      }
      const ondestroy = () => onerr(new Error('stream destroyed'))
      return new Promise((res, rej) => {
        reject = rej
        resolve = res
        this.once(DESTROYED, ondestroy)
        this.once('error', onerr)
        this.once('end', onend)
        this.once('data', ondata)
      })
    }

    return { next }
  }

  // for (let chunk of stream)
  [ITERATOR] () {
    const next = () => {
      const value = this.read()
      const done = value === null
      return { value, done }
    }
    return { next }
  }

  destroy (er) {
    if (this[DESTROYED]) {
      if (er)
        this.emit('error', er)
      else
        this.emit(DESTROYED)
      return this
    }

    this[DESTROYED] = true

    // throw away all buffered data, it's never coming out
    this.buffer.length = 0
    this[BUFFERLENGTH] = 0

    if (typeof this.close === 'function' && !this[CLOSED])
      this.close()

    if (er)
      this.emit('error', er)
    else // if no error to emit, still reject pending promises
      this.emit(DESTROYED)

    return this
  }

  static isStream (s) {
    return !!s && (s instanceof Minipass || s instanceof Stream ||
      s instanceof EE && (
        typeof s.pipe === 'function' || // readable
        (typeof s.write === 'function' && typeof s.end === 'function') // writable
      ))
  }
}


/***/ }),

/***/ 6977:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const proc =
  typeof process === 'object' && process
    ? process
    : {
        stdout: null,
        stderr: null,
      }
const EE = __nccwpck_require__(2361)
const Stream = __nccwpck_require__(2781)
const SD = (__nccwpck_require__(1576).StringDecoder)

const EOF = Symbol('EOF')
const MAYBE_EMIT_END = Symbol('maybeEmitEnd')
const EMITTED_END = Symbol('emittedEnd')
const EMITTING_END = Symbol('emittingEnd')
const EMITTED_ERROR = Symbol('emittedError')
const CLOSED = Symbol('closed')
const READ = Symbol('read')
const FLUSH = Symbol('flush')
const FLUSHCHUNK = Symbol('flushChunk')
const ENCODING = Symbol('encoding')
const DECODER = Symbol('decoder')
const FLOWING = Symbol('flowing')
const PAUSED = Symbol('paused')
const RESUME = Symbol('resume')
const BUFFER = Symbol('buffer')
const PIPES = Symbol('pipes')
const BUFFERLENGTH = Symbol('bufferLength')
const BUFFERPUSH = Symbol('bufferPush')
const BUFFERSHIFT = Symbol('bufferShift')
const OBJECTMODE = Symbol('objectMode')
// internal event when stream is destroyed
const DESTROYED = Symbol('destroyed')
// internal event when stream has an error
const ERROR = Symbol('error')
const EMITDATA = Symbol('emitData')
const EMITEND = Symbol('emitEnd')
const EMITEND2 = Symbol('emitEnd2')
const ASYNC = Symbol('async')

const defer = fn => Promise.resolve().then(fn)

// TODO remove when Node v8 support drops
const doIter = global._MP_NO_ITERATOR_SYMBOLS_ !== '1'
const ASYNCITERATOR =
  (doIter && Symbol.asyncIterator) || Symbol('asyncIterator not implemented')
const ITERATOR =
  (doIter && Symbol.iterator) || Symbol('iterator not implemented')

// events that mean 'the stream is over'
// these are treated specially, and re-emitted
// if they are listened for after emitting.
const isEndish = ev => ev === 'end' || ev === 'finish' || ev === 'prefinish'

const isArrayBuffer = b =>
  b instanceof ArrayBuffer ||
  (typeof b === 'object' &&
    b.constructor &&
    b.constructor.name === 'ArrayBuffer' &&
    b.byteLength >= 0)

const isArrayBufferView = b => !Buffer.isBuffer(b) && ArrayBuffer.isView(b)

class Pipe {
  constructor(src, dest, opts) {
    this.src = src
    this.dest = dest
    this.opts = opts
    this.ondrain = () => src[RESUME]()
    dest.on('drain', this.ondrain)
  }
  unpipe() {
    this.dest.removeListener('drain', this.ondrain)
  }
  // istanbul ignore next - only here for the prototype
  proxyErrors() {}
  end() {
    this.unpipe()
    if (this.opts.end) this.dest.end()
  }
}

class PipeProxyErrors extends Pipe {
  unpipe() {
    this.src.removeListener('error', this.proxyErrors)
    super.unpipe()
  }
  constructor(src, dest, opts) {
    super(src, dest, opts)
    this.proxyErrors = er => dest.emit('error', er)
    src.on('error', this.proxyErrors)
  }
}

module.exports = class Minipass extends Stream {
  constructor(options) {
    super()
    this[FLOWING] = false
    // whether we're explicitly paused
    this[PAUSED] = false
    this[PIPES] = []
    this[BUFFER] = []
    this[OBJECTMODE] = (options && options.objectMode) || false
    if (this[OBJECTMODE]) this[ENCODING] = null
    else this[ENCODING] = (options && options.encoding) || null
    if (this[ENCODING] === 'buffer') this[ENCODING] = null
    this[ASYNC] = (options && !!options.async) || false
    this[DECODER] = this[ENCODING] ? new SD(this[ENCODING]) : null
    this[EOF] = false
    this[EMITTED_END] = false
    this[EMITTING_END] = false
    this[CLOSED] = false
    this[EMITTED_ERROR] = null
    this.writable = true
    this.readable = true
    this[BUFFERLENGTH] = 0
    this[DESTROYED] = false
    if (options && options.debugExposeBuffer === true) {
      Object.defineProperty(this, 'buffer', { get: () => this[BUFFER] })
    }
    if (options && options.debugExposePipes === true) {
      Object.defineProperty(this, 'pipes', { get: () => this[PIPES] })
    }
  }

  get bufferLength() {
    return this[BUFFERLENGTH]
  }

  get encoding() {
    return this[ENCODING]
  }
  set encoding(enc) {
    if (this[OBJECTMODE]) throw new Error('cannot set encoding in objectMode')

    if (
      this[ENCODING] &&
      enc !== this[ENCODING] &&
      ((this[DECODER] && this[DECODER].lastNeed) || this[BUFFERLENGTH])
    )
      throw new Error('cannot change encoding')

    if (this[ENCODING] !== enc) {
      this[DECODER] = enc ? new SD(enc) : null
      if (this[BUFFER].length)
        this[BUFFER] = this[BUFFER].map(chunk => this[DECODER].write(chunk))
    }

    this[ENCODING] = enc
  }

  setEncoding(enc) {
    this.encoding = enc
  }

  get objectMode() {
    return this[OBJECTMODE]
  }
  set objectMode(om) {
    this[OBJECTMODE] = this[OBJECTMODE] || !!om
  }

  get ['async']() {
    return this[ASYNC]
  }
  set ['async'](a) {
    this[ASYNC] = this[ASYNC] || !!a
  }

  write(chunk, encoding, cb) {
    if (this[EOF]) throw new Error('write after end')

    if (this[DESTROYED]) {
      this.emit(
        'error',
        Object.assign(
          new Error('Cannot call write after a stream was destroyed'),
          { code: 'ERR_STREAM_DESTROYED' }
        )
      )
      return true
    }

    if (typeof encoding === 'function') (cb = encoding), (encoding = 'utf8')

    if (!encoding) encoding = 'utf8'

    const fn = this[ASYNC] ? defer : f => f()

    // convert array buffers and typed array views into buffers
    // at some point in the future, we may want to do the opposite!
    // leave strings and buffers as-is
    // anything else switches us into object mode
    if (!this[OBJECTMODE] && !Buffer.isBuffer(chunk)) {
      if (isArrayBufferView(chunk))
        chunk = Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength)
      else if (isArrayBuffer(chunk)) chunk = Buffer.from(chunk)
      else if (typeof chunk !== 'string')
        // use the setter so we throw if we have encoding set
        this.objectMode = true
    }

    // handle object mode up front, since it's simpler
    // this yields better performance, fewer checks later.
    if (this[OBJECTMODE]) {
      /* istanbul ignore if - maybe impossible? */
      if (this.flowing && this[BUFFERLENGTH] !== 0) this[FLUSH](true)

      if (this.flowing) this.emit('data', chunk)
      else this[BUFFERPUSH](chunk)

      if (this[BUFFERLENGTH] !== 0) this.emit('readable')

      if (cb) fn(cb)

      return this.flowing
    }

    // at this point the chunk is a buffer or string
    // don't buffer it up or send it to the decoder
    if (!chunk.length) {
      if (this[BUFFERLENGTH] !== 0) this.emit('readable')
      if (cb) fn(cb)
      return this.flowing
    }

    // fast-path writing strings of same encoding to a stream with
    // an empty buffer, skipping the buffer/decoder dance
    if (
      typeof chunk === 'string' &&
      // unless it is a string already ready for us to use
      !(encoding === this[ENCODING] && !this[DECODER].lastNeed)
    ) {
      chunk = Buffer.from(chunk, encoding)
    }

    if (Buffer.isBuffer(chunk) && this[ENCODING])
      chunk = this[DECODER].write(chunk)

    // Note: flushing CAN potentially switch us into not-flowing mode
    if (this.flowing && this[BUFFERLENGTH] !== 0) this[FLUSH](true)

    if (this.flowing) this.emit('data', chunk)
    else this[BUFFERPUSH](chunk)

    if (this[BUFFERLENGTH] !== 0) this.emit('readable')

    if (cb) fn(cb)

    return this.flowing
  }

  read(n) {
    if (this[DESTROYED]) return null

    if (this[BUFFERLENGTH] === 0 || n === 0 || n > this[BUFFERLENGTH]) {
      this[MAYBE_EMIT_END]()
      return null
    }

    if (this[OBJECTMODE]) n = null

    if (this[BUFFER].length > 1 && !this[OBJECTMODE]) {
      if (this.encoding) this[BUFFER] = [this[BUFFER].join('')]
      else this[BUFFER] = [Buffer.concat(this[BUFFER], this[BUFFERLENGTH])]
    }

    const ret = this[READ](n || null, this[BUFFER][0])
    this[MAYBE_EMIT_END]()
    return ret
  }

  [READ](n, chunk) {
    if (n === chunk.length || n === null) this[BUFFERSHIFT]()
    else {
      this[BUFFER][0] = chunk.slice(n)
      chunk = chunk.slice(0, n)
      this[BUFFERLENGTH] -= n
    }

    this.emit('data', chunk)

    if (!this[BUFFER].length && !this[EOF]) this.emit('drain')

    return chunk
  }

  end(chunk, encoding, cb) {
    if (typeof chunk === 'function') (cb = chunk), (chunk = null)
    if (typeof encoding === 'function') (cb = encoding), (encoding = 'utf8')
    if (chunk) this.write(chunk, encoding)
    if (cb) this.once('end', cb)
    this[EOF] = true
    this.writable = false

    // if we haven't written anything, then go ahead and emit,
    // even if we're not reading.
    // we'll re-emit if a new 'end' listener is added anyway.
    // This makes MP more suitable to write-only use cases.
    if (this.flowing || !this[PAUSED]) this[MAYBE_EMIT_END]()
    return this
  }

  // don't let the internal resume be overwritten
  [RESUME]() {
    if (this[DESTROYED]) return

    this[PAUSED] = false
    this[FLOWING] = true
    this.emit('resume')
    if (this[BUFFER].length) this[FLUSH]()
    else if (this[EOF]) this[MAYBE_EMIT_END]()
    else this.emit('drain')
  }

  resume() {
    return this[RESUME]()
  }

  pause() {
    this[FLOWING] = false
    this[PAUSED] = true
  }

  get destroyed() {
    return this[DESTROYED]
  }

  get flowing() {
    return this[FLOWING]
  }

  get paused() {
    return this[PAUSED]
  }

  [BUFFERPUSH](chunk) {
    if (this[OBJECTMODE]) this[BUFFERLENGTH] += 1
    else this[BUFFERLENGTH] += chunk.length
    this[BUFFER].push(chunk)
  }

  [BUFFERSHIFT]() {
    if (this[BUFFER].length) {
      if (this[OBJECTMODE]) this[BUFFERLENGTH] -= 1
      else this[BUFFERLENGTH] -= this[BUFFER][0].length
    }
    return this[BUFFER].shift()
  }

  [FLUSH](noDrain) {
    do {} while (this[FLUSHCHUNK](this[BUFFERSHIFT]()))

    if (!noDrain && !this[BUFFER].length && !this[EOF]) this.emit('drain')
  }

  [FLUSHCHUNK](chunk) {
    return chunk ? (this.emit('data', chunk), this.flowing) : false
  }

  pipe(dest, opts) {
    if (this[DESTROYED]) return

    const ended = this[EMITTED_END]
    opts = opts || {}
    if (dest === proc.stdout || dest === proc.stderr) opts.end = false
    else opts.end = opts.end !== false
    opts.proxyErrors = !!opts.proxyErrors

    // piping an ended stream ends immediately
    if (ended) {
      if (opts.end) dest.end()
    } else {
      this[PIPES].push(
        !opts.proxyErrors
          ? new Pipe(this, dest, opts)
          : new PipeProxyErrors(this, dest, opts)
      )
      if (this[ASYNC]) defer(() => this[RESUME]())
      else this[RESUME]()
    }

    return dest
  }

  unpipe(dest) {
    const p = this[PIPES].find(p => p.dest === dest)
    if (p) {
      this[PIPES].splice(this[PIPES].indexOf(p), 1)
      p.unpipe()
    }
  }

  addListener(ev, fn) {
    return this.on(ev, fn)
  }

  on(ev, fn) {
    const ret = super.on(ev, fn)
    if (ev === 'data' && !this[PIPES].length && !this.flowing) this[RESUME]()
    else if (ev === 'readable' && this[BUFFERLENGTH] !== 0)
      super.emit('readable')
    else if (isEndish(ev) && this[EMITTED_END]) {
      super.emit(ev)
      this.removeAllListeners(ev)
    } else if (ev === 'error' && this[EMITTED_ERROR]) {
      if (this[ASYNC]) defer(() => fn.call(this, this[EMITTED_ERROR]))
      else fn.call(this, this[EMITTED_ERROR])
    }
    return ret
  }

  get emittedEnd() {
    return this[EMITTED_END]
  }

  [MAYBE_EMIT_END]() {
    if (
      !this[EMITTING_END] &&
      !this[EMITTED_END] &&
      !this[DESTROYED] &&
      this[BUFFER].length === 0 &&
      this[EOF]
    ) {
      this[EMITTING_END] = true
      this.emit('end')
      this.emit('prefinish')
      this.emit('finish')
      if (this[CLOSED]) this.emit('close')
      this[EMITTING_END] = false
    }
  }

  emit(ev, data, ...extra) {
    // error and close are only events allowed after calling destroy()
    if (ev !== 'error' && ev !== 'close' && ev !== DESTROYED && this[DESTROYED])
      return
    else if (ev === 'data') {
      return !data
        ? false
        : this[ASYNC]
        ? defer(() => this[EMITDATA](data))
        : this[EMITDATA](data)
    } else if (ev === 'end') {
      return this[EMITEND]()
    } else if (ev === 'close') {
      this[CLOSED] = true
      // don't emit close before 'end' and 'finish'
      if (!this[EMITTED_END] && !this[DESTROYED]) return
      const ret = super.emit('close')
      this.removeAllListeners('close')
      return ret
    } else if (ev === 'error') {
      this[EMITTED_ERROR] = data
      super.emit(ERROR, data)
      const ret = super.emit('error', data)
      this[MAYBE_EMIT_END]()
      return ret
    } else if (ev === 'resume') {
      const ret = super.emit('resume')
      this[MAYBE_EMIT_END]()
      return ret
    } else if (ev === 'finish' || ev === 'prefinish') {
      const ret = super.emit(ev)
      this.removeAllListeners(ev)
      return ret
    }

    // Some other unknown event
    const ret = super.emit(ev, data, ...extra)
    this[MAYBE_EMIT_END]()
    return ret
  }

  [EMITDATA](data) {
    for (const p of this[PIPES]) {
      if (p.dest.write(data) === false) this.pause()
    }
    const ret = super.emit('data', data)
    this[MAYBE_EMIT_END]()
    return ret
  }

  [EMITEND]() {
    if (this[EMITTED_END]) return

    this[EMITTED_END] = true
    this.readable = false
    if (this[ASYNC]) defer(() => this[EMITEND2]())
    else this[EMITEND2]()
  }

  [EMITEND2]() {
    if (this[DECODER]) {
      const data = this[DECODER].end()
      if (data) {
        for (const p of this[PIPES]) {
          p.dest.write(data)
        }
        super.emit('data', data)
      }
    }

    for (const p of this[PIPES]) {
      p.end()
    }
    const ret = super.emit('end')
    this.removeAllListeners('end')
    return ret
  }

  // const all = await stream.collect()
  collect() {
    const buf = []
    if (!this[OBJECTMODE]) buf.dataLength = 0
    // set the promise first, in case an error is raised
    // by triggering the flow here.
    const p = this.promise()
    this.on('data', c => {
      buf.push(c)
      if (!this[OBJECTMODE]) buf.dataLength += c.length
    })
    return p.then(() => buf)
  }

  // const data = await stream.concat()
  concat() {
    return this[OBJECTMODE]
      ? Promise.reject(new Error('cannot concat in objectMode'))
      : this.collect().then(buf =>
          this[OBJECTMODE]
            ? Promise.reject(new Error('cannot concat in objectMode'))
            : this[ENCODING]
            ? buf.join('')
            : Buffer.concat(buf, buf.dataLength)
        )
  }

  // stream.promise().then(() => done, er => emitted error)
  promise() {
    return new Promise((resolve, reject) => {
      this.on(DESTROYED, () => reject(new Error('stream destroyed')))
      this.on('error', er => reject(er))
      this.on('end', () => resolve())
    })
  }

  // for await (let chunk of stream)
  [ASYNCITERATOR]() {
    let stopped = false
    const stop = () => {
      this.pause()
      stopped = true
      return Promise.resolve({ done: true })
    }
    const next = () => {
      if (stopped) return stop()
      const res = this.read()
      if (res !== null) return Promise.resolve({ done: false, value: res })

      if (this[EOF]) return stop()

      let resolve = null
      let reject = null
      const onerr = er => {
        this.removeListener('data', ondata)
        this.removeListener('end', onend)
        stop()
        reject(er)
      }
      const ondata = value => {
        this.removeListener('error', onerr)
        this.removeListener('end', onend)
        this.pause()
        resolve({ value: value, done: !!this[EOF] })
      }
      const onend = () => {
        this.removeListener('error', onerr)
        this.removeListener('data', ondata)
        stop()
        resolve({ done: true })
      }
      const ondestroy = () => onerr(new Error('stream destroyed'))
      return new Promise((res, rej) => {
        reject = rej
        resolve = res
        this.once(DESTROYED, ondestroy)
        this.once('error', onerr)
        this.once('end', onend)
        this.once('data', ondata)
      })
    }

    return {
      next,
      throw: stop,
      return: stop,
      [ASYNCITERATOR]() {
        return this
      },
    }
  }

  // for (let chunk of stream)
  [ITERATOR]() {
    let stopped = false
    const stop = () => {
      this.pause()
      this.removeListener(ERROR, stop)
      this.removeListener('end', stop)
      stopped = true
      return { done: true }
    }

    const next = () => {
      if (stopped) return stop()
      const value = this.read()
      return value === null ? stop() : { value }
    }
    this.once('end', stop)
    this.once(ERROR, stop)

    return {
      next,
      throw: stop,
      return: stop,
      [ITERATOR]() {
        return this
      },
    }
  }

  destroy(er) {
    if (this[DESTROYED]) {
      if (er) this.emit('error', er)
      else this.emit(DESTROYED)
      return this
    }

    this[DESTROYED] = true

    // throw away all buffered data, it's never coming out
    this[BUFFER].length = 0
    this[BUFFERLENGTH] = 0

    if (typeof this.close === 'function' && !this[CLOSED]) this.close()

    if (er) this.emit('error', er)
    // if no error to emit, still reject pending promises
    else this.emit(DESTROYED)

    return this
  }

  static isStream(s) {
    return (
      !!s &&
      (s instanceof Minipass ||
        s instanceof Stream ||
        (s instanceof EE &&
          (typeof s.pipe === 'function' || // readable
            (typeof s.write === 'function' && typeof s.end === 'function')))) // writable
    )
  }
}


/***/ }),

/***/ 4704:
/***/ ((module) => {

"use strict";

module.exports = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value
    }
  }
}


/***/ }),

/***/ 1557:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null

  return next
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.splice = function (start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1
  }
  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next
  }

  var ret = []
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value)
    walker = this.removeNode(walker)
  }
  if (walker === null) {
    walker = this.tail
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev
  }

  for (var i = 0; i < nodes.length; i++) {
    walker = insert(this, walker, nodes[i])
  }
  return ret;
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function insert (self, node, value) {
  var inserted = node === self.head ?
    new Node(value, null, node, self) :
    new Node(value, node, node.next, self)

  if (inserted.next === null) {
    self.tail = inserted
  }
  if (inserted.prev === null) {
    self.head = inserted
  }

  self.length++

  return inserted
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}

try {
  // add if support for Symbol.iterator is present
  __nccwpck_require__(4704)(Yallist)
} catch (er) {}


/***/ }),

/***/ 9491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 4300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 2081:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 2361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 2037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7282:
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 2781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 1576:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 6224:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 6144:
/***/ ((module) => {

"use strict";
module.exports = require("vm");

/***/ }),

/***/ 1267:
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ }),

/***/ 9796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 4147:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@winglang/sdk","repository":{"type":"git","url":"https://github.com/winglang/wing.git","directory":"libs/wingsdk"},"scripts":{"api-check":"npx projen api-check","api-check:watch":"npx projen api-check:watch","build":"npx projen build","bump":"npx projen bump","clobber":"npx projen clobber","compat":"npx projen compat","compile":"npx projen compile","default":"npx projen default","docgen":"npx projen docgen","eject":"npx projen eject","eslint":"npx projen eslint","package":"npx projen package","package-all":"npx projen package-all","package:js":"npx projen package:js","post-compile":"npx projen post-compile","post-upgrade":"npx projen post-upgrade","pre-compile":"npx projen pre-compile","release":"npx projen release","sandbox:deploy":"npx projen sandbox:deploy","sandbox:destroy":"npx projen sandbox:destroy","sandbox:synth":"npx projen sandbox:synth","test":"npx projen test","test:watch":"npx projen test:watch","unbump":"npx projen unbump","upgrade":"npx projen upgrade","watch":"npx projen watch","projen":"npx projen"},"author":{"name":"Monada, Inc.","email":"ping@monada.co","organization":true},"devDependencies":{"@types/aws-lambda":"^8.10.109","@types/debug":"^4.1.7","@types/fs-extra":"^11.0.1","@types/jest":"^27","@types/node":"^16","@types/tar":"^6.1.3","@typescript-eslint/eslint-plugin":"^5","@typescript-eslint/parser":"^5","@vitest/coverage-c8":"^0.29.2","@winglang/jsii-docgen":"file:../../apps/jsii-docgen","@winglang/wing-api-checker":"file:../../apps/wing-api-checker","aws-sdk-client-mock":"^2.0.1","aws-sdk-client-mock-jest":"^2.0.1","eslint":"^8","eslint-config-prettier":"^8.6.0","eslint-import-resolver-node":"^0.3.7","eslint-import-resolver-typescript":"^3.5.3","eslint-plugin-import":"^2.27.5","eslint-plugin-prettier":"^4.2.1","eslint-plugin-sort-exports":"^0.8.0","jest":"^27","jest-junit":"^13","jsii":"^1.73.0","jsii-diff":"^1.73.0","jsii-pacmak":"^1.73.0","npm-check-updates":"^16","patch-package":"^6.5.1","prettier":"^2.8.3","projen":"^0.67.11","standard-version":"^9","ts-jest":"^27","ts-node":"^10.9.1","tsx":"^3.12.2","typescript":"^4.9.4","vitest":"^0.29.2"},"peerDependencies":{"@cdktf/provider-aws":"^12.0.1","@cdktf/provider-azurerm":"^5.0.1","@cdktf/provider-google":"^5.0.2","@cdktf/provider-random":"^5.0.0","cdktf":"0.15.2","constructs":"~10.1.228"},"dependencies":{"@aws-sdk/client-cloudwatch-logs":"3.256.0","@aws-sdk/client-dynamodb":"3.256.0","@aws-sdk/client-lambda":"3.256.0","@aws-sdk/client-s3":"3.256.0","@aws-sdk/client-sns":"3.256.0","@aws-sdk/client-sqs":"3.256.0","@aws-sdk/types":"3.254.0","@aws-sdk/util-stream-node":"3.254.0","@aws-sdk/util-utf8-node":"3.208.0","@azure/core-paging":"^1.4.0","@azure/identity":"3.1.3","@azure/storage-blob":"12.12.0","@cdktf/provider-aws":"^12.0.1","@cdktf/provider-azurerm":"^5.0.1","@cdktf/provider-google":"^5.0.2","@cdktf/provider-random":"^5.0.0","cdktf":"0.15.2","constructs":"~10.1.228","debug":"^4.3.4","esbuild-wasm":"^0.17.4","safe-stable-stringify":"*","tar":"^6.1.13"},"bundledDependencies":["@aws-sdk/client-cloudwatch-logs","@aws-sdk/client-dynamodb","@aws-sdk/client-lambda","@aws-sdk/client-s3","@aws-sdk/client-sns","@aws-sdk/client-sqs","@aws-sdk/types","@aws-sdk/util-stream-node","@aws-sdk/util-utf8-node","@azure/core-paging","@azure/identity","@azure/storage-blob","debug","esbuild-wasm","safe-stable-stringify","tar"],"engines":{"node":">= 16.16.0"},"main":"lib/index.js","license":"Apache-2.0","version":"0.0.0","jest":{"testMatch":["<rootDir>/src/**/__tests__/**/*.ts?(x)","<rootDir>/(test|src)/**/*(*.)@(spec|test).ts?(x)"],"clearMocks":true,"collectCoverage":true,"coverageReporters":["json","lcov","clover","cobertura","text"],"coverageDirectory":"coverage","coveragePathIgnorePatterns":["/node_modules/"],"testPathIgnorePatterns":["/node_modules/"],"watchPathIgnorePatterns":["/node_modules/"],"reporters":["default",["jest-junit",{"outputDirectory":"test-reports"}]],"preset":"ts-jest","globals":{"ts-jest":{"tsconfig":"tsconfig.dev.json"}}},"types":"lib/index.d.ts","stability":"experimental","jsii":{"outdir":"dist","targets":{},"tsc":{"outDir":"lib","rootDir":"src","types":[]},"excludeTypescript":["src/**/*.inflight.ts"]},"volta":{"node":"18.12.1","npm":"8.19.3"},"files":["lib",".jsii","API.md","patches"],"overrides":{"@types/prettier":"2.6.0","@types/babel__traverse":"7.18.2"},"//":"~~ Generated by projen. To modify, edit .projenrc.js and run \\"npx projen\\"."}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(7440);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;